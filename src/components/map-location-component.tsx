"use client";

import { motion, Spring, useAnimationControls, useSpring } from "framer-motion";
import { Navigation, TrainIcon } from "lucide-react";
import { useState } from "react";

type Direction = {
  name: string;
  icon: React.ReactNode;
  time: number; // in seconds
};

const spring: Spring = {
  type: "spring",
  damping: 30,
  stiffness: 300,
  restDelta: 0.001,
};

const directions: Direction[] = [
  {
    name: "Walking",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="text-zinc-800 size-5"
      >
        <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906l.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154l-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613l-.435.489l-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
        <path d="M6.25 11.745v-1.418l1.204 1.375l.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215l-.494-.494l.205-1.843l.006-.067l1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
      </svg>
    ),
    time: 3840,
  },
  {
    name: "Visalia Station",
    icon: <TrainIcon className="size-5 text-zinc-800" />,
    time: 2880,
  },
  {
    name: "Fresno Station",
    icon: <TrainIcon className="size-5 text-zinc-800" />,
    time: 3600,
  },
];

export default function MapLocationComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const whiteBackgroundHeight = useSpring(298, spring);
  const textPositionController = useAnimationControls();
  const imageController = useAnimationControls();
  const gradientController = useAnimationControls();
  const navigationController = useAnimationControls();

  const handleClick = () => {
    whiteBackgroundHeight.set(isExpanded ? 298 : 490 + 20 * directions.length);

    textPositionController.start({
      translateY: isExpanded ? 0 : 105,
      filter: isExpanded ? "invert(0)" : "invert(1)",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    });

    imageController.start({
      translateY: isExpanded ? "-1%" : "0%",
      borderBottomLeftRadius: isExpanded ? 64 : 32,
      borderBottomRightRadius: isExpanded ? 64 : 32,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    });

    gradientController.start({
      borderBottomLeftRadius: isExpanded ? 64 : 32,
      borderBottomRightRadius: isExpanded ? 64 : 32,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    });

    navigationController.start({
      translateY: isExpanded ? 0 : 105,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    });

    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex w-full justify-center relative">
      <motion.div
        className="w-[19rem] sm:w-[30rem] flex items-start rounded-[4rem] absolute top-[5px]"
        onClick={handleClick}
      >
        <motion.div
          className="w-full h-[18rem] overflow-hidden"
          initial={{
            borderRadius: 64,
          }}
          animate={{
            borderBottomLeftRadius: isExpanded ? 32 : 64,
            borderBottomRightRadius: isExpanded ? 32 : 64,
            transition: {
              duration: 0.3,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <motion.img
            src={
              "https://images.unsplash.com/photo-1569345513487-4db184d98963?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Sequoia"
            className="h-[24rem] w-full object-cover shadow-xl shadow-black/20"
            height={1920}
            width={1080}
            initial={{
              y: 0,
            }}
            animate={{
              y: isExpanded ? -100 : 0,
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          />
        </motion.div>

        <motion.div
          className="absolute left-8 w-full flex flex-col gap-y-2 sm:flex-row items-center justify-between z-5 pr-16"
          initial={{
            bottom: 32,
          }}
        >
          <motion.div
            className="flex flex-col self-start sm:self-auto items-start"
            animate={textPositionController}
          >
            <h3 className="font-semibold text-white text-xl tracking-[-5%] capitalize">
              Sequoia Natural Park,
            </h3>
            <h3 className="text-zinc-300 text-xl tracking-[-5%]">California</h3>
          </motion.div>

          <motion.button
            className="bg-zinc-800/80 font-medium py-2 px-4 rounded-full justify-center text-white gap-x-2 cursor-pointer transition-colors duration-250 hover:bg-zinc-800/90 items-center text-lg outline-none hidden sm:flex"
            animate={navigationController}
            onClick={handleClick}
            whileTap={{
              scale: 1.1,
              transition: {
                ease: "easeOut",
                duration: 0.3,
              },
            }}
          >
            <Navigation className="text-white fill-white size-4" />
            Directions
          </motion.button>
        </motion.div>

        <motion.div className="absolute w-full flex justify-center bottom-0 left-[2px] pr-[5px]">
          <motion.div
            animate={gradientController}
            initial={{
              borderBottomRightRadius: 64,
              borderBottomLeftRadius: 64,
            }}
            className="w-full h-[15rem] bg-gradient-to-t from-[#0C0A04] via-[#0C0A04/70] to-[#0C0A04/10] max-h-[18rem]"
          />
        </motion.div>

        {isExpanded && (
          <motion.div className="absolute top-96 w-full pl-4">
            <div className="flex flex-col gap-y-6 w-full pl-4 pr-10">
              {directions.map((direction, index) => (
                <motion.div
                  className="flex items-center gap-x-2 justify-between"
                  key={index}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.1 + index * 0.2,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div className="flex items-center gap-x-2">
                    {direction.icon}

                    <span className="text-lg font-medium text-zinc-800">
                      {direction.name}
                    </span>
                  </div>

                  <span className="text-lg font-medium text-zinc-800">
                    {new Date(
                      Date.now() + direction.time * 1000
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="bg-white rounded-[4.2rem] w-[30.6rem]"
        style={{ height: whiteBackgroundHeight }}
      />
    </div>
  );
}
