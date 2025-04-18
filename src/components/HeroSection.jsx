import React from "react";
import { motion } from "motion/react";
import TextGradient from "./TextGradient";
import GreenDot from "./GreenDot";
import CallBtn from "./CallBtn";
import { Phone } from "lucide-react";
function HeroSection() {
  return (
    <motion.div className="flex flex-col h-[80vh] justify-between  items-center mt-8 gap-10">
      <motion.img
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.35 }}
        src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/67565915a41ef940dc9d3d96_logo.png"
        className="w-60 cursor-pointer"
        alt=""
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-[80%] gap-3 w-full flex flex-col items-center"
      >
        <div className="flex items-center gap-3">
          <GreenDot />
          <span className="font-medium">
            Helping businesses implement Voice AI
          </span>
        </div>
        <div className="md:text-8xl mb-8 text-6xl scale-75 sm:scale-90 text-neutral-900 items-center flex-col flex font-medium md:w-full">
          <span className="flex tracking-tighter sm:flex-row flex-col items-center sm:gap-4">
            Handle
            <TextGradient text={"Real Calls"} color={"green"} size={"8xl"} />
          </span>
          <span className="text-center tracking-tighter">
            with AI Voice Agents.
          </span>
        </div>
        <CallBtn>
          <Phone /> Book A Call
        </CallBtn>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
