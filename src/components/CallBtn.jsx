import { Phone } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
function CallBtn({ width = true, text }) {
  return width ? (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      // href="tel:+14155552671"
      className="bg-gradient-to-t text-nowrap cursor-pointer from-neutral-900 to-neutral-800  flex items-center gap-2 text-lg font-medium text-white py-5 px-7 rounded-full shadow-lg transition-all duration-300 hover:px-9 sm:w-fit w-[90%] justify-center"
    >
      <Phone className="scale-75" /> {text}
    </motion.a>
  ) : (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      // href="tel:+14155552671"
      className="bg-gradient-to-t cursor-pointer from-neutral-900 to-neutral-800  flex items-center gap-2 text-lg font-medium text-white py-5 px-7 rounded-full text-nowrap shadow-lg hover:bg-green-600 transition duration-300"
    >
      <Phone className="scale-75" /> {text}
    </motion.a>
  );
}

export default CallBtn;
