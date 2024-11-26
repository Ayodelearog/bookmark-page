import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import UpToDate from "./components/UpToDate";

export default function Home() {
  return (
    <main className="w-full h-fit">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <UpToDate />
      <Footer />
    </main>
  );
}
