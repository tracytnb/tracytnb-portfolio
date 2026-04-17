import type { Metadata } from "next";
import { montserrat, azeretMono, geistMono } from "./fonts";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Portfolio - Tracy Bui",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "font-sans", geist.variable)}
    >
      <body
        className={`${azeretMono.variable} ${geistMono.variable} ${geistMono.className} h-full antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
