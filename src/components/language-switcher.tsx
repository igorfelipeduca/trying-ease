"use client";

import { useLanguage } from "@/utils/i18n/language-context";
import { isMobile } from "@/utils/is-mobile";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const notchAnimationController = useAnimationControls();
  const portugueseLanguageController = useAnimationControls();
  const englishLanguageController = useAnimationControls();

  useEffect(() => {
    onMoveNotch(locale);
  }, []);

  const languages = [
    {
      lang: "English",
      code: "en",
    },
    {
      lang: "Português",
      code: "pt-BR",
    },
  ];

  const toggleLanguage = () => {
    if (locale === "pt-BR") {
      setLocale("en");
      onMoveNotch("en");
    } else {
      setLocale("pt-BR");
      onMoveNotch("pt-BR");
    }
  };

  const onMoveNotch = (lang: "en" | "pt-BR") => {
    if (lang === "pt-BR") {
      // Moving the notch to the right of the div
      notchAnimationController.start({
        translateX: "4.5rem",
        width: "5rem",
        transition: {
          ease: "easeOut",
          duration: 0.1,
        },
      });

      // Desktop-only animation
      if (!isMobile()) {
        // Pushing "Português" to the right to center in the notch
        portugueseLanguageController.start({
          transition: {
            ease: "easeInOut",
            duration: 0.1,
          },
        });
      }
    } else {
      // Moving back the notch to the left of the div
      notchAnimationController.start({
        translateX: "0rem",
        width: "4rem",
        transition: {
          ease: "easeInOut",
          duration: 0.2,
        },
      });

      // Desktop-only animation
      if (!isMobile()) {
        // Moving "Português" back to its original position
        portugueseLanguageController.start({
          translateX: "0rem",
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
        });
      }
    }
  };

  return (
    <div className="flex items-center h-[2rem] rounded-full relative bg-zinc-900 border border-zinc-800 w-[10rem] p-1">
      {languages.map((language) => (
        <motion.button
          onClick={toggleLanguage}
          className={`py-1 px-3 rounded-full flex items-center gap-x-2 transition-colors duration-300 h-fit cursor-pointer absolute z-10 ${
            languages.indexOf(language) == 0
              ? "left-0 pl-3.5"
              : "right-0 pr-3.5"
          }`}
          key={`${language.code}-language-button`}
          whileTap={{
            scale: 0.95,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <motion.span
            className="font-semibold tracking-[-3%] text-xs"
            animate={
              language.code === "pt-BR"
                ? portugueseLanguageController
                : englishLanguageController
            }
          >
            {language.lang}
          </motion.span>
        </motion.button>
      ))}

      <motion.div
        animate={notchAnimationController}
        initial={{
          left: "0.2rem",
        }}
        className="h-[1.6rem] w-[4rem] rounded-full bg-zinc-800 absolute"
      />
    </div>
  );
}
