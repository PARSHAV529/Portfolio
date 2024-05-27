'use client'
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  inView: boolean;
  icon: React.ReactNode;
  text: string;
  index: number;
}

const SingleSkill = ({ inView, icon: Icon, text, index }: Props) => {
  const imageVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const hoverStartHandler = () => {
    setIsFlipped(true);
  };

  const hoverEndHandler = () => {
    setTimeout(() => {
      setIsFlipped(false);
    }, 1500);
  };

  const animationDelay = 0.15;
  return (
    <motion.div
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flip-card relative text-center"
    >
      <motion.div
        className="flip-card-inner w-28 sm:w-36 h-28 sm:h-36 mx-3 sm:mx-5 mb-6 sm:mb-10 cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onHoverStart={hoverStartHandler}
        onHoverEnd={hoverEndHandler}
      >
        <div className="flip-card-front w-2/3 h-2/3 flex flex-row items-center justify-center border-[2px] border-violet-700 border-opacity-60 rounded-md text-xl sm:text-xl text-white">
          <div className="w-1/2 h-1/2">{Icon}</div>
        </div>
        <div className="flip-card-back w-2/3 h-2/3 flex flex-row items-center justify-center bg-violet-700 rounded-md lg:text-sm sm:text-xl text-white">
        {text}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SingleSkill;