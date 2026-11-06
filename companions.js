window.COMPANIONS = [
  {
    id: "nep",
    name: "Nếp",
    role: "bạn đồng hành • luôn sẵn sàng",
    chapter: "NEP’S CORNER",
    color: "#c97038",
    art: { type: "spritesheet", src: "assets/nep-spritesheet-v2.webp", frameWidth: 192, frameHeight: 208, columns: 8 },
    states: [
      { id: "idle", label: "Nghỉ ngơi", icon: "☼", message: "Này, bạn đến rồi!", summary: "nghỉ ngơi một chút", row: 0, frames: 6, duration: 1.25, tip: "Nếp luôn ở đây nếu bạn cần một người bạn." },
      { id: "running-right", label: "Chạy sang phải", icon: "→", message: "Đi thôi, theo mình!", summary: "đang chạy sang phải", row: 1, frames: 8, duration: 0.8, tip: "Có Nếp đồng hành, đường nào cũng vui." },
      { id: "running-left", label: "Chạy sang trái", icon: "←", message: "Quay lại đây nào!", summary: "đang chạy sang trái", row: 2, frames: 8, duration: 0.8, tip: "Nếp chạy theo bạn, dù bạn đi hướng nào." },
      { id: "waving", label: "Vẫy tay", icon: "✳", message: "Nếp chào bạn nè!", summary: "vẫy tay chào bạn", row: 3, frames: 4, duration: 0.8, tip: "Một lời chào bé xíu, một ngày vui hơn." },
      { id: "jumping", label: "Nhảy lên", icon: "↑", message: "Yeah, làm được rồi!", summary: "đang vui mừng", row: 4, frames: 5, duration: 0.9, tip: "Ăn mừng cả những điều nhỏ xíu nhé." },
      { id: "failed", label: "Hơi bối rối", icon: "…", message: "Không sao, thử lại nhé?", summary: "đang cần động viên", row: 5, frames: 8, duration: 1.2, tip: "Nghỉ một chút rồi mình thử lại cùng nhau." },
      { id: "waiting", label: "Chờ bạn", icon: "◷", message: "Mình đợi bạn nha.", summary: "đang đợi bạn", row: 6, frames: 6, duration: 1.1, tip: "Cứ thong thả nhé, Nếp không vội đâu." },
      { id: "working", label: "Làm việc", icon: "✎", message: "Mình cùng tập trung nhé!", summary: "đang làm việc", row: 7, frames: 6, duration: 1.2, tip: "Từng việc một thôi, mình làm được mà." },
      { id: "review", label: "Xem lại", icon: "✓", message: "Xem lại một chút nha.", summary: "đang xem lại", row: 8, frames: 6, duration: 1.15, tip: "Chậm lại để nhìn thấy mình đã tiến xa." }
    ]
  },
  {
    id: "luna",
    name: "Luna",
    role: "bạn đồng hành • dịu dàng và tò mò",
    chapter: "LUNA’S CORNER",
    color: "#6575ae",
    art: { type: "image-states" },
    states: [
      { id: "idle", label: "Nhấp trà", icon: "♨", message: "Ngồi xuống nhấp chút trà nhé?", summary: "đang nhấp trà", image: "luna/assets/luna-tea.png", effect: "tea", duration: 3, tip: "Chậm một ngụm trà, nhẹ một nhịp thở." },
      { id: "waving", label: "Vẫy tay", icon: "✳", message: "Luna vui vì bạn ở đây!", summary: "đang vẫy tay chào bạn", image: "luna/assets/luna-wave.gif", duration: 2, tip: "Hôm nay bạn thế nào? Luna đang lắng nghe." },
      { id: "thinking", label: "Tra cứu", icon: "⌕", message: "Để Luna tìm hiểu nhé!", summary: "đang tra cứu với máy tính bảng", image: "luna/assets/luna-thinking.png", effect: "thought", duration: 2.8, tip: "Một câu hỏi hay là khởi đầu của khám phá." },
      { id: "napping", label: "Ngủ gật", icon: "☾", message: "Suỵt… Luna chợp mắt rồi.", summary: "đang ngủ gật thật khẽ", image: "luna/assets/luna-napping.png", effect: "sleep", duration: 4.2, tip: "Một chút nghỉ ngơi cũng là tiến về phía trước." }
    ]
  }
];
