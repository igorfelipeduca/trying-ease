"use client";
import { motion, useAnimationControls } from "framer-motion";

export default function EndingSection() {
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
    <div className="flex items-center">
      <p className="text-zinc-400 text-xl font-medium">
        This project was created for study purposes. All animations displayed on
        the website were crafted using framer-motion. If liked this study case
        and want to keep a close look on other studies of mine, come meet me on{" "}
        <motion.a
          href="https://www.linkedin.com/in/igorfelipeduca/"
          target="_blank"
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          className="inline-flex flex-col"
        >
          <span className="text-zinc-300">LinkedIn</span>
          <motion.span
            animate={underlineControler}
            className="h-px w-0 bg-white"
          />
        </motion.a>
        .
      </p>
    </div>
  );
}
