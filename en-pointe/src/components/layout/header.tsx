"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cart-store";
import { useUIStore } from "@/stores/ui-store";
import { fadeUpVariants } from "@/lib/animations";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { isOpen: isCartOpen, toggleCart, getTotalItems } = useCartStore();
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    isHeaderScrolled,
    setHeaderScrolled,
  } = useUIStore();

  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setHeaderScrolled]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMobileMenu]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isHeaderScrolled
            ? "bg-bg-primary/90 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Left - Menu button (mobile) / Navigation (desktop) */}
          <div className="flex items-center gap-8">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="text-sm uppercase tracking-wider text-text-primary hover:text-accent transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              Menu
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center - Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="text-text-primary font-normal">EN</span>
            <span className="text-accent font-semibold">POINTE</span>
          </Link>

          {/* Right - Cart */}
          <button
            onClick={toggleCart}
            className="flex items-center gap-2 text-sm uppercase tracking-wider text-text-primary hover:text-accent transition-colors"
            aria-label="Open cart"
          >
            <span className="hidden sm:inline">Cart</span>
            <span className="flex items-center gap-1">
              <ShoppingBag className="h-4 w-4" />
              <span>({totalItems})</span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu />
    </>
  );
}

function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 z-50 h-full w-[280px] bg-bg-primary p-6 md:hidden"
          >
            {/* Close button */}
            <button
              onClick={closeMobileMenu}
              className="absolute right-4 top-4 p-2 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-xl tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-text-primary font-normal">EN</span>
              <span className="text-accent font-semibold">POINTE</span>
            </Link>

            {/* Navigation */}
            <nav className="mt-12 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  custom={index}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block text-2xl font-display text-text-primary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer info */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs text-text-muted">Premium Socks · Since 2026</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
