import Contact from "@/components/Contact/contact";
import Experience from "@/components/Experience/experience";
import Intro from "@/components/Home/intro";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skill/Skills";
import SectionDivider from "@/components/section-divider";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Projects />
      <Skills/>
      {/* <Experience /> */}
      {/* <DynamicHeader /> */}
      <Contact />
    </main>
  );
}
