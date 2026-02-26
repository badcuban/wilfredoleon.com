export interface Project {
  title: string;
  description: string;
  status: "live" | "in-development" | "case-study";
  link?: string;
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
        "The go-to reference platform for fire alarm professionals. Hosts a searchable manual library for panels from Notifier, Simplex, Edwards, Siemens, and more — plus identification guides to help technicians find the right documentation fast.",
      status: "live",
      link: "https://facpmanuals.com/",
      tags: ["Fire Alarm", "Documentation", "LLC", "AI Troubleshooter"],
      themeColor: "rubiks-red",
    },
    {
      title: "Adrian Fish Express",
      description:
        "E-commerce overnight seafood shipping. Built the full Shopify store from scratch — custom theme, plugin setup, and complete storefront.",
      status: "case-study",
      link: "https://adrianfishexpress.com",
      tags: ["Shopify", "E-commerce", "Client Work"],
      themeColor: "rubiks-yellow",
    },
    {
      title: "Project Trade",
      description:
        "A day-trading alert system that watches stocks on 15-minute candles, evaluates setups using Bollinger Bands, EMAs, and volume analysis, then fires alerts. Built with Next.js, Vercel, and Alpaca Markets API.",
      status: "in-development",
      tags: ["Trading", "Next.js", "Alpaca API", "Automation"],
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
