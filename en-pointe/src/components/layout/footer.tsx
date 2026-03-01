import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop/everyday", label: "Everyday" },
    { href: "/shop/statement", label: "Statement" },
    { href: "/shop/sheer", label: "Sheer" },
    { href: "/shop/new-arrivals", label: "New Arrivals" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/shipping", label: "Shipping & Returns" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-bg-surface bg-bg-primary">
      <div className="container py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-2xl tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-text-primary font-normal">EN</span>
              <span className="text-accent font-semibold">POINTE</span>
            </Link>
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              Premium women&apos;s socks crafted for the fashion-conscious.
              European craftsmanship meets contemporary design.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-primary">
              Shop
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-primary">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-text-primary">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-bg-surface pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-text-primary">
                Subscribe to our newsletter
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                Get 10% off your first order and be the first to know about new arrivals.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2 md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-sm border border-text-muted/30 bg-transparent px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent md:w-[240px]"
              />
              <button
                type="submit"
                className="rounded-sm bg-accent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-bg-surface pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} EN POINTE. All rights reserved.
            </p>
            <p className="text-xs text-text-muted">
              Crafted with care in Europe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
