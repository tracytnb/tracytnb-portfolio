import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <Header />
        <About />
        <TechStack />
      </div>
    </>
  );
}
