"use client";

import { motion } from "framer-motion";
import { ProductCard, ProductCardSimple } from "./product-card";
import { SkeletonProductGrid } from "@/components/ui";
import { Product } from "@/types";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  variant?: "default" | "simple";
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ProductGrid({
  products,
  isLoading = false,
  variant = "default",
  columns = 4,
  className,
}: ProductGridProps) {
  if (isLoading) {
    return <SkeletonProductGrid count={columns * 2} className={className} />;
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-lg text-text-muted">No products found</p>
        <p className="mt-2 text-sm text-text-muted">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  const Card = variant === "simple" ? ProductCardSimple : ProductCard;

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "grid gap-4 lg:gap-6",
        gridCols[columns],
        className
      )}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={staggerItemVariants}>
          <Card product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
