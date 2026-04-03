# DevOps Project - Quản Lý Sản Phẩm Điện Thoại

Dự án DevOps Mini bao gồm một ứng dụng web Quản lý thông tin điện thoại di động (Hãng sản xuất, Dòng máy, Giá bán). Hệ thống được đóng gói hoàn chỉnh bằng Docker Compose, bao gồm: Frontend (React/Vite), Backend (Node.js/Express) và Database (MongoDB). 

Link Repository GitHub: [https://github.com/Letri88/DevOpsProject](https://github.com/Letri88/DevOpsProject)

## Cách Khởi Chạy Dự Án
Bạn có thể khởi chạy toàn bộ hệ thống này dễ dàng bằng Docker Compose.

1. Bật phần mềm Docker Desktop trên máy tính.
2. Từ thư mục gốc của dự án (`devops-project`), mở terminal và chạy lệnh:
   ```bash
   docker-compose up -d --build
   ```
3. Chờ đợi Docker build images và khởi động các container. Khi hoàn thành, bạn có thể truy cập:
   - **Giao diện trang chủ (Dashboard):** http://localhost:3000
   - **Thông tin sinh viên (About):** http://localhost:3000/about
   - **Trạng thái kết nối Backend (Healthcheck):** http://localhost:5000/health

## Cách Sử Dụng Trang Web
1. Truy cập vào http://localhost:3000.
2. Tại cột bên trái **"Thêm Sản Phẩm"**, điền các thông tin:
   - **Hãng sản xuất:** (Ví dụ: Apple, Samsung...)
   - **Dòng máy:** (Ví dụ: iPhone 15 Pro, Galaxy S24...)
   - **Giá bán:** (Nhập số tiền bằng VNĐ)
3. Bấm **"Thêm Điện Thoại"**. Thông tin sẽ được gửi về Backend và lưu xuống MongoDB bằng các phương thức chuẩn (POST).
4. Ngay lập tức, thông tin sản phẩm vừa thêm sẽ xuất hiện tại danh sách **"Danh Mục Sản Phẩm"** ở khung bên phải trang chủ (được lấy lên bằng lệnh GET).
5. Truy cập http://localhost:3000/about để xem thông tin sinh viên thực hiện đồ án.

## Build và Push Docker Image (Optional)
Nếu muốn đẩy Image lên kho lưu trữ Docker Hub, làm theo các bước sau trong terminal:

1. Đăng nhập Docker Hub:
   ```bash
   docker login
   ```
2. Build và Push Backend:
   ```bash
   docker build -t <dockerhub-username>/backend-devops:latest ./backend
   docker push <dockerhub-username>/backend-devops:latest
   ```
3. Build và Push Frontend:
   ```bash
   docker build -t <dockerhub-username>/frontend-devops:latest ./frontend
   docker push <dockerhub-username>/frontend-devops:latest
   ```
