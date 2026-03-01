"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui";
import { useCartStore } from "@/stores/cart-store";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

interface AddToCartProps {
  product: Product;
  selectedSize: string | null;
  selectedColor?: string;
  quantity: number;
  className?: string;
}

export function AddToCart({
  product,
  selectedSize,
  selectedColor,
  quantity,
  className,
}: AddToCartProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem(product, selectedSize, quantity, selectedColor);
    setIsAdded(true);

    // Reset after animation
    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 1500);
  };

  const isDisabled = !selectedSize;

  return (
    <div className={cn("space-y-3", className)}>
      <Button
        onClick={handleAddToCart}
        disabled={isDisabled || isAdded}
        className="w-full"
        size="lg"
      >
        <AnimatePresence mode="wait">
          {isAdded ? (
            <motion.span
              key="added"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <Check className="h-5 w-5" />
              Added to Cart
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <ShoppingBag className="h-5 w-5" />
              {isDisabled ? "Select a Size" : "Add to Cart"}
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      {isDisabled && (
        <p className="text-center text-xs text-text-muted">
          Please select a size to continue
        </p>
      )}
    </div>
  );
}
