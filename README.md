Product Demo Project

Repo này chứa 3 phần chính:
- fe: Frontend React app
- be: Backend Express API
- db: PostgreSQL database với cấu hình và dữ liệu mẫu

Cấu trúc thư mục:
/ 
├── fe/        # Frontend React project
├── be/        # Backend Express project
└── db/        # PostgreSQL database config & init

Hướng dẫn chạy project

1. Chạy Database (PostgreSQL)
- Di chuyển vào thư mục db/
- Chạy lệnh:
  docker compose up -d
- Postgres sẽ chạy trên port 5433 (host).
- Database được khởi tạo với user, password, db name theo file docker-compose.yml.

2. Chạy Backend (Express API)
- Di chuyển vào thư mục be/
- Cấu hình biến môi trường trong file .env hoặc trong docker-compose.yml:
  - PGHOST trỏ đến địa chỉ DB (ví dụ: localhost hoặc IP VPS DB)
  - PGUSER, PGPASSWORD, PGDATABASE, PGPORT theo cấu hình DB
- Chạy lệnh:
  docker compose up -d
- Backend sẽ chạy trên port 4000.

3. Chạy Frontend (React app)
- Di chuyển vào thư mục fe/
- Chạy lệnh:
  docker compose up -d
- Frontend sẽ chạy trên port 3000.

Lưu ý
- Nếu bạn chạy 3 service trên cùng 1 máy, có thể cấu hình chung network docker để backend kết nối được với db bằng hostname db.
- Nếu database nằm trên VPS khác, hãy cập nhật biến môi trường PGHOST trong backend thành IP hoặc hostname của VPS đó.
- Đảm bảo các port không bị trùng với các dịch vụ đang chạy trên máy.

Thông tin thêm
- Backend API endpoint ví dụ: GET /products để lấy danh sách sản phẩm.
- Frontend sẽ gọi API backend để hiển thị danh sách sản phẩm.

Liên hệ
Nếu có thắc mắc hoặc góp ý, bạn có thể liên hệ qua email: khoidang2110@gmail.com
