# 💌 Date Planner - Hẹn Hò Nhé! 💕

Một ứng dụng web siêu dễ thương, gọn nhẹ giúp bạn và người thương lên kế hoạch cho buổi đi chơi hoàn hảo. Bạn chỉ cần gửi link cho "nửa kia", họ sẽ chọn món ăn, hoạt động, thời gian mong muốn và kết quả sẽ được gửi thẳng về Telegram của bạn ngay tức thì!

Ứng dụng được thiết kế hoàn toàn ở **Frontend-only** (không dùng database hay backend riêng) để bạn dễ dàng triển khai miễn phí lên Vercel, Netlify hoặc GitHub Pages chỉ trong 5 phút.

---

## ✨ Tính năng nổi bật
* **Trải nghiệm mượt mà**: Giao diện ngọt ngào, hiệu ứng chuyển động bắt mắt.
* **Tối giản & Bảo mật**: Không lưu trữ dữ liệu cá nhân hay lịch sử trên bất kỳ database nào.
* **Thông báo tức thời**: Gửi trực tiếp thông tin chốt lịch qua Telegram Bot.
* **Dễ dàng tùy biến**: Tự thay đổi hình ảnh, câu hỏi và cấu hình cá nhân.

---

## 🛠️ Hướng dẫn cấu hình Telegram (Nhận thông báo)

Để nhận được tin nhắn khi đối phương chọn xong, bạn cần chuẩn bị:
1. **Telegram Bot Token**
2. **Telegram Chat ID** của bạn

### Bước 1: Tạo Telegram Bot (Nếu chưa có)
1. Mở Telegram và tìm kiếm **@BotFather**.
2. Chat `/newbot` và đặt tên cho Bot của bạn.
3. BotFather sẽ gửi cho bạn một đoạn mã **API Token** (dạng `123456789:ABCdefGhIJK...`). Hãy lưu lại mã này.
4. Bấm vào link bot vừa tạo (ví dụ: `t.me/your_bot_name`) và nhấn **Start**. *(Lưu ý: Bắt buộc phải nhấn Start thì bot mới gửi được tin nhắn cho bạn)*.

### Bước 2: Lấy Chat ID của bạn
1. Tìm kiếm bot **@userinfobot** trên Telegram.
2. Bấm **Start**, bot sẽ trả về thông tin tài khoản của bạn, bao gồm một dãy số `Id` (ví dụ: `987654321`). Đây chính là **Chat ID** của bạn.

### Bước 3: Điền cấu hình vào ứng dụng
Có hai cách để bạn thêm thông tin của mình:

#### Cách 1: Sử dụng file `.env` (Khuyên dùng khi Deploy lên Vercel/Netlify)
Tạo hoặc chỉnh sửa file `.env` tại thư mục `frontend/` và điền:
```env
VITE_TELEGRAM_BOT_TOKEN=điền_bot_token_ở_đây
VITE_TELEGRAM_CHAT_ID=điền_chat_id_ở_đây
```

#### Cách 2: Sửa trực tiếp trong mã nguồn
Mở file [frontend/src/config.js](file:///d:/Working/date-planer/frontend/src/config.js) và sửa giá trị mặc định:
```javascript
export const TELEGRAM_CONFIG = {
  botToken: "điền_bot_token_ở_đây",
  chatId: "điền_chat_id_ở_đây",
};
```

---

## 🚀 Chạy ứng dụng dưới Local

1. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```
2. Khởi động môi trường phát triển:
   ```bash
   npm run dev
   ```
3. Truy cập địa chỉ hiển thị trên màn hình terminal (thường là `http://localhost:5173`) để chạy thử.

---

## 🌐 Hướng dẫn Deploy lên các dịch vụ hosting miễn phí

### Deploy lên Vercel
1. Đăng nhập vào [Vercel](https://vercel.com).
2. Kết nối với tài khoản GitHub và chọn repo `date-planer`.
3. Cấu hình Project trên Vercel:
   * **Framework Preset**: Chọn `Vite`.
   * **Root Directory**: Chọn `frontend`.
   * **Environment Variables**: Thêm 2 biến môi trường:
     * `VITE_TELEGRAM_BOT_TOKEN` = `<Token của bạn>`
     * `VITE_TELEGRAM_CHAT_ID` = `<Chat ID của bạn>`
4. Nhấn **Deploy**. Sau khi hoàn tất, Vercel sẽ cấp cho bạn một đường dẫn (link) công khai.
5. Gửi link đó cho người thương và chờ đợi thông báo ngọt ngào gửi về Telegram thôi! 💕
