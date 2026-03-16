"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function LookbookTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/products/pexels-8511324.jpg"
          alt="EN POINTE Lookbook"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-bg-primary/65" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          className="text-center px-6"
          style={{ y: textY, opacity: textOpacity }}
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-gold/80 mb-3 sm:mb-4">
            Spring / Summer 2026
          </p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-text-primary">
            The Lookbook
          </h2>
          <motion.div
            className="h-px bg-gold/40 mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6"
            style={{ width: lineWidth }}
          />
          <p className="text-sm sm:text-base text-text-muted max-w-md mx-auto leading-relaxed">
            Four curated collections. One vision of modern elegance.
          </p>
          <Link
            href="/lookbook"
            className="mt-6 sm:mt-8 inline-flex h-11 sm:h-12 items-center justify-center rounded-sm border border-gold/60 px-6 sm:px-10 text-xs sm:text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-bg-primary"
          >
            Explore the Lookbook
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
