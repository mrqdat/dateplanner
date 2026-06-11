import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-pink-50 p-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-mint-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-beige-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>

      <div className="z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <Heart size={100} className="text-pink-500 fill-pink-500 animate-wiggle" />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-pacifico text-4xl text-pink-600 mb-4"
        >
          Hẹn Hò Nhé! 💕
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-nunito text-lg text-gray-600 mb-10 max-w-xs"
        >
          Trả lời vài câu hỏi nhỏ để mình lên kế hoạch cho buổi đi chơi nha.
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-10 py-4 bg-pink-500 hover:bg-pink-600 text-white font-nunito font-bold text-xl rounded-full shadow-lg transition-all"
        >
          Bắt đầu thôi! ✨
        </motion.button>
      </div>
    </div>
  );
}
