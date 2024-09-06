import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <a
            href="https://www.facebook.com/abhishek.bandil.39"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/avii_0z/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <FaInstagram className="text-2xl hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-bandil/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/abhishek-ox"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <FaGithub className="text-2xl hover:text-blue-500" />
          </a>
        </div>

        <div className="flex justify-center mb-4">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="mx-4 hover:text-gray-400 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            className="mx-4 hover:text-gray-400 cursor-pointer"
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="mx-4 hover:text-gray-400 cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="mx-4 hover:text-gray-400 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Abhishek Bandil. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
