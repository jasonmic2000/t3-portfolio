import { FiHome, FiPaperclip, FiUser, FiZap } from "react-icons/fi";

export const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "/"),
    slug: "/",
    icon: FiHome,
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "about",
    perform: () => (window.location.pathname = "about"),
    slug: "/about",
    icon: FiUser,
  },
  {
    id: "links",
    name: "Links",
    shortcut: ["l"],
    keywords: "links",
    perform: () => (window.location.pathname = "links"),
    slug: "/links",
    icon: FiPaperclip,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    shortcut: ["d"],
    keywords: "dashboard",
    perform: () => (window.location.pathname = "dashboard"),
    slug: "/dashboard",
    icon: FiZap,
  },
];
