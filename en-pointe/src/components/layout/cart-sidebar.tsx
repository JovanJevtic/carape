"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { Button } from "@/components/ui";
import { formatPrice, cn } from "@/lib/utils";
import { slideInRightVariants, overlayVariants } from "@/lib/animations";

export function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getTotalItems,
    getSubtotal,
    getShipping,
    getTotal,
  } = useCartStore();

  const totalItems = getTotalItems();
  const subtotal = getSubtotal();
  const shipping = getShipping();
  const total = getTotal();

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-bg-primary shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-bg-surface px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-accent" />
                <h2 className="font-display text-lg">
                  Cart ({totalItems})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="rounded-sm p-2 text-text-muted transition-colors hover:text-text-primary"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <ShoppingBag className="h-12 w-12 text-text-muted/50" />
                  <p className="mt-4 text-lg font-medium text-text-primary">
                    Your cart is empty
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    Add some items to get started
                  </p>
                  <Button
                    onClick={closeCart}
                    variant="outline"
                    className="mt-6"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 border-b border-bg-surface pb-6 last:border-0"
                    >
                      {/* Product image */}
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={closeCart}
                        className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-bg-surface"
                      >
                        {item.product.images[0] ? (
                          <Image
                            src={item.product.images[0].url}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-bg-secondary" />
                        )}
                      </Link>

                      {/* Product details */}
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <div>
                            <Link
                              href={`/product/${item.product.slug}`}
                              onClick={closeCart}
                              className="text-sm font-medium text-text-primary hover:text-accent"
                            >
                              {item.product.name}
                            </Link>
                            <p className="mt-1 text-xs text-text-muted">
                              Size: {item.size}
                              {item.color && ` · ${item.color}`}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-text-muted transition-colors hover:text-error"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-2">
                          {/* Quantity controls */}
                          <div className="flex items-center rounded-sm border border-text-muted/30">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="flex h-8 w-8 items-center justify-center text-text-muted hover:text-text-primary"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="flex h-8 w-8 items-center justify-center text-text-muted hover:text-text-primary"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <span className="text-sm font-medium text-text-primary">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-bg-surface p-6">
                {/* Promo code */}
                <div className="mb-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="h-10 flex-1 rounded-sm border border-text-muted/30 bg-transparent px-3 text-sm placeholder:text-text-muted focus:border-accent focus:outline-none"
                    />
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Subtotal</span>
                    <span className="text-text-primary">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Shipping</span>
                    <span className="text-text-primary">
                      {shipping === 0 ? "Free" : formatPrice(shipping)}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-text-muted">
                      Free shipping on orders over €100
                    </p>
                  )}
                  <div className="flex justify-between border-t border-bg-surface pt-2 text-base font-medium">
                    <span className="text-text-primary">Total</span>
                    <span className="text-accent">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout button */}
                <Link href="/checkout" onClick={closeCart}>
                  <Button className="mt-4 w-full" size="lg">
                    Checkout
                  </Button>
                </Link>

                {/* Continue shopping */}
                <button
                  onClick={closeCart}
                  className="mt-3 w-full text-center text-sm text-text-muted hover:text-accent"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
