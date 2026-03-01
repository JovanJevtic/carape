"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroTextVariants, fadeUpVariants, easeOutExpo } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-primary">
      {/* Decorative gradient circle - cherry & gold */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.5 }}
        className="absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-gold/20 to-accent/15 blur-3xl lg:-right-20 lg:h-[800px] lg:w-[800px]"
      />

      {/* Main content */}
      <div className="container relative flex min-h-screen flex-col justify-center pt-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Text content */}
          <div className="relative z-10">
            {/* Main title */}
            <div className="overflow-hidden">
              <motion.h1
                custom={0}
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                className="text-display leading-none tracking-[0.15em]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span className="block text-text-primary font-normal">EN</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                custom={1}
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
                className="text-display leading-none tracking-[0.15em]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span className="block text-accent font-semibold">POINTE</span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              custom={0.3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-md text-lg text-text-muted"
            >
              Premium women&apos;s socks crafted for the fashion-conscious.
              Elevate every step with European craftsmanship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={0.5}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="/shop"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-gold px-8 text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
              >
                Shop Now
              </a>
              <a
                href="/lookbook"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-gold px-8 text-sm font-medium uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-bg-primary"
              >
                View Lookbook
              </a>
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm bg-bg-surface lg:aspect-[3/4]"
          >
            <Image
              src="/products/hero.jpg"
              alt="EN POINTE - Burgundy lace top thigh-high stockings"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="mb-3 h-px w-12 bg-gold" />
              <p className="text-xs uppercase tracking-widest text-text-muted">
                New Collection
              </p>
              <p className="mt-1 font-display text-xl text-text-primary">
                Spring/Summer 2026
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container flex items-end justify-between">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-wider text-text-muted">
                Premium Socks
                <span className="mx-2 text-accent">·</span>
                Since 2026
              </p>
              <div className="mt-2 h-px w-16 bg-accent" />
            </motion.div>

            {/* Scroll indicator */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-accent"
            >
              Scroll
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
