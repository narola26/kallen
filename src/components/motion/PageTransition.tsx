"use client";

import { motion } from "framer-motion";

const ENTRANCE = [0.25, 1, 0.5, 1] as const;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: ENTRANCE }}
    >
      {children}
    </motion.div>
  );
}
