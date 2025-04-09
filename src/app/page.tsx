import EndingSection from "@/components/ending-section";
import Notes from "@/components/notes";
import Playground from "@/components/playground";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="px-2 sm:px-64">
      <div className="border-x border-zinc-900 h-full w-full py-16 flex flex-col gap-y-16">
        <div className="h-[15rem] flex items-center justify-center">
          <div className="flex flex-col gap-y-8">
            <div className="w-full flex justify-center">
              <h1 className="text-4xl font-bold tracking-[-5%] text-zinc-200">
                Trying out eases
              </h1>
            </div>

            <div className="w-full flex justify-center">
              <h2 className="text-xl px-4 sm:px-0 sm:max-w-[40rem] text-center font-medium text-zinc-500 tracking-[-5%]">
                Experimenting with different types of eases. Using default ones
                and custom ones from{" "}
                <span className="text-zinc-400">
                  &quot;The Ease Blueprint&quot;
                </span>
                .
              </h2>
            </div>
          </div>
        </div>

        <Section title="Ease Initial" cssTerms={["ease"]}>
          <Notes
            notes={[
              {
                text: "Should only be used for linear animations",
              },
              {
                text: "The default ease for CSS animations",
              },
              {
                text: "Tipically used for linear animations, such as loader spins or brand logos",
              },
            ]}
          />

          {/* The ease property is not necessary since "ease" is the default option for CSS animations */}
          <Playground />
        </Section>

        <Section title="Ease In" cssTerms={["ease-in", "easeIn"]}>
          <Notes
            notes={[
              {
                text: "Should be avoided. It usually makes the website feel slower because of the delay to complete the initial interaction.",
              },
              {
                text: "There are no optimal use cases for this ease. There are plenty better options to use.",
              },
              {
                text: "Creates an unnatural feeling of acceleration that can make interfaces feel sluggish and unresponsive.",
              },
              {
                text: "The slow start makes it difficult for users to predict when the animation will complete.",
              },
              {
                text: "Can cause motion sickness in some users due to the sudden acceleration at the end.",
              },
            ]}
          />

          <Playground ease="easeIn" />
        </Section>

        <Section title="Ease Out" cssTerms={["ease-out", "easeOut"]}>
          <Notes
            notes={[
              {
                text: "Perfect for elements entering the screen or expanding, since it starts fast and slows down smoothly at the end.",
              },
              {
                text: "Commonly used for dropdown menus, tooltips, and other UI elements that need to feel responsive.",
              },
              {
                text: "Creates a natural feeling of deceleration that matches user expectations for most interactions.",
              },
            ]}
          />

          <Playground ease="easeOut" />
        </Section>

        <Section title="Ease In Out" cssTerms={["ease-in-out", "easeInOut"]}>
          <Notes
            notes={[
              {
                text: "Nice to use when moving components around the page or morphing them into new elements.",
              },
              {
                text: "Great for transitions between states where both the beginning and end should feel smooth.",
              },
              {
                text: "Useful for animations that need to draw attention but shouldn't feel too aggressive.",
              },
              {
                text: "Common in carousels and slideshows where content smoothly transitions between positions.",
              },
              {
                text: "Provides a balanced, natural feel for longer animations where user attention spans the full duration.",
              },
            ]}
          />

          <Playground ease="easeInOut" />
        </Section>

        <Section
          title="Thank you for reading!"
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
