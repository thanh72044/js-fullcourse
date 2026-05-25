# 🛒 Mini E-commerce Project (Vanilla JS)

Đây là dự án thực hành JavaScript thuần (Vanilla JS) giúp củng cố toàn bộ các nền tảng cốt lõi của lập trình web trước khi bước sang học các Framework hiện đại như ReactJS.

## 🚀 Các tính năng đã hoàn thiện

1. **Hiển thị sản phẩm (Render Products):** 
   - Lấy dữ liệu sản phẩm thực tế từ server thông qua `Fetch API` (https://fakestoreapi.com/products).
   - Xử lý bất đồng bộ với `async / await`.
   - Hiển thị danh sách sản phẩm động bằng Template Literals (` \` \` `) và `innerHTML`.

2. **Giỏ hàng (Shopping Cart):**
   - Thêm sản phẩm vào giỏ hàng.
   - Tăng/giảm số lượng sản phẩm, tự động xóa nếu số lượng về 0.
   - Tính tổng tiền và hiển thị số lượng badge trên icon giỏ hàng.

3. **Lưu trữ dữ liệu (LocalStorage):**
   - Lưu trạng thái giỏ hàng vào trình duyệt (`localStorage.setItem`).
   - Khôi phục giỏ hàng khi người dùng F5 tải lại trang (`JSON.parse` / `JSON.stringify`).

4. **Tìm kiếm & Lọc sản phẩm:**
   - Ô tìm kiếm: Lọc sản phẩm theo tên (`product.title`) sử dụng phương thức `filter()` và `includes()`.
   - Nút danh mục: Lọc sản phẩm theo danh mục (`category`) khớp với dữ liệu API (men's clothing, women's clothing, electronics...).
   - Sắp xếp (Sort): Sắp xếp mảng theo giá (Tăng dần / Giảm dần) sử dụng phương thức `sort()`.

5. **Hiệu ứng & Giao diện cơ bản (UI/UX):**
   - Thông báo (Toast Message) tự động biến mất sau 3 giây (`setTimeout`).
   - Modal xem nhanh chi tiết sản phẩm.
   - Hiệu ứng giật nảy (bounce) khi thêm đồ vào giỏ.

## 🧠 Các hàm & kiến thức cốt lõi đã áp dụng
- **DOM:** `getElementById`, `querySelector`, `querySelectorAll`, `classList.add/remove`.
- **Event Listeners:** `click`, `input`, `change`.
- **Array Methods:** `forEach`, `find`, `filter`, `push`, `splice`, `sort`.
- **API:** `fetch()`, `response.json()`, `try...catch`.

## ⏭️ Mục tiêu cho ngày học tiếp theo
- [ ] Tập chuyển đổi các function thông thường (Normal Function) sang **Arrow Function (`() => {}`)** của ES6.
- [ ] Tìm hiểu thêm về **Destructuring** trong ES6 để code gọn hơn.
- [ ] Triển khai đưa trang web này lên mạng (Deploy lên Vercel / GitHub Pages).
- [ ] Chuẩn bị kiến thức để bước sang học **ReactJS / NodeJS**.
