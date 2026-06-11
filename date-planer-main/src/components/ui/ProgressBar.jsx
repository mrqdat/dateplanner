import { motion } from "framer-motion";

export default function ProgressBar({ total, current }) {
  return (
    <div className="w-full py-6 flex justify-center items-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="relative w-16 h-2 bg-pink-100 rounded-full overflow-hidden">
          {i <= current && (
            <motion.div
              layoutId={`progress-${i}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-pink-400"
            />
          )}
        </div>
      ))}
    </div>
  );
}
