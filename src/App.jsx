import React from "react";
import NavHead from "./components/NavHead";
import HeroSection from "./components/HeroSection";
import TextGradient from "./components/TextGradient";
import Slider from "./components/Slider";
import Lenis from "lenis";
import ActionCall from "./components/ActionCall";
import Navbar from "./components/Navbar";
import ParagraphHead from "./components/ParagraphHead";
import ComparisonTable from "./components/CompareTable";
import Services from "./components/Services";
import PBox from "./components/PBox";
import OurService from "./components/OurService";
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
    <div className="font-[poppins] bg-neutral-50 flex-col w-full h-auto flex items-center">
      <Navbar />
      <NavHead />
      <ActionCall />
      <HeroSection />
      <Slider />
      <ParagraphHead
        title={"Benefits that Drive Success"}
        isBtn={true}
        BtnText={"Book A Call"}
      />
      <ComparisonTable />
      <ParagraphHead title={"Tailored for your business."} isBtn={false} />
      <Services />
      <OurService />
    </div>
  );
}

export default App;
