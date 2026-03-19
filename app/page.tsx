import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 md:px-8 mx-auto">
        <Header />
        <About />
      </div>
    </>
  );
}
