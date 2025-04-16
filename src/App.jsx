import React from "react";
import NavHead from "./components/NavHead";
import HeroSection from "./components/HeroSection";
import TextGradient from "./components/TextGradient";
import Slider from "./components/Slider";
import Lenis from "lenis";
import ActionCall from "./components/ActionCall";
function App() {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className="font-[poppins] flex-col w-full h-auto flex">
      <NavHead />
      <ActionCall />
      <HeroSection />
      <Slider />
    </div>
  );
}

export default App;
