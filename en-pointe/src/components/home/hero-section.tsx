"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

// Scene 1 - Editorial mix: different sizes, film strip feel
const scene1Images = [
  { src: "/products/hero.jpg", alt: "EN POINTE editorial", cls: "w-[42vw] sm:w-[30vw] h-[55vh] sm:h-[65vh] left-[3%] top-[12%]" },
  { src: "/products/sheer-elegance-15.webp", alt: "Sheer elegance stockings", cls: "w-[28vw] sm:w-[20vw] h-[35vh] sm:h-[42vh] right-[6%] top-[6%]" },
  { src: "/products/control-top-shaper.jpg", alt: "Floral pattern tights", cls: "w-[24vw] sm:w-[17vw] h-[28vh] sm:h-[32vh] right-[18%] bottom-[8%]" },
];

// Scene 2 - New editorial images
const scene2Images = [
  { src: "/products/classic-ribbed-ankle.jpg", alt: "Lace ankle socks editorial", cls: "w-[38vw] sm:w-[26vw] h-[50vh] sm:h-[58vh] right-[4%] top-[10%]" },
  { src: "/products/pexels-1666600.jpg", alt: "Floral pattern stockings", cls: "w-[26vw] sm:w-[18vw] h-[32vh] sm:h-[38vh] left-[6%] bottom-[10%]" },
  { src: "/products/fishnet-statement.png", alt: "Diamond fishnet tights", cls: "w-[22vw] sm:w-[16vw] h-[28vh] sm:h-[33vh] left-[8%] top-[8%]" },
];

// Scene 3 - CTA scene images
const scene3Images = [
  { src: "/products/cashmere-knee-high.jpg", alt: "Nude lace tights editorial", cls: "w-[36vw] sm:w-[27vw] h-[50vh] sm:h-[56vh] left-[5%] top-[8%]" },
  { src: "/products/pexels-8511324.jpg", alt: "Black stockings with heels", cls: "w-[30vw] sm:w-[22vw] h-[38vh] sm:h-[44vh] right-[4%] top-[6%]" },
  { src: "/products/bamboo-everyday.png", alt: "Chevron pattern tights", cls: "w-[22vw] sm:w-[16vw] h-[26vh] sm:h-[30vh] right-[14%] bottom-[8%]" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ===== SCENE 1 (0% - 35%) =====
  const logoOpacity = useTransform(scrollYProgress, [0, 0.28, 0.35], [1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.08], [1.4, 1]);
  const logoY = useTransform(scrollYProgress, [0.25, 0.35], [0, -80]);

  const s1o = useTransform(scrollYProgress, [0, 0.27, 0.35], [1, 1, 0]);
  const s1x0 = useTransform(scrollYProgress, [0.05, 0.35], ["0%", "-130%"]);
  const s1x1 = useTransform(scrollYProgress, [0.05, 0.35], ["0%", "130%"]);
  const s1x2 = useTransform(scrollYProgress, [0.05, 0.35], ["0%", "110%"]);
  const s1y0 = useTransform(scrollYProgress, [0.05, 0.35], ["0%", "-25%"]);
  const s1y1 = useTransform(scrollYProgress, [0.05, 0.35], ["0%", "-45%"]);
  const s1y2 = useTransform(scrollYProgress, [0.05, 0.35], ["0%", "70%"]);
  const s1xs = [s1x0, s1x1, s1x2];
  const s1ys = [s1y0, s1y1, s1y2];

  // ===== SCENE 2 (30% - 65%) =====
  const s2o = useTransform(scrollYProgress, [0.28, 0.38, 0.56, 0.64], [0, 1, 1, 0]);
  const s2x0 = useTransform(scrollYProgress, [0.28, 0.4, 0.56, 0.64], ["90%", "0%", "0%", "-110%"]);
  const s2x1 = useTransform(scrollYProgress, [0.28, 0.42, 0.56, 0.64], ["-90%", "0%", "0%", "100%"]);
  const s2x2 = useTransform(scrollYProgress, [0.28, 0.44, 0.56, 0.64], ["-70%", "0%", "0%", "-90%"]);
  const s2y0 = useTransform(scrollYProgress, [0.56, 0.64], ["0%", "-35%"]);
  const s2y1 = useTransform(scrollYProgress, [0.56, 0.64], ["0%", "45%"]);
  const s2y2 = useTransform(scrollYProgress, [0.56, 0.64], ["0%", "-30%"]);
  const s2xs = [s2x0, s2x1, s2x2];
  const s2ys = [s2y0, s2y1, s2y2];

  // Tagline
  const tagOpacity = useTransform(scrollYProgress, [0.36, 0.43, 0.54, 0.6], [0, 1, 1, 0]);
  const tagY = useTransform(scrollYProgress, [0.36, 0.43], [50, 0]);

  // ===== SCENE 3 (62% - 100%) =====
  const s3o = useTransform(scrollYProgress, [0.6, 0.7, 0.95, 1], [0, 1, 1, 1]);
  const s3x0 = useTransform(scrollYProgress, [0.6, 0.72], ["-80%", "0%"]);
  const s3x1 = useTransform(scrollYProgress, [0.6, 0.74], ["80%", "0%"]);
  const s3x2 = useTransform(scrollYProgress, [0.6, 0.76], ["70%", "0%"]);
  const s3y0 = useTransform(scrollYProgress, [0.6, 0.72], ["35%", "0%"]);
  const s3y1 = useTransform(scrollYProgress, [0.6, 0.74], ["-25%", "0%"]);
  const s3y2 = useTransform(scrollYProgress, [0.6, 0.76], ["30%", "0%"]);
  const s3xs = [s3x0, s3x1, s3x2];
  const s3ys = [s3y0, s3y1, s3y2];

  // CTA
  const ctaOpacity = useTransform(scrollYProgress, [0.73, 0.82], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.73, 0.82], [60, 0]);
  const ctaScale = useTransform(scrollYProgress, [0.73, 0.82], [0.92, 1]);

  // Scroll indicator
  const scrollInd = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Small persistent logo
  const smallLogo = useTransform(scrollYProgress, [0.35, 0.42, 0.92, 1], [0, 0.5, 0.5, 0]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg-primary">

        {/* ========== SCENE 3 (bottom layer) ========== */}
        <motion.div className="absolute inset-0" style={{ opacity: s3o }}>
          {scene3Images.map((img, i) => (
            <motion.div
              key={`s3-${i}`}
              className={`absolute overflow-hidden rounded-sm shadow-2xl ${img.cls}`}
              style={{ x: s3xs[i], y: s3ys[i] }}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="35vw" />
              <div className="absolute inset-0 bg-bg-primary/15" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-bg-primary/55" />
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ opacity: ctaOpacity, y: ctaY, scale: ctaScale }}
          >
            <div className="text-center px-6">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold mb-3 sm:mb-5">
                Spring / Summer 2026
              </p>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl text-text-primary leading-tight">
                Elevate Every Step
              </h2>
              <p className="mt-4 sm:mt-6 text-xs sm:text-base text-text-muted max-w-md mx-auto leading-relaxed">
                Premium hosiery crafted with European artistry for the fashion-conscious woman.
              </p>
              <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/shop"
                  className="inline-flex h-10 sm:h-12 items-center justify-center rounded-sm bg-gold px-5 sm:px-8 text-[10px] sm:text-sm font-medium uppercase tracking-wider text-bg-primary transition-all hover:bg-gold-hover hover:scale-[1.03]"
                >
                  Shop Now
                </Link>
                <Link
                  href="/lookbook"
                  className="inline-flex h-10 sm:h-12 items-center justify-center rounded-sm border border-gold/60 px-5 sm:px-8 text-[10px] sm:text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-bg-primary hover:scale-[1.03]"
                >
                  View Lookbook
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ========== SCENE 2 (middle layer) ========== */}
        <motion.div className="absolute inset-0 z-10" style={{ opacity: s2o }}>
          {scene2Images.map((img, i) => (
            <motion.div
              key={`s2-${i}`}
              className={`absolute overflow-hidden rounded-sm shadow-2xl ${img.cls}`}
              style={{ x: s2xs[i], y: s2ys[i] }}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="30vw" />
              <div className="absolute inset-0 bg-bg-primary/15" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-bg-primary/50" />
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ opacity: tagOpacity, y: tagY }}
          >
            <div className="text-center px-6">
              <div className="h-px w-12 sm:w-16 bg-gold mx-auto mb-5 sm:mb-8" />
              <p className="font-display text-xl sm:text-4xl lg:text-5xl text-text-primary leading-snug italic max-w-3xl">
                &ldquo;Where elegance meets expression&rdquo;
              </p>
              <div className="h-px w-12 sm:w-16 bg-gold mx-auto mt-5 sm:mt-8" />
            </div>
          </motion.div>
        </motion.div>

        {/* ========== SCENE 1 (top layer) ========== */}
        <motion.div className="absolute inset-0 z-20" style={{ opacity: s1o }}>
          {scene1Images.map((img, i) => (
            <motion.div
              key={`s1-${i}`}
              className={`absolute overflow-hidden rounded-sm shadow-2xl ${img.cls}`}
              style={{ x: s1xs[i], y: s1ys[i] }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="42vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-bg-primary/10" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-bg-primary/40" />

          {/* Logo - dramatic entrance */}
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ opacity: logoOpacity, scale: logoScale, y: logoY }}
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOutExpo, delay: 0.3 }}
              >
                <h1
                  className="text-5xl sm:text-7xl lg:text-[9rem] font-semibold tracking-[0.15em] sm:tracking-[0.2em] leading-none"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  <span className="text-text-primary">EN</span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOutExpo, delay: 0.5 }}
              >
                <h1
                  className="text-5xl sm:text-7xl lg:text-[9rem] font-semibold tracking-[0.15em] sm:tracking-[0.2em] leading-none"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  <span className="text-accent">POINTE</span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.9 }}
                className="h-px w-32 sm:w-48 bg-gold/50 mx-auto mt-4 sm:mt-6 origin-center"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-3 sm:mt-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-text-muted/70"
              >
                Premium Hosiery
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Small persistent logo */}
        <motion.div
          className="absolute top-6 left-0 right-0 z-40 text-center pointer-events-none"
          style={{ opacity: smallLogo }}
        >
          <p
            className="text-xs sm:text-sm tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="text-text-primary/60">EN </span>
            <span className="text-accent/60">POINTE</span>
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 z-40 text-center"
          style={{ opacity: scrollInd }}
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
