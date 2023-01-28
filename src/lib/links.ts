import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiBuymeacoffee,
  SiKitsu,
  SiNpm,
  SiLastdotfm,
  SiApplemusic,
  SiReddit,
  SiDevdotto,
  SiHashnode,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type Link = {
  name: string;
  url: string;
  value: string;
  icon: IconType;
};

export type Links = Link[];

export const links: Links = [
  {
    name: "Discord",
    url: "https://discord.com/users/351046695833829388",
    value: "jasonmic2000#0041",
    icon: SiDiscord,
  },
  {
    name: "GitHub",
    url: "https://github.com/jasonmic2000",
    value: "@jasonmic2000",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/jasonmic2000",
    value: "@jasonmic2000",
    icon: SiInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/jasonmic2000",
    value: "@jasonmic2000",
    icon: SiTwitter,
  },
  // {
  //   name: "Buy me a coffee",
  //   url: "https://www.buymeacoffee.com/asheeshh",
  //   value: "@asheeshh",
  //   icon: SiBuymeacoffee,
  // },
  // {
  //   name: "Kitsu",
  //   url: "https://kitsu.io/users/asheeshh",
  //   value: "@asheeshh",
  //   icon: SiKitsu,
  // },
  // {
  //   name: "NPM",
  //   url: "https://www.npmjs.com/~asheeshh",
  //   value: "@asheeshh",
  //   icon: SiNpm,
  // },
  {
    name: "Apple Music",
    url: "https://music.apple.com/profile/jasonmic2000",
    value: "@jasonmic2000",
    icon: SiApplemusic,
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/u/jason_mic2000",
    value: "@jason_mic2000",
    icon: SiReddit,
  },
  {
    name: "Dev.to",
    url: "https://dev.to/jasonmic2000",
    value: "@jasonmic2000",
    icon: SiDevdotto,
  },
  // {
  //   name: "Hashnode",
  //   url: "https://h.asrvd.me",
  //   value: "@asheeshh",
  //   icon: SiHashnode,
  // },
];
