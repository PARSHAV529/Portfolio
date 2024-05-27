"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import img from '@/public/profile.png'
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Lottie from "lottie-react";
import waveAnimation from "@/lib/waveAnimation.json";

import IconButton from "../IconButton";
import { FaGithub } from "react-icons/fa"
import { FaMeta, FaLinkedin } from "react-icons/fa6";
import { slideInFromLeftVariants, slideInFromTopVariants } from "@/lib/motion";

const name = 'Parshav Andhariya'
const fadeInAnimationVariants = {
    initial: {
        opacity: 10,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: 0.05 * index,
        ease: "easeOut", 
        duration: 0.5,
        },
    }),
};


export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5);
  
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[58rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            // style={{scale:1.5}}
          >
            <Image
              src={img}
              alt="parshav andhariya"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full object-cover  shadow-xl"
            />
          </motion.div>

        
        </div>
      </div>

      <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-40 w-full  flex  items-center justify-center translate-y-[15%] lg:translate-y-0"
    >
      <div className="h-full w-full flex flex-col justify-center">
        <motion.div
          variants={slideInFromTopVariants(100, 0.5, 0.2)}
          className="sm:-ml-20 lg:-ml-1 flex gap-0 flex-row items-center justify-center lg:justify-center text-center lg:text-center"
        >
          <div className="hidden sm:block translate-x-2 lg:translate-x-0 scale-[0.7] lg:scale-70">
             <Lottie animationData={waveAnimation} style={{ width: "100px" }} />
          </div>
          <h1 className="text-3xl mr-4 lg:text-4xl text-gray-100 font-bold">
            Hey there!
          </h1>

        </motion.div>

        <motion.div
          variants={slideInFromLeftVariants(100, 0.5, 0.5)}
          className="mt-5 sm:mt-0 text-3xl lg:text-4xl font-bold text-gray-100 w-full lg:w-auto h-auto flex flex-col sm:flex-row justify-center lg:justify-center gap-4 text-center lg:text-center"
        >
          I'M
          <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-700 uppercase">
            {name}
          </h1>
        </motion.div>
        </div>

        </motion.div>

        <motion.p
          variants={slideInFromLeftVariants(100, 0.5, 0.8)}
          className="max-w-2xl my-6 mx-auto lg:mx-0 text-xl text-gray-400 leading-8 text-center lg:text-left"
        >
          I am a web developer who is passionate about creating beautiful, interactive, and accessible experiences on the web
        </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
          viewport={{
            once: false,
          }}
      >

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://drive.google.com/file/d/1bJ9nybo__06dhTr8hGe-_-gVZhikh9hg/view?usp=drive_link"
          
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <div className="flex gap-4 mt-2 md:mt-2 lg:mt-0 xl:mt-0">
    
          <Link href='https://github.com/PARSHAV529'>
            <IconButton text="Github" color="bg-gradient-to-r from-indigo-500 to-purple-700">
              <FaGithub size={30} />
            </IconButton>
            </Link>
          <Link href='https://www.instagram.com/_._parshav_._/?theme=dark'>
            <IconButton text="Meta" color="bg-gradient-to-r from-indigo-500 to-purple-700" >
              <FaMeta size={30} />
            </IconButton>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/jannick-pedersen-3b8a36119" className="flex-auto">
            <IconButton text="LinkedIn" color="bg-gradient-to-r from-indigo-500 to-purple-700">
              <FaLinkedin size={30} />
            </IconButton>
          </Link>
          
        </div>
      
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
      </motion.div>
    </section>
  );
}
