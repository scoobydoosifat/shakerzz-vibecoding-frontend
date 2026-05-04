import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shakerzz | Future of Freshness",
  description: "Premium Scrollytelling Shakes - Chocolate & Banana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${outfit.className} antialiased bg-black text-white min-h-screen no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
