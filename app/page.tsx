"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Work from "@/app/components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FishingHook from "./components/FishingHook";
import VerticalNavigation from "./components/VerticalNavigation";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const [railHovered, setRailHovered] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      {/* <ThemeProvider> */}
      {/* <Navbar /> */}
      <Header />
      <div className="w-11/12 mx-auto flex flex-col gap-24 md:gap-32">
        <About />
        <Work />
        <Project />
        <TechStack />
        <Contact />
        <Footer />
      </div>
      <div
        className="pointer-events-auto fixed right-4 top-0 z-40 flex h-dvh w-[min(18rem,calc(100vw-1rem))] justify-end md:right-8"
        onMouseEnter={() => setRailHovered(true)}
        onMouseLeave={() => setRailHovered(false)}
      >
        <div className="relative h-full w-20 shrink-0">
          <FishingHook />
          <VerticalNavigation railHovered={railHovered} />
        </div>
      </div>
      {/* </ThemeProvider> */}
    </>
  );
}
