import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Dharmsinh Desai University (DDU)",
    location: "Nadiad, Gujrat",
    description:
      "Final-year B.Tech student in Information Technology at Dharmsinh Desai University.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Internship at InternPE,",
    location: "Remote",
    description:
    "Participated in a 4-week remote web development internship program. \n Worked on projects using HTML, CSS, and JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Jul 2024",
  },
 
  {
    title: "Saturn Tiles Website ",
    location: "Freelancing",
    description:
    "Developed a responsive website using HTML, CSS, and JavaScript to showcase products and services. \n Ensured cross-browser compatibility and mobile optimization for a seamless user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 august - 2024 september",
  },
] as const;

