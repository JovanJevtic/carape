import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartSidebar } from "@/components/layout/cart-sidebar";
import { PageLoader } from "@/components/ui/page-loader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EN POINTE | Premium Women's Socks",
    template: "%s | EN POINTE",
  },
  description:
    "Discover EN POINTE - premium women's socks crafted for the fashion-conscious. Luxurious materials, elegant designs, European craftsmanship.",
  keywords: [
    "premium socks",
    "women's socks",
    "luxury socks",
    "fashion socks",
    "designer socks",
    "European socks",
  ],
  authors: [{ name: "EN POINTE" }],
  creator: "EN POINTE",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EN POINTE",
    title: "EN POINTE | Premium Women's Socks",
    description:
      "Discover EN POINTE - premium women's socks crafted for the fashion-conscious.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EN POINTE | Premium Women's Socks",
    description:
      "Discover EN POINTE - premium women's socks crafted for the fashion-conscious.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${playfair.variable} ${inter.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <PageLoader />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartSidebar />
      </body>
    </html>
  );
}
