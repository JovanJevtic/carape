"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Share2, Truck, RotateCcw, Shield } from "lucide-react";
import { getProductBySlug, products } from "@/lib/mock-data";
import { SizeSelector, QuantityPicker, AddToCart, PriceDisplay, ProductGrid } from "@/components/shop";
import { Badge, Button, ImageZoomLens } from "@/components/ui";
import { fadeUpVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product?.colors?.[0]?.name || null
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>("description");

  if (!product) {
    notFound();
  }

  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category.id === product.category.id && p.id !== product.id)
    .slice(0, 4);

  const accordionSections = [
    {
      id: "description",
      title: "Description",
      content: product.description,
    },
    {
      id: "materials",
      title: "Materials",
      content: product.materials.join(", ").replace(/\b\w/g, (l) => l.toUpperCase()),
    },
    {
      id: "care",
      title: "Care Instructions",
      content: product.careInstructions || "Machine wash cold. Tumble dry low.",
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Free shipping on orders over €100. Standard delivery 3-5 business days. Free returns within 30 days.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="container mb-8">
        <nav className="flex items-center gap-2 text-sm text-text-muted">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/shop" className="hover:text-accent">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/shop/${product.category.slug}`} className="hover:text-accent">
            {product.category.name}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Images */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {/* Main image */}
            {product.images[selectedImage] ? (
              <ImageZoomLens
                src={product.images[selectedImage].url}
                alt={product.images[selectedImage].alt || product.name}
                lensSize={180}
                className="relative aspect-[3/4] overflow-hidden rounded-sm bg-bg-surface"
              >
                <Image
                  src={product.images[selectedImage].url}
                  alt={product.images[selectedImage].alt || product.name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  {product.new && <Badge variant="new">New</Badge>}
                  {isOnSale && <Badge variant="sale">Sale</Badge>}
                </div>

                {/* Wishlist button */}
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary/80 text-text-muted transition-colors hover:text-accent">
                  <Heart className="h-5 w-5" />
                </button>
              </ImageZoomLens>
            ) : (
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-bg-surface">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg-surface to-gold/5" />
                  <div className="relative z-10 text-center px-8">
                    <div className="mx-auto mb-4 h-px w-16 bg-accent/40" />
                    <p className="text-xs uppercase tracking-widest text-text-muted/60">
                      {product.category?.name}
                    </p>
                    <p className="mt-2 font-display text-2xl text-text-primary/25">
                      {product.name}
                    </p>
                    <div className="mx-auto mt-4 h-px w-16 bg-accent/40" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  {product.new && <Badge variant="new">New</Badge>}
                  {isOnSale && <Badge variant="sale">Sale</Badge>}
                </div>

                {/* Wishlist button */}
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary/80 text-text-muted transition-colors hover:text-accent">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Thumbnail gallery */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative h-20 w-16 overflow-hidden rounded-sm bg-bg-surface",
                      selectedImage === index && "ring-2 ring-accent"
                    )}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt || `${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product info */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="flex flex-col"
          >
            {/* Category */}
            <Link
              href={`/shop/${product.category.slug}`}
              className="text-sm uppercase tracking-wider text-text-muted hover:text-accent"
            >
              {product.category.name}
            </Link>

            {/* Title */}
            <h1 className="mt-2 font-display text-h2">{product.name}</h1>

            {/* Price */}
            <div className="mt-4">
              <PriceDisplay
                price={product.price}
                compareAtPrice={product.compareAtPrice}
                size="lg"
              />
            </div>

            {/* Short description */}
            <p className="mt-4 text-text-muted">{product.shortDescription}</p>

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-6 space-y-3">
                <span className="text-sm font-medium text-text-primary">
                  Color: {selectedColor}
                </span>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color.name);
                        if (color.imageIndex !== undefined) {
                          setSelectedImage(color.imageIndex);
                        }
                      }}
                      className={cn(
                        "h-8 w-8 rounded-full border-2 transition-all",
                        selectedColor === color.name
                          ? "border-accent scale-110"
                          : "border-transparent hover:scale-105"
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="mt-6">
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
              />
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <QuantityPicker
                quantity={quantity}
                onQuantityChange={setQuantity}
                max={
                  selectedSize
                    ? product.sizes.find((s) => s.size === selectedSize)?.stock || 99
                    : 99
                }
              />
            </div>

            {/* Add to cart */}
            <div className="mt-6">
              <AddToCart
                product={product}
                selectedSize={selectedSize}
                selectedColor={selectedColor || undefined}
                quantity={quantity}
              />
            </div>

            {/* Share */}
            <button className="mt-4 flex items-center justify-center gap-2 text-sm text-text-muted hover:text-accent">
              <Share2 className="h-4 w-4" />
              Share
            </button>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-bg-surface pt-8">
              <div className="text-center">
                <Truck className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-2 text-xs text-text-muted">Free Shipping</p>
                <p className="text-xs text-text-muted">Over €100</p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-2 text-xs text-text-muted">Free Returns</p>
                <p className="text-xs text-text-muted">30 Days</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto h-6 w-6 text-accent" />
                <p className="mt-2 text-xs text-text-muted">Secure</p>
                <p className="text-xs text-text-muted">Payment</p>
              </div>
            </div>

            {/* Accordion */}
            <div className="mt-8 border-t border-bg-surface">
              {accordionSections.map((section) => (
                <div key={section.id} className="border-b border-bg-surface">
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === section.id ? null : section.id
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-text-primary">
                      {section.title}
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 text-text-muted transition-transform",
                        expandedSection === section.id && "rotate-90"
                      )}
                    />
                  </button>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pb-4"
                    >
                      <p className="text-sm text-text-muted">{section.content}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="container mt-24">
          <h2 className="mb-8 font-display text-h3">You May Also Like</h2>
          <ProductGrid products={relatedProducts} columns={4} variant="simple" />
        </section>
      )}
    </div>
  );
}
