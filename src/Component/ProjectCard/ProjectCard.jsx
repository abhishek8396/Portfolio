import React from 'react'
import "./ProjectCard.css";

import {  NavLink, useNavigate } from 'react-router-dom';
const ProjectCard = ({title, imgSrc, describe, viewLink, sourceLink, id }) => {
  const navigate=useNavigate()
  return (
    
    <div className='project-container'>
    <div className='project-card' onClick={()=>{navigate("/project/"+id)}}>
      <img src={imgSrc} alt='Project Image' />
      <h2 className='project-title'>{title}</h2>
      <div className='pro-details'>
        <p>{describe}</p>
        <div className='pro-btns'>
          <NavLink to={viewLink} className='btn'>
            View
          </NavLink>
          <NavLink to={sourceLink} className='btn'>
            Source
          </NavLink>
        </div>
      </div>
    </div>
    
  </div>
 
  )
}

export default ProjectCard
