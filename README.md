# Movie-Theater-Project
# Hệ Thống Quản Lý Rạp Chiếu Phim

## Giới thiệu

Dự án này là một hệ thống quản lý rạp chiếu phim với các chức năng tương tự như các rạp CGV, Galaxy. Hệ thống cho phép người dùng tra cứu thông tin phim, đặt vé trực tuyến, quản lý suất chiếu, và theo dõi lịch sử đặt vé.

## Chức năng chính

- **Đăng ký và đăng nhập người dùng**: Hỗ trợ người dùng đăng ký tài khoản, đăng nhập và đăng xuất.
- **Tìm kiếm phim**: Người dùng có thể tìm kiếm phim theo tên, thể loại, và trạng thái (đang chiếu, sắp chiếu).
- **Xem thông tin phim**: Cung cấp thông tin chi tiết về phim bao gồm ngày phát hành, thể loại, thời lượng, đạo diễn và dàn diễn viên.
- **Quản lý suất chiếu**: Hiển thị danh sách các suất chiếu phim theo ngày và rạp chiếu, cho phép người dùng lựa chọn suất chiếu phù hợp.
- **Đặt vé trực tuyến**: Người dùng có thể đặt vé, chọn ghế, thanh toán và nhận vé điện tử.
- **Quản lý người dùng**: Người quản trị có thể quản lý thông tin người dùng, quyền truy cập và các hoạt động liên quan.
- **Quản lý rạp và phòng chiếu**: Quản lý danh sách các rạp chiếu phim, phòng chiếu, và số lượng ghế ngồi.
- **Quản lý phim**: Người quản trị có thể thêm, chỉnh sửa hoặc xóa phim khỏi hệ thống.

## Công nghệ sử dụng

- **Backend**: Spring Boot, Java
- **Frontend**: ReactJS, Tailwind CSS
- **Cơ sở dữ liệu**: MySQL
- **API**: RESTful API
- **Bảo mật**: JWT cho xác thực và phân quyền người dùng

## Cài đặt và chạy dự án

### Yêu cầu hệ thống

- Node.js
- Java 11 hoặc cao hơn
- MySQL

### Hướng dẫn cài đặt

1. Clone repository:

   ```bash
   git clone https://github.com/your-username/cinema-management-system.git
   ```

2. Cài đặt backend:

   ```bash
   cd backend
   ./mvnw install
   ```

3. Cài đặt frontend:

   ```bash
   cd frontend
   npm install
   npm start
   ```

4. Cấu hình cơ sở dữ liệu trong file `application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/cinema_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```

5. Chạy ứng dụng backend:

   ```bash
   ./mvnw spring-boot:run
   ```

6. Truy cập giao diện web tại `http://localhost:3000`.

---

## Thành viên dự án:
Nguyễn Đức Dũng