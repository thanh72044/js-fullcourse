# GoodShop Project

## 📋 Tổng quan Project
Project thương mại điện tử đơn giản "GoodShop" được xây dựng để thực hành các kiến thức về HTML, CSS và JavaScript.

## 📁 Cấu trúc thư mục
Các file chính hiện đang nằm tại thư mục gốc của repository:
- `index.html`: Cấu trúc giao diện chính.
- `index.js`: Logic xử lý sản phẩm và giỏ hàng.
- `styles.css`: Thiết kế giao diện (UI/UX).

## ⚙️ Cấu hình Git & SourceTree
### Thông tin Repository
- **Đường dẫn máy tính (Local Path)**: `D:\javascripts-fullcourse\js-fullcourse`
  - *Lưu ý: Đây là đường dẫn chính xác bạn cần dùng khi "Add" vào SourceTree.*
- **Đường dẫn GitHub (Remote URL)**: `https://github.com/thanh72044/js-fullcourse.git`
- **Nhánh chính (Branch)**: `main`

### 🛠 Hướng dẫn xử lý lỗi SourceTree
1. **Lỗi "Not a valid working copy path"**:
   - Phải chọn đúng thư mục `js-fullcourse` (nơi có file `.git`). Không chọn thư mục cha bên ngoài.
2. **Không thấy thay đổi/commit**:
   - Luôn nhấn **F5** để Refresh SourceTree.
   - Kiểm tra tab **History** để xem các bản lưu cũ.
   - Phải thực hiện **Stage** -> **Commit** để lưu thay đổi mới vào lịch sử.

## 🚀 Lộ trình phát triển chi tiết (Roadmap)

### Phase 1: Hoàn thiện Logic cốt lõi (JavaScript)
- [x] **Quản lý dữ liệu sản phẩm**: Tạo mảng `products` chứa thông tin (id, name, price, image).
- [x] **Render sản phẩm động**: Dùng JavaScript để tự động hiển thị danh sách sản phẩm từ mảng lên HTML.
- [ ] **Xử lý Giỏ hàng (Cart Logic)**:
    - [x] Hàm `addToCart()`: Thêm sản phẩm vào mảng giỏ hàng.
    - [x] Hàm `updateCartCount()`: Cập nhật số lượng trên biểu tượng giỏ hàng.
    - [x] Tính tổng tiền (Total price) tự động.
- [x] **Lưu trữ dữ liệu**: Sử dụng `localStorage` để giỏ hàng không bị mất khi load lại trang.

### Phase 2: Nâng cấp Giao diện (UI/UX & CSS)
- [ ] **Thiết kế Header hiện đại**: Thanh điều hướng cố định (Sticky Header) với hiệu ứng bóng đổ.
- [ ] **Card sản phẩm chuyên nghiệp**: Thêm hiệu ứng Hover, nút "Add to Cart" nổi bật.
- [x] **Thiết kế modal/sidebar Giỏ hàng**: Hiển thị danh sách các món đồ đã chọn một cách đẹp mắt.
- [ ] **Responsive Design**: Đảm bảo web hiển thị tốt trên cả điện thoại và máy tính.

### Phase 3: Hiệu ứng & Trải nghiệm người dùng
- [ ] **Micro-animations**: Hiệu ứng khi nhấn nút thêm vào giỏ hàng.
- [x] **Thông báo (Toast Notification)**: Hiện thông báo nhỏ "Đã thêm vào giỏ" khi người dùng click.

### Phase 4: Tính năng nâng cao
- [x] **Tìm kiếm sản phẩm**: Thanh search để lọc sản phẩm theo tên.
- [x] **Bộ lọc danh mục**: Lọc sản phẩm theo loại (ví dụ: Áo, Quần, Phụ kiện).
- [ ] **Sắp xếp (Sorting)**: Sắp xếp theo giá tăng/giảm dần hoặc theo độ phổ biến.
- [ ] **Chi tiết sản phẩm (Quick View)**: Xem nhanh thông tin sản phẩm trong cửa sổ nhỏ.

### Phase 5: Hoàn thiện & Đóng gói
- [ ] **Trang thanh toán (Checkout)**: Form nhập thông tin khách hàng và xem lại đơn hàng cuối cùng.
- [ ] **Trang trống (Empty State)**: Giao diện khi giỏ hàng chưa có gì.
- [ ] **Tối ưu SEO**: Thêm các thẻ meta, title chuẩn SEO.
- [ ] **Deploy**: Đưa trang web lên GitHub Pages hoặc Vercel để mọi người cùng xem.

---
## 📝 Nhật ký công việc (Tasks)
- `[2026-05-03]` **Hoàn thành**: Cấu trúc lại thư mục và kết nối Git thành công.
- `[2026-05-04]` **Hoàn thành**: Tích hợp LocalStorage, xây dựng Sidebar giỏ hàng và tính tổng tiền tự động.
- `[2026-05-20]` **Hoàn thành**: Thêm tính năng thay đổi số lượng, thông báo Toast, tìm kiếm và lọc danh mục.
- `[Đang chờ]` **Sắp tới**: Triển khai thiết kế Phase 2 (Header hiện đại, Card sản phẩm).

---
*Cập nhật lần cuối: 20/05/2026 bởi Antigravity AI.*
