"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroTextVariants, fadeUpVariants, easeOutExpo } from "@/lib/animations";

export function LookbookHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-primary snap-start">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/products/hero.jpg"
          alt="EN POINTE Lookbook - Spring/Summer 2026"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative flex min-h-screen flex-col items-center justify-center text-center">
        {/* Season tag */}
        <motion.p
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-xs uppercase tracking-[0.3em] text-gold"
        >
          Spring/Summer 2026
        </motion.p>

        {/* Title */}
        <div className="mt-6 overflow-hidden">
          <motion.h1
            custom={0}
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="text-display leading-none tracking-[0.2em]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="text-text-primary">LOOKBOOK</span>
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          custom={0.4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-lg text-lg text-text-muted italic font-display"
        >
          Four curated collections. One vision of modern elegance.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.8 }}
          className="mt-8 h-px w-24 bg-gold origin-center"
        />
      </div>

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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-accent"
      >
        Explore
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
