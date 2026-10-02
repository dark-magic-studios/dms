import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GitmoireDeck from "@/components/GitmoireDeck";
import GitmoireDifferentiators from "@/components/GitmoireDifferentiators";
import GitmoireDownloads from "@/components/GitmoireDownloads";
import TrackedLink from "@/components/TrackedLink";
import {
  GitBranch,
  FileCode,
  AlertTriangle,
  FolderGit2,
  Terminal,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  X,
  Check,
  Cpu,
  EyeOff,
  Boxes,
} from "lucide-react";
import "./gitmoire.css";

export const metadata: Metadata = {
  title: "gitmoire — Everyday Git, forged in Rust · Dark Magic Studios",
  description:
    "A tiny 14 MB native desktop Git client built on Rust and libgit2. Zero Electron bloat, zero telemetry, zero accounts. macOS, Windows, Linux.",
  openGraph: {
    title: "gitmoire — Everyday Git, forged in Rust",
    description:
      "14 MB · Zero telemetry · 100k commits smoothly. The antidote to 1 GB Electron Git clients.",
    images: ["/products/gitmoire/02-graph.png"],
  },
};

const GITHUB_REPO = "https://github.com/dark-magic-studios/gitmoire";

const PILLARS = [
  {
    icon: GitBranch,
    title: "The Virtualized Graph",
    desc: "Virtualized lanes that stay smooth on repositories with 100k commits. Drag a branch onto another to merge or rebase, fold crowded ref chips behind <code>+n</code>, paste a hash to jump, and press <code>⌘Z</code> to undo mistake checkouts.",
  },
  {
    icon: AlertTriangle,
    title: "Visual Conflict Resolver",
    desc: "Inspect incoming and current changes side-by-side with line numbers. Pick entire blocks or use the hover-plus icon to grab single lines. The result pane is a live editor, and nothing is written to disk until you click 'Mark resolved'.",
  },
  {
    icon: FolderGit2,
    title: "First-Class Worktrees",
    desc: "Spin up a second checkout in a sibling folder — for a quick hotfix or an AI agent session — while your main working copy remains untouched. Each worktree gets its own row, its own tab, and its own terminal.",
  },
  {
    icon: FileCode,
    title: "Surgical Diffs & Staging",
    desc: "Stage files, hunks, or single lines with one click. Inline or split diffs with word-level highlight precision, visual minimap, image diffing, and integrated file blame and history.",
  },
  {
    icon: Layers,
    title: "Multi-Account Remotes",
    desc: "Fetch, pull, and push over SSH or tokens with multiple accounts per host. Native support for GitHub, GitLab, and Bitbucket Cloud — list PRs, check out branches, and create PRs directly.",
  },
  {
    icon: Sparkles,
    title: "Opt-in Local AI",
    desc: "Generate commit messages, explain gnarly diffs, and review staged files via your installed Claude Code, OpenCode, Codex, or Gemini CLI, or a local Ollama instance. Opt-in, direct to provider, with a Stop button on every run.",
  },
  {
    icon: Terminal,
    title: "Terminal per Repo",
    desc: "An integrated terminal tab inside each repository workspace. When you need raw git commands or custom scripts, you never have to leave the window.",
  },
  {
    icon: Zap,
    title: "Keyboard-First ⌘P Palette",
    desc: "A fuzzy palette for everything: commands, branches, tags, and file history. Single-key flow (<code>F</code> fetch, <code>P</code> push, <code>C</code> commit) keeps your hands on the home row.",
  },
  {
    icon: ShieldCheck,
    title: "Repo-Local Identities",
    desc: "Work identity vs personal identity? Configure author names and emails per repository inside <code>.git/config</code>. Tokens stay in your OS keyring, never plaintext on disk.",
  },
];

const NON_GOALS = [
  {
    title: "In-App PR Review",
    desc: "Your forge (GitHub, GitLab) already handles CI matrices, review threads, and line suggestions far better than a desktop GUI ever could. Gitmoire checks out the PR branch, runs tests locally, and gives you an 'Open in Browser' button. We refuse to build a clunky web browser inside an app.",
  },
  {
    title: "Telemetry, Accounts & Cloud",
    desc: "No login screen, no user accounts, and zero telemetry SDKs. There is no cloud backend, so there is literally nothing to leak or phone home to. Your code and your habits remain entirely your own.",
  },
  {
    title: "Sluggish Plugin Marketplaces",
    desc: "Every essential Git feature is engineered directly into the native Rust core. No third-party extension sandboxes, no unvetted dependencies, and no memory leaks from abandoned community plugins.",
  },
];

export default function GitmoirePage() {
  return (
    <>
      <NavBar />
      <main className="gitmoire-page">
        {/* Hero Section */}
        <section className="gitmoire-hero">
          <div className="gitmoire-hero__glow" aria-hidden="true" />
          <div className="gitmoire-hero__grid" aria-hidden="true" />

          <div className="dm-container gitmoire-hero__inner">
            <div className="gitmoire-pill">
              <span className="gitmoire-pill__dot" aria-hidden="true" />
              <span>v0.7.0 · Native Git Client · Free &amp; MIT</span>
            </div>

            <Image
              src="/products/gitmoire/mark.png"
              alt="gitmoire mark"
              width={100}
              height={100}
              priority
              className="gitmoire-hero__logo"
            />

            <h1 className="gitmoire-hero__title">
              Everyday Git,<br />
              <span className="gitmoire-gradient-text">forged in Rust.</span>
            </h1>

            <p className="gitmoire-hero__lede">
              A 14 MB native desktop Git client that opens instantly, scrolls 100,000 commits
              without dropping frames, and treats your RAM with respect. Built on Tauri v2 and
              vendored libgit2. Zero telemetry, zero accounts, zero cloud bloat.
            </p>

            <div className="gitmoire-hero__actions">
              <TrackedLink
                className="gitmoire-btn gitmoire-btn--primary gitmoire-btn--lg"
                href="#download"
                eventName="cta_click"
                eventCategory="gitmoire_hero"
                eventLabel="hero_download"
              >
                Download v0.7.0
              </TrackedLink>
              <a className="gitmoire-btn gitmoire-btn--ghost gitmoire-btn--lg" href="#deck">
                Interactive Tour
              </a>
              <TrackedLink
                className="gitmoire-btn gitmoire-btn--ghost gitmoire-btn--lg"
                href={GITHUB_REPO}
                external
                eventName="nav_click"
                eventCategory="navigation"
                eventLabel="gitmoire_hero_github"
              >
                GitHub Repo
              </TrackedLink>
            </div>

            {/* Quick Homebrew command bar */}
            <div>
              <div className="gitmoire-hero__cmd-bar">
                <span>macOS brew:</span>
                <code className="gitmoire-hero__cmd-code">
                  brew install --cask dark-magic-studios/tap/gitmoire
                </code>
              </div>
            </div>

            {/* Stats Strip */}
            <div className="gitmoire-stats" aria-label="Gitmoire specifications">
              <div className="gitmoire-stat">
                <div className="gitmoire-stat__value">
                  <em>14</em> MB
                </div>
                <div className="gitmoire-stat__label">Universal .dmg</div>
              </div>
              <div className="gitmoire-stat">
                <div className="gitmoire-stat__value">~28 MB</div>
                <div className="gitmoire-stat__label">Installed footprint</div>
              </div>
              <div className="gitmoire-stat">
                <div className="gitmoire-stat__value">100k</div>
                <div className="gitmoire-stat__label">Commits virtualized</div>
              </div>
              <div className="gitmoire-stat">
                <div className="gitmoire-stat__value">
                  <em>0</em> KB
                </div>
                <div className="gitmoire-stat__label">Telemetry or tracking</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Antidote / The Electron Roast */}
        <section className="gitmoire-antidote-section">
          <div className="dm-container">
            <div className="gitmoire-section-meta text-center">
              <div className="gitmoire-eyebrow">The Antidote</div>
              <h2 className="gitmoire-section-title">
                A web browser in a trench coat is not a Git client.
              </h2>
              <p className="gitmoire-section-lede">
                Why has desktop software surrendered to 1 GB runtimes? Git is fundamentally
                about graph algorithms and file diffs. It deserves native engineering.
              </p>
            </div>

            <div className="gitmoire-contrast-grid">
              {/* The Bad: Electron Clients */}
              <div className="gitmoire-contrast-card gitmoire-contrast-card--bad">
                <div className="gitmoire-contrast-card__header">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <X className="w-4 h-4" />
                  </div>
                  <h3 className="gitmoire-contrast-card__title">The 1.2 GB Electron Trap</h3>
                </div>
                <p className="gitmoire-contrast-card__body">
                  Most modern Git GUIs bundle a full Chromium browser and Node runtime. They eat
                  a gigabyte of RAM on startup, drop frames on repositories with 5,000+ commits,
                  and ping corporate servers with telemetry.
                </p>
                <ul className="gitmoire-contrast-card__list">
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--bad">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>800 MB to 1.4 GB idle memory footprint</span>
                  </li>
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--bad">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Noticeable startup delay and frame stutter on large diffs</span>
                  </li>
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--bad">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Mandatory cloud sign-up screens and proprietary lock-in</span>
                  </li>
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--bad">
                    <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Background daemons monitoring repository activities</span>
                  </li>
                </ul>
              </div>

              {/* The Good: Gitmoire Native */}
              <div className="gitmoire-contrast-card gitmoire-contrast-card--good">
                <div className="gitmoire-contrast-card__header">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/40 flex items-center justify-center text-purple-300">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="gitmoire-contrast-card__title">The Gitmoire Standard</h3>
                </div>
                <p className="gitmoire-contrast-card__body">
                  Gitmoire is compiled Rust running on Tauri v2 with vendored libgit2. Hot
                  paths execute directly in native code, never shelling out. It opens instantly,
                  idles at 40 MB, and respects your privacy unconditionally.
                </p>
                <ul className="gitmoire-contrast-card__list">
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--good">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>14 MB bundle size, ~40 MB idle RAM consumption</span>
                  </li>
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--good">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>100,000 commits virtualized smoothly without fan noise</span>
                  </li>
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--good">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Zero accounts, zero telemetry, zero cloud dependencies</span>
                  </li>
                  <li className="gitmoire-contrast-card__item gitmoire-contrast-card__item--good">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>Credentials secured in native OS keyring; repo-local configs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Screenshot Showcase (Option A) */}
        <GitmoireDeck />

        {/* Core Differentiators (CLI, Omarchy, Commit Prefixes, Keyboard Symphony) */}
        <GitmoireDifferentiators />

        {/* The 25 Operations Feature Grid */}
        <section id="features" className="gitmoire-features-section">
          <div className="dm-container">
            <div className="gitmoire-section-meta text-center">
              <div className="gitmoire-eyebrow">The 25 Operations</div>
              <h2 className="gitmoire-section-title">
                The Git you actually use, executed with precision.
              </h2>
              <p className="gitmoire-section-lede">
                If GitKraken has 100 features, Gitmoire ships the best 25 executed exceptionally
                well. No bloatware, no distractions. Just everyday Git made delightful.
              </p>
            </div>

            <div className="gitmoire-features-grid">
              {PILLARS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="gitmoire-feature-card">
                    <div className="gitmoire-feature-card__icon-box">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="gitmoire-feature-card__title">{p.title}</h3>
                    <p
                      className="gitmoire-feature-card__desc"
                      dangerouslySetInnerHTML={{ __html: p.desc }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deliberate Non-Goals (Restraint as a Feature) */}
        <section className="gitmoire-restraint-section">
          <div className="dm-container">
            <div className="gitmoire-section-meta text-center">
              <div className="gitmoire-eyebrow">Restraint as a Feature</div>
              <h2 className="gitmoire-section-title">What gitmoire leaves out on purpose.</h2>
              <p className="gitmoire-section-lede">
                Restraint is engineering discipline. These are intentional non-goals, not an
                unfinished to-do list.
              </p>
            </div>

            <div className="gitmoire-restraint-grid">
              {NON_GOALS.map((ng, idx) => (
                <div key={idx} className="gitmoire-restraint-card">
                  <div className="gitmoire-restraint-card__head">
                    <X className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
                    <span>{ng.title}</span>
                  </div>
                  <p className="gitmoire-restraint-card__desc">{ng.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Hub */}
        <GitmoireDownloads />
      </main>
      <Footer />
    </>
  );
}
