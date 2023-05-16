import React from 'react'
import "./Mainimg.css"
import IntroImg from "../Images/intro-bg.jpg"
import { Link } from 'react-router-dom'
const MainImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={IntroImg} alt="mainImg" className="intro-img" />
      </div>
      <div className="content">
        <p>HI, I'M ABHISHEK.</p>
        <h1>Full-Stack Developer</h1>
        <div>
            <Link to="/project" className='btn'>PROJECTS</Link>
            <Link to='/contact' className='btn-light'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default MainImg
