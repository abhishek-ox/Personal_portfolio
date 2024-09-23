import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Tilt } from "react-tilt"; // Import Tilt

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Resume from "../assets/Resume.pdf";
import character from "../assets/personal-image.jpeg";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Check if all fields are filled
  useEffect(() => {
    if (form.name && form.email && form.message) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [form]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear the error for the field if it's being corrected
    if (value) {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields and set error states
    const errors = {
      name: !form.name,
      email: !form.email,
      message: !form.message,
    };

    setFieldErrors(errors);

    // If any field is empty, return without sending the email
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abhishek Bandil",
          from_email: form.email,
          to_email: "abandil2003@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setAlertMessage("Thank you. I will get back to you as soon as possible.");
      setTimeout(() => setAlertMessage(""), 3000); // Auto-dismiss alert after 2 seconds

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setAlertMessage("Ahh, something went wrong. Please try again.");
      setTimeout(() => setAlertMessage(""), 2000); // Auto-dismiss alert after 2 seconds
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border ${
                fieldErrors.name ? "border-red-500" : "border-none"
              } font-medium`}
            />
            {fieldErrors.name && (
              <span className="text-red-500 mt-2">This field is required</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border ${
                fieldErrors.email ? "border-red-500" : "border-none"
              } font-medium`}
              required
            />
            {fieldErrors.email && (
              <span className="text-red-500 mt-2">This field is required</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border ${
                fieldErrors.message ? "border-red-500" : "border-none"
              } font-medium`}
              required
            />
            {fieldErrors.message && (
              <span className="text-red-500 mt-2">This field is required</span>
            )}
          </label>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer"
              disabled={isButtonDisabled}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <a href={Resume} download>
              <button
                type="button"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                My Resume
              </button>
            </a>
          </div>
        </form>

        {alertMessage && (
          <div className="mt-4 p-4 bg-[#350295] text-white rounded-lg">
            {alertMessage}
          </div>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center"
      >
        <Tilt
          options={{
            max: 25, // Maximum tilt angle
            scale: 1.05, // Scale up the image slightly
            speed: 300, // Animation speed
          }}
          className="w-full h-full flex justify-center items-center"
        >
          <img
            src={character}
            alt="Your Avatar"
            className="h-auto rounded-full border-4 border-gray-300 shadow-lg size-5/6 animate-pulse" // Added styles for rounded corners and border
          />
        </Tilt>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
