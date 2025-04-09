"use client";
import LinkText from "./link-text";

export default function EndingSection() {
  return (
    <div className="flex items-center">
      <p className="text-zinc-400 text-xl font-medium">
        This project was created for study purposes. All animations displayed on
        the website were crafted using framer-motion. If liked this study case
        and want to keep a close look on other studies of mine, come meet me on{" "}
        <LinkText
          href="https://www.linkedin.com/in/igorfelipeduca/"
          text="LinkedIn"
        />
        .
      </p>
    </div>
  );
}
