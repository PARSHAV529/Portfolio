import { motion } from "framer-motion";
import ProjectDescription from "./ProjectDescription";
import ProjectTags from "./ProjectTags";
import ProjectTitle from "./ProjectTitle";
import { slideInFromBottomVariants } from "@/lib/motion";
import ProjectImage from "./ProjectImage";

type Props = {
  inView: boolean;
  id: number;
  imageHeight: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  img:any;
};

const ProjectsItem: React.FC<Props> = ({ inView, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottomVariants(50, 0.5, 0.25 * props.id)}
      className="glass flex flex-col overflow-hidden"
    >
      <ProjectImage
        imageHeight={props.imageHeight}
        title={props.title}
        github={props.github}
        link={props.link}
        img={props.img}
      />
      <div className="px-5 py-5 flex flex-col">
        <ProjectTitle title={props.title} />
        <ProjectTags tags={props.tags} />
        <ProjectDescription description={props.description} />
      </div>
    </motion.div>
  );
};

export default ProjectsItem;
