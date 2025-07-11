// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"; // ✅ Import added

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sora",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-sora-mono",
});

export const metadata: Metadata = {
  title: "VicDev Portfolio",
  description: "My Next.js Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${font.variable} ${geistMono.variable} custom-scrollbar`}
    >
      <body className={font.className}>
        {" "}
        {/* ✅ Fix className typo (was a string) */}
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            color="255, 255, 255"
            outerAlpha={0}
            innerScale={2}
            outerScale={0}
            innerStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "50%",
              boxShadow: "none",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>
        <ResponsiveNav />
        {children}
        <SpeedInsights /> {/* ✅ Added here */}
      </body>
    </html>
  );
}
