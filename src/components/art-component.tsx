"use client";

import { isMobile } from "@/utils/is-mobile";
import { motion, Spring, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const artSpring: Spring = {
  type: "spring",
  damping: 30,
  stiffness: 150,
  restDelta: 0.001,
};

const defaultWidthSize = isMobile() ? "100%" : "80%";

export default function ArtComponent() {
  const [mousePosition, setMousePosition] = useState({});
  const imageRef = useRef<HTMLImageElement>(null);
  const imageSizeSpring = useSpring(defaultWidthSize, artSpring);

  function getRelativeCoordinates(
    event: MouseEvent,
    referenceElement: HTMLElement
  ) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    };

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    let reference = referenceElement.offsetParent as HTMLElement;

    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent as HTMLElement;
    }

    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
      width: offset.width,
      height: offset.height,
      centerX:
        (position.x - offset.left - offset.width / 2) / (offset.width / 2),
      centerY:
        (position.y - offset.top - offset.height / 2) / (offset.height / 2),
    };
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (imageRef.current) {
      const newPosition = getRelativeCoordinates(e, imageRef.current);
      setMousePosition(newPosition);
    }
  };

  const tiltTransform = `perspective(1000px) rotateY(${
    (mousePosition as { centerX: number }).centerX
      ? (mousePosition as { centerX: number }).centerX * 4
      : 0
  }deg) rotateX(${
    (mousePosition as { centerY: number }).centerY
      ? -(mousePosition as { centerY: number }).centerY * 4
      : 0
  }deg)`;

  return (
    <div
      className="relative w-full sm:w-[80%] h-full flex justify-center"
      onMouseMove={(e: React.MouseEvent) => handleMouseMove(e.nativeEvent)}
    >
      <motion.img
        src={"/art/christ-pixel.png"}
        alt="a pixel art rio de janeiro landscape, with the christ the redeemer on the bottom left of the image. it is a sunset and there are some araras flying around"
        height={1920}
        width={1080}
        className="h-auto rounded-[2rem] object-cover"
        style={{
          transform: tiltTransform,
          width: imageSizeSpring,
        }}
        ref={imageRef}
        onHoverStart={() => {
          imageSizeSpring.set("100%");
        }}
        onHoverEnd={() => {
          imageSizeSpring.set(defaultWidthSize);

          // resetting the 3D transform
          setMousePosition({ centerX: 0, centerY: 0 });
        }}
      />
    </div>
  );
}
