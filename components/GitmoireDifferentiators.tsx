"use client";

import { useState } from "react";
import { Terminal, Palette, Tag, Keyboard, Check, Copy } from "lucide-react";

type DiffTab = "cli" | "omarchy" | "prefixes" | "keyboard";

const CLI_SNIPPETS = [
  {
    cmd: "gitmo",
    desc: "Open the current directory or a given path in Gitmoire GUI",
  },
  {
    cmd: "gitmo clone [-b branch] <owner/repo>",
    desc: "Fast clone with automatic GitHub/GitLab URL expansion (e.g. gitmo clone torvalds/linux)",
  },
  {
    cmd: "gitmo commit",
    desc: "Headless interactive terminal staging and commit wizard with prefix picker",
  },
  {
    cmd: "gitmo yolo",
    desc: "Instant amend into HEAD, bypassing slow pre-commit hooks when you just fixed a typo",
  },
  {
    cmd: "gitmo cleanup",
    desc: "Interactive terminal picker to batch-delete merged local branches safely",
  },
  {
    cmd: "gitmo worktree <list | add | remove | enter>",
    desc: "Complete worktree creation and switching right from your command prompt",
  },
];

const SHORTCUT_GROUPS = [
  {
    group: "Single-Key Git Flow",
    items: [
      { key: "F", action: "Fetch all remotes" },
      { key: "L", action: "Pull from upstream" },
      { key: "P", action: "Push to upstream" },
      { key: "Shift + P", action: "Force push (with safety checks)" },
      { key: "A", action: "Stage all changed files" },
      { key: "C", action: "Focus commit message box" },
      { key: "E", action: "Toggle amend mode" },
      { key: "Y", action: "Yolo amend (HEAD, skip hooks)" },
      { key: "M", action: "Merge selected branch into current" },
      { key: "W", action: "Create or switch linked worktree" },
    ],
  },
  {
    group: "Diff & Navigation",
    items: [
      { key: "N", action: "Jump to next change hunk" },
      { key: "P", action: "Jump to previous change hunk" },
      { key: "[ / ]", action: "Previous / next changed file" },
      { key: "↑ / ↓", action: "Navigate commits on the graph" },
      { key: "⌘P", action: "Open fuzzy command palette" },
      { key: "⌘Z", action: "Undo last Git / branch operation" },
      { key: "⌘Enter", action: "Commit staged changes" },
      { key: "? / ⌘K", action: "Display full interactive keymap overlay" },
    ],
  },
];

const SAMPLE_PREFIXES = [
  { label: "feat:", desc: "A new user-facing capability", color: "border-purple-500/40 text-purple-300 bg-purple-500/10" },
  { label: "fix:", desc: "A bug fix or regression correction", color: "border-rose-500/40 text-rose-300 bg-rose-500/10" },
  { label: "perf:", desc: "Code change that improves performance", color: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10" },
  { label: "refactor:", desc: "Neither fixes a bug nor adds a feature", color: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10" },
  { label: "[JIRA-402]", desc: "Team ticket / Linear issue identifier", color: "border-amber-500/40 text-amber-300 bg-amber-500/10" },
  { label: "docs:", desc: "Documentation only changes", color: "border-blue-500/40 text-blue-300 bg-blue-500/10" },
];

export default function GitmoireDifferentiators() {
  const [activeTab, setActiveTab] = useState<DiffTab>("cli");
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const copyCode = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedSnippet(code);
      setTimeout(() => setCopiedSnippet(null), 1800);
    }
  };

  return (
    <section id="differentiators" className="gitmoire-diff-section">
      <div className="dm-container">
        <div className="gitmoire-section-meta text-center">
          <div className="gitmoire-eyebrow">The Unfair Advantages</div>
          <h2 className="gitmoire-section-title">Engineered for the terminal native</h2>
          <p className="gitmoire-section-lede">
            Most Git GUIs assume you want to abandon the CLI. Gitmoire does the opposite: it
            brings a headless terminal extension, dynamic desktop theming, conventional commit
            pickers, and a single-letter keyboard symphony.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="gitmoire-diff-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === "cli"}
            className={`gitmoire-diff-tab ${activeTab === "cli" ? "is-active" : ""}`}
            onClick={() => setActiveTab("cli")}
          >
            <Terminal className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Robust CLI Extension</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "omarchy"}
            className={`gitmoire-diff-tab ${activeTab === "omarchy" ? "is-active" : ""}`}
            onClick={() => setActiveTab("omarchy")}
          >
            <Palette className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Omarchy &amp; System Theming</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "prefixes"}
            className={`gitmoire-diff-tab ${activeTab === "prefixes" ? "is-active" : ""}`}
            onClick={() => setActiveTab("prefixes")}
          >
            <Tag className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Commit Prefixes</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "keyboard"}
            className={`gitmoire-diff-tab ${activeTab === "keyboard" ? "is-active" : ""}`}
            onClick={() => setActiveTab("keyboard")}
          >
            <Keyboard className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Keyboard Symphony</span>
          </button>
        </div>

        {/* Tab Panel Content */}
        <div className="gitmoire-diff-panel">
          {/* 1. CLI Extension */}
          {activeTab === "cli" && (
            <div className="gitmoire-diff-view">
              <div className="gitmoire-diff-view__lead">
                <h3 className="gitmoire-diff-view__title">
                  <code>gitmo</code> — A full terminal companion in your PATH
                </h3>
                <p className="gitmoire-diff-view__text">
                  Install the CLI shim with one click or via Homebrew. Gitmoire registers both{" "}
                  <code>gitmoire</code> and the shorthand <code>gitmo</code>. Use it to open repos
                  directly from your shell, or run headless interactive terminal wizards without
                  ever opening a GUI window.
                </p>
              </div>

              <div className="gitmoire-terminal-card">
                <div className="gitmoire-terminal-card__bar">
                  <div className="gitmoire-terminal-card__dots">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                  </div>
                  <span className="gitmoire-terminal-card__title">Terminal · gitmo CLI</span>
                </div>
                <div className="gitmoire-terminal-card__content">
                  {CLI_SNIPPETS.map((item, i) => (
                    <div key={i} className="gitmoire-terminal-row">
                      <div className="gitmoire-terminal-row__cmd">
                        <span className="gitmoire-terminal-prompt">$</span>
                        <code>{item.cmd}</code>
                        <button
                          type="button"
                          className="gitmoire-terminal-copy-btn"
                          onClick={() => copyCode(item.cmd)}
                          aria-label={`Copy ${item.cmd}`}
                        >
                          {copiedSnippet === item.cmd ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                      <div className="gitmoire-terminal-row__desc">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. Omarchy & Project Theming */}
          {activeTab === "omarchy" && (
            <div className="gitmoire-diff-view">
              <div className="gitmoire-diff-view__lead">
                <h3 className="gitmoire-diff-view__title">
                  Omarchy Dynamic Theming &amp; 14 Curated Palettes
                </h3>
                <p className="gitmoire-diff-view__text">
                  Why should your Git client clash with your tiling window manager and terminal?
                  On Linux, Gitmoire integrates with <strong>Omarchy</strong> — automatically
                  reading <code>colors.toml</code> and <code>alacritty.toml</code> from your desktop
                  environment. It calculates luminance in real time to match your exact desktop
                  colors.
                </p>
              </div>

              <div className="gitmoire-theming-grid">
                <div className="gitmoire-theming-card">
                  <div className="gitmoire-theming-card__head">
                    <span className="gitmoire-eyebrow">Linux Desktop Native</span>
                    <h4>Omarchy Auto-Detection</h4>
                  </div>
                  <p>
                    Inherits your active system palette without configuration. Graph lanes, diff
                    surfaces, borders, and selection highlights synchronize with your terminal emulator.
                  </p>
                  <div className="gitmoire-theming-card__swatches">
                    <span className="swatch bg-[#0f0f17] border border-white/20" title="Background" />
                    <span className="swatch bg-[#17171f]" title="Surface" />
                    <span className="swatch bg-[#6bc7f5]" title="Accent" />
                    <span className="swatch bg-[#b4f09e]" title="Diff Add" />
                    <span className="swatch bg-[#bb324c]" title="Diff Remove" />
                    <span className="swatch bg-[#fbde66]" title="Warning" />
                  </div>
                </div>

                <div className="gitmoire-theming-card">
                  <div className="gitmoire-theming-card__head">
                    <span className="gitmoire-eyebrow">Out of the Box</span>
                    <h4>14 Hand-Tuned Themes</h4>
                  </div>
                  <p>
                    Prefer curated themes? Switch anytime via <code>Ctrl+Shift+T</code> between
                    Dark Magic Purple, Tokyo Night, Catppuccin Mocha, Nord, Dracula, Solarized, and
                    clean high-contrast light modes.
                  </p>
                  <div className="gitmoire-theming-tags">
                    <span>Dark Magic</span>
                    <span>Tokyo Night</span>
                    <span>Catppuccin</span>
                    <span>Nord</span>
                    <span>Gruvbox</span>
                    <span>Alacritty Sync</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Commit Prefixes */}
          {activeTab === "prefixes" && (
            <div className="gitmoire-diff-view">
              <div className="gitmoire-diff-view__lead">
                <h3 className="gitmoire-diff-view__title">
                  Commit Prefixes &amp; Team Hygiene Without Friction
                </h3>
                <p className="gitmoire-diff-view__text">
                  Enforce Conventional Commits, JIRA ticket tags, or branch-based prefixes without
                  memorizing regexes. Gitmoire features an integrated <code>CommitPrefixPicker</code>{" "}
                  with fuzzy search, keyboard navigation, and per-repository template overrides.
                </p>
              </div>

              <div className="gitmoire-prefixes-demo">
                <div className="gitmoire-prefixes-demo__header">
                  <span className="gitmoire-eyebrow">Conventional &amp; Ticket Prefixes</span>
                  <p className="text-sm text-smoke-4">
                    Configured globally or repo-locally in <code>.git/config</code>. Pick with arrow keys or pass <code>--prefix</code> from CLI:
                  </p>
                </div>

                <div className="gitmoire-prefixes-grid">
                  {SAMPLE_PREFIXES.map((p, idx) => (
                    <div key={idx} className="gitmoire-prefix-chip">
                      <code className={`gitmoire-prefix-chip__tag ${p.color}`}>{p.label}</code>
                      <span className="gitmoire-prefix-chip__desc">{p.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="gitmoire-prefix-snippet">
                  <span className="text-smoke-3">Example generated commit:</span>
                  <code className="text-purple-300">
                    feat(auth): add OS keyring credential chain for GitLab tokens
                  </code>
                </div>
              </div>
            </div>
          )}

          {/* 4. Keyboard Symphony */}
          {activeTab === "keyboard" && (
            <div className="gitmoire-diff-view">
              <div className="gitmoire-diff-view__lead">
                <h3 className="gitmoire-diff-view__title">
                  Vim-Inspired Single-Key Rhythm
                </h3>
                <p className="gitmoire-diff-view__text">
                  You shouldn&apos;t need to grab your mouse just to pull or stage a file. Gitmoire
                  assigns high-frequency actions to single-letter keys while keeping <code>⌘P</code>{" "}
                  ready for everything else. Press <code>?</code> anywhere to open the live keymap.
                </p>
              </div>

              <div className="gitmoire-shortcuts-grid">
                {SHORTCUT_GROUPS.map((group, idx) => (
                  <div key={idx} className="gitmoire-shortcuts-group">
                    <h4 className="gitmoire-shortcuts-group__title">{group.group}</h4>
                    <div className="gitmoire-shortcuts-list">
                      {group.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="gitmoire-shortcut-row">
                          <kbd className="gitmoire-kbd">{item.key}</kbd>
                          <span className="gitmoire-shortcut-action">{item.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
