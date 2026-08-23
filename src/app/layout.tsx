import type { Metadata } from "next";
import { Italiana, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { CartProvider } from "@/lib/cart-context";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "KALLÉN",
  description: "Original artwork, worn. Every piece carries a digital passport.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body
        className={`${italiana.variable} ${inter.variable} ${jetbrainsMono.variable} bg-void font-body text-bone antialiased`}
      >
        <CartProvider>
          <SmoothScroll>
            <Header />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
