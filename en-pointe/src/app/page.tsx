import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/home";
import { ProductGrid } from "@/components/shop";
import { getFeaturedProducts } from "@/lib/mock-data";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-24 bg-bg-primary">
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

      {/* Brand Story Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="container">
          {/* Intro + Image */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-h2 text-text-primary">
                Where Elegance
                <span className="block text-accent">Meets Expression</span>
              </h2>
              <p className="mt-6 text-text-primary/90 leading-relaxed text-lg">
                EN POINTE isn&apos;t just a hosiery brand — it&apos;s a way of
                thinking about fashion from the ground up. We believe that what
                you wear closest to your skin says the most about who you are.
                Our mission is to give every woman the freedom to express her
                personality, creativity and confidence through pieces that are
                too often treated as an afterthought.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                With several years of experience in the European fashion and
                textile industry, we&apos;ve built something we&apos;re genuinely
                proud of: a brand that refuses to compromise on quality, never
                runs out of ideas, and ships to customers across borders — because
                style doesn&apos;t stop at a country line.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-sm bg-bg-surface flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg-surface to-gold/10" />
              <div className="relative z-10 text-center px-8">
                <p className="font-display text-3xl text-text-primary/20 tracking-widest uppercase">
                  EN POINTE
                </p>
              </div>
            </div>
          </div>

          {/* Six pillars - 2x3 grid */}
          <div className="mt-24 grid gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {/* Luxury Materials */}
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h3 className="font-display text-h3 text-text-primary">
                Luxury Materials
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                Everything starts with what you feel. Italian micro-tulle for
                our sheer range. Scottish cashmere blends for knee-highs that
                wrap you in warmth. Japanese microfiber for a silky matte
                finish. French lace for our signature thigh-highs. We source
                from the best mills in Europe and beyond because you can always
                tell the difference between good and exceptional — especially
                when it&apos;s against your skin.
              </p>
            </div>

            {/* Creative Designs */}
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h3 className="font-display text-h3 text-text-primary">
                Designs That Speak
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                What sets us apart is what you see on our hosiery — and what
                you don&apos;t. Creative prints, hand-drawn fonts woven directly
                into the fabric, geometric patterns, delicate florals, bold
                graphic statements. Every model is a canvas. We offer a rich
                palette of colours — from timeless nudes and blacks to deep
                burgundies, midnight navies and unexpected seasonal tones — so
                that you can match your mood, your outfit, your moment.
              </p>
            </div>

            {/* Express Yourself */}
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h3 className="font-display text-h3 text-text-primary">
                Express Who You Are
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                Fashion is personal. Our collections exist so you never have to
                choose between comfort and self-expression. Whether you gravitate
                toward the understated elegance of our Everyday line, the bold
                energy of our Statement pieces, the barely-there sophistication
                of our Sheer range, or the indulgent softness of our Luxury
                collection — there&apos;s a pair that feels unmistakably you.
                Because the best accessory is the one that lets your personality
                come through.
              </p>
            </div>

            {/* Sizes for Everyone */}
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h3 className="font-display text-h3 text-text-primary">
                Sizes for Every Body
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                Elegance isn&apos;t a size — it&apos;s a feeling. That&apos;s
                why we offer a generous range of sizes across every collection,
                because every woman deserves hosiery that fits beautifully and
                feels effortless. No compromises, no &quot;close enough.&quot;
                Our sizing is precise, our fit is tested extensively, and our
                goal is simple: when you put them on, you shouldn&apos;t have
                to think about them again.
              </p>
            </div>

            {/* International Shipping */}
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h3 className="font-display text-h3 text-text-primary">
                Shop Without Borders
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                EN POINTE ships internationally — because our customers are
                everywhere, and we believe access to quality shouldn&apos;t
                depend on your postcode. Our online shop is designed to make
                browsing and buying feel as luxurious as the products themselves.
                Seamless checkout, secure payment, careful packaging, and
                tracking from our door to yours. We bring the boutique
                experience to your screen, wherever you are.
              </p>
            </div>

            {/* Deals & Community */}
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h3 className="font-display text-h3 text-text-primary">
                Rewards & Offers
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                We love giving back to the women who choose us. That&apos;s why
                we run frequent promotions, seasonal sales, and exclusive offers
                for our subscribers. From early access to new collections to
                surprise discounts throughout the year — staying connected with
                EN POINTE always pays off. Sign up for our newsletter and never
                miss a deal. Premium doesn&apos;t have to mean out of reach.
              </p>
            </div>
          </div>

          {/* Closing tagline */}
          <div className="mt-20 text-center">
            <p className="text-text-muted italic text-lg">
              Crafted in Europe. Shipped worldwide. Worn with confidence.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm font-medium uppercase tracking-wider text-accent hover:underline"
            >
              Learn Our Full Story
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-bg-primary">
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
