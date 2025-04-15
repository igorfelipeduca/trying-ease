"use client";

import Image from "next/image";
import { motion, useAnimationControls, useSpring } from "framer-motion";
import { springPreset } from "@/utils/spring-preset";
import { useState } from "react";
import { PauseIcon } from "lucide-react";

type App = {
  name: string;
  icon: string;
  description: string;
};

export default function EssentialApps() {
  const apps: App[] = [
    {
      name: "Spotify",
      icon: "/apps/spotify.jpg",
      description: "Music streaming platform",
    },
    {
      name: "Notion",
      icon: "/apps/notion.png",
      description: "All-in-one workspace",
    },
    {
      name: "Figma",
      icon: "/apps/figma.png",
      description: "Collaborative design tool",
    },
    {
      name: "VSCode",
      icon: "/apps/vscode.jpeg",
      description: "Code editor",
    },
    {
      name: "Discord",
      icon: "/apps/discord.png",
      description: "Chat & communities",
    },
    {
      name: "Chrome",
      icon: "/apps/chrome.png",
      description: "Web browser",
    },
  ];

  return (
    <div className="flex flex-col gap-y-8 w-full p-6">
      <h3 className="text-zinc-200 font-semibold text-[2rem] tracking-[-0.03em]">
        Essential Apps
      </h3>

      <div className="flex flex-col sm:grid sm:grid-cols-2 w-full justify-between gap-6">
        {apps.map((app, index) => (
          <AppElement key={index} index={index} app={app} />
        ))}
      </div>
    </div>
  );
}

const AppElement = ({ app, index }: { app: App; index: number }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const buttonWidthSpring = useSpring("5rem", springPreset);
  const buttonAnimationControls = useAnimationControls();
  const pauseIconControls = useAnimationControls();
  const loadButtonControls = useAnimationControls();

  const transitionPreset = {
    ease: "easeOut",
    duration: 0.3,
  };

  const onButtonClick = () => {
    setIsClicked(true);
    setIsSpinning(true);
    buttonWidthSpring.set("1.8px");

    buttonAnimationControls.start({
      background: "transparent",
      padding: "0px",
      transition: transitionPreset,
    });

    setTimeout(() => {
      setIsSpinning(false);

      setIsFilling(true);

      setTimeout(() => {
        setIsFilling(false);

        pauseIconControls.start({
          opacity: 0,
          scale: 0.8,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        });

        buttonAnimationControls
          .start({
            background: "rgb(37 99 235)",
            transition: { ...springPreset, duration: 0.5 },
          })
          .then(() => {
            setTimeout(() => {
              buttonAnimationControls.start({
                opacity: 0,
                transition: springPreset,
              });
            }, 2000);
          });
      }, 3000);
    }, 4000);
  };

  return (
    <div
      className={`flex flex-col pb-4 ${
        index + 1 === 5 || index + 1 === 6 ? "" : "border-b border-zinc-800"
      }`}
    >
      <div className={`flex items-center gap-x-4 justify-between pb-4 `}>
        <div className="flex items-center gap-x-4">
          <Image
            src={app.icon}
            height={500}
            width={500}
            className="size-16 rounded-xl object-cover bg-white border border-zinc-800"
            alt={app.name}
          />

          <div className="flex flex-col gap-y-2">
            <h4 className="text-zinc-300 font-medium text-lg">{app.name}</h4>
            <span className="text-zinc-500 text-md hidden sm:block">
              {app.description}
            </span>
          </div>
        </div>

        <motion.button
          type="button"
          className="rounded-full bg-white flex justify-center text-sm text-blue-500"
          style={{
            width: buttonWidthSpring,
            padding: "0.25rem 2rem",
          }}
          onClick={onButtonClick}
          animate={buttonAnimationControls}
        >
          {isClicked ? (
            <div className="size-7 rounded-full flex justify-center items-center relative">
              {isSpinning ? (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid rgb(228 228 231)",
                    borderBottomColor: "transparent",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ) : (
                <>
                  <motion.svg
                    className="absolute inset-0 size-7 -rotate-90"
                    animate={loadButtonControls}
                    initial={{
                      opacity: 1,
                    }}
                  >
                    <circle
                      cx="14"
                      cy="14"
                      r="13"
                      strokeWidth="2"
                      className="fill-none stroke-zinc-600"
                    />
                    <motion.circle
                      cx="14"
                      cy="14"
                      r="13"
                      strokeWidth="2"
                      className="fill-none stroke-blue-600"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isFilling ? [0, 1] : 1 }}
                      transition={{
                        duration: 3,
                        ease: "linear",
                      }}
                    />
                  </motion.svg>
                  <motion.div
                    animate={pauseIconControls}
                    initial={{ opacity: 1, scale: 1 }}
                  >
                    <PauseIcon className="size-3 text-blue-600 fill-blue-600 z-10" />
                  </motion.div>
                </>
              )}
            </div>
          ) : (
            "Get"
          )}
        </motion.button>
      </div>

      <span className="text-zinc-500 text-md block sm:hidden">
        {app.description}
      </span>
    </div>
  );
};
