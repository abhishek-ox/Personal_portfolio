import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt"; // Import Tilt

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({ index, name, description, image }) => (
  <Tilt
    className="xs:w-[320px] w-full"
    options={{
      max: 25, // Maximum tilt angle
      scale: 1.05, // Scale up the card slightly
      speed: 300, // Animation speed
    }}
  >
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl"
    >
      <p className="text-white font-black text-[48px]">{name}</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{description}</p>

        {image && (
          <img
            src={image}
            alt={`${name}-certificate`}
            className="mt-4 object-cover w-full rounded-xl"
          />
        )}
      </div>
    </motion.div>
  </Tilt>
);

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.name} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
