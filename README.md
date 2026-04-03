<div align="center">
  <h1>📱 Hệ Thống Quản Lý Cửa Hàng Điện Thoại 📱</h1>
  <p><b>Dự án DevOps Mini - Triển khai quy trình CI/CD cơ bản và Docker Containerization</b></p>
  
  [![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](#)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)

  <p>
    <a href="https://github.com/Letri88/DevOpsProject"><b>🔗 Xem mã nguồn trên GitHub</b></a>
  </p>
</div>

---

## 📋 1. Giới Thiệu Dự Án

Dự án DevOps Mini: Ứng dụng Web Fullstack (MERN) cỡ nhỏ giúp quản lý danh mục sản phẩm điện thoại di động. Hệ thống được đóng gói hoàn chỉnh bằng Docker Compose, đảm bảo tính nhất quán trên mọi môi trường triển khai.

### ✨ Tính Năng Nổi Bật:
- Tra cứu và quản lý thông tin các dòng thiết bị di động (Tên máy, Hãng, Mức giá).
- Giám sát trạng thái hoạt động (Healthcheck) của Backend API theo thời gian thực.
- Thiết kế giao diện (UI) theo phong cách Minimalist vô cùng sạch sẽ và thân thiện.
- Tự động hóa hoàn toàn môi trường thiết lập cơ sở dữ liệu MongoDB bằng Docker Volumes.

---

## 🛠️ 2. Công Nghệ Sử Dụng (Tech Stack)

Hệ thống được chia thành 3 tiểu dịch vụ (Services) giao tiếp độc lập:
* **Frontend:** React.js, Vite, Axios.
* **Backend:** Node.js, Express.js, Mongoose.
* **Database:** MongoDB (Containerized).
* **Orchestration:** Docker Compose.

---

## 🚀 3. Hướng Dẫn Khởi Chạy (Local Installation)

Bạn không cần phải cài đặt Node.js hay MongoDB trên máy tính. Tất cả những gì bạn cần là **Docker Desktop**.

**Bước 1:** Clone mã nguồn bản mới nhất
```bash
git clone https://github.com/Letri88/DevOpsProject.git
cd devops-project
```

**Bước 2:** Cấp phát các biến môi trường
(Sao chép file `.env.example` thành `.env`)
```bash
cp .env.example .env
```

**Bước 3:** Khởi chạy bằng Docker Compose
```bash
docker-compose up -d --build
```

**Bước 4:** Truy cập ứng dụng
* Giao diện chính: [http://localhost:3000](http://localhost:3000)
* Healthcheck backend API: [http://localhost:5000/health](http://localhost:5000/health)

---

## 📖 4. Hướng Dẫn Sử Dụng
- Tại giao diện trang chủ, hệ thống sẽ báo **"Online"** nếu Backend được kết nối thành công.
- Điền đầy đủ thông tin vào biểu mẫu bổ sung sản phẩm (Hãng, Dòng máy, Giá VNĐ).
- Bấm nút **"Lưu Sản Phẩm"**, hệ thống sẽ xử lý POST Request và tự động đồng bộ lên danh sách hiển thị ở bên cạnh.

---

## 🐳 5. Đóng Gói Lên Docker Hub (Optional)

Dự án được viết sẵn Dockerfile ở cả 2 thư mục. Dưới đây là các câu lệnh hỗ trợ đẩy Image lên môi trường cá nhân nếu cần:

```bash
# Đầu tiên, đăng nhập tài khoản
docker login

# Đóng gói và đẩy Backend Image
docker build -t <dockerhub-username>/backend-devops:latest ./backend
docker push <dockerhub-username>/backend-devops:latest

# Đóng gói và đẩy Frontend Image
docker build -t <dockerhub-username>/frontend-devops:latest ./frontend
docker push <dockerhub-username>/frontend-devops:latest
```

---

## 👨‍💻 6. Thông Tin Sinh Viên
* **Người thực hiện:** Lê Văn Trí
* **Mã Số Sinh Viên:** 2251220201
* **Lớp:** 22CT1
* **Chi tiết UI Profile:** [http://localhost:3000/about](http://localhost:3000/about)
