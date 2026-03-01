"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { Badge, ImageZoomLens } from "@/components/ui";
import { Product } from "@/types";
import { useCartStore } from "@/stores/cart-store";
import { useUIStore } from "@/stores/ui-store";
import { scaleOnHoverVariants } from "@/lib/animations";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { openQuickView } = useUIStore();

  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;
  const discount = isOnSale
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  return (
    <motion.article
      className={cn("group relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={scaleOnHoverVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Image container */}
      {product.images[0] ? (
        <ImageZoomLens
          src={product.images[0].url}
          alt={product.images[0].alt || product.name}
          lensSize={120}
        >
          <Link
            href={`/product/${product.slug}`}
            className="relative block aspect-[3/4] overflow-hidden rounded-sm bg-bg-surface"
          >
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt || product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Hover image (second image if available) */}
            {product.images[1] && (
              <Image
                src={product.images[1].url}
                alt={product.images[1].alt || product.name}
                fill
                className={cn(
                  "object-cover transition-opacity duration-500",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            )}

            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-2">
              {product.new && <Badge variant="new">New</Badge>}
              {isOnSale && <Badge variant="sale">-{discount}%</Badge>}
            </div>

            {/* Quick actions overlay */}
            <div
              className={cn(
                "absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openQuickView(product.id);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-bg-primary transition-colors hover:bg-accent hover:text-white"
                aria-label="Quick view"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </Link>
        </ImageZoomLens>
      ) : (
        <Link
          href={`/product/${product.slug}`}
          className="relative block aspect-[3/4] overflow-hidden rounded-sm bg-bg-surface"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-surface">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg-surface to-gold/5" />
            <div className="relative z-10 text-center px-6">
              <div className="mx-auto mb-3 h-px w-10 bg-accent/40" />
              <p className="font-display text-sm text-text-muted/60 tracking-widest uppercase">
                {product.category?.name || "EN POINTE"}
              </p>
              <p className="mt-1 font-display text-base text-text-primary/30">
                {product.name}
              </p>
              <div className="mx-auto mt-3 h-px w-10 bg-accent/40" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {product.new && <Badge variant="new">New</Badge>}
            {isOnSale && <Badge variant="sale">-{discount}%</Badge>}
          </div>
        </Link>
      )}

      {/* Product info */}
      <div className="mt-4">
        {/* Category */}
        {product.category && (
          <p className="text-xs uppercase tracking-wider text-text-muted">
            {product.category.name}
          </p>
        )}

        {/* Name */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 text-sm font-medium text-text-primary transition-colors hover:text-accent">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-medium text-text-primary">
            {formatPrice(product.price)}
          </span>
          {isOnSale && (
            <span className="text-sm text-text-muted line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-2 flex gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.name}
                className="h-4 w-4 rounded-full border border-text-muted/20"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-text-muted">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

// Simplified card for featured sections
export function ProductCardSimple({ product, className }: ProductCardProps) {
  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <article className={cn("group", className)}>
      {product.images[0] ? (
        <ImageZoomLens
          src={product.images[0].url}
          alt={product.images[0].alt || product.name}
          lensSize={120}
        >
          <Link
            href={`/product/${product.slug}`}
            className="relative block aspect-[3/4] overflow-hidden rounded-sm bg-bg-surface"
          >
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt || product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-2">
              {product.new && <Badge variant="new">New</Badge>}
              {isOnSale && <Badge variant="sale">Sale</Badge>}
            </div>
          </Link>
        </ImageZoomLens>
      ) : (
        <Link
          href={`/product/${product.slug}`}
          className="relative block aspect-[3/4] overflow-hidden rounded-sm bg-bg-surface"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-surface">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg-surface to-gold/5" />
            <div className="relative z-10 text-center px-6">
              <div className="mx-auto mb-3 h-px w-10 bg-accent/40" />
              <p className="font-display text-sm text-text-muted/60 tracking-widest uppercase">
                {product.category?.name || "EN POINTE"}
              </p>
              <p className="mt-1 font-display text-base text-text-primary/30">
                {product.name}
              </p>
              <div className="mx-auto mt-3 h-px w-10 bg-accent/40" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {product.new && <Badge variant="new">New</Badge>}
            {isOnSale && <Badge variant="sale">Sale</Badge>}
          </div>
        </Link>
      )}

      <div className="mt-4">
        <h3 className="text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm text-text-muted">
            {formatPrice(product.price)}
          </span>
          {isOnSale && (
            <span className="text-xs text-text-muted line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
