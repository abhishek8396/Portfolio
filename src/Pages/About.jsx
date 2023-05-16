import React from 'react'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Content2 from '../Component/Content2/Content2';

import "../Component/VerticalTimeElement/TimeLine.css"

import EventData from '../Component/VerticalTimeElement/EventData';
const About = () => {
  const data={heading:"ABOUT", text:"I am a Full-Stack Developer"}
  return (
    <div>
      <Navbar/>
      <Content2 data={data}/>
      <EventData/>
      <Footer/>
    </div>
  )
}

export default About
