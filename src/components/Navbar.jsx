import React, { useState } from "react";
import GreenDot from "./GreenDot";
import { motion } from "motion/react";

function Navbar() {
  const [hovered, setHovered] = useState(null);

  const getWidthClass = (index) => {
    if (hovered === null) return "sm:w-[33.2%]";
    return hovered === index ? "sm:w-[40%]" : "sm:w-[34%]";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-xl text-neutral-500 cursor-pointer justify-between w-[90%] sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] bg-neutral-200 shadow-lg rounded-full sm:flex flex-col hidden  sm:flex-row h-auto sm:h-22 capitalize overflow-hidden fixed z-20 bottom-6 left-1/2 -translate-x-1/2"
    >
      <motion.span
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
        transition={{ type: "spring", stiffness: 300 }}
        className={`w-full ${getWidthClass(
          0
        )} bg-white hover:bg-transparent transition-all duration-300 flex items-center justify-center h-14 sm:h-full`}
      >
        AI Voice Agents
      </motion.span>
      <motion.span
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
        transition={{ type: "spring", stiffness: 300 }}
        className={`w-full ${getWidthClass(
          1
        )} bg-white hover:bg-transparent transition-all duration-300 flex items-center justify-center h-14 sm:h-full`}
      >
        Support Services
      </motion.span>
      <motion.span
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
        transition={{ type: "spring", stiffness: 300 }}
        className={`w-full ${getWidthClass(
          2
        )} bg-white hover:bg-transparent transition-all duration-300 flex items-center justify-center h-14 sm:h-full gap-2 sm:gap-3`}
      >
        <GreenDot /> Contact Us
      </motion.span>
    </motion.div>
  );
}

export default Navbar;
