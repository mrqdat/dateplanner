import { TELEGRAM_CONFIG } from "../config";

/** Sends a message directly to Telegram Bot API */
export const sendTelegramMessage = async (message) => {
  const token = TELEGRAM_CONFIG.botToken;
  const chatId = TELEGRAM_CONFIG.chatId;

  if (!token || token.includes("YOUR_TELEGRAM_BOT_TOKEN")) {
    console.error("Telegram Bot Token is not configured. Please check src/config.js or .env file.");
    throw new Error("Telegram Bot Token is not configured.");
  }
  if (!chatId || chatId.includes("YOUR_TELEGRAM_CHAT_ID")) {
    console.error("Telegram Chat ID is not configured. Please check src/config.js or .env file.");
    throw new Error("Telegram Chat ID is not configured.");
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Failed to send Telegram message:", errorData);
    throw new Error(errorData.description || "Failed to send Telegram message");
  }

  return response.json();
};
