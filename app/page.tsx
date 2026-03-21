import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <Header />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
