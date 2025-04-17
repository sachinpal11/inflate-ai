import { motion } from "motion/react";

function NavHead() {
  return (
    <motion.div className="w-full sticky top-0 z-10 text-xs sm:text-sm sm-text-lg text-center p-2.5 bg-teal-100 h-fit font-medium transition-all ease-in-out cursor-pointer hover:bg-teal-50">
      We're Hiring AI Agent Developers! Click to learn more.
    </motion.div>
  );
}

export default NavHead;
