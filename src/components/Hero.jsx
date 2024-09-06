import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { Tilt } from "react-tilt"; // Import Tilt
import { styles } from "../styles"; // Import styles

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const textArray = ["Problem Solver", "Full Stack Developer", "Software Developer", "Programmer"];
  const typingSpeed = 150; // Typing speed
  const deletingSpeed = 75; // Deleting speed
  const pauseDuration = 500; // Pause duration after each word

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[index];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % textArray.length);
          setTimeout(() => setCursorVisible(true), pauseDuration);
        }
      } else {
        setText((prev) => currentText.slice(0, prev.length + 1));
        if (text === currentText) {
          setIsDeleting(true);
          setCursorVisible(false);
          setTimeout(() => setCursorVisible(true), pauseDuration);
        }
      }
    };

    const timer = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearInterval(timer);
  }, [text, isDeleting, index]);

  const setCursorVisible = (visible) => {
    setIsCursorVisible(visible);
    setTimeout(() => setCursorVisible(!visible), 300); // Blink cursor effect
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4351EB]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col justify-start">
          <h1 className={`${styles.heroHeadText} text-white mb-6`}>
            Hi, I'm <span className="text-[#4351EB]">Abhishek</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mb-8`}>
            I develop user interfaces and<br />  web applications
          </p>
          <p className={`${styles.heroSubText} text-white-100`} style={{ marginTop: "50px" }}>
            I am a <span className="text-[#4351EB] text-[48px] font-bold">{text}</span>
            {isCursorVisible && <span className="text-white text-[48px]">|</span>} {/* Increased cursor size */}
          </p>
          <p className="text-white mt-8"> {/* Added margin-top for spacing */}
            Know more? Kindly scroll down.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;