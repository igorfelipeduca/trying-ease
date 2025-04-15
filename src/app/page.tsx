"use client";

import { AnimationChart } from "@/components/animation-chart";
import ArtComponent from "@/components/art-component";
import CommitHistory from "@/components/commit-history";
import EndingSection from "@/components/ending-section";
import EssentialApps from "@/components/essential-apps";
import LanguageSwitcher from "@/components/language-switcher";
import LinkText from "@/components/link-text";
import MapLocationComponent from "@/components/map-location-component";
import Notes from "@/components/notes";
import Playground from "@/components/playground";
import Section from "@/components/section";
import { useLanguage } from "@/utils/i18n/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="px-2 sm:px-64 dark">
      <div className="border-x border-zinc-900 h-full w-full pt-16 flex flex-col gap-y-16">
        <div className="h-[15rem] flex items-center justify-center mb-48">
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

            <div className="w-full flex justify-center">
              <CommitHistory />
            </div>
          </div>
        </div>

        <Section title={t("easeInitialTitle")} cssTerms={["ease"]}>
          <Notes
            title={t("notes")}
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

          {/* Linear easing: f(x) = x */}
          {/* Returns the same value that was passed in, creating a linear progression */}
          <Playground />

          <AnimationChart
            title="Ease Initial"
            description="Linear progression over time (no easing)"
            easingFn={(x) => x}
          />
        </Section>

        <Section title={t("easeInTitle")} cssTerms={["ease-in", "easeIn"]}>
          <Notes
            title={t("notes")}
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

          {/* Ease In: f(x) = x^2 */}
          {/* Squares the input, creating a slow start that accelerates */}
          <Playground ease="easeIn" />

          <AnimationChart
            title="Ease In"
            description="Starts slow, ends fast"
            easingFn={(x) => x * x}
          />
        </Section>

        <Section title={t("easeOutTitle")} cssTerms={["ease-out", "easeOut"]}>
          <Notes
            title={t("notes")}
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

          {/* Ease Out: f(x) = 1 - (1-x)^2 */}
          {/* Inverts ease-in, creating a fast start that decelerates */}
          <Playground ease="easeOut" />

          <AnimationChart
            title="Ease Out"
            description="Starts fast, ends slow"
            easingFn={(x) => 1 - Math.pow(1 - x, 2)}
          />
        </Section>

        <Section
          title={t("easeInOutTitle")}
          cssTerms={["ease-in-out", "easeInOut"]}
        >
          <Notes
            title={t("notes")}
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

          {/* Ease In Out: Combines ease-in for first half and ease-out for second half */}
          {/* For x < 0.5: f(x) = 2x^2 */}
          {/* For x >= 0.5: f(x) = 1 - (-2x + 2)^2 / 2 */}
          <Playground ease="easeInOut" />

          <AnimationChart
            title="Ease In Out"
            description="Starts slow, speeds up in the middle, ends slow"
            easingFn={(x) =>
              x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2
            }
          />
        </Section>

        <Section
          title={t("springAnimationTitle")}
          cssTerms={["spring animations"]}
        >
          <Notes
            title={t("notes")}
            notes={[
              {
                text: t("sprintAnimationNote1"),
              },
            ]}
          />

          <div className="w-full flex justify-center pt-16 pb-6">
            <MapLocationComponent />
          </div>

          <AnimationChart
            title="Spring"
            description="Oscillates with damping and stiffness"
            easingFn={(x) => {
              const damping = 30;
              const stiffness = 300;

              // Spring physics simulation
              let velocity = 0;
              let position = 0;
              const dt = 1 / 60; // 60fps simulation

              for (let t = 0; t < x; t += dt) {
                const force = -stiffness * (position - 1) - damping * velocity;
                velocity += force * dt;
                position += velocity * dt;
              }

              return position;
            }}
          />
        </Section>

        <Section
          title={"Mouse-Aware Animations"}
          cssTerms={["thank you", "obrigado", "gracias", "merci"]}
          desktopOnly
        >
          <div className="py-8 flex w-full sm:mx-auto justify-center">
            <ArtComponent />
          </div>
        </Section>

        <Section
          title={"Exploring clip paths"}
          cssTerms={[t("copyingAppStore")]}
        >
          <div className="w-full h-full max-h-[40rem] relative">
            <EssentialApps />
          </div>
        </Section>

        <Section
          title={t("thankYouTitle")}
          cssTerms={["thank you", "obrigado", "gracias", "merci"]}
          headerImage="https://www.duca.dev/pfp.jpg"
          headerImageAlt="Igor Duca"
          className="mt-48 sm:mt-0"
        >
          <EndingSection />
        </Section>
      </div>
    </div>
  );
}
