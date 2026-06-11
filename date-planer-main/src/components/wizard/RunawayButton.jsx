import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const getRandomPosition = () => ({
  x: (Math.random() - 0.5) * (window.innerWidth * 0.6),
  y: (Math.random() - 0.5) * (window.innerHeight * 0.4),
});

export default function RunawayButton({ onEscape }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [escapes, setEscapes] = useState(0);

  const runAway = useCallback(() => {
    setPosition(getRandomPosition());
    const newEscapes = escapes + 1;
    setEscapes(newEscapes);
    onEscape?.(newEscapes);
  }, [escapes, onEscape]);

  let text = "🤷 Không biết~";
  if (escapes > 1) text = "😝 Tùy anh!";
  if (escapes > 3) text = "Thôi mà 🥺";
  if (escapes > 5) text = "Cứu!!! 🏃";
  if (escapes > 10) text = "Mỏi chân quá 😭";

  // Giảm kích thước tối đa 3 lần (0.7), sau đó giữ nguyên
  const currentScale = Math.max(0.7, 1 - escapes * 0.1);

  return (
    <motion.button
      animate={{ ...position, scale: currentScale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={runAway}
      onTap={runAway}
      className="
        px-6 py-3 rounded-full
        bg-white border-2 border-pink-300
        text-pink-400 font-nunito font-semibold text-sm
        shadow-md cursor-pointer select-none
        hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200 z-50
      "
    >
      {text}
    </motion.button>
  );
}
