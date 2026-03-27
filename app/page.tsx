"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { ThemeProvider } from "./components/theme/ThemeProvider";

export default function Home() {
  return (
    <>
      {/* <ThemeProvider> */}
      <Navbar />
      <Header />
      <div className="w-11/12 mx-auto">
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </div>
      {/* </ThemeProvider> */}
    </>
  );
}
