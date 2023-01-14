import { FiHome, FiPaperclip, FiTwitter, FiUser, FiZap } from "react-icons/fi";

export const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "/"),
    section: "Navigation",
    icon: FiHome({ size: "1rem" }),
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "about",
    perform: () => (window.location.pathname = "about"),
    section: "Navigation",
    icon: FiUser({ size: "1rem" }),
  },
  {
    id: "links",
    name: "Links",
    shortcut: ["l"],
    keywords: "links",
    perform: () => (window.location.pathname = "links"),
    section: "Navigation",
    icon: FiPaperclip({ size: "1rem" }),
  },
  {
    id: "dashboard",
    name: "Dashboard",
    shortcut: ["d"],
    keywords: "dashboard",
    perform: () => (window.location.pathname = "dashboard"),
    section: "Navigation",
    icon: FiZap({ size: "1rem" }),
  },
  {
    id: "twitter",
    name: "Twitter",
    shortcut: ["t"],
    keywords: "twitter",
    perform: () => window.open("https://twitter.com/jasonmic2000"),
    section: "Exteral",
    icon: FiTwitter({ size: "1rem" }),
  },
];
