"use client";

import { cn } from "@/lib/utils";
import { ProductSize } from "@/types";

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
  className?: string;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
  className,
}: SizeSelectorProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary">Size</span>
        <button className="text-xs text-text-muted underline hover:text-accent">
          Size Guide
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sizes.map((sizeOption) => {
          const isAvailable = sizeOption.stock > 0;
          const isSelected = selectedSize === sizeOption.size;

          return (
            <button
              key={sizeOption.size}
              onClick={() => isAvailable && onSelectSize(sizeOption.size)}
              disabled={!isAvailable}
              className={cn(
                "flex h-10 min-w-[44px] items-center justify-center rounded-sm border px-3 text-sm font-medium transition-all",
                isSelected
                  ? "border-accent bg-accent text-white"
                  : isAvailable
                  ? "border-text-muted/30 text-text-primary hover:border-accent"
                  : "cursor-not-allowed border-text-muted/20 text-text-muted/50 line-through"
              )}
              aria-label={`Size ${sizeOption.size}${!isAvailable ? " (out of stock)" : ""}`}
            >
              {sizeOption.size}
            </button>
          );
        })}
      </div>

      {selectedSize && (
        <p className="text-xs text-text-muted">
          {sizes.find((s) => s.size === selectedSize)?.stock} in stock
        </p>
      )}
    </div>
  );
}
