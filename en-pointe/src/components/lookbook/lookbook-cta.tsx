"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cinematicRevealVariants } from "@/lib/animations";

export function LookbookCta() {
  return (
    <section className="py-32 bg-bg-secondary snap-start">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          {/* Decorative line */}
          <motion.div
            variants={cinematicRevealVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-8 h-px w-16 bg-gold"
          />

          {/* Title */}
          <motion.h2
            variants={cinematicRevealVariants}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl text-text-primary"
          >
            Explore the Full Collection
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={cinematicRevealVariants}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-text-muted"
          >
            Discover every style, every texture, every detail — crafted for the woman who knows what she wants.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={cinematicRevealVariants}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-gold px-10 text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
            >
              Shop All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-text-muted/30 px-10 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
