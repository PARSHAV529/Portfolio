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
    title: "Graduated Techincal School - Web Integrator PHP",
    location: "Roskilde, Denmark",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 summer - 2016 january",
  },
  {
    title: "Computer Science Diploma",
    location: "Roskilde, Denmark",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 januray - 2021 summer",
  },
  {
    title: "Trekroner Housing-Union Internship",
    location: "Roskilde, Denmark",
    description:
      "I was working as an intern for the last semeter of my computer science. Where i was going to build a Wordpress site for Trekroner Housing-Union. With booking system, calendar system and event overview. As well for contact form and responsive design. Using Elementor, classic editor for custom coding and more.",
    icon: React.createElement(CgWorkAlt),
    date: "2021, January-May",
  },
  {
    title: "Proffesional Bachelor in Fullstack (Web) & App",
    location: "Roskide, Denmark",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023 summer",
  },
  {
    title: "PBA Internship - NanoScaleSimulations",
    location: "Roskide, Denmark",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 january - 2023 summer",
  },
  {
    title: "Freelance Fullstack - Orgone Jewels",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 august - 2023 november",
  },
] as const;

