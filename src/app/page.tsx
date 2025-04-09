"use client";

import Badge from "@/components/badge";
import EndingSection from "@/components/ending-section";
import LanguageSwitcher from "@/components/language-switcher";
import LinkText from "@/components/link-text";
import Notes from "@/components/notes";
import Playground from "@/components/playground";
import Section from "@/components/section";
import { useLanguage } from "@/utils/i18n/language-context";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="px-2 sm:px-64">
      <div className="border-x border-zinc-900 h-full w-full py-16 flex flex-col gap-y-16">
        <div className="h-[15rem] flex items-center justify-center">
          <div className="flex flex-col gap-y-8">
            <div className="w-full flex flex-col justify-center items-center gap-6">
             <LanguageSwitcher />

              <h1 className="text-3xl sm:text-4xl font-bold tracking-[-5%] text-zinc-200">
                {t("title")}
              </h1>
            </div>

            <div className="w-full flex justify-center">
              <h2 className="text-xl px-4 sm:px-0 sm:max-w-[40rem] text-center font-medium text-zinc-500 tracking-[-5%]">
                {t("subtitle")}{" "}
                <LinkText
                  text={'"The Easing Blueprint"'}
                  href="https://www.reubence.com/articles/the-easing-blueprint"
                />
                .
              </h2>
            </div>

            <div className="w-full flex justify-center gap-4">
              <Badge href="https://github.com/igorfelipeduca/trying-ease">
                <div className="flex items-center gap-x-2">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="#d4d4d8"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>

                  <span className="font-semibold tracking-[-3%]">
                    {t("openSource")}
                  </span>
                </div>
              </Badge>
              
            </div>
          </div>
        </div>

        <Section title={t("easeInitialTitle")} cssTerms={["ease"]}>
          <Notes
            notes={[
              {
                text: t("easeInitialNote1"),
              },
              {
                text: t("easeInitialNote2"),
              },
              {
                text: t("easeInitialNote3"),
              },
            ]}
          />

          {/* The ease property is not necessary since "ease" is the default option for CSS animations */}
          <Playground />
        </Section>

        <Section title={t("easeInTitle")} cssTerms={["ease-in", "easeIn"]}>
          <Notes
            notes={[
              {
                text: t("easeInNote1"),
              },
              {
                text: t("easeInNote2"),
              },
              {
                text: t("easeInNote3"),
              },
              {
                text: t("easeInNote4"),
              },
              {
                text: t("easeInNote5"),
              },
            ]}
          />

          <Playground ease="easeIn" />
        </Section>

        <Section title={t("easeOutTitle")} cssTerms={["ease-out", "easeOut"]}>
          <Notes
            notes={[
              {
                text: t("easeOutNote1"),
              },
              {
                text: t("easeOutNote2"),
              },
              {
                text: t("easeOutNote3"),
              },
            ]}
          />

          <Playground ease="easeOut" />
        </Section>

        <Section title={t("easeInOutTitle")} cssTerms={["ease-in-out", "easeInOut"]}>
          <Notes
            notes={[
              {
                text: t("easeInOutNote1"),
              },
              {
                text: t("easeInOutNote2"),
              },
              {
                text: t("easeInOutNote3"),
              },
              {
                text: t("easeInOutNote4"),
              },
              {
                text: t("easeInOutNote5"),
              },
            ]}
          />

          <Playground ease="easeInOut" />
        </Section>

        <Section
          title={t("thankYouTitle")}
          cssTerms={["thank you", "obrigado", "gracias", "merci"]}
          headerImage="https://www.duca.dev/pfp.jpg"
          headerImageAlt="Igor Duca"
        >
          <EndingSection />
        </Section>
      </div>
    </div>
  );
}
