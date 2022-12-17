import React from "react";
import "./Projects.scss";
import Project from "../components/Project";
// import { usePortfolioContext, PortfolioProvider } from "../utils/GlobalState";
import projects from "../data/projects.json";

function Projects() {
  // const [state ] = usePortfolioContext();


  return (

    <div className="Projects group">

        {projects.map( (project, index) => (
          <Project project={project} key={index} number={index}/>
        ))}
        
  
    </div>
  )
}

export default Projects