import type { Metadata } from "next";
import { boldonse, montserrat } from "./fonts";
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${boldonse.variable} ${montserrat.variable} ${montserrat.className} h-full antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
