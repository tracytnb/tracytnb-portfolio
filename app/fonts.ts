import { Ranchers, Montserrat } from "next/font/google";

export const ranchers = Ranchers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ranchers-loaded",
});

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat-loaded",
});
