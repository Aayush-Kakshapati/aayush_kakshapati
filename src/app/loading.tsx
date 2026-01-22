"use client";

import { motion } from "framer-motion";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        onAnimationComplete={onFinish}
        className="text-4xl md:text-6xl font-bold tracking-widest"
      >
        AAYUSH
      </motion.h1>
    </motion.div>
  );
}
