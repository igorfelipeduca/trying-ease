"use client";

import { motion } from "framer-motion";

type BadgeProps = {
  children: React.ReactNode;
  href: string;
};

export default function Badge({ children, href }: BadgeProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      className="py-2 px-4 rounded-full bg-zinc-900 border border-zinc-800 transition-colors duration-300 ease-out hover:bg-zinc-800 cursor-pointer"
      whileTap={{
        scale: 1.1,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </motion.a>
  );
}
