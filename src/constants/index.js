import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from "../assets";
import dsa from "../assets/dsa.png";
import full_stack from "../assets/full_stack.png";
import machine_learning from "../assets/machine_learning.png";
import Whackgame from "../assets/Whackgame.jpeg";
import memory from "../assets/memory.webp";
import food from "../assets/Food-i-fy.png";
import todolist from "../assets/To-Do-List.png";
import HomePage from "../assets/HomePage.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer with MERN",
    icon: web,
  },

  {
    title: "Machine Learning Models",
    icon: backend,
  },
  {
    title: "SQL and NOSQL databases",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Bachelor Of Technology [CS]",
    iconBg: "#383E56",
    date: "Nov 2021 - Present",
    points: [
      "Gained a strong foundation in various programming languages like Java along with concepts like data structures, algorithms, and problem-solving techniques.",
      " Acquired skills in front-end and back-end development, including HTML, CSS, JavaScript, and frameworks like React and Node.js, enabling the creation of dynamic and responsive web applications.",
      "Learned about database design, SQL, and data management principles, including how to interact with databases using technologies like MySQL and MongoDB.",
    ],
  },
  {
    title: "Intermediate [ISC board]",
    iconBg: "#383E56",
    date: "Mar 2020 - April 2021",
    points: [
      "I scored 95% in my class 12 examinations, reflecting my strong academic performance and dedication to my studies.",
      "In class 12, I focused on my studies in the Science stream, where I strengthened my knowledge in subjects like Physics, Chemistry, and Mathematics. I also developed my programming skills by exploring languages like C++ and gained exposure to computer science concepts.",
    ],
  },
  {
    title: "High School [ICSE board]",
    iconBg: "#383E56",
    date: "Mar 2018 - April 2019",
    points: [
      "I scored 88.7% in my class 10 examinations, reflecting my strong academic performance and dedication to my studies.",
      "Science stream subjects were the major regoins of interests for me.",
    ],
  },
];

const certifications = [
  {
    name: "DSA in C/C++",
    description: "Certified in Data Structures and Algorithms using C/C++",
    image: dsa,
  },
  {
    name: "Full\u00A0Stack Developer",
    description: "Certified Full Stack Developer specializing in MERN stack",
    image: full_stack,
  },
  {
    name: "Machine Learning",
    description: "Certified in Machine Learning and AI using Python",
    image: machine_learning,
  },
];

const projects = [
  {
    name: "Food-i-FY",
    description:
      "A food app that intelligently suggests meals based on categories like breakfast, lunch, and dinner. It fetches real-time data from a backend server, where the data is organized in an index.js file. The app ensures users receive accurate and dynamic meal suggestions with a 95% accuracy rate in food recommendations",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/abhishek-ox/Food-i-FY",
  },
  {
    name: "Online C++ Cmpiler",
    description:
      "This project provides a web-based C++ execution environment, allowing users to write, compile, and execute C++ code in real-time. Built with a backend that handles file generation and execution, it offers a seamless user experience for coding enthusiasts. The frontend is designed for simplicity, enabling quick access to essential features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: HomePage,
    source_code_link: "https://github.com/abhishek-ox/Online-C-Compiler",
  },
  {
    name: "To Do Missions",
    description:
      "The To-Do List App is a full-featured task management application designed to help users organize and track their daily tasks efficiently. Features Real-Time Task Management: Add, edit, and delete tasks instantly. Task Completion: Mark tasks as completed with a simple checkbox toggle. Timestamp Visibility: View the time and date when each task was added.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/abhishek-ox/To-Do-Missions",
  },
  {
    name: "Whack-a-Mole Game",
    description:
      "Implemented visual designs and dynamic visual effects to ensure a smooth user experience across devices.Developed an interactive whack-a-mole game with 98% hit detection accuracy",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Whackgame,
    source_code_link: "https://github.com/abhishek-ox/Whack-a-Mole-Game",
  },
  {
    name: "Neuro-Card-Game",
    description:
      "Implemented an intelligent card matching algorithm to ensure an engaging user experience.Achieved a high hit detection accuracy rate of 96% for card matching.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: memory,
    source_code_link: "https://github.com/abhishek-ox/Neuro-Card-Game",
  },
];

export { services, technologies, experiences, certifications, projects };
