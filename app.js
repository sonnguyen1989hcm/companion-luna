(() => {
  const companions = window.COMPANIONS;
  const companionList = document.querySelector("#companion-list");
  const stateList = document.querySelector("#state-list");
  const nepArt = document.querySelector("#companion-art");
  const lunaArt = document.querySelector("#luna-art");
  const lunaImage = document.querySelector("#luna-image");
  const stageScene = document.querySelector("#stage-scene");
  const portalGate = document.querySelector("#portal-gate");
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let selectedCompanion = companions[0];
  let selectedState = selectedCompanion.states[0];
  let transitionTimer;
  let entranceTimer;
  let transitionBusy = false;
  let queuedCompanionId = null;

  function renderCompanions() {
    companionList.replaceChildren(...companions.map((companion) => {
      const button = document.createElement("button");
      button.className = "companion-choice";
      button.type = "button";
      button.dataset.companion = companion.id;
      button.setAttribute("aria-pressed", "false");
      button.innerHTML = `<span class="choice-avatar ${companion.id}-avatar">${companion.id === "luna" ? "L" : "N"}<i aria-hidden="true"></i></span><span class="choice-copy"><strong>${companion.name}</strong><small>${companion.id === "luna" ? "MỚI • HIỀN DỊU" : "ĐANG ĐỒNG HÀNH"}</small></span><span class="choice-arrow" aria-hidden="true">↗</span>`;
      button.addEventListener("click", () => selectCompanion(companion.id));
      return button;
    }));
  }

  function renderStates() {
    stateList.replaceChildren(...selectedCompanion.states.map((state) => {
      const button = document.createElement("button");
      button.className = "state-choice";
      button.type = "button";
      button.dataset.state = state.id;
      button.setAttribute("aria-pressed", "false");
      button.innerHTML = `<span class="state-icon" aria-hidden="true">${state.icon}</span><span class="state-label">${state.label}</span><span class="state-check" aria-hidden="true">✓</span>`;
      button.addEventListener("click", () => selectState(state.id));
      return button;
    }));
  }

  function setCompanion(id) {
    selectedCompanion = companions.find((companion) => companion.id === id) || companions[0];
    selectedState = selectedCompanion.states[0];
    renderStates();
    document.querySelectorAll(".companion-choice").forEach((button) => {
      const active = button.dataset.companion === selectedCompanion.id;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelector("#stage-name").textContent = selectedCompanion.name;
    document.querySelector("#stage-role").textContent = selectedCompanion.role;
    document.querySelector("#stage-caption").textContent = selectedCompanion.chapter;
    document.querySelector("#scene-mark").textContent = selectedCompanion.name[0];
    document.querySelector("#controls-title").textContent = `${selectedCompanion.name} đang ${selectedCompanion.states[0].id === "idle" ? (id === "luna" ? "nhấp trà" : "nghỉ") : "ở đây"}`;
    stageScene.dataset.companion = id;
    nepArt.hidden = id !== "nep";
    lunaArt.hidden = id !== "luna";
    document.querySelector("#asset-note").textContent = id === "luna" ? "Luna có pose riêng cho từng trạng thái." : "Sprite sheet gốc • frame 192 × 208 px.";
    applyState(selectedState);
  }

  function visibleArt() {
    return selectedCompanion.id === "luna" ? lunaArt : nepArt;
  }

  function clearPortal() {
    portalGate.classList.remove("is-active");
    stageScene.classList.remove("portal-is-open");
    nepArt.classList.remove("is-entering", "is-leaving");
    lunaArt.classList.remove("is-entering", "is-leaving");
  }

  function showEntrance() {
    if (motionPreference.matches) return;
    window.clearTimeout(entranceTimer);
    const art = visibleArt();
    portalGate.classList.add("is-active");
    stageScene.classList.add("portal-is-open");
    art.classList.add("is-entering");
    entranceTimer = window.setTimeout(() => {
      portalGate.classList.remove("is-active");
      stageScene.classList.remove("portal-is-open");
      art.classList.remove("is-entering");
    }, 1450);
  }

  function selectCompanion(id) {
    if (id === selectedCompanion.id && !transitionBusy) return;
    if (transitionBusy) {
      queuedCompanionId = id;
      return;
    }
    if (motionPreference.matches) {
      setCompanion(id);
      return;
    }

    transitionBusy = true;
    window.clearTimeout(entranceTimer);
    visibleArt().classList.remove("is-entering");
    stateList.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    queuedCompanionId = id;
    const wave = selectedCompanion.states.find((state) => state.id === "waving");
    if (wave) applyState(wave);
    portalGate.classList.add("is-active");
    stageScene.classList.add("portal-is-open");
    visibleArt().classList.add("is-leaving");
    transitionTimer = window.setTimeout(() => {
      const nextId = queuedCompanionId;
      clearPortal();
      transitionBusy = false;
      queuedCompanionId = null;
      setCompanion(nextId);
    }, 1100);
  }

  function selectState(id) {
    selectedState = selectedCompanion.states.find((state) => state.id === id) || selectedCompanion.states[0];
    applyState(selectedState);
  }

  function applyState(state) {
    document.querySelectorAll(".state-choice").forEach((button) => {
      const active = button.dataset.state === state.id;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelector("#companion-message").textContent = state.message;
    document.querySelector("#stage-state-summary").textContent = state.summary;
    document.querySelector("#tip-copy").textContent = state.tip;
    document.querySelector("#controls-title").textContent = `${selectedCompanion.name} đang ${state.id === "idle" && selectedCompanion.id === "nep" ? "nghỉ" : state.label.toLocaleLowerCase("vi")}`;
    stageScene.dataset.state = state.effect || state.id;
    if (selectedCompanion.id === "nep") {
      const scale = 1.5;
      nepArt.style.setProperty("--start-y", `${-state.row * 208 * scale}px`);
      nepArt.style.setProperty("--end-x", `${-state.frames * 192 * scale}px`);
      nepArt.style.setProperty("--duration", `${state.duration}s`);
      nepArt.style.setProperty("--frame-count", state.frames);
    } else {
      lunaImage.src = state.image;
      lunaArt.dataset.effect = state.effect || state.id;
      lunaArt.style.setProperty("--duration", `${state.duration}s`);
    }
  }

  function updateMotionPreference(event) {
    document.querySelector("#motion-check").classList.toggle("is-on", event.matches);
    document.querySelector("#motion-check").setAttribute("aria-label", event.matches ? "Đang giảm chuyển động" : "Đang dùng chuyển động thường");
    if (event.matches && transitionBusy) {
      window.clearTimeout(transitionTimer);
      const nextId = queuedCompanionId;
      clearPortal();
      transitionBusy = false;
      queuedCompanionId = null;
      setCompanion(nextId);
    }
  }

  motionPreference.addEventListener("change", updateMotionPreference);
  updateMotionPreference(motionPreference);
  renderCompanions();
  setCompanion(selectedCompanion.id);
  showEntrance();
})();
