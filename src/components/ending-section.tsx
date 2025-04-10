"use client";
import { useLanguage } from "@/utils/i18n/language-context";
import LinkText from "./link-text";

export default function EndingSection() {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center">
      <p className="text-zinc-400 text-xl font-medium">
        {t("endingText")}{" "}
        <LinkText
          href="https://www.linkedin.com/in/igorfelipeduca/"
          text="LinkedIn"
        />
        .
      </p>
    </div>
  );
}
