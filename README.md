# Ease Types Showcase

This project demonstrates various animation easing functions using Framer Motion in a Next.js application. It provides interactive playgrounds to visualize the effect of different eases.

## Components

This section describes all components located in `src/components/`.

### `Playground.tsx`

The `Playground` component sets up the animation controls and manages the state for a single animation demonstration block. It uses `Block` to display the animation and `AnimationButtons` for control.

```tsx
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
          ease: ease, // The easing function is passed here
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
    // Reset state for buttons
    setIsAnimationOver(false);
  };

  return (
    <div className="flex flex-col w-full gap-y-8">
      <div className="h-[20rem] flex items-center p-4">
        {/* The Block component receives the animation controls */}
        <Block animation={blockControl} />
      </div>

      <div className="w-full flex justify-center">
        {/* AnimationButtons trigger play/reset */}
        <AnimationButtons
          isAnimationOver={isAnimationOver}
          onPlayAnimation={onPlayAnimation}
          onResetAnimation={onResetAnimation}
        />
      </div>
    </div>
  );
}
```

### `Block.tsx`

The `Block` component is the visual element that gets animated. It simply receives animation controls via props from its parent (`Playground`).

```tsx
import { AnimationControls, motion } from "framer-motion";

type BlockProps = {
  animation: AnimationControls;
};

export default function Block({ animation }: BlockProps) {
  return (
    <motion.div
      animate={animation} // Applies the animations controlled by the parent
      className="w-[3rem] h-[3rem] sm:w-[10rem] sm:h-[10rem] bg-zinc-200 rounded-md sm:rounded-[2rem]"
    />
  );
}
```

### `AnimationButtons.tsx`

Provides UI controls (`Play`, `Reset`) for the animations within a `Playground`. It handles its own internal animation for positioning the buttons based on the animation state.

### `LinkText.tsx`

An animated link component. It displays text with an external link icon and features an underline animation on hover.

### `Section.tsx`

A structural component used to wrap and organize content on the page. It displays a title, related CSS terms (passed as props), and an optional header image. It renders any children passed to it.

### `Notes.tsx`

Displays a list of notes provided via props. Each note is rendered as a list item with a small preceding horizontal line.

### `EndingSection.tsx`

A simple component displaying concluding text for the page, including an external link using the `LinkText` component.

### `play-animation-button.tsx`

This file is currently empty.

## Running Locally

1.  Clone the repository.
2.  Install dependencies: `yarn install`
3.  Run the development server: `yarn dev`
