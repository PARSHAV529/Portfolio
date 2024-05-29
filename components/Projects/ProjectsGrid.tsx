'use client'

import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { projectsList } from "@/lib/projectList";

const ProjectsGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14"
    >
      {projectsList.map((project) => (
        <Project key={project.id} inView={inView} {...project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
