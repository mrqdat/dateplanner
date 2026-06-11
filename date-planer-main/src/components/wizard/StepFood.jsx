import { useState } from "react";
import { useDateStore } from "../../store/useDateStore";
import OptionCard from "../ui/OptionCard";
import RunawayButton from "./RunawayButton";
import { motion } from "framer-motion";

const OPTIONS = [
  { id: "sushi", title: "Sushi 🍣", icon: "🍣" },
  { id: "bbq", title: "Thịt Nướng 🥩", icon: "🥩" },
  { id: "hotpot", title: "Lẩu Thái 🍲", icon: "🍲" },
  { id: "pasta", title: "Mì Ý 🍝", icon: "🍝" },
  { id: "oc", title: "Ăn Ốc 🐚", icon: "🐚" },
  { id: "chicken", title: "Gà Rán 🍗", icon: "🍗" },
  { id: "bundau", title: "Bún Đậu 🥢", icon: "🥢" },
  { id: "pizza", title: "Pizza 🍕", icon: "🍕" },
];

export default function StepFood() {
  const { food, setFood, nextStep } = useDateStore();
  const [escapes, setEscapes] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="font-pacifico text-3xl text-pink-500 mb-6 text-center leading-tight">
        Hôm nay muốn ăn gì nè?
      </h2>
      <div className="w-full grid grid-cols-2 gap-3 mb-8">
        {OPTIONS.map((opt) => (
          <OptionCard
            key={opt.id}
            title={opt.title}
            icon={opt.icon}
            isSelected={food === opt.id}
            onClick={() => setFood(opt.id)}
          />
        ))}
      </div>
      
      <div className="flex gap-4 w-full justify-between items-center relative h-20">
        <div className="absolute left-0">
          <RunawayButton 
            onGiveUp={() => setFood("Anything!")} 
            onEscape={(c) => setEscapes(c)} 
          />
        </div>
        <div className="absolute right-0 flex items-center justify-center origin-right">
          <motion.button
            animate={{ scale: 1 + escapes * 0.15 }}
            whileHover={{ scale: 1.05 + escapes * 0.15 }}
            whileTap={{ scale: 0.95 + escapes * 0.15 }}
            onClick={() => {
              if (!food) setFood("Anh lo hết 😎");
              nextStep();
            }}
            className="px-8 py-3 rounded-full font-nunito font-bold text-white shadow-md transition-colors bg-pink-500 hover:bg-pink-600 cursor-pointer"
          >
            Tiếp theo 👉
          </motion.button>
        </div>
      </div>
    </div>
  );
}
