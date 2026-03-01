import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind EN POINTE — premium women's hosiery crafted in Europe with luxury materials and creative design.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl text-center">
          <p className="text-sm uppercase tracking-widest text-accent mb-4">
            Our Story
          </p>
          <h1 className="font-display text-h1 text-text-primary">
            Fashion Starts at
            <span className="block text-accent">the Ground Up</span>
          </h1>
          <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            EN POINTE was built on a conviction that hosiery deserves the same
            attention, creativity and craftsmanship as any other piece in your
            wardrobe. We&apos;re here to prove that what you wear closest to
            your skin can be the most expressive thing you own.
          </p>
        </div>
      </section>

      {/* Decorative break */}
      <section className="container max-w-5xl">
        <div className="relative aspect-[21/9] overflow-hidden rounded-sm bg-bg-surface flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-bg-surface to-gold/10" />
          <div className="relative z-10 flex items-center gap-6">
            <div className="h-px w-16 bg-accent" />
            <p className="font-display text-xl text-text-muted tracking-widest uppercase">
              Crafted in Europe
            </p>
            <div className="h-px w-16 bg-accent" />
          </div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h2 className="font-display text-h2 text-text-primary">
                How It Started
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-text-muted leading-relaxed">
                It started the way most honest ideas do — out of frustration.
                We couldn&apos;t find hosiery that felt as good as it looked.
                Everything on the market was either cheap and disposable, or
                overpriced without the creativity to match. There was nothing
                in between. Nothing for the woman who cares about detail but
                refuses to be boring.
              </p>
              <p className="text-text-muted leading-relaxed">
                So we built it ourselves. We spent our first two years not
                selling a single product — just researching, visiting mills,
                testing fabrics, and learning the craft from textile artisans
                who&apos;d been doing this for decades. By the time our first
                collection launched, every stitch had been questioned, every
                material hand-selected, every design rethought at least twice.
              </p>
              <p className="text-text-muted leading-relaxed">
                Several years later, that obsession hasn&apos;t faded. If
                anything, it&apos;s sharper. We&apos;ve grown from a small
                workshop idea into an international brand that ships across
                borders — but every pair still goes through the same rigorous
                standard we set on day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Full width cards */}
      <section className="py-20 lg:py-28 bg-bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-h2 text-text-primary">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Every detail is intentional. From the materials we source to the
              way your order arrives at your door.
            </p>
          </div>

          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-bg-surface/30 rounded-sm overflow-hidden">
            {/* Luxury Materials */}
            <div className="bg-bg-secondary p-8 lg:p-10">
              <span className="text-2xl mb-4 block">◇</span>
              <h3 className="font-display text-xl text-text-primary mb-3">
                Luxury Materials
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Italian micro-tulle for our sheer range. Scottish cashmere
                blends for our knee-highs. Japanese microfiber for a silky matte
                finish. French lace with silicone grip for thigh-highs. We
                source from the finest mills in Europe and Japan because you
                can always feel the difference.
              </p>
            </div>

            {/* Creative Fonts & Patterns */}
            <div className="bg-bg-secondary p-8 lg:p-10">
              <span className="text-2xl mb-4 block">✦</span>
              <h3 className="font-display text-xl text-text-primary mb-3">
                Creative Designs & Fonts
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Hand-drawn typographic elements woven directly into the fabric.
                Geometric patterns, delicate florals, bold graphic statements.
                Every model is a canvas for creative expression. Our design
                team treats each pair as a piece of wearable art — never
                generic, always intentional.
              </p>
            </div>

            {/* Colour Palette */}
            <div className="bg-bg-secondary p-8 lg:p-10">
              <span className="text-2xl mb-4 block">◎</span>
              <h3 className="font-display text-xl text-text-primary mb-3">
                Rich Colour Palette
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                From timeless nudes and classic blacks to deep burgundies,
                midnight navies, and unexpected seasonal tones. We offer a rich
                spectrum of colours so you can match your mood, your outfit,
                your moment. Every shade is tested to stay true wash after wash.
              </p>
            </div>

            {/* Size Range */}
            <div className="bg-bg-secondary p-8 lg:p-10">
              <span className="text-2xl mb-4 block">⊹</span>
              <h3 className="font-display text-xl text-text-primary mb-3">
                Sizes for Every Body
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Elegance isn&apos;t a size — it&apos;s a feeling. We offer a
                generous range of sizes across every collection. Our sizing is
                precise, our fit extensively tested, and our goal simple: when
                you put them on, you shouldn&apos;t have to think about them
                again. No compromises.
              </p>
            </div>

            {/* International */}
            <div className="bg-bg-secondary p-8 lg:p-10">
              <span className="text-2xl mb-4 block">◈</span>
              <h3 className="font-display text-xl text-text-primary mb-3">
                International Shipping
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Style doesn&apos;t stop at a border. We ship across Europe and
                beyond — seamless checkout, secure payment, careful packaging,
                tracking from our door to yours. Our online shop is designed to
                feel as luxurious as the products themselves, wherever you are.
              </p>
            </div>

            {/* Offers */}
            <div className="bg-bg-secondary p-8 lg:p-10">
              <span className="text-2xl mb-4 block">♦</span>
              <h3 className="font-display text-xl text-text-primary mb-3">
                Frequent Offers & Sales
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Premium doesn&apos;t mean out of reach. We run frequent
                promotions, seasonal sales, and exclusive subscriber-only
                offers. Early access to new collections, surprise discounts
                throughout the year — staying connected with EN POINTE always
                pays off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-4 h-px w-12 bg-accent" />
              <h2 className="font-display text-h2 text-text-primary">
                Our Philosophy
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-text-muted leading-relaxed">
                We believe fashion should let you be yourself — loudly or
                quietly, depending on the day. Our Everyday line is for the
                mornings when you want clean lines and invisible seams.
                Statement is for the nights when you want to turn heads.
                Sheer is for the moments that call for barely-there
                sophistication. And Luxury is for when nothing but the
                softest, most indulgent fabric will do.
              </p>
              <p className="text-text-muted leading-relaxed">
                Every collection is designed to give you options — not
                overwhelm you with them. We&apos;d rather make fewer things
                exceptionally well than flood the market with mediocrity.
                That&apos;s why we do small-batch production, hand-inspected
                quality, and maintain direct relationships with every atelier
                we work with.
              </p>
              <p className="text-text-primary/90 leading-relaxed italic">
                From our workshop partners in Milan to our lace suppliers in
                Lyon — we know every hand that shapes our product. That&apos;s
                not just a business choice. It&apos;s our standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-secondary">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-h2 text-text-primary">
            Ready to Experience the Difference?
          </h2>
          <p className="mt-4 text-text-muted">
            Browse our collections and find the pair that feels unmistakably you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-gold px-8 text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-text-muted px-8 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </Link>
          </div>
          <p className="mt-6 text-text-muted italic text-sm">
            Crafted in Europe. Shipped worldwide. Worn with confidence.
          </p>
        </div>
      </section>
    </>
  );
}
