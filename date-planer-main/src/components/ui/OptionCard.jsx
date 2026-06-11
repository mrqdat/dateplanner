import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function OptionCard({ title, icon, isSelected, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative w-full p-3 rounded-xl border-2 flex items-center gap-2 text-left transition-colors cursor-pointer select-none
        ${isSelected 
          ? "border-pink-500 bg-pink-100/50 shadow-sm" 
          : "border-beige-200 bg-white hover:border-pink-300 hover:bg-pink-50"}
      `}
    >
      <div className="text-2xl">{icon}</div>
      <div className="flex-1 font-nunito font-bold text-sm text-gray-800 leading-tight">
        {title}
      </div>
      
      {isSelected && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-2 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-white"
        >
          <Check size={12} strokeWidth={3} />
        </motion.div>
      )}
    </motion.button>
  );
}
