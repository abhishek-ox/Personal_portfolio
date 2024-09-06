import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const CircleIcon = ({ icon }) => {
  return (
    <Tilt options={{ max: 25, scale: 1.05, speed: 300 }}>
      <motion.div
        className="flex items-center justify-center w-28 h-28 rounded-full"
        style={{ backgroundColor: '#D3D3D3' }} // Custom bright light blue
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={icon} alt="technology icon" className="w-16 h-16" />
      </motion.div>
    </Tilt>
  );
};

export default CircleIcon;

