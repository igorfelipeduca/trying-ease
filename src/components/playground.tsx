"use client";

import { useAnimationControls } from "framer-motion";
import { useState } from "react";
import Block from "./block";
import AnimationButtons from "./animation-buttons";
import { isMobile } from "@/utils/is-mobile";

type PlaygroundProps = {
  ease?: string;
};

export default function Playground({ ease }: PlaygroundProps) {
  const blockControl = useAnimationControls();
  const [isAnimationOver, setIsAnimationOver] = useState(false);

  const onPlayAnimation = () => {
    blockControl
      .start({
        translateX: isMobile() ? 200 :700,
        rotate: 360,
        transition: {
          duration: 3,
          ease: ease,
        },
      })
      .then(() => {
        setIsAnimationOver(true);
      });
  };

  const onResetAnimation = () => {
    blockControl.start({
      translateX: 0,
      rotate: 0,
      transition: {
        duration: 3,
        ease: ease,
      },
    });
  };

  return (
    <div className="flex flex-col w-full gap-y-8">
      <div className="h-[20rem] flex items-center p-4">
        <Block animation={blockControl} />
      </div>

      <div className="w-full flex justify-center">
        <AnimationButtons
          isAnimationOver={isAnimationOver}
          onPlayAnimation={onPlayAnimation}
          onResetAnimation={onResetAnimation}
        />
      </div>
    </div>
  );
}
