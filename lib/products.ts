import { Signature, Vote, HeartPulse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductStatus = "live" | "free" | "building" | "soon";

export type Product = {
  slug: string;
  name: string;
  /** Wordmark rendered in the product's own type treatment, when it has one. */
  wordmarkClass?: string;
  tagline: string;
  description: string;
  tags: string[];
  status: ProductStatus;
  statusLabel: string;
  /** Internal page, when there is one to link to. */
  href?: string;
  /** Public repo, when the source is open. */
  github?: string;
  mark?: string;
  Icon?: LucideIcon;
};

export const BUILDING: Product[] = [
  {
    slug: "hocus",
    name: "hocus",
    wordmarkClass: "hocus-wordmark",
    tagline: "thirteen agents · one repo · zero stand ups",
    description:
      "A multi-agent harness generator and interactive command deck. Write one SOUL.md persona once and compile it into native formats for Claude Code, OpenCode, Codex, Cursor, Antigravity, Command Code, and GitHub Copilot.",
    tags: [
      "Claude Code",
      "Cursor",
      "Antigravity",
      "Command Code",
      "OpenCode",
      "Copilot",
      "TUI",
    ],
    status: "live",
    statusLabel: "Live",
    href: "/products/hocus",
    github: "https://github.com/dark-magic-studios/hocus",
    mark: "/products/hocus/mark.png",
  },
  {
    slug: "vitreus",
    name: "Vitreus",
    tagline: "your tools, your files, your keys",
    description:
      "An AI-assisted Obsidian vault for tasks, planning, and journaling. Point it at Linear, Todoist, Toggl, or your calendar and it keeps a running picture of your work in plain Markdown — running locally, through a harness you control.",
    tags: ["Obsidian", "Claude Code", "Local-first", "Markdown"],
    status: "building",
    statusLabel: "In development",
    href: "/products/vitreus",
    mark: "/products/vitreus/mark.png",
  },
];

export const FREE_TOOLS: Product[] = [
  {
    slug: "gitmoire",
    name: "gitmoire",
    tagline: "14 megabytes · zero telemetry · native speed",
    description:
      "A tiny, native desktop Git client built on Rust and libgit2. Opens in milliseconds, virtualizes 100k commits effortlessly, and leaves 1 GB Electron memory-hogs behind. Free, MIT, and 100% local.",
    tags: ["Rust", "Tauri v2", "libgit2", "macOS", "Windows", "Linux", "Free"],
    status: "free",
    statusLabel: "Free · MIT",
    href: "https://gitmoire.dev",
    github: "https://github.com/dark-magic-studios/gitmoire",
    mark: "/products/gitmoire/mark.png",
  },
  {
    slug: "signum",
    name: "signum",
    tagline: "text · date · company · logo · signature",
    description:
      "Fill in and sign a PDF right in your browser. Drop in typed fields and a cursive signature, then export the finished document — the file never leaves your tab.",
    tags: ["Client-side", "No upload", "Free"],
    status: "free",
    statusLabel: "Free",
    href: "/tools/signum",
    Icon: Signature,
  },
];

export const COMING_SOON: Product[] = [
  {
    slug: "forgeboard",
    name: "Forgeboard",
    tagline: "ask · vote · ship · announce",
    description:
      "Feature requests, voting, a public roadmap, and a changelog in one place — built for indie game developers, and priced like it. The existing options are sold to enterprises and charge accordingly.",
    tags: ["Indie games", "Roadmap", "Changelog"],
    status: "soon",
    statusLabel: "Coming soon",
    Icon: Vote,
  },
  {
    slug: "pulsebook",
    name: "Pulsebook",
    tagline: "one tap a day, on every device",
    description:
      "A mood and habit journal in the Daylio mould, with the thing Daylio never shipped: real cross-device sync. Web and phone, same entries, no export-import dance.",
    tags: ["iOS", "Android", "Web", "Sync"],
    status: "soon",
    statusLabel: "Coming soon",
    Icon: HeartPulse,
  },
];

/** Flagship products surfaced first on the home page. */
export const HOME_LEADING: Product[] = [
  BUILDING.find((p) => p.slug === "hocus")!,
  FREE_TOOLS.find((p) => p.slug === "gitmoire")!,
];

export const ALL_PRODUCTS: Product[] = [...BUILDING, ...FREE_TOOLS, ...COMING_SOON];
