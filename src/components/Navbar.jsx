import React from "react";
import GreenDot from "./GreenDot";
import { motion } from "motion/react";
function Navbar() {
  return (
    <div className="text-xl text-neutral-500 justify-between w-[48%] bg-neutral-200 shadow-lg rounded-full flex h-22 capitalize overflow-hidden fixed z-20 bottom-10 left-1/2 -translate-x-1/2">
      <motion.span className="w-[33%] bg-white flex items-center justify-center h-full">
        AI Voice Agents
      </motion.span>
      <motion.span className="w-[33%] bg-white flex items-center justify-center h-full">
        Support Services
      </motion.span>
      <motion.span className="w-[33.6%] gap-3 bg-white flex items-center justify-center h-full">
        <GreenDot /> Contact Us
      </motion.span>
    </div>
  );
}

export default Navbar;
