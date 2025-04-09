"use client";

import { useLanguage } from "@/utils/i18n/language-context";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "pt-BR" : "en");
  };

  return (
    <div className="flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800 w-fit">
      <motion.button
        onClick={() => setLocale("en")}
        className={`py-1 px-3 rounded-full flex items-center gap-x-2 transition-colors duration-300 h-fit ${
          locale === "en"
            ? "bg-zinc-800 text-zinc-200"
            : "bg-transparent text-zinc-400 hover:text-zinc-300"
        }`}
        whileTap={{
          scale: 0.95,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
      >
        <span className="font-semibold tracking-[-3%] text-xs">English</span>
      </motion.button>

      <motion.button
        onClick={() => setLocale("pt-BR")}
        className={`py-1 px-3 rounded-full flex items-center gap-x-2 transition-colors duration-300 ${
          locale === "pt-BR"
            ? "bg-zinc-800 text-zinc-200"
            : "bg-transparent text-zinc-400 hover:text-zinc-300"
        }`}
        whileTap={{
          scale: 0.95,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
      >
        <span className="font-semibold tracking-[-3%] text-xs">Português</span>
      </motion.button>
    </div>
  );
} 