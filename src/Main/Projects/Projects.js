import React from "react";
import ProjectsData from "./Components/projectsdata";
import ProjectInfo from "./Components/ProjectInfo.components";
import Section from "../../HOC/Section.HOC";

function Projects() {

  return (
    <div className="lg:w-fit lg:mx-10 s_phone:mx-10 rounded-xl hover:bg-white/[0.02] backdrop-blur-sm transition duration-300 ease-in-out group">

      {/* PROJECTS */}
      <Section title="Projects" />

      {/* PROJECTS INFO */}
      <ProjectInfo data={ProjectsData} />
    </div>
  );
}

export default Projects;