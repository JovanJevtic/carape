"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantityPickerProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export function QuantityPicker({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  className,
}: QuantityPickerProps) {
  const decrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <span className="mr-4 text-sm font-medium text-text-primary">Quantity</span>
      <div className="flex items-center rounded-sm border border-text-muted/30">
        <button
          onClick={decrease}
          disabled={quantity <= min}
          className="flex h-10 w-10 items-center justify-center text-text-muted transition-colors hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="flex h-10 w-12 items-center justify-center text-sm font-medium text-text-primary">
          {quantity}
        </span>

        <button
          onClick={increase}
          disabled={quantity >= max}
          className="flex h-10 w-10 items-center justify-center text-text-muted transition-colors hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
