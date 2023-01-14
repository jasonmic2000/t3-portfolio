import { FiHome, FiPaperclip, FiUser, FiZap } from "react-icons/fi";

export const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "/"),
    slug: "/",
    icon: FiHome({ size: "1rem" }),
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "about",
    perform: () => (window.location.pathname = "about"),
    slug: "/about",
    icon: FiUser({ size: "1rem" }),
  },
  {
    id: "links",
    name: "Links",
    shortcut: ["l"],
    keywords: "links",
    perform: () => (window.location.pathname = "links"),
    slug: "/links",
    icon: FiPaperclip({ size: "1rem" }),
  },
  {
    id: "dashboard",
    name: "Dashboard",
    shortcut: ["d"],
    keywords: "dashboard",
    perform: () => (window.location.pathname = "dashboard"),
    slug: "/dashboard",
    icon: FiZap({ size: "1rem" }),
  },
];
