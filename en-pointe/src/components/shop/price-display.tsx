import { cn, formatPrice } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: {
    price: "text-sm",
    compare: "text-xs",
  },
  md: {
    price: "text-base",
    compare: "text-sm",
  },
  lg: {
    price: "text-2xl font-display",
    compare: "text-base",
  },
};

export function PriceDisplay({
  price,
  compareAtPrice,
  size = "md",
  className,
}: PriceDisplayProps) {
  const isOnSale = compareAtPrice && compareAtPrice > price;
  const discount = isOnSale
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span
        className={cn(
          "font-medium text-text-primary",
          sizeClasses[size].price,
          isOnSale && "text-accent"
        )}
      >
        {formatPrice(price)}
      </span>

      {isOnSale && (
        <>
          <span
            className={cn(
              "text-text-muted line-through",
              sizeClasses[size].compare
            )}
          >
            {formatPrice(compareAtPrice)}
          </span>
          <span
            className={cn(
              "rounded-sm bg-error px-1.5 py-0.5 text-xs font-medium text-white",
              size === "sm" && "text-[10px]"
            )}
          >
            -{discount}%
          </span>
        </>
      )}
    </div>
  );
}
