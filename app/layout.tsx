import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Ranchers, Montserrat } from "next/font/google";
import "./globals.css";

const ranchers = Ranchers({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
      className={`${ranchers.className} ${montserrat.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
