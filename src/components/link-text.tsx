"use client";
import { motion, useAnimationControls } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";

type LinkTextProps = {
  text: string;
  href: string;
};

export default function LinkText({ text, href }: LinkTextProps) {
  const underlineControler = useAnimationControls();

  const onHoverStart = () => {
    underlineControler.start({
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    });
  };

  const onHoverEnd = () => {
    underlineControler.start({
      width: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="inline-flex flex-col"
    >
      <span className="flex items-center">
        <span className="text-zinc-300">{text} </span>
        <ArrowUpRightIcon className="text-zinc-300" />
      </span>
      <motion.span animate={underlineControler} className="h-px w-0 bg-white" />
    </motion.a>
  );
}
