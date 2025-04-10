export type Locale = "en" | "pt-BR";

export type TranslationKey =
  | "title"
  | "subtitle"
  | "openSource"
  | "easeInitialTitle"
  | "easeInitialNote1"
  | "easeInitialNote2"
  | "easeInitialNote3"
  | "easeInTitle"
  | "easeInNote1"
  | "easeInNote2"
  | "easeInNote3"
  | "easeInNote4"
  | "easeInNote5"
  | "easeOutTitle"
  | "easeOutNote1"
  | "easeOutNote2"
  | "easeOutNote3"
  | "easeInOutTitle"
  | "easeInOutNote1"
  | "easeInOutNote2"
  | "easeInOutNote3"
  | "easeInOutNote4"
  | "easeInOutNote5"
  | "thankYouTitle"
  | "changeLanguage"
  | "playAnimation"
  | "resetAnimation"
  | "pauseAnimation"
  | "endingText"
  | "notes"
  | "springAnimationTitle"
  | "sprintAnimationNote1";

type TranslationObject = Record<Locale, Record<TranslationKey, string>>;

export const translations: TranslationObject = {
  en: {
    title: "Trying out eases",
    subtitle:
      "Experimenting with different types of eases. Implementing default easing presets from CSS and custom presets from",
    openSource: "This project is Open Source!",
    easeInitialTitle: "Ease Initial",
    easeInitialNote1: "Should only be used for linear animations",
    easeInitialNote2: "The default ease for CSS animations",
    easeInitialNote3:
      "Tipically used for linear animations, such as loader spins or brand logos",
    easeInTitle: "Ease In",
    easeInNote1:
      "Should be avoided. It usually makes the website feel slower because of the delay to complete the initial interaction.",
    easeInNote2:
      "There are no optimal use cases for this ease. There are plenty better options to use.",
    easeInNote3:
      "Creates an unnatural feeling of acceleration that can make interfaces feel sluggish and unresponsive.",
    easeInNote4:
      "The slow start makes it difficult for users to predict when the animation will complete.",
    easeInNote5:
      "Can cause motion sickness in some users due to the sudden acceleration at the end.",
    easeOutTitle: "Ease Out",
    easeOutNote1:
      "Perfect for elements entering the screen or expanding, since it starts fast and slows down smoothly at the end.",
    easeOutNote2:
      "Commonly used for dropdown menus, tooltips, and other UI elements that need to feel responsive.",
    easeOutNote3:
      "Creates a natural feeling of deceleration that matches user expectations for most interactions.",
    easeInOutTitle: "Ease In Out",
    easeInOutNote1:
      "Nice to use when moving components around the page or morphing them into new elements.",
    easeInOutNote2:
      "Great for transitions between states where both the beginning and end should feel smooth.",
    easeInOutNote3:
      "Useful for animations that need to draw attention but shouldn't feel too aggressive.",
    easeInOutNote4:
      "Common in carousels and slideshows where content smoothly transitions between positions.",
    easeInOutNote5:
      "Provides a balanced, natural feel for longer animations where user attention spans the full duration.",
    thankYouTitle: "Thank you for reading!",
    changeLanguage: "Change language",
    playAnimation: "Play animation",
    resetAnimation: "Reset animation",
    pauseAnimation: "Pause animation",
    endingText:
      "This project was created for study purposes. All animations displayed on the website were crafted using framer-motion. If liked this study case and want to keep a close look on other studies of mine, come meet me on",
    notes: "Notes",
    springAnimationTitle: "Spring Animations",
    sprintAnimationNote1: "Currently it is impossible to build a spring animation using only CSS. Spring animations are different from ease animations in many ways. While ease animations depend on a curve and a duration to exist, spring animations resemble a physical object attached to a spring, so in order to exist, they depend on damping, stiffness and mass, which are the physical properties of the spring movement."
  },
  "pt-BR": {
    title: "Experimentando eases",
    subtitle:
      "Experimentando com diferentes tipos de ease. Implementando presets padrões de easing do CSS e outros customizados do",
    openSource: "Este projeto é Open Source!",
    easeInitialTitle: "Ease Inicial",
    easeInitialNote1: "Deve ser usado apenas para animações lineares",
    easeInitialNote2: "O ease padrão para animações CSS",
    easeInitialNote3:
      "Tipicamente usado para animações lineares, como giros de carregamento ou logotipos de marca",
    easeInTitle: "Ease In",
    easeInNote1:
      "Deve ser evitado. Geralmente faz o site parecer mais lento devido ao atraso para completar a interação inicial.",
    easeInNote2:
      "Não há casos de uso ideais para este ease. Existem muitas opções melhores para usar.",
    easeInNote3:
      "Cria uma sensação não natural de aceleração que pode fazer interfaces parecerem lentas e não responsivas.",
    easeInNote4:
      "O início lento dificulta a previsão pelos usuários de quando a animação será concluída.",
    easeInNote5:
      "Pode causar enjoo em alguns usuários devido à aceleração repentina no final.",
    easeOutTitle: "Ease Out",
    easeOutNote1:
      "Perfeito para elementos entrando na tela ou expandindo, já que começa rápido e desacelera suavemente no final.",
    easeOutNote2:
      "Comumente usado para menus dropdown, tooltips e outros elementos de UI que precisam parecer responsivos.",
    easeOutNote3:
      "Cria uma sensação natural de desaceleração que corresponde às expectativas do usuário para a maioria das interações.",
    easeInOutTitle: "Ease In Out",
    easeInOutNote1:
      "Bom para usar ao mover componentes pela página ou transformá-los em novos elementos.",
    easeInOutNote2:
      "Ótimo para transições entre estados onde tanto o início quanto o fim devem parecer suaves.",
    easeInOutNote3:
      "Útil para animações que precisam chamar atenção, mas não devem parecer muito agressivas.",
    easeInOutNote4:
      "Comum em carrosséis e slideshows onde o conteúdo faz transição suavemente entre posições.",
    easeInOutNote5:
      "Fornece uma sensação natural e equilibrada para animações mais longas onde a atenção do usuário abrange toda a duração.",
    thankYouTitle: "Obrigado pela leitura!",
    changeLanguage: "Mudar idioma",
    playAnimation: "Iniciar animação",
    resetAnimation: "Reiniciar animação",
    pauseAnimation: "Pausar animação",
    endingText:
      "Este projeto foi criado para fins de estudo. Todas as animações exibidas no site foram criadas usando framer-motion. Se gostou deste estudo de caso e quer acompanhar outros estudos meus, venha me encontrar no",
    notes: "Anotações",
    springAnimationTitle: "Animações Spring",
    sprintAnimationNote1: "Atualmente é impossível criar uma animação spring usando apenas CSS. Animações spring são diferentes das animações ease em vários aspectos. Enquanto animações ease dependem de uma curva e uma duração para existir, animações spring se assemelham a um objeto físico preso a uma mola, então para existir, elas dependem de amortecimento, rigidez e massa, que são as propriedades físicas do movimento da mola."
  },
};
