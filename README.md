# Companions

Kho asset cho các nhân vật companion của AABA. Có thể bổ sung nhiều nhân vật; mỗi nhân vật mới nên được đặt trong thư mục riêng để tránh trộn asset.

## Nếp

Asset hiện có trong `assets/`, `animations/` và `previews/` là của Nếp:

- `assets/nep-spritesheet-v2.webp` — sprite sheet lossless dùng cho web.
- `assets/nep-spritesheet-v2.png` — bản PNG master trong suốt.
- Canvas 1536 × 2288 px, lưới 8 cột × 11 hàng; mỗi frame 192 × 208 px.
- `animations/` chứa 9 GIF xem nhanh các trạng thái.
- `previews/` chứa contact sheet và ảnh QA hướng nhìn.

Sprite sheet có các hàng idle, chạy phải, chạy trái, vẫy tay, nhảy, failed, chờ, làm việc, review và hai hàng hướng nhìn. Xem contact sheet để đối chiếu. Chạy trái/phải là hai animation riêng.

## Thêm companion mới

Tạo thư mục riêng cho nhân vật, ví dụ `luna/assets/`, `luna/animations/` và `luna/previews/`, kèm README mô tả kích thước, frame và trạng thái. Giữ nguyên tên file rõ ràng và không ghi đè asset của nhân vật khác.

## Dùng trong web app

Ưu tiên sprite sheet WebP khi cần đổi trạng thái linh hoạt; dùng GIF để xem nhanh hoặc làm fallback. Giữ tỉ lệ và nền trong suốt, hỗ trợ `prefers-reduced-motion`. Xem [PROMPT_TICH_HOP_NEP.md](PROMPT_TICH_HOP_NEP.md) để bắt đầu dự án web app.

## Chạy ứng dụng

Ứng dụng dùng HTML, CSS và JavaScript thuần, không cần cài dependency. Từ thư mục dự án, chạy:

```powershell
python -m http.server 8000
```

Mở [http://localhost:8000](http://localhost:8000) trong trình duyệt. Dừng máy chủ bằng `Ctrl+C`.

Nếp dùng sprite sheet ở `assets/`. Asset của Luna được giữ riêng trong `luna/assets/`: GIF vẫy tay và các pose uống trà, tra cứu bằng máy tính bảng, ngủ gật. Danh sách companion và trạng thái nằm trong `companions.js`.
