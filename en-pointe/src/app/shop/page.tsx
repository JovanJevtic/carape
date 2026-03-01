"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { ProductGrid } from "@/components/shop";
import { products, categories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { fadeUpVariants } from "@/lib/animations";
import { SortOption } from "@/types";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category.slug === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "popular":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="container mb-8">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h1 className="font-display text-h1">Shop All</h1>
          <p className="mt-2 text-text-muted">
            {filteredProducts.length} products
          </p>
        </motion.div>
      </section>

      {/* Filters bar */}
      <section className="container mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Category filters - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                !selectedCategory
                  ? "bg-accent text-white"
                  : "bg-bg-surface text-text-muted hover:text-text-primary"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  selectedCategory === category.slug
                    ? "bg-accent text-white"
                    : "bg-bg-surface text-text-muted hover:text-text-primary"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 rounded-full bg-bg-surface px-4 py-2 text-sm text-text-primary md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none rounded-full border border-text-muted/30 bg-transparent px-4 py-2 pr-10 text-sm text-text-primary focus:border-accent focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted pointer-events-none" />
          </div>
        </div>

        {/* Mobile category filters */}
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 flex flex-wrap gap-2 md:hidden"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                !selectedCategory
                  ? "bg-accent text-white"
                  : "bg-bg-surface text-text-muted"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  selectedCategory === category.slug
                    ? "bg-accent text-white"
                    : "bg-bg-surface text-text-muted"
                )}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        )}

        {/* Active filters */}
        {selectedCategory && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-text-muted">Active filters:</span>
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
            >
              {categories.find((c) => c.slug === selectedCategory)?.name}
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
      </section>

      {/* Product grid */}
      <section className="container">
        <ProductGrid products={filteredProducts} />
      </section>
    </div>
  );
}
