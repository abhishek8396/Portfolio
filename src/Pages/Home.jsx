import React from 'react'
import Navbar from '../Component/Navbar'
import MainImg from '../Component/MainImg'
import Footer from '../Component/Footer'


import Form from '../Component/Form/Form'
import EventData from '../Component/VerticalTimeElement/EventData'
import { ProjectData } from '../Component/ProjectCard/ProjectData'
import ProjectCard from '../Component/ProjectCard/ProjectCard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MainImg/>
      <h1 className='heading' style={{marginTop:"2rem"}}>ABOUT</h1>
      <EventData/>
      <h1 className='heading'>PROJECT</h1>
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
      <h1 className='heading'>CONTACT</h1>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
