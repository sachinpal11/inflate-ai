import React from "react";
import { motion } from "motion/react";
function GreenDot() {
  return (
    <motion.div
      initial={{ borderWidth: 0 }}
      className="w-fit rounded-full h-fit p-1 border-3 bg-green-500 border-green-300"
    ></motion.div>
  );
}

export default GreenDot;
