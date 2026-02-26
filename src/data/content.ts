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
  tagline: "I build things at the intersection of code and domain expertise.",
  about:
    "Developer and entrepreneur who turns deep domain knowledge into real products. I run FACP Manuals LLC, build trading tools, and occasionally take on client projects when the fit is right. I care more about solving real problems than chasing trends.",
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
  now: "Currently building Project Trade and growing FACP Manuals. Always tinkering with new ideas.",
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
