import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProjectData } from './ProjectData';
import "./Projectfull.css"
const ProjectFull = () => {
  const {id} = useParams();
  const project= ProjectData[id];
  return (
    <div className='full-conatainer'>
      <div className="main-container">
      <h1 className='project-title'>{project.title}</h1>
      <img src={project.imgSrc} className='image'/>
      <p className='project-description'>Description: {project.describtion}</p>
      <p className='project-technologies'>Technologies Used: {project.Technologies}</p>
      <p className='project-challanges'>Project Challanges:{project.Projectchallenges}</p>
      <p className='project-role'>Project Role: {project.Projectrole}</p>
      </div>
      <div className="pro-btns">
      <NavLink to={project.viewLink} className="view">View</NavLink>
      <NavLink to={project.sourceLink} className="source">Source</NavLink>
      
      </div>
      
      
    </div>
  )
}

export default ProjectFull
