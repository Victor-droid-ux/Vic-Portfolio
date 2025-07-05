// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

// Optional: Set up your fonts if you like
const font = Sora({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",],
  subsets: ["latin"], 
  variable: "--font-sora" 
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"], 
  variable: "--font-sora-mono" 
});

// Optional metadata
export const metadata: Metadata = {
  title: "VicDev Portfolio",
  description: "My Next.js Developer Portfolio",
};

// ✅ This is the root layout component Next.js needs
export default function RootLayout({ 
  children,
 }: { 
  children: ReactNode
 }) {
  return (
    <html lang="en" className={`${font.variable} ${geistMono.variable}`}>
      <body>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
