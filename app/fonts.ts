import {
  Ranchers,
  Montserrat,
  Azeret_Mono,
  // Space_Grotesk,
  Familjen_Grotesk,
  Geist_Mono,
} from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat-loaded",
});

export const geistMono = Geist_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist-mono-loaded",
});

export const azeretMono = Azeret_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-azeret-mono-loaded",
});
