import ProjectsGrid from "./ProjectsGrid";
import Section from "../section";
import SectionHeading from "../sectionHeading";
const Projects = () => {
  return (
    <Section
      id="projects"
      className="relative z-40 flex flex-col items-center justify-center gap-12"
    >
      <SectionHeading text="Recent" gradient="Projects" />
      <ProjectsGrid />
    </Section>
  );
};

export default Projects;
