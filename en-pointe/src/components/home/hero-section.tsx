"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

// Scene 1 images - different sizes, editorial layout
const scene1Images = [
  { src: "/products/hero.jpg", alt: "EN POINTE hero", className: "w-[45vw] h-[65vh] sm:w-[35vw] sm:h-[70vh] left-[5%] top-[15%]" },
  { src: "/products/lace-top-thigh-high.jpg", alt: "Lace top thigh-highs", className: "w-[30vw] h-[40vh] sm:w-[22vw] sm:h-[45vh] right-[8%] top-[8%]" },
  { src: "/products/classic-ribbed-ankle.jpg", alt: "Classic ribbed ankle", className: "w-[25vw] h-[30vh] sm:w-[18vw] sm:h-[35vh] right-[15%] bottom-[10%]" },
];

// Scene 2 images
const scene2Images = [
  { src: "/products/pexels-1666600.jpg", alt: "Editorial fashion", className: "w-[35vw] h-[55vh] sm:w-[28vw] sm:h-[60vh] right-[5%] top-[12%]" },
  { src: "/products/opaque-matte-60.png", alt: "Opaque matte stockings", className: "w-[28vw] h-[38vh] sm:w-[20vw] sm:h-[42vh] left-[8%] bottom-[12%]" },
  { src: "/products/fishnet-statement.png", alt: "Fishnet statement", className: "w-[22vw] h-[30vh] sm:w-[17vw] sm:h-[35vh] left-[10%] top-[10%]" },
];

// Scene 3 images
const scene3Images = [
  { src: "/products/pexels-8511324.jpg", alt: "EN POINTE editorial", className: "w-[40vw] h-[55vh] sm:w-[30vw] sm:h-[60vh] left-[8%] top-[10%]" },
  { src: "/products/cashmere-knee-high.jpg", alt: "Cashmere knee-highs", className: "w-[30vw] h-[40vh] sm:w-[24vw] sm:h-[45vh] right-[5%] top-[8%]" },
  { src: "/products/sheer-elegance-15.webp", alt: "Sheer elegance", className: "w-[25vw] h-[32vh] sm:w-[18vw] sm:h-[35vh] right-[12%] bottom-[8%]" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // === SCENE 1 (0% - 35%) ===
  // Logo
  const logoOpacity = useTransform(scrollYProgress, [0, 0.06, 0.28, 0.35], [0, 1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.08], [1.3, 1]);
  const logoY = useTransform(scrollYProgress, [0.25, 0.35], [0, -60]);

  // Scene 1 images - film strip movement (drift right as you scroll)
  const s1Img1X = useTransform(scrollYProgress, [0, 0.35], ["0%", "-120%"]);
  const s1Img1Y = useTransform(scrollYProgress, [0, 0.35], ["0%", "-30%"]);
  const s1Img2X = useTransform(scrollYProgress, [0, 0.35], ["0%", "120%"]);
  const s1Img2Y = useTransform(scrollYProgress, [0, 0.35], ["0%", "-50%"]);
  const s1Img3X = useTransform(scrollYProgress, [0, 0.35], ["0%", "100%"]);
  const s1Img3Y = useTransform(scrollYProgress, [0, 0.35], ["0%", "80%"]);
  const s1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  // Scene 1 images initial entrance
  const s1Enter1 = useTransform(scrollYProgress, [0, 0.05], ["30%", "0%"]);
  const s1Enter2 = useTransform(scrollYProgress, [0, 0.06], ["-30%", "0%"]);
  const s1Enter3 = useTransform(scrollYProgress, [0, 0.07], ["40%", "0%"]);
  const s1EnterOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // === SCENE 2 (30% - 65%) ===
  const s2Opacity = useTransform(scrollYProgress, [0.28, 0.38, 0.58, 0.65], [0, 1, 1, 0]);

  // Scene 2 images enter from different directions
  const s2Img1X = useTransform(scrollYProgress, [0.28, 0.4, 0.58, 0.65], ["80%", "0%", "0%", "-100%"]);
  const s2Img2X = useTransform(scrollYProgress, [0.28, 0.4, 0.58, 0.65], ["-80%", "0%", "0%", "80%"]);
  const s2Img3X = useTransform(scrollYProgress, [0.28, 0.42, 0.58, 0.65], ["-60%", "0%", "0%", "-90%"]);
  const s2Img1Y = useTransform(scrollYProgress, [0.58, 0.65], ["0%", "-40%"]);
  const s2Img2Y = useTransform(scrollYProgress, [0.58, 0.65], ["0%", "50%"]);
  const s2Img3Y = useTransform(scrollYProgress, [0.58, 0.65], ["0%", "-30%"]);

  // Tagline
  const taglineOpacity = useTransform(scrollYProgress, [0.36, 0.42, 0.56, 0.62], [0, 1, 1, 0]);
  const taglineY = useTransform(scrollYProgress, [0.36, 0.42], [40, 0]);

  // === SCENE 3 (60% - 100%) ===
  const s3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.95, 1], [0, 1, 1, 1]);

  // Scene 3 images enter
  const s3Img1X = useTransform(scrollYProgress, [0.6, 0.72], ["-70%", "0%"]);
  const s3Img2X = useTransform(scrollYProgress, [0.6, 0.74], ["70%", "0%"]);
  const s3Img3X = useTransform(scrollYProgress, [0.6, 0.76], ["60%", "0%"]);
  const s3Img1Y = useTransform(scrollYProgress, [0.6, 0.72], ["40%", "0%"]);

  // CTA
  const ctaOpacity = useTransform(scrollYProgress, [0.72, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.72, 0.8], [50, 0]);
  const ctaScale = useTransform(scrollYProgress, [0.72, 0.82], [0.95, 1]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Persistent small logo across scenes
  const smallLogoOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.42, 0.9, 0.95],
    [0, 0.6, 0.6, 0]
  );

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg-primary">

        {/* === SCENE 3 - Bottom layer === */}
        <motion.div className="absolute inset-0" style={{ opacity: s3Opacity }}>
          {/* Scene 3 images */}
          {scene3Images.map((img, i) => (
            <motion.div
              key={`s3-${i}`}
              className={`absolute overflow-hidden rounded-sm shadow-2xl ${img.className}`}
              style={{
                x: [s3Img1X, s3Img2X, s3Img3X][i],
                y: i === 0 ? s3Img1Y : undefined,
              }}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="40vw" />
              <div className="absolute inset-0 bg-bg-primary/20" />
            </motion.div>
          ))}

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-bg-primary/50" />

          {/* CTA content */}
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
                  className="inline-flex h-10 sm:h-12 items-center justify-center rounded-sm bg-gold px-5 sm:px-8 text-[10px] sm:text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
                >
                  Shop Now
                </Link>
                <Link
                  href="/lookbook"
                  className="inline-flex h-10 sm:h-12 items-center justify-center rounded-sm border border-gold/60 px-5 sm:px-8 text-[10px] sm:text-sm font-medium uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-bg-primary"
                >
                  View Lookbook
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* === SCENE 2 - Middle layer === */}
        <motion.div className="absolute inset-0 z-10" style={{ opacity: s2Opacity }}>
          {/* Scene 2 images */}
          {scene2Images.map((img, i) => (
            <motion.div
              key={`s2-${i}`}
              className={`absolute overflow-hidden rounded-sm shadow-2xl ${img.className}`}
              style={{
                x: [s2Img1X, s2Img2X, s2Img3X][i],
                y: [s2Img1Y, s2Img2Y, s2Img3Y][i],
              }}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="35vw" />
              <div className="absolute inset-0 bg-bg-primary/15" />
            </motion.div>
          ))}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-bg-primary/45" />

          {/* Tagline */}
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ opacity: taglineOpacity, y: taglineY }}
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

        {/* === SCENE 1 - Top layer === */}
        <motion.div className="absolute inset-0 z-20" style={{ opacity: s1Opacity }}>
          {/* Scene 1 images - enter on load, drift out on scroll */}
          {scene1Images.map((img, i) => (
            <motion.div
              key={`s1-${i}`}
              className={`absolute overflow-hidden rounded-sm shadow-2xl ${img.className}`}
              style={{
                x: [s1Img1X, s1Img2X, s1Img3X][i],
                y: [s1Img1Y, s1Img2Y, s1Img3Y][i],
                opacity: s1EnterOpacity,
                translateX: [s1Enter1, s1Enter2, s1Enter3][i],
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="45vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-bg-primary/10" />
            </motion.div>
          ))}

          {/* Dark overlay for logo readability */}
          <div className="absolute inset-0 bg-bg-primary/40" />

          {/* Logo - dramatic reveal */}
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

        {/* Persistent small logo */}
        <motion.div
          className="absolute top-6 left-0 right-0 z-40 text-center pointer-events-none"
          style={{ opacity: smallLogoOpacity }}
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
