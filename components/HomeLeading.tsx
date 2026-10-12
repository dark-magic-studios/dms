import ProductCard from "@/components/ProductCard";
import TrackedLink from "@/components/TrackedLink";
import { HOME_LEADING } from "@/lib/products";

export default function HomeLeading() {
  return (
    <section className="dm-home-leading" id="leading" aria-labelledby="leading-heading">
      <div className="dm-container">
        <div className="dm-home-leading__head">
          <div className="dm-eyebrow">— Shipping now</div>
          <h2 id="leading-heading" className="dm-home-leading__title">
            hocus &amp; gitmoire
          </h2>
          <p className="dm-home-leading__lede">
            Our agent harness and our native Git client — live, free where it counts, and
            the two places we want you to start.
          </p>
        </div>
        <div className="dm-product-gallery__grid">
          {HOME_LEADING.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <TrackedLink
          className="dm-home-leading__more"
          href="/products"
          eventName="nav_click"
          eventCategory="navigation"
          eventLabel="home_leading_all_products"
        >
          Full product list →
        </TrackedLink>
      </div>
    </section>
  );
}
