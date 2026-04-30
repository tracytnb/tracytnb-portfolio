import type { Metadata } from "next";
import { montserrat, azeretMono, familjenGrotesk } from "./fonts";
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${azeretMono.variable} ${familjenGrotesk.variable} ${familjenGrotesk.className} h-full antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
