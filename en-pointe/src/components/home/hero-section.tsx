"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

const heroImages = [
  { src: "/products/hero.jpg", alt: "EN POINTE - Premium hosiery" },
  { src: "/products/lace-top-thigh-high.jpg", alt: "Lace top thigh-high stockings" },
  { src: "/products/pexels-1666600.jpg", alt: "EN POINTE editorial" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scene 1: Logo reveal (0% - 30% scroll)
  const logoScale = useTransform(scrollYProgress, [0, 0.15], [1.2, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const firstImageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1.3]);
  const firstOverlayOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0.4, 0.8]);

  // Scene 2: First image moves up, tagline appears (30% - 60%)
  const firstImageY = useTransform(scrollYProgress, [0.25, 0.55], ["0%", "-100%"]);
  const taglineOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const taglineY = useTransform(scrollYProgress, [0.35, 0.45], [60, 0]);
  const secondImageScale = useTransform(scrollYProgress, [0.25, 0.7], [1.15, 1.3]);
  const secondOverlayOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0.3, 0.65]);

  // Scene 3: Second image moves, CTA appears (60% - 100%)
  const secondImageY = useTransform(scrollYProgress, [0.55, 0.8], ["0%", "-100%"]);
  const ctaOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);
  const thirdImageScale = useTransform(scrollYProgress, [0.55, 1], [1.1, 1.25]);

  // Persistent logo across scenes
  const persistentLogoOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.15, 0.85, 0.95],
    [0, 1, 1, 0]
  );

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Scene 3 - Bottom layer (third image + CTA) */}
        <motion.div className="absolute inset-0" style={{ scale: thirdImageScale }}>
          <Image
            src={heroImages[2].src}
            alt={heroImages[2].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-bg-primary/60" />

        {/* Scene 3 CTA content */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: ctaOpacity, y: ctaY }}
        >
          <div className="text-center px-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold mb-4 sm:mb-6">
              Spring / Summer 2026
            </p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl text-text-primary leading-tight">
              Elevate Every Step
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-text-muted max-w-md mx-auto leading-relaxed">
              Premium hosiery crafted with European artistry for the fashion-conscious woman.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-sm bg-gold px-6 sm:px-8 text-xs sm:text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
              >
                Shop Now
              </Link>
              <Link
                href="/lookbook"
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-sm border border-gold/60 px-6 sm:px-8 text-xs sm:text-sm font-medium uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-bg-primary"
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scene 2 - Middle layer (second image + tagline) */}
        <motion.div
          className="absolute inset-0 z-20"
          style={{ y: secondImageY }}
        >
          <motion.div className="absolute inset-0" style={{ scale: secondImageScale }}>
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-bg-primary"
            style={{ opacity: secondOverlayOpacity }}
          />

          {/* Tagline */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: taglineOpacity, y: taglineY }}
          >
            <div className="text-center px-6">
              <div className="h-px w-16 bg-gold mx-auto mb-6 sm:mb-8" />
              <p className="font-display text-2xl sm:text-4xl lg:text-5xl text-text-primary leading-snug italic max-w-3xl">
                &ldquo;Where elegance meets expression&rdquo;
              </p>
              <div className="h-px w-16 bg-gold mx-auto mt-6 sm:mt-8" />
            </div>
          </motion.div>
        </motion.div>

        {/* Scene 1 - Top layer (first image + logo) */}
        <motion.div
          className="absolute inset-0 z-30"
          style={{ y: firstImageY }}
        >
          <motion.div className="absolute inset-0" style={{ scale: firstImageScale }}>
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-bg-primary"
            style={{ opacity: firstOverlayOpacity }}
          />

          {/* Initial logo reveal */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ scale: logoScale, opacity: logoOpacity }}
          >
            <div className="text-center">
              <h1
                className="text-6xl sm:text-8xl lg:text-[10rem] font-semibold tracking-[0.2em] leading-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span className="text-text-primary">EN</span>
                <br />
                <span className="text-accent">POINTE</span>
              </h1>
            </div>
          </motion.div>
        </motion.div>

        {/* Persistent small logo (visible across scenes 2 & 3) */}
        <motion.div
          className="absolute top-6 left-0 right-0 z-40 text-center pointer-events-none"
          style={{ opacity: persistentLogoOpacity }}
        >
          <p
            className="text-xs sm:text-sm tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="text-text-primary/60">EN </span>
            <span className="text-accent/60">POINTE</span>
          </p>
        </motion.div>

        {/* Scroll indicator - only on first scene */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 z-40 text-center"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2"
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-text-muted/70">
              Scroll to discover
            </p>
            <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
