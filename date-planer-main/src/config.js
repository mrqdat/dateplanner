export const TELEGRAM_CONFIG = {
  // Điền Bot Token của bạn ở đây hoặc dùng file .env (VITE_TELEGRAM_BOT_TOKEN)
  botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "YOUR_TELEGRAM_BOT_TOKEN_HERE",

  // Điền Chat ID nhận thông báo ở đây hoặc dùng file .env (VITE_TELEGRAM_CHAT_ID)
  chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID || "YOUR_TELEGRAM_CHAT_ID_HERE",
};
