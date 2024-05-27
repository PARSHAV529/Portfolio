'use client'

import { motion } from "framer-motion";
import SingleSkill from "./SingleSkill";
import { skills } from "./SkillData";
import Section from "@/components/section";
import SectionHeading from "@/components/sectionHeading";
import { useInView } from "react-intersection-observer";
import { scaleOpacityVariants } from "@/lib/motion";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Section
      id="skills"
      className="relative z-40 flex flex-col items-center justify-center gap-10"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <SectionHeading text="Professional" gradient="Skillset" />
        <div className="cursive text-xl sm:text-2xl text-gray-200 text-center">
          Making apps with modern technologies
        </div>
      </div>
      <motion.div
        ref={ref}
        variants={scaleOpacityVariants(100,0.5,0.8)}
        className="w-[calc(100%+1rem)] sm:w-[calc(100%+2.5rem)] flex gap-1 flex-row flex-wrap items-center justify-center"
      >
        {skills.map((skill, index) => (
          <SingleSkill
            key={skill.text}
            inView={inView}
            icon={skill.icon}
            text={skill.text}
            index={index}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;