import { Terminal, AppWindow, Gamepad2 } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { BUILDING, FREE_TOOLS, COMING_SOON, HOME_LEADING } from "@/lib/products";

const PILLARS = [
  { Icon: Terminal, label: "Developer tools & agent harnesses" },
  { Icon: AppWindow, label: "Apps & web software" },
  { Icon: Gamepad2, label: "Games & game systems" },
];

const LEADING_SLUGS = new Set(HOME_LEADING.map((p) => p.slug));

const LINEUP: { heading: string; items: typeof HOME_LEADING; lead?: boolean }[] = [
  { heading: "Leading", items: HOME_LEADING, lead: true },
  {
    heading: "Building",
    items: BUILDING.filter((p) => !LEADING_SLUGS.has(p.slug)),
  },
  {
    heading: "Free tools",
    items: FREE_TOOLS.filter((p) => !LEADING_SLUGS.has(p.slug)),
  },
  { heading: "Coming", items: COMING_SOON },
];

export default function HomeTeasers() {
  return (
    <section className="dm-teasers" id="overview" aria-labelledby="overview-heading">
      <h2 id="overview-heading" className="dm-visually-hidden">
        The studio at a glance
      </h2>

      <div className="dm-teasers__grid">
        <article className="dm-teaser">
          <div className="dm-eyebrow">— What we do</div>
          <h3 className="dm-teaser__title">Three kinds of work.</h3>
          <p className="dm-teaser__lede">
            Developer tools, apps, and game systems. Mostly for ourselves — and a
            limited amount of client work in the same three areas.
          </p>
          <ul className="dm-teaser__list" role="list">
            {PILLARS.map((p) => (
              <li key={p.label} className="dm-teaser__item">
                <p.Icon className="dm-teaser__glyph" aria-hidden="true" />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
          <TrackedLink
            className="dm-teaser__link"
            href="/services"
            eventName="nav_click"
            eventCategory="navigation"
            eventLabel="teaser_services"
          >
            How we work, and how to hire us →
          </TrackedLink>
        </article>

        <article className="dm-teaser">
          <div className="dm-eyebrow">— What we&apos;re building</div>
          <h3 className="dm-teaser__title">hocus &amp; gitmoire first.</h3>
          <p className="dm-teaser__lede">
            Everything else — Vitreus, Signum, Forgeboard, Pulsebook — follows behind
            the two we ship hardest on. No dates we cannot keep.
          </p>
          <ul className="dm-teaser__lineup" role="list">
            {LINEUP.map((group) => (
              <li key={group.heading} className="dm-teaser__lineup-group">
                <span className="dm-teaser__lineup-head">{group.heading}</span>
                <span className="dm-teaser__lineup-names">
                  {group.items.map((item) => (
                    <span
                      key={item.slug}
                      className={`dm-teaser__chip${group.lead ? " dm-teaser__chip--lead" : ""}`}
                    >
                      {item.name}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <TrackedLink
            className="dm-teaser__link"
            href="/products"
            eventName="nav_click"
            eventCategory="navigation"
            eventLabel="teaser_products"
          >
            See all five →
          </TrackedLink>
        </article>
      </div>
    </section>
  );
}
