import React from 'react'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Content2 from '../Component/Content2/Content2';
import ProjectCard from '../Component/ProjectCard/ProjectCard';
import  {ProjectData}  from '../Component/ProjectCard/ProjectData';
const Project = () => {
  const data={heading:"PROJECTS.", text:"Some of my Projects."}
  return (
    <div>
      <Navbar/>
      <Content2 data={data}/>
      <div className="project-container">
      {ProjectData.map((project, index) => (
  <ProjectCard
    id={index}
    title={project.title}
    imgSrc={project.imgSrc}
    describe={project.describe}
    viewLink={project.viewLink}
    sourceLink={project.sourceLink}
  />
))}
      </div>
      
      <Footer/>
    </div>
  )
}

export default Project
