import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, CheckCircle2, Loader2, Home, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDateStore } from "../store/useDateStore";
import { sendTelegramMessage } from "../services/api";

export default function ConfirmationScreen() {
  const { food, activity, time, reset } = useDateStore();
  const navigate = useNavigate();
  const [status, setStatus] = useState("submitting"); // submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const message = `💕 *KẾ HOẠCH HẸN HÒ MỚI!* 💕\n\nBạn ấy đã trả lời khảo sát hẹn hò rồi nè:\n🍜 *Đồ ăn:* ${food || "Chưa chọn"}\n🎯 *Hoạt động:* ${activity || "Chưa chọn"}\n🕐 *Thời gian:* ${time || "Chưa chọn"}\n\nChuẩn bị đi chơi thôi nào! 👩‍❤️‍👨`;

    sendTelegramMessage(message)
      .then(() => setStatus("success"))
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message || "Không thể gửi tin nhắn Telegram.");
        setStatus("error");
      });
  }, [food, activity, time]);

  if (status === "submitting") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-pink-50">
        <Loader2 size={64} className="text-pink-500 animate-spin mb-4" />
        <h2 className="font-pacifico text-2xl text-pink-500">Đang chốt đơn...</h2>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-pink-50 p-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-sm"
        >
          <AlertCircle size={64} className="text-red-400 mx-auto mb-4" />
          <h2 className="font-pacifico text-2xl text-red-500 mb-3">Ối! Lỗi rồi 😥</h2>
          <p className="font-nunito text-gray-600 mb-6">
            {errorMessage || "Không thể gửi kế hoạch qua Telegram. Hãy kiểm tra lại cấu hình Chat ID và Bot Token."}
          </p>
          <button
            onClick={() => {
              reset();
              navigate("/");
            }}
            className="flex items-center justify-center gap-2 w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-nunito font-bold rounded-full transition-colors"
          >
            Thử lại khảo sát
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-pink-50 p-6 relative overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="z-10 bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center relative"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
          <div className="bg-pink-100 rounded-full p-4">
            <PartyPopper size={48} className="text-pink-500" />
          </div>
        </div>

        <h2 className="font-pacifico text-3xl text-pink-600 mt-10 mb-6">
          Chốt Kèo! 🎉
        </h2>

        <div className="flex flex-col gap-4 text-left font-nunito bg-pink-50 p-4 rounded-xl mb-8">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🍜</div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Đồ Ăn</p>
              <p className="font-bold text-lg text-gray-800">{food}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Hoạt Động</p>
              <p className="font-bold text-lg text-gray-800">{activity}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl">🕐</div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Thời Gian</p>
              <p className="font-bold text-lg text-gray-800">{time}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-mint-600 font-nunito font-bold mb-6">
          <CheckCircle2 size={20} />
          Đã gửi thông báo cho anh!
        </div>

        <button 
          onClick={() => {
            reset();
            navigate("/");
          }}
          className="flex items-center justify-center gap-2 w-full py-3 text-pink-500 font-nunito font-bold hover:bg-pink-50 rounded-full transition-colors"
        >
          <Home size={18} />
          Về trang chủ
        </button>
      </motion.div>
    </div>
  );
}
