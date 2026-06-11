import { useState } from "react";
import { useDateStore } from "../../store/useDateStore";
import RunawayButton from "./RunawayButton";
import { motion } from "framer-motion";

export default function StepTime() {
  const { time, setTime, nextStep } = useDateStore();
  const [escapes, setEscapes] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="font-pacifico text-3xl text-pink-500 mb-6 text-center leading-tight">
        Mấy giờ mình đi nè?
      </h2>
      
      <div className="w-full mb-12 flex justify-center">
        <input 
          type="datetime-local" 
          value={time || ""}
          onChange={(e) => setTime(e.target.value)}
          className="w-full max-w-[280px] p-4 text-center rounded-2xl border-2 border-pink-200 bg-white shadow-inner font-nunito font-bold text-gray-800 text-lg focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all"
        />
      </div>
      
      <div className="flex gap-4 w-full justify-between items-center relative h-20">
        <div className="absolute left-0">
          <RunawayButton 
            onGiveUp={() => setTime(new Date().toISOString().slice(0, 16))} 
            onEscape={(c) => setEscapes(c)} 
          />
        </div>
        <div className="absolute right-0 flex items-center justify-center origin-right">
          <motion.button
            animate={{ scale: 1 + escapes * 0.15 }}
            whileHover={{ scale: 1.05 + escapes * 0.15 }}
            whileTap={{ scale: 0.95 + escapes * 0.15 }}
            onClick={() => {
              if (!time) setTime("Khi nào anh qua đón 🕐");
              nextStep();
            }}
            className="px-8 py-3 rounded-full font-nunito font-bold text-white shadow-md transition-colors whitespace-nowrap bg-pink-500 hover:bg-pink-600 cursor-pointer"
          >
            Chốt đơn! 🎉
          </motion.button>
        </div>
      </div>
    </div>
  );
}
