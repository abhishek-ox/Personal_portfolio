import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CircleIcon from "./CircleIcon";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-col items-center'>
      <motion.h1 
        className="text-4xl font-bold mb-10"
        variants={textVariant(0.2)}
        initial="hidden"
        animate="show"
      >
        My TECH STACK
      </motion.h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <motion.div
            className='w-28 h-28'
            key={technology.name}
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            initial="hidden"
            animate="show"
          >
            <CircleIcon icon={technology.icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
