import type { Metadata } from "next";
import { ranchers, montserrat } from "./fonts";
import "./globals.css";

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
      className={`${ranchers.variable} ${montserrat.variable} ${montserrat.className} h-full antialiased leading-8 overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
