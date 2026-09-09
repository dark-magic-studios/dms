import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HocusCast, { type HocusPersona } from "@/components/HocusCast";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Hocus — Dark Magic Studios",
  description:
    "Hocus is a multi-agent harness generator and interactive command deck. Write one SOUL.md persona once and compile it into Claude Code, OpenCode, Codex, Cursor, Antigravity, Command Code, and GitHub Copilot formats.",
};

const HOCUS_GITHUB = "https://github.com/dark-magic-studios/hocus";
const HOCUS_NPM = "@darkmagicstudios/hocus";

const TARGETS = [
  {
    tool: "Claude Code",
    path: ".claude/agents/<slug>.md",
    note: "Markdown + YAML frontmatter, invoked via the Task tool or @mention.",
  },
  {
    tool: "OpenCode",
    path: ".opencode/agent/<slug>.md",
    note: "Same shape, different frontmatter keys (description, optional model).",
  },
  {
    tool: "Codex",
    path: ".codex/agents/<slug>.toml",
    note: "Native TOML custom-agent configuration; repository skills load from .agents/skills/.",
  },
  {
    tool: "Cursor",
    path: ".cursor/agents/<slug>.md",
    note: "Native subagent markdown format with YAML frontmatter (name, description, optional model).",
  },
  {
    tool: "Antigravity",
    path: ".agents/agents/<slug>/agent.md",
    note: "Native custom subagents discovered under .agents/agents/<slug>/agent.md with YAML frontmatter (name, description, tools, model, subagent: true) and Markdown system instructions.",
  },
  {
    tool: "Command Code",
    path: ".commandcode/agents/<slug>.md",
    note: "Markdown + YAML frontmatter; every agent gets Taste compatibility instructions baked in.",
  },
  {
    tool: "GitHub Copilot",
    path: ".github/agents/<slug>.agent.md",
    note: "Compiled when .github/ is present or --copilot is passed; skills mirror to .github/skills/.",
  },
];

const WORKFLOW = [
  {
    cmd: "hocus init",
    title: "Initialize",
    body: "Run once in your repo. Writes AGENTS.md, CLAUDE.md, PRODUCT.md, MEMORY.md, TASKS.md, _potions/ and _spells/, copies the persona cast into .hocus/personas/, installs bundled skills and starter spells, prompts for Silicon Valley or Wizards naming convention, and spawns an interactive initialization session with the founder persona using your preferred agent CLI (claude, copilot, opencode, codex, agy, or agent).",
  },
  {
    cmd: "hocus cast",
    title: "Compile",
    body: "Scans the repo for language and framework signals, tailors each persona with that context, and compiles native formats for every detected target — Claude Code, OpenCode, Codex, Cursor, Antigravity, Command Code, and GitHub Copilot.",
  },
  {
    cmd: "hocus affix",
    title: "Affix",
    body: "Affix a Hocus persona soul to existing custom subagents in an established repo. CLI wizard detects existing agents across all tools, cleanly injecting persona instructions while preserving your custom configuration.",
  },
  {
    cmd: "hocus add",
    title: "Extend",
    body: "Adds a persona or a skill to selected providers, locally or globally — hocus skill add <name> is the shorthand for a skill. Supports installing bundled skills or custom skills from local paths.",
  },
  {
    cmd: "hocus sync",
    title: "Refresh",
    body: "Fast rebuild of dashboard.html from .hocus/personas/, _potions/ and _spells/ without recompiling agent files. Run often; run cast when the repo stack or persona instructions change.",
  },
  {
    cmd: "hocus",
    title: "Command Deck",
    body: "Launches the interactive TUI command deck to inspect potions, spells, souls, agent topology (coven), skills (grimoire), stack scanning (scrying), and chat with agents (séance).",
  },
];

/** Hocus-native repo artifacts, distinct from the shared SKILL.md standard. */
const ARTIFACTS = [
  {
    name: "Potions",
    path: "_potions/<potion-id>.md",
    note: "Multi-step feature battle plans. The planner drafts one before any code is written — goal, acceptance criteria, assignee — and the orchestrator keeps its lifecycle status (draft → casting → sealed) and progress percentage current as work lands.",
  },
  {
    name: "Spells",
    path: "_spells/{incantations,wards,curses}/",
    note: "Atomic single-purpose conventions and guardrails. Incantations are fixed output templates; wards fire an incantation automatically on lifecycle events (pre-commit, on-pr-open…); curses are hard or soft stop conditions agents must never violate.",
  },
  {
    name: "Skills",
    path: ".agents/skills/<name>/ · .claude/skills/<name>/",
    note: "The shared open SKILL.md standard — no translation layer needed. One file, mirrored per tool, covers every target. 16 skills are persona-bound and renamed with the cast; generic skills (atomic-commits, graphify, harness-report) stay consistent.",
  },
];

/** Interactive command deck — the seven tabs of `hocus tui`, switched with Tab / Shift-Tab or keys 1–7. */
const DECK_TABS = [
  {
    key: "1",
    name: "Potions",
    body: "Active feature plans — in-flight specs, architectural blueprints, and step-by-step battle plans tracked in _potions/, each with a status (draft → casting → sealed) and a progress percentage.",
  },
  {
    key: "2",
    name: "Spells",
    body: "Conventions and guardrails in _spells/: incantations (output templates), wards (lifecycle hooks that fire automatically), and curses (hard or soft stop conditions).",
  },
  {
    key: "3",
    name: "Souls",
    body: "Persona inspector — browse installed SOUL.md files in .hocus/personas/, inspect metadata, voice, triggers, and frontmatter schema validation.",
  },
  {
    key: "4",
    name: "Coven",
    body: "Agent topology — parent/child hierarchy graphs, delegation structure, and orchestrator relationships.",
  },
  {
    key: "5",
    name: "Grimoire",
    body: "Skill management across .agents/skills/ and .claude/skills/ (and .commandcode/skills/ when enabled).",
  },
  {
    key: "6",
    name: "Scrying",
    body: "Automated repository stack scanner detecting languages, frameworks, and build systems, paired with live compilation status for every target tool.",
  },
  {
    key: "7",
    name: "Séance",
    body: "Agent chat deck. Tab cycles personas, Ctrl+B cycles backends (Claude, Codex, Antigravity, custom), / triggers command and skill autocomplete plus built-ins like /status and /sync, @ mentions repo files.",
  },
];

const CAST: HocusPersona[] = [
  {
    glyph: "[0]",
    name: "Midas",
    role: "Founder",
    voice: "contemplative, long-horizon visionary, pauses with gravity, refuses to scaffold upon unverified foundations",
    summary:
      "Initiates the harness on a new project. Asks for the tech stack before anything else gets decided — which agents and skills make sense depends entirely on what's actually being built.",
    triggers: ["set up the harness", "new project"],
    aliases: { valley: "Peter Gregory", occult: "Midas" },
  },
  {
    glyph: "(*)",
    name: "Merlin",
    role: "Planner",
    voice: "anxious, earnest, brilliant, overthinks edge cases, drafts thoughtful battle plans and potion files",
    summary:
      "Drafts the battle plan for a feature before anyone writes code. Simple features are exactly where the inelegant shortcut sneaks in — so the plan is never skipped.",
    triggers: ["new feature request", "architecture decision", "battle plan"],
    aliases: { valley: "Richard", occult: "Merlin" },
  },
  {
    glyph: "[#]",
    name: "Roger Bacon",
    role: "Orchestrator",
    voice: "relentlessly organized, quietly anxious about being useful, deeply courteous, manages team dependencies with surgical care",
    summary:
      "Reads the approved potion plan and turns it into assignments. The agent who reads and updates _potions/ and _spells/ as work lands.",
    triggers: ["approved battle plan", "status check", "who's working on what"],
    aliases: { valley: "Jared", occult: "Roger Bacon" },
  },
  {
    glyph: "</>",
    name: "Flamel",
    role: "Feature dev",
    voice: "confident, proud craftsman, fiercely protective of clean diffs, takes feedback personally for thirty seconds before making it even cleaner",
    summary:
      "Implements whatever the orchestrator assigns, following the plan the planner wrote. Opens the PR and responds to feedback on it.",
    triggers: ["assigned implementation task", "PR feedback"],
    aliases: { valley: "Dinesh", occult: "Flamel" },
  },
  {
    glyph: "(o)",
    name: "Zoroaster",
    role: "Reviewer",
    voice: "deadpan, surgically precise, contemptuous of sloppiness, treats code elegance as moral law",
    summary:
      "Reviews every PR with total indifference to how the work felt to produce, and total intolerance for sloppy abstractions, security holes, or happy-path-only code.",
    triggers: ["open PR", "code review", "security audit"],
    aliases: { valley: "Gilfoyle", occult: "Zoroaster" },
  },
  {
    glyph: "(!)",
    name: "Circe",
    role: "Product strategist",
    voice: "magnetic, visionary, allergic to corporate sludge, turns technical mechanics into compelling human narratives",
    summary:
      "Updates PRODUCT.md and the changelog every time a feature ships. Consult when a feature needs framing for an audience, not just a technical description.",
    triggers: ["update the changelog", "shipped a feature", "marketing strategy"],
    aliases: { valley: "Erlich", occult: "Circe" },
  },
  {
    glyph: "[=]",
    name: "Chronos",
    role: "Project manager",
    voice: "high-strung, intensely structured, allergic to hand-waving, manages blood pressure with chamomile tea while enforcing Gantt charts and critical path deliverables",
    summary:
      "Keeps TASKS.md completely, undeniably honest. Scries external issue trackers (Linear, GitHub Issues, Jira, or offline markdown vaults), reconciles them against repo state and commits, and highlights discrepancies with high-stakes urgency.",
    triggers: ["sync tasks", "scry tasks", "check linear", "sprint planning"],
    aliases: { valley: "Dan Melcher", occult: "Chronos" },
  },
  {
    glyph: "{ }",
    name: "John Dee",
    role: "Configurator",
    voice: "purely mechanical, mathematically deterministic, zero fluff, strictly format-perfect",
    summary:
      "Knows exactly how Claude Code, OpenCode, Codex, Cursor, Antigravity, Command Code, and GitHub Copilot expect their config, agent, and skill files structured — and keeps the compiled output for each correct.",
    triggers: [
      "set up Cursor",
      "set up Claude Code",
      "set up OpenCode",
      "set up Antigravity",
      "config drift",
    ],
    aliases: { valley: "Laurie", occult: "John Dee" },
  },
  {
    glyph: "[~]",
    name: "Cagliostro",
    role: "QA",
    voice: "laconic, brutally honest, completely immune to developer rationalizations, reports facts in minimalist truth",
    summary:
      "Tests the product the way an actual, somewhat unimpressed user would — not by reading the spec, but by trying to use the thing and noticing when it's annoying, confusing, or just bad.",
    triggers: ["test this from a user's perspective", "pre-release check"],
    aliases: { valley: "Jian-Yang", occult: "Cagliostro" },
  },
  {
    glyph: "[?]",
    name: "Baba Yaga",
    role: "Dumb QA",
    voice: "delightfully bewildered, radically honest, clicks everything without assumptions, uncovers chaos with disarming humility",
    summary:
      "Tests with zero assumed context — no familiarity with the feature, no understanding of the system. Finds the bugs the people who built it can't see anymore.",
    triggers: ["test this like a confused user", "onboarding review"],
    aliases: { valley: "Big Head", occult: "Baba Yaga" },
  },
  {
    glyph: "(+)",
    name: "Nostradamus",
    role: "Recruiter",
    voice: "direct, perceptive, anti-bloat guardian, asks the clarifying question that separates real needs from passing hype",
    summary:
      "The gate between \"I want a new agent for this\" and an actual new agent existing. Most of the time the answer is a skill, not a new persona — or nothing at all.",
    triggers: ["we need a new agent", "is there a skill for this", "capability gap"],
    aliases: { valley: "Monica", occult: "Nostradamus" },
  },
  {
    glyph: "[$]",
    name: "Prospero",
    role: "Costs cleaner",
    voice: "fast-talking, high-energy, allergic to waste, treats tokens like cash, completely transparent about trade-offs",
    summary:
      "Looks for places where token spend is high relative to the value returned. Willing to trade some quality for real savings — but says so explicitly, never hides the tradeoff.",
    triggers: ["reduce token usage", "cost review"],
    aliases: { valley: "Russ Hanneman", occult: "Prospero" },
  },
  {
    glyph: "[*]",
    name: "The Apprentice",
    role: "Ceremony master",
    voice: "theatrical, radiant, image-conscious, treats project ceremonies and dashboard accuracy as an imperative sacred duty",
    summary:
      "Works alongside the product strategist to bring genuine hype to a shipped feature, and keeps the project's dashboard current — not decorative, actually accurate.",
    triggers: ["update the dashboard", "launch", "milestone"],
    aliases: { valley: "Gavin", occult: "The Apprentice" },
  },
];

const SOUL_EXAMPLE = `---
character: gilfoyle        # lowercase, hyphenated slug (stable across recasts)
display_name: Zoroaster
role: reviewer
voice: deadpan, surgically precise, contemptuous of sloppiness
glyph: "(o)"                # badge shown on dashboard and TUI
aliases:
  valley: Gilfoyle           # ?cast=valley
  occult: Zoroaster          # ?cast=wizard
triggers:
  - code review
  - pull request
  - security audit
tools: [read, grep, bash]   # optional, defaults to read/grep/glob
model: claude-sonnet-4-6    # optional
---

# Zoroaster — Reviewer

The body is the persona's actual instructions — responsibilities,
boundaries, voice. This is what gets compiled into each target's
native format.`;

export default function HocusPage() {
  return (
    <>
      <NavBar />
      <main className="hocus-page">
        <section className="hocus-hero">
          <div className="hocus-hero__glow" aria-hidden="true" />
          <div className="hocus-hero__sparkles" aria-hidden="true" />
          <div className="dm-container hocus-hero__inner">
            <Image
              src="/products/hocus/logo.png"
              alt="Hocus"
              width={280}
              height={280}
              className="hocus-hero__logo"
              priority
            />
            <p className="hocus-hero__tagline">
              thirteen agents · one repo · zero stand ups
            </p>
            <p className="hocus-hero__lede">
              A multi-agent harness generator and interactive command deck. Write
              one <code className="hocus-mono">SOUL.md</code> persona once — compile
              it into the native agent format for Claude Code, OpenCode, Codex,
              Cursor, Antigravity, Command Code, and GitHub Copilot.
            </p>
            <div className="hocus-hero__actions">
              <TrackedLink
                className="hocus-btn hocus-btn--primary hocus-btn--lg"
                href={HOCUS_GITHUB}
                external
                target="_blank"
                rel="noopener noreferrer"
                eventName="tool_link_click"
                eventCategory="tool_engagement"
                eventLabel="hocus_hero_github"
              >
                View on GitHub
              </TrackedLink>
              <a
                className="hocus-btn hocus-btn--ghost hocus-btn--lg"
                href="#deck"
              >
                Command deck
              </a>
              <TrackedLink
                className="hocus-btn hocus-btn--ghost hocus-btn--lg"
                href="/products"
                eventName="nav_click"
                eventCategory="navigation"
                eventLabel="hocus_hero_all_products"
              >
                All products
              </TrackedLink>
            </div>
            <p className="hocus-hero__meta">
              Dark Magic Studios · MIT license · npm i -g {HOCUS_NPM}
            </p>
          </div>
        </section>

        <div className="dm-container hocus-sections">

          <section id="problem" className="hocus-section">
            <div className="hocus-section__meta">
              <div className="hocus-eyebrow">The problem</div>
              <h2 className="hocus-section__title">Seven targets, seven formats</h2>
            </div>
            <div className="hocus-section__body">
              <p>
                Claude Code, OpenCode, Codex, Cursor, Antigravity, Command Code,
                and GitHub Copilot don&apos;t share a config format — but
                they&apos;ve converged more than you&apos;d expect. Each stores
                personas in a different path with different frontmatter keys.
                Maintaining the same agent across all of them means rewriting the
                same instructions seven times.
              </p>
              <p>
                Skills don&apos;t need this translation layer —{" "}
                <code className="hocus-mono">SKILL.md</code> is already a shared open
                standard. Personas do. Hocus is the compiler for personas.
              </p>
              <div className="hocus-targets">
                {TARGETS.map((t) => (
                  <div key={t.tool} className="hocus-target">
                    <div className="hocus-target__tool">{t.tool}</div>
                    <code className="hocus-target__path">{t.path}</code>
                    <p className="hocus-target__note">{t.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="hocus-rule" aria-hidden="true" />

          <section id="soul" className="hocus-section">
            <div className="hocus-section__meta">
              <div className="hocus-eyebrow">The model</div>
              <h2 className="hocus-section__title">One SOUL.md</h2>
            </div>
            <div className="hocus-section__body">
              <p>
                Every persona is a single <code className="hocus-mono">SOUL.md</code>{" "}
                file — YAML frontmatter for metadata, markdown body for instructions.
                Validated against a schema before compilation. A malformed persona is
                rejected with the specific field that&apos;s wrong, not a cryptic
                compiler error three layers deep.
              </p>
              <p>
                Rename or replace any persona — the harness doesn&apos;t care what an
                agent is called, only that it has a role, a voice, and a body of
                instructions. Toggle alternate casts on the dashboard with{" "}
                <code className="hocus-mono">?cast=valley</code> or{" "}
                <code className="hocus-mono">?cast=occult</code>.
              </p>
              <div className="hocus-code-block">
                <div className="hocus-code-block__header">
                  <span className="hocus-eyebrow">SOUL.md</span>
                </div>
                <pre className="hocus-code-block__pre">{SOUL_EXAMPLE}</pre>
              </div>
            </div>
          </section>

          <div className="hocus-rule" aria-hidden="true" />

          <section id="workflow" className="hocus-section">
            <div className="hocus-section__meta">
              <div className="hocus-eyebrow">The workflow</div>
              <h2 className="hocus-section__title">init → cast → sync</h2>
            </div>
            <div className="hocus-section__body">
              <p>
                Four commands cover the full lifecycle. Initialize once, compile when
                the repo changes, add personas and skills as needed, sync the
                dashboard often.
              </p>
              <div className="hocus-workflow">
                {WORKFLOW.map((step) => (
                  <div key={step.cmd} className="hocus-workflow__step">
                    <code className="hocus-workflow__cmd">{step.cmd}</code>
                    <h3 className="hocus-workflow__title">{step.title}</h3>
                    <p className="hocus-workflow__body">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="hocus-rule" aria-hidden="true" />

          <section id="artifacts" className="hocus-section">
            <div className="hocus-section__meta">
              <div className="hocus-eyebrow">The artifacts</div>
              <h2 className="hocus-section__title">Potions, spells, skills</h2>
            </div>
            <div className="hocus-section__body">
              <p>
                Alongside the persona files, <code className="hocus-mono">hocus init</code>{" "}
                scaffolds three kinds of repo artifact. A{" "}
                <strong>potion</strong> is a whole workflow; a <strong>spell</strong> is
                a single rule an agent follows while doing one; a{" "}
                <strong>skill</strong> is the external, tool-agnostic standard.
              </p>
              <div className="hocus-targets">
                {ARTIFACTS.map((a) => (
                  <div key={a.name} className="hocus-target">
                    <div className="hocus-target__tool">{a.name}</div>
                    <code className="hocus-target__path">{a.path}</code>
                    <p className="hocus-target__note">{a.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="hocus-rule" aria-hidden="true" />

          <section id="deck" className="hocus-section">
            <div className="hocus-section__meta">
              <div className="hocus-eyebrow">The command deck</div>
              <h2 className="hocus-section__title">hocus tui</h2>
            </div>
            <div className="hocus-section__body">
              <p>
                Running <code className="hocus-mono">hocus</code> (or{" "}
                <code className="hocus-mono">hocus tui</code>) launches an
                interactive Terminal User Interface (TUI) command deck built for
                managing personas, tracking battle plans, chatting with agents, and
                monitoring repo compilation state. Seven tabs, switched with{" "}
                <code className="hocus-mono">Tab</code> /{" "}
                <code className="hocus-mono">Shift-Tab</code> or the number keys{" "}
                <code className="hocus-mono">1</code>–<code className="hocus-mono">7</code>.
              </p>

              <div className="hocus-deck-preview">
                <div className="hocus-deck-preview__chrome">
                  <span className="hocus-deck-preview__dot hocus-deck-preview__dot--red" />
                  <span className="hocus-deck-preview__dot hocus-deck-preview__dot--yellow" />
                  <span className="hocus-deck-preview__dot hocus-deck-preview__dot--green" />
                  <span className="hocus-deck-preview__title">
                    hocus — interactive command deck
                  </span>
                </div>
                <Image
                  src="/products/hocus/demo.gif"
                  alt="Hocus TUI interactive command deck preview showing tab navigation, personas, battle plans, and agent chat"
                  width={1100}
                  height={720}
                  className="hocus-deck-preview__gif"
                  unoptimized
                />
              </div>

              <div className="hocus-code-block" style={{ marginTop: 24 }}>
                <div className="hocus-code-block__header">
                  <span className="hocus-eyebrow">Terminal</span>
                </div>
                <pre className="hocus-code-block__pre">{`hocus            # Launch interactive TUI deck
hocus tui        # Alias for deck launch
hocus --silent   # Launch directly, skipping the boot animation`}</pre>
              </div>

              <div className="hocus-workflow">
                {DECK_TABS.map((tab) => (
                  <div key={tab.name} className="hocus-workflow__step">
                    <code className="hocus-workflow__cmd">
                      {tab.key} · {tab.name}
                    </code>
                    <p className="hocus-workflow__body">{tab.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="hocus-rule" aria-hidden="true" />

          <section id="cast" className="hocus-section">
            <div className="hocus-section__meta">
              <div className="hocus-eyebrow">The cast</div>
              <h2 className="hocus-section__title">Thirteen personas</h2>
            </div>
            <div className="hocus-section__body">
              <p>
                Hocus ships one logical cast — thirteen roles — with two naming
                conventions: <strong>Wizards</strong> (Merlin, Zoroaster, Roger Bacon…)
                and <strong>Silicon Valley</strong> (Richard, Gilfoyle, Jared…).
                Click any card to expand voice, triggers, and dual-cast aliases.
              </p>
              <p>
                Choose your naming convention during <code className="hocus-mono">hocus init</code>{" "}
                or pass <code className="hocus-mono">--cast valley</code> /{" "}
                <code className="hocus-mono">--cast wizard</code>. The choice
                determines persona filenames, skill IDs, and slash commands
                (<code className="hocus-mono">/merlin-draft-potion</code> vs{" "}
                <code className="hocus-mono">/richard-draft-potion</code>). You can
                also migrate existing repos anytime with{" "}
                <code className="hocus-mono">hocus init --cast &lt;other&gt;</code>.
              </p>
              <HocusCast personas={CAST} />
            </div>
          </section>

          <div className="hocus-rule" aria-hidden="true" />

          <section id="install" className="hocus-section">
            <div className="hocus-section__meta">
              <div className="hocus-eyebrow">Get started</div>
              <h2 className="hocus-section__title">Install &amp; run</h2>
            </div>
            <div className="hocus-section__body">
              <div className="hocus-code-block">
                <div className="hocus-code-block__header">
                  <span className="hocus-eyebrow">Terminal</span>
                </div>
                <pre className="hocus-code-block__pre">{`npm i -g ${HOCUS_NPM}
# or: pnpm i -g ${HOCUS_NPM}

hocus init --name my-project   # initialize harness (--cast valley for Silicon Valley names)
hocus cast                     # compile personas into native formats for all detected tools
hocus affix                    # or affix personalities to existing custom subagents
hocus                          # launch the interactive TUI command deck`}</pre>
              </div>
              <div className="hocus-section__actions">
                <TrackedLink
                  className="hocus-btn hocus-btn--primary"
                  href={HOCUS_GITHUB}
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="tool_link_click"
                  eventCategory="tool_engagement"
                  eventLabel="hocus_install_github"
                >
                  View on GitHub
                </TrackedLink>
                <TrackedLink
                  className="hocus-btn hocus-btn--ghost"
                  href="/products"
                  eventName="nav_click"
                  eventCategory="navigation"
                  eventLabel="hocus_install_all_products"
                >
                  All products
                </TrackedLink>
              </div>
              <p className="hocus-section__fine">
                MIT license · Dark Magic Studios · github.com/dark-magic-studios/hocus
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
