"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cinematicRevealVariants, easeOutExpo } from "@/lib/animations";
import { type LookbookCollection } from "@/lib/mock-data";
import { type Product } from "@/types";

interface LookbookCollectionSectionProps {
  collection: LookbookCollection;
  products: Product[];
  index: number;
}

export function LookbookCollectionSection({
  collection,
  products,
  index,
}: LookbookCollectionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Gradient direction based on text position (mobile always left)
  const gradientClass =
    collection.textPosition === "right"
      ? "bg-gradient-to-l from-bg-primary/90 via-bg-primary/60 to-transparent max-lg:bg-gradient-to-r max-lg:from-bg-primary/90 max-lg:via-bg-primary/60 max-lg:to-transparent"
      : collection.textPosition === "center"
        ? "bg-bg-primary/65"
        : "bg-gradient-to-r from-bg-primary/90 via-bg-primary/60 to-transparent";

  // Text alignment based on position (mobile always left)
  const textAlignClass =
    collection.textPosition === "right"
      ? "items-end text-right max-lg:items-start max-lg:text-left"
      : collection.textPosition === "center"
        ? "items-center text-center max-lg:items-start max-lg:text-left"
        : "items-start text-left";

  const textPositionClass =
    collection.textPosition === "right"
      ? "justify-end max-lg:justify-start"
      : collection.textPosition === "center"
        ? "justify-center"
        : "justify-start";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] lg:min-h-screen overflow-hidden snap-start snap-always"
    >
      {/* Parallax image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-[-15%]"
      >
        <Image
          src={collection.heroImage}
          alt={collection.heroAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${gradientClass}`} />

      {/* Content */}
      <div className={`relative flex min-h-[80vh] lg:min-h-screen ${textPositionClass}`}>
        <div
          className={`flex flex-col ${textAlignClass} justify-center px-8 py-24 sm:px-12 lg:px-20 xl:px-28 max-w-2xl`}
        >
          {/* Season tag */}
          <motion.p
            variants={cinematicRevealVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs uppercase tracking-[0.3em] text-gold"
          >
            {collection.season}
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={cinematicRevealVariants}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight"
          >
            {collection.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={cinematicRevealVariants}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-3 font-display text-lg text-text-primary/70 italic"
          >
            {collection.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={cinematicRevealVariants}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 text-sm leading-relaxed text-text-muted max-w-md"
          >
            {collection.description}
          </motion.p>

          {/* Product thumbnails */}
          <motion.div
            variants={cinematicRevealVariants}
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group"
              >
                <div className="relative w-20 h-28 lg:w-24 lg:h-32 overflow-hidden rounded-sm bg-bg-surface transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-text-muted group-hover:text-text-primary transition-colors text-center max-w-20 lg:max-w-24 leading-tight">
                  {product.name}
                </p>
              </Link>
            ))}
          </motion.div>

          {/* Shop Collection button */}
          <motion.div
            variants={cinematicRevealVariants}
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8"
          >
            <Link
              href={`/shop?category=${collection.shopCategory}`}
              className="inline-flex h-11 items-center justify-center rounded-sm border border-gold/60 px-8 text-xs font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-bg-primary"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
