# Ôn Tập Viết Lại Câu – Tiếng Anh 11 (Unit 4 & Unit 5)

Website luyện tập và thi thử **Viết lại câu Tiếng Anh 11 (Global Success)** bám sát trọng tâm ngữ pháp:
- **Unit 4 – ASEAN & Viet Nam**: Gerunds (`V-ing`) làm chủ ngữ, bổ ngữ và tân ngữ sau động từ / giới từ.
- **Unit 5 – Global Warming**: Mệnh đề phân từ hiện tại (`V-ing`) và phân từ quá khứ (`V3/-ed`).
- **Tổng hợp & Nâng cao**: Kết hợp linh hoạt cả hai chuyên đề.

## Tính năng chính

- **Ngân hàng 36 câu hỏi chuẩn hóa** với câu gốc, từ gợi ý, nhiều phương án đúng được chấp nhận và giải thích ngữ pháp chi tiết bằng tiếng Việt.
- **2 chế độ làm bài**:
  - **Chế độ Luyện tập**: Kiểm tra từng câu ngay lập tức, xem gợi ý cấu trúc, mở bảng tóm tắt ngữ pháp và so sánh lỗi từng từ.
  - **Chế độ Thi thật**: Đồng hồ đếm ngược, khóa gợi ý và bảng ngữ pháp trong lúc làm bài, đánh dấu câu xem lại, tự động nộp khi hết giờ.
- **Bộ chấm điểm thông minh (`grader.js`)**:
  - Hỗ trợ gõ phần điền khuyết **hoặc** gõ lại nguyên cả câu.
  - Tự động chấp nhận chính tả Anh–Anh & Anh–Mỹ (`organise`/`organize`, `neighbourhood`/`neighborhood`, `colourful`/`colorful`, ...).
  - Chấp nhận dạng viết tắt (`didn't`/`did not`, `can't`/`cannot`, ...).
  - Nhắc nhẹ khi đúng ngữ pháp nhưng thiếu dấu phẩy giữa mệnh đề phân từ.
  - Hiển thị **word-level diff** (đúng / dư / thiếu) khi câu chưa chính xác.
- **Tổng kết & Lịch sử**: Quy đổi điểm thang 10, phân tích tỷ lệ đúng theo chuyên đề, lọc câu sai / bỏ trống / đã đánh dấu, luyện lại riêng các câu sai và lưu lịch sử làm bài trên `localStorage`.

## Cấu trúc thư mục

```text
unit4-5-sentence-rewrite/
├── index.html          # Giao diện chính của ứng dụng web
├── styles.css          # Toàn bộ giao diện & responsive layout
├── questions.js        # Ngân hàng 36 câu hỏi Unit 4, Unit 5 & Tổng hợp
├── grader.js           # Bộ chuẩn hóa câu trả lời & chấm điểm thông minh
├── app.js              # Logic điều khiển Luyện tập / Thi thật / Kết quả
├── favicon.svg         # Biểu tượng tab trình duyệt
├── robots.txt          # Cấu hình crawler
├── package.json        # Thông tin dự án & lệnh chạy local
├── vercel.json         # Cấu hình deploy chuẩn trên Vercel
├── .gitignore          # Loại trừ file tạm khi push Git
└── tests/
    ├── test-runner.html # Bộ kiểm thử grader & ngân hàng 36 câu
    └── e2e-runner.html  # Bộ kiểm thử luồng giao diện E2E
```

## Chạy website trên máy (Local)

- **Cách nhanh nhất**: Mở trực tiếp file `index.html` bằng trình duyệt (Chrome, Edge, Firefox...).
- **Hoặc chạy qua local server** (nếu máy có Node.js):
  ```bash
  npm run dev
  ```
- **Kiểm thử**: Mở `tests/test-runner.html` và `tests/e2e-runner.html` qua local server để xem kết quả test tự động.

## Đưa code lên GitHub

### Cách 1: Dùng Git CLI (nếu máy đã cài Git)
```bash
git init
git add .
git commit -m "Initial commit: EN11 Unit 4-5 sentence rewrite website"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

### Cách 2: Upload trực tiếp trên trình duyệt (không cần cài Git)
1. Truy cập [github.com/new](https://github.com/new) và tạo repository mới (ví dụ `unit4-5-sentence-rewrite`).
2. Chọn **uploading an existing file**.
3. Kéo thả toàn bộ các file và thư mục (`index.html`, `styles.css`, `questions.js`, `grader.js`, `app.js`, `favicon.svg`, `robots.txt`, `package.json`, `vercel.json`, `.gitignore`, `README.md`, `tests/`) vào GitHub rồi bấm **Commit changes**.

## Deploy lên Vercel App

1. Truy cập [vercel.com/new](https://vercel.com/new) và đăng nhập bằng GitHub.
2. Chọn **Import** repository GitHub vừa tạo.
3. Trong phần **Configure Project**:
   - **Framework Preset**: giữ mặc định `Other` (hoặc `No Framework`).
   - **Root Directory**: `./`
   - **Build Command**: để trống (đây là static web thuần HTML/CSS/JS, không cần bước build phức tạp).
   - **Output Directory**: để trống (mặc định phục vụ trực tiếp từ thư mục gốc).
4. Bấm **Deploy** — Vercel sẽ cấp đường dẫn `.vercel.app` hoạt động ngay sau vài giây.
