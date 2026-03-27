import { Ranchers, Montserrat, Azeret_Mono } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat-loaded",
});

export const azeretMono = Azeret_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-azeret-mono-loaded",
});
