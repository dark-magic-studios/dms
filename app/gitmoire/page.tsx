import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "gitmoire — Everyday Git, forged in Rust · Dark Magic Studios",
  description:
    "gitmoire is a tiny 14 MB native desktop Git client built on Rust and libgit2. Zero telemetry, zero accounts. Its home is now gitmoire.dev.",
  alternates: { canonical: "https://gitmoire.dev" },
  openGraph: {
    title: "gitmoire — Everyday Git, forged in Rust",
    description:
      "14 MB · Zero telemetry · 100k commits smoothly. Now living at gitmoire.dev.",
    images: ["/products/gitmoire/mark.png"],
  },
};

const GITMOIRE_HOME = "https://gitmoire.dev";
const GITHUB_REPO = "https://github.com/dark-magic-studios/gitmoire";

const POINTS = [
  {
    label: "Tiny & native",
    body: "14 MB bundle, ~40 MB idle RAM. Compiled Rust on Tauri v2 with vendored libgit2 — no Electron, no fan noise.",
  },
  {
    label: "Built for everyday Git",
    body: "Virtualized 100k-commit graph, surgical diffs and staging, visual conflicts, worktrees, and a keyboard-first palette.",
  },
  {
    label: "Private by construction",
    body: "Zero telemetry, zero accounts, zero cloud. Tokens live in your OS keyring; identities stay repo-local.",
  },
];

export default function GitmoirePage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="dm-subpage-hero">
          <div className="dm-subpage-hero__veil" aria-hidden="true" />
          <div className="dm-container dm-subpage-hero__inner">
            <Image
              src="/products/gitmoire/mark.png"
              alt=""
              width={512}
              height={512}
              className="dm-subpage-hero__mark"
              priority
            />
            <div className="dm-eyebrow">gitmoire · Free · MIT</div>
            <h1 className="dm-subpage-hero__title">
              Everyday Git,
              <br />
              forged in Rust.
            </h1>
            <p className="dm-subpage-hero__lede">
              gitmoire is our tiny native desktop Git client — fast, local, and
              telemetry-free. It has grown into its own home at{" "}
              <strong>gitmoire.dev</strong>, with downloads, docs, and the
              interactive tour.
            </p>
            <div className="dm-product-tools" aria-label="gitmoire at a glance">
              {["Rust", "Tauri v2", "libgit2", "macOS", "Windows", "Linux"].map(
                (tag) => (
                  <span key={tag} className="dm-product-tool">
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div
              className="dm-veil-section__actions"
              style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <TrackedLink
                className="dm-btn dm-btn--primary"
                href={GITMOIRE_HOME}
                external
                target="_blank"
                rel="noopener noreferrer"
                eventName="nav_click"
                eventCategory="navigation"
                eventLabel="gitmoire_intro_home"
              >
                Visit gitmoire.dev →
              </TrackedLink>
              <TrackedLink
                className="dm-btn dm-btn--ghost"
                href={GITHUB_REPO}
                external
                target="_blank"
                rel="noopener noreferrer"
                eventName="tool_link_click"
                eventCategory="tool_engagement"
                eventLabel="github_gitmoire_intro"
              >
                View on GitHub
              </TrackedLink>
            </div>
          </div>
        </section>

        <div className="dm-container dm-veil-sections">
          <section id="idea" className="dm-veil-section">
            <div className="dm-veil-section__meta">
              <div className="dm-eyebrow">The short version</div>
              <h2 className="dm-veil-section__title">What it is</h2>
            </div>
            <div className="dm-veil-section__body">
              <div className="dm-spec-list">
                {POINTS.map((item) => (
                  <div key={item.label} className="dm-spec">
                    <div className="dm-spec__label">{item.label}</div>
                    <p className="dm-spec__body">{item.body}</p>
                  </div>
                ))}
              </div>
              <p>
                Everything else — screenshots, downloads for macOS, Windows, and
                Linux, and the full feature list — lives on the product site.
              </p>
              <div className="dm-veil-section__actions">
                <TrackedLink
                  className="dm-btn dm-btn--primary"
                  href={GITMOIRE_HOME}
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="nav_click"
                  eventCategory="navigation"
                  eventLabel="gitmoire_intro_body"
                >
                  Continue to gitmoire.dev →
                </TrackedLink>
                <TrackedLink
                  className="dm-btn dm-btn--ghost"
                  href="/products"
                  eventName="nav_click"
                  eventCategory="navigation"
                  eventLabel="gitmoire_intro_all_products"
                >
                  All products →
                </TrackedLink>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
