import { Phone } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
function CallBtn({ width = true, children, varient = "dark" }) {
  const varients = {
    light: "bg-gradient-to-t from-neutral-100 to-neutral-50 text-black",
    dark: "bg-gradient-to-t from-neutral-900 to-neutral-800 text-white",
  };
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      // href="tel:+14155552671"
      className={` text-nowrap cursor-pointer ${
        varients[varient]
      } text-sm sm:text-lg flex items-center gap-2  font-medium py-5 px-7 rounded-full shadow-lg transition-all duration-300 hover:px-9 sm:w-fit ${
        width ? "w-[90%]" : "w-fit"
      } justify-center`}
    >
      {children}
    </motion.a>
  );
}

export default CallBtn;
