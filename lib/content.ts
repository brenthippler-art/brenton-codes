export interface Fact {
  num: string;
  label: string;
}

export interface Portrait {
  src: string;
  alt: string;
}

export const portrait: Portrait = {
  src: "/assets/brenton.jpg",
  alt: "Brenton J Hippler"
}

export interface Project {
  kind: string;
  title: string;
  description: string;
  stack: string;
  url: string; 
  image: string;
}

export interface BioFact {
  k: string;
  v: string;
}

export interface StackGroup {
  category: string;
  items: string[];
}

export const facts: Fact[] = [
  { num: "Next.js", label: "TypeScript & Firebase, daily" },
  { num: "WCAG", label: "accessibility-first" },
  { num: "KY & TN", label: "local freelance clients" },
  { num: "Available for", label: "Remote developer positions, freelance work" },
];

export const projects: Project[] = [
  {
    kind: "Live Proprietary Product",
    title: "The Dad Work",
    description:
      "A progressive web app for new and expecting fathers — built end to end, from data model to checkout.",
    stack: "React · Vite · Firebase · Stripe · FCM push notifications · Firestore token architecture",
    url: "https://thedadwork.com",
    image: "/assets/projects/dad-work.png",
  },
  {
    kind: "Paid Internship",
    title: "Skinstric AI",
    description: 
      "A pixel-accurate rebuild of the Skinstric AI skincare platform from a Figma design file and written technical spec — built across three phases: user intake, photo-based demographic analysis, and live selfie capture.",
    stack: "Next.js · TypeScript · Tailwind CSS · GSAP",
    url: "https://skinstric-sooty-nine.vercel.app/",
    image: "/assets/projects/skinstric.png",
  },
  {
    kind: "Personal Business Site",
    title: "Hear After Entertainment",
    description:
      "A full marketing site for Hear After Entertainment, an event services company. Built a component-driven landing page with an autoplaying full-screen intro video, animated waveform branding, a rotating image gallery, and a tiered pricing system. Integrated EmailJS for direct-to-inbox contact form submissions without a backend.",
    stack: "React · Vite · EmailJS · CSS Grid/Flexbox",
    url: "https://hearafterent.com",
    image: "/assets/projects/hear-after.png",
  },
  {
    kind: "Freelance",
    title: "Young Spirit Kennel",
    description:
      "Site build for a local Doberman and Rottweiler breeder — built to make finding and reserving a puppy simple.",
    stack: "React · React Router · Image carousel · Responsive design",
    url: "https://youngspiritkennel.com",
    image: "/assets/projects/young-spirit.png",
  },
  {
    kind: "Civic tool",
    title: "Voter District Lookup",
    description:
      "A tool that lets voters enter an address and find their local, state, and federal races.",
    stack: "React · Geolocation",
    url: "https://warrencountyvote.com",
    image: "/assets/projects/voter-lookup.png",
  },
  {
    kind: "Personal Web App",
    title: "Meal Recipe Planner",
    description:
      "API data fetch, auto-generated shopping lists, and macro sorting.",
    stack: "JavaScript · HTML5 · CSS3 · Spoonacular API",
    url: "https://brenthippler-art.github.io/Recipe-Search/",
    image: "/assets/projects/recipe-planner.png",
  },
  {
    kind: "Coding Challenge",
    title: "Netflix Clone",
    description:
      "Full-featured streaming UI pulling live data from the TMDB API. Search, genre filtering, trailer playback, and a personal watchlist.",
    stack: "React · Vite · Firebase · TMDB API",
    url: "https://brenthippler-art.github.io/Netflix-Clone/login",
    image: "/assets/projects/netflix-clone.png",
  },
  {
    kind: "Coding Challenge",
    title: "Library E-store",
    description:
      "A React-based e-commerce storefront for books, featuring a landing page, browsable/sortable catalog, individual book detail pages, and a fully functional shopping cart with quantity management and live tax/subtotal calculation.",
    stack: "React · React Router · React Helmet · Font Awesome Icons",
    url: "https://library-react-project-seven-ebon.vercel.app/",
    image: "/assets/projects/library.png",
  },
  {
    kind: "Coding Challenge",
    title: "Gemini Clone",
    description:
      "A fully functional AI chat interface powered by the Gemini API. Multi-conversation management, persistent chat history, image input, and markdown rendering — a ground-up rebuild of a production AI product that required wiring real streaming responses into a responsive React UI.",
    stack: "React · Vite · JS · Gemini API",
    url: "https://github.com/brenthippler-art/Gemini-Clone",
    image: "/assets/projects/gemini-clone.png",
  },
];

export const bioFacts: BioFact[] = [
  { k: "Based in", v: "Bowling Green, KY" },
  { k: "Focus", v: "Next.js, TypeScript, accessibility" },
  { k: "Also runs", v: "Hippler Family Farm" },
  { k: "Education", v: "BA, Campbellsville University" },
  { k: "Certification", v: "Frontend Simplified" },
  { k: "Also", v: "Proud father of four beautiful children" },
];

export const stack: StackGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend/Data",
    items: ["Firebase", "MongoDB", "REST APIs"],
  },
  {
    category: "State/Payments",
    items: ["Redux Toolkit", "Stripe"],
  },
  {
    category: "Deployment",
    items: ["Vercel", "Netlify", "Cloudflare"],
  },
  {
    category: "Tools & AI",
    items: ["Git", "GitHub", "GitHub Copilot", "Claude Code"],
  },
];