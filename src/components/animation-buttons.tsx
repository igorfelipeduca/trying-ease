"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { PauseCircleIcon, PlayCircleIcon, RotateCcw } from "lucide-react";
import { isMobile } from "@/utils/is-mobile";

type AnimationButtonsProps = {
  isAnimationOver: boolean;
  onPlayAnimation: () => void;
  onResetAnimation: () => void;
  onPauseAnimation: () => void;
};

export default function AnimationButtons({
  isAnimationOver,
  onResetAnimation,
  onPlayAnimation,
  onPauseAnimation,
}: AnimationButtonsProps) {
  const playButtonAnimationControls = useAnimationControls();
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  useEffect(() => {
    if (isAnimationOver) {
      setIsAnimationPlaying(false);

      playButtonAnimationControls.start({
        translateX: isMobile() ? 0 : -110,
        translateY: isMobile() ? -30 : 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      });
    }
  }, [isAnimationOver]);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 relative">
      {isAnimationPlaying ? (
        <motion.button
          type="button"
          className="py-2 px-4 rounded-full border border-zinc-800 bg-zinc-900 text-white flex items-center justify-center cursor-pointer ease-initial transition-colors duration-300 hover:bg-zinc-800 font-medium text-md sm:text-lg gap-x-2 w-fit"
          onClick={() => {
            onPauseAnimation();
            setIsAnimationPlaying(false);
          }}
          whileTap={{
            scale: 1.1,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          animate={playButtonAnimationControls}
        >
          <PauseCircleIcon className="size-5" />
          Pause Animation
        </motion.button>
      ) : (
        <motion.button
          type="button"
          className="py-2 px-4 rounded-full border border-zinc-800 bg-zinc-900 text-white flex items-center justify-center cursor-pointer ease-initial transition-colors duration-300 hover:bg-zinc-800 font-medium text-md sm:text-lg gap-x-2 w-fit"
          onClick={() => {
            setIsAnimationPlaying(true);
            onPlayAnimation();
          }}
          whileTap={{
            scale: 1.1,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          animate={playButtonAnimationControls}
        >
          <PlayCircleIcon className="size-5" />
          Play Animation
        </motion.button>
      )}

      {isAnimationOver && (
        <motion.button
          type="button"
          className="py-2 px-4 rounded-full border border-zinc-800 bg-zinc-100 text-black flex items-center justify-center cursor-pointer ease-initial transition-colors duration-300 hover:bg-zinc-300 font-medium text-md sm:text-lg whitespace-nowrap gap-x-2 w-fit absolute sm:-right-[7rem]"
          initial={{
            opacity: 0,
          }}
          whileTap={{
            scale: 1.1,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
          animate={{
            opacity: 1,
            translateY: isMobile() ? 30 : 0,
            transition: {
              duration: 0.2,
              delay: 0.3,
              ease: "easeOut",
            },
          }}
          onClick={() => {
            setIsAnimationPlaying(true);
            onResetAnimation();
          }}
        >
          <RotateCcw className="size-5" />
          Reset Animation
        </motion.button>
      )}
    </div>
  );
}
