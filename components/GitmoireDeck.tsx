"use client";

import { useState } from "react";
import Image from "next/image";
import {
  GitBranch,
  FileCode,
  AlertTriangle,
  Search,
  Terminal,
  FolderGit2,
  Check,
  CornerDownRight,
} from "lucide-react";

type TabId = "graph" | "diff" | "conflicts" | "inspector" | "palette" | "welcome";

interface FeatureTab {
  id: TabId;
  label: string;
  icon: typeof GitBranch;
  title: string;
  badge: string;
  summary: string;
  image: string;
  alt: string;
  bullets: string[];
}

const TABS: FeatureTab[] = [
  {
    id: "graph",
    label: "Commit Graph",
    icon: GitBranch,
    badge: "100k Commits · Virtualized",
    title: "A graph that refuses to drop frames.",
    summary:
      "Most Git GUIs choke when a repository crosses ten thousand commits. Gitmoire virtualizes commit lanes in native Rust and libgit2, keeping navigation locked at 60fps whether you have fifty commits or a hundred thousand.",
    image: "/products/gitmoire/02-graph.webp",
    alt: "The gitmoire commit graph with ref chips, file inspector, and working copy",
    bullets: [
      "Drag any branch onto another to merge or rebase",
      "Fold crowded ref chips cleanly behind +n badges",
      "Paste any SHA-1 hash to jump immediately to that point in history",
      "⌘Z instantly reverses errant branch drags or checkouts",
    ],
  },
  {
    id: "diff",
    label: "Surgical Diffs",
    icon: FileCode,
    badge: "Word-Level · Hunks & Lines",
    title: "Inspect changes with surgical granularity.",
    summary:
      "No guessing where a comma moved or what token changed. Diffs render inline or side-by-side with word-level highlight precision, line numbers, change counters, and a visual minimap.",
    image: "/products/gitmoire/03-diff.webp",
    alt: "An inline diff with word-level highlighting, line numbers, and a change counter",
    bullets: [
      "Stage entire files, individual hunks, or single lines with one click",
      "Jump between modifications instantly with n and p shortcuts",
      "Minimap preview for fast orientation in large source files",
      "Image diffing and full file history blame view built in",
    ],
  },
  {
    id: "conflicts",
    label: "Conflict Resolver",
    icon: AlertTriangle,
    badge: "3-Pane · Non-Destructive",
    title: "Conflicts without the dread.",
    summary:
      "Visual three-pane conflict resolution that keeps you calm. Inspect 'ours' and 'theirs' side-by-side with line numbers, pick entire blocks or select single lines, and fine-tune the result in a live editor.",
    image: "/products/gitmoire/04-conflicts.webp",
    alt: "The conflict resolver showing both sides, line numbers, and a live result pane",
    bullets: [
      "Clear line numbers and diff boundaries on both incoming and current changes",
      "Hover-plus icon to grab single lines without copying full blocks",
      "Live result editor for instant manual adjustments",
      "Nothing touches your disk files until you click 'Mark resolved'",
    ],
  },
  {
    id: "inspector",
    label: "Commit Dissection",
    icon: Search,
    badge: "Metadata · AI Context",
    title: "Every commit, understood at a glance.",
    summary:
      "Drill deep into any commit without clutter. Inspect commit messages, author signatures, parent hashes, and changed files with fast right-click access to file history, blame, and cherry-picking.",
    image: "/products/gitmoire/05-inspector.webp",
    alt: "The commit inspector showing message, author, parent, ref badges, and changed files",
    bullets: [
      "Author info, commit message, and full parent SHA genealogy",
      "Fast file filter to locate modified paths instantly",
      "Right-click context menu: apply, edit, view history, or copy path",
      "Opt-in AI explain tool that parses diffs through your local CLI",
    ],
  },
  {
    id: "palette",
    label: "⌘P Palette",
    icon: Terminal,
    badge: "Keyboard-First · Zero Latency",
    title: "Keep your hands on the home row.",
    summary:
      "A unified fuzzy palette that does everything. Switch branches, jump to commits, run Git actions, or launch terminal tabs without touching your mouse.",
    image: "/products/gitmoire/06-palette.webp",
    alt: "The command palette with actions like open file, file history, blame, pull, and commit",
    bullets: [
      "Fuzzy search commands, branches, tags, and file history from ⌘P",
      "Single-key flow: F for fetch, P for push, C for commit",
      "Keyboard shortcuts displayed inline next to every command",
      "Esc dismisses exactly one modal layer without losing context",
    ],
  },
  {
    id: "welcome",
    label: "Workspace Hub",
    icon: FolderGit2,
    badge: "Fast Launch · Multi-Repo",
    title: "A first screen that respects your focus.",
    summary:
      "Open recent repositories in a split second or clone straight from a URL. Filter through your project directory with fuzzy search and get straight into your work.",
    image: "/products/gitmoire/01-welcome.webp",
    alt: "The welcome screen with recent repositories, project directories, and open or clone actions",
    bullets: [
      "Instant fuzzy filtering across your entire local repository list",
      "Clone from GitHub, GitLab, or Bitbucket with auto-configured credentials",
      "Recent projects pinned with dirty status and active branch indicators",
      "Multi-tab architecture lets you keep multiple repos open at once",
    ],
  },
];

export default function GitmoireDeck() {
  const [activeTab, setActiveTab] = useState<TabId>("graph");
  const current = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <section id="deck" className="gitmoire-deck-section">
      <div className="dm-container">
        <div className="gitmoire-section-meta text-center">
          <div className="gitmoire-eyebrow">Interactive Tour</div>
          <h2 className="gitmoire-section-title">A look inside the engine</h2>
          <p className="gitmoire-section-lede">
            Every screen below is the real application running on native Rust and libgit2.
            No web mockups, no Electron lag.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="gitmoire-tabs" role="tablist" aria-label="Feature screenshots">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                className={`gitmoire-tab ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className="gitmoire-tab__icon" aria-hidden="true" />
                <span className="gitmoire-tab__label">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* App Frame with Active Screenshot */}
        <div
          id={`tabpanel-${current.id}`}
          role="tabpanel"
          className="gitmoire-frame"
          aria-labelledby={current.id}
        >
          <div className="gitmoire-frame__header">
            <div className="gitmoire-frame__dots" aria-hidden="true">
              <span className="gitmoire-frame__dot gitmoire-frame__dot--red" />
              <span className="gitmoire-frame__dot gitmoire-frame__dot--yellow" />
              <span className="gitmoire-frame__dot gitmoire-frame__dot--green" />
            </div>
            <div className="gitmoire-frame__title">
              gitmoire — {current.label.toLowerCase()}
            </div>
            <div className="gitmoire-frame__badge">{current.badge}</div>
          </div>

          <div className="gitmoire-frame__body">
            <Image
              src={current.image}
              alt={current.alt}
              width={2000}
              height={1250}
              priority={current.id === "graph"}
              className="gitmoire-frame__image"
            />
          </div>

          {/* Details footer */}
          <div className="gitmoire-frame__details">
            <div className="gitmoire-frame__info">
              <div className="gitmoire-frame__tagline-badge">
                <Check className="gitmoire-check-icon" aria-hidden="true" />
                <span>{current.badge}</span>
              </div>
              <h3 className="gitmoire-frame__heading">{current.title}</h3>
              <p className="gitmoire-frame__desc">{current.summary}</p>
            </div>

            <div className="gitmoire-frame__bullets">
              <div className="gitmoire-frame__bullets-title">Key Capabilities</div>
              <ul className="gitmoire-frame__list">
                {current.bullets.map((b, idx) => (
                  <li key={idx} className="gitmoire-frame__list-item">
                    <CornerDownRight className="gitmoire-bullet-arrow" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
