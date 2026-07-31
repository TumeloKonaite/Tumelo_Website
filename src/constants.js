import mlAgenticAiPdf from "./Assets/Publications/ML_Agentic_AI.pdf";
import americanOptionsPdf from "./Assets/Publications/Pricing_American_Options_Using_FDM_and_ML.pdf";
import mscDissertationPdf from "./Assets/Publications/TT_Konaite_MSc.pdf";

export const SOCIAL_LINKS = {
  github: "https://github.com/TumeloKonaite",
  linkedin: "https://www.linkedin.com/in/tumelo-tshana-konaite-049054152/",
  portfolio: "https://frontend-kappa-sandy-5ojkp7a7w8.vercel.app/",
  email: "tumelokonaite@gmail.com",
  phone: ""
};

export const TALKS_DATA = [];

export const WRITINGS_DATA = [
  {
    id: "ml-agentic-ai",
    title: "Machine Learning and Agentic AI",
    date: "2026",
    description:
      "A technical publication exploring machine learning and agentic AI systems, their capabilities, and practical applications.",
    link: mlAgenticAiPdf,
    linkLabel: "Read Publication"
  },
  {
    id: "american-options-fdm-ml",
    title: "Pricing American Options Using FDM and ML",
    date: "2026",
    description:
      "A study of American option pricing using finite difference methods and machine learning techniques.",
    link: americanOptionsPdf,
    linkLabel: "Read Publication"
  },
  {
    id: "msc-dissertation",
    title: "MSc Dissertation",
    date: "2025",
    description:
      "Tumelo Tshana Konaite's master's dissertation, presented as a complete PDF publication.",
    link: mscDissertationPdf,
    linkLabel: "Read Dissertation"
  }
];
