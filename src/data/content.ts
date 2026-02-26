export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  status: "live" | "in-development" | "case-study";
  link?: string;
  links?: ProjectLink[];
  tags: string[];
  themeColor?: "rubiks-red" | "rubiks-blue" | "rubiks-orange" | "rubiks-green" | "rubiks-yellow" | "rubiks-white";
}

export interface ContactLink {
  label: string;
  url: string;
  icon: "email" | "github" | "twitch";
}

export interface SiteContent {
  name: string;
  shortName: string;
  tagline: string;
  about: string;
  projects: Project[];
  now: string;
  contact: ContactLink[];
}

const content: SiteContent = {
  name: "Wilfredo Leon",
  shortName: "Will",
  tagline: "Technician, developer, and the kind of person who speedsolves cubes for fun.",
  about:
    "Fire alarm technician and self-taught developer. I started building websites because I wanted to, and I kept going because I couldn't stop. FACP Manuals is my main thing, a reference platform for fire alarm pros with a searchable manual library and an AI troubleshooter I'm pretty proud of. I co-founded Project Trade too, where I write the code and my partner calls the trades. I love new tech, I love solving problems, and I love Rubik's cubes. Still figuring the rest out.",
  projects: [
    {
      title: "FACP Manuals",
      description:
        "I built this because I was tired of digging through filing cabinets for panel manuals. It's a searchable library for fire alarm documentation covering Notifier, Simplex, Edwards, Siemens, and more. Users can create accounts, earn contribution points on the community leaderboard, and use an AI troubleshooting chat that sources directly from indexed manuals and always links back to the exact page.",
      status: "live",
      link: "https://facpmanuals.com/",
      links: [
        { label: "Try the AI Troubleshooter", url: "https://facpmanuals.com/ask-ai" },
      ],
      tags: ["Fire Alarm", "Next.js", "Supabase", "AWS S3", "AI Troubleshooter"],
      themeColor: "rubiks-red",
    },
    {
      title: "Adrian Fish Express",
      description:
        "E-commerce store for overnight seafood shipping. Built the full Shopify storefront from scratch, including custom theme work and plugin setup.",
      status: "live",
      link: "https://adrianfishexpress.com",
      tags: ["Shopify", "E-commerce", "Client Work"],
      themeColor: "rubiks-yellow",
    },
    {
      title: "Project Trade",
      description:
        "A day-trading alert system I'm co-building with a partner. He handles the trading strategy, I build the tech. The system watches stocks on 15-minute candles, evaluates setups, and fires alerts. Built with Next.js, Vercel, and Alpaca Markets API.",
      status: "in-development",
      tags: ["Co-founded", "Trading", "Next.js", "Alpaca API"],
      themeColor: "rubiks-green",
    },
  ],
  now: "All in on FACP Manuals right now. More manuals, better tools, and pushing the AI troubleshooter further. Project Trade is still cooking. Probably gaming or solving a cube somewhere in between.",
  contact: [
    {
      label: "GitHub",
      url: "https://github.com/badcuban",
      icon: "github",
    },
    {
      label: "Twitch",
      url: "https://www.twitch.tv/badcuban",
      icon: "twitch",
    },
  ],
};

export default content;
