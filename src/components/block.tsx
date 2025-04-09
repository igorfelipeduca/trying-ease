"use client";

import { AnimationControls, motion } from "framer-motion";

type BlockProps = {
  animation: AnimationControls;
};

export default function Block({ animation }: BlockProps) {
  return (
    <motion.div
      animate={animation}
      className="w-[3rem] h-[3rem] sm:w-[10rem] sm:h-[10rem] bg-zinc-200 rounded-md sm:rounded-[2rem] drop-shadow-white/30"
    />
  );
}
