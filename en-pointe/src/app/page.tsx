import Link from "next/link";
import { HeroSection } from "@/components/home";
import { LookbookTeaser } from "@/components/home/lookbook-teaser";
import { ProductGrid } from "@/components/shop";
import { getFeaturedProducts } from "@/lib/mock-data";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-20 sm:py-24 bg-bg-primary">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-h2 text-text-primary">
              Featured Collection
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Discover our most loved styles, crafted with premium materials
              for ultimate comfort and elegance.
            </p>
          </div>

          {/* Product grid */}
          <div className="mt-12">
            <ProductGrid products={featuredProducts} columns={4} variant="simple" />
          </div>

          {/* View all button */}
          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-text-muted px-8 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Lookbook Teaser */}
      <LookbookTeaser />

      {/* Newsletter Section */}
      <section className="py-20 sm:py-24 bg-bg-primary">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-h2 text-text-primary">
              Stay in Touch
            </h2>
            <p className="mt-4 text-text-muted">
              Subscribe to receive exclusive offers, early access to new
              collections, and 10% off your first order.
            </p>
            <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-sm border border-text-muted/30 bg-transparent px-4 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:max-w-xs"
              />
              <button
                type="submit"
                className="h-12 rounded-sm bg-accent px-8 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
