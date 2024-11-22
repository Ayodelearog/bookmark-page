import Download from "./components/Download";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full h-fit">
      <Navbar />
      <Hero />
      <Features />
      <Download />
    </main>
  );
}
