'use client'
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  
  imageHeight: number;
  title: string;
  link: string;
  github: string;
  img:any;
};

const ProjectImage: React.FC<Props> = ({
  
  imageHeight,
  title,
  github,
  link,
  img
}) => {
 

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      onHoverStart={handleHover}
      onHoverEnd={handleHover}
      whileHover={{}}
      className="relative h-[300px] overflow-hidden"
    >
      <Image alt="img" src={img}/>
      <div className="absolute top-1/2 right-0 pl-2 pr-1 py-1.5 bg-[#1f1147] rounded-tl-xl rounded-bl-xl flex flex-col gap-2 text-xl text-gray-400 -translate-y-1/2">
        <a
          href={github}
          target="_blank"
          aria-label={`${title} github page`}
          className="transition duration-500 hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href={link}
          target="_blank"
          aria-label={`${title} live preview`}
          className="transition duration-500 hover:text-gray-300"
        >
          <RiExternalLinkLine />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectImage;
