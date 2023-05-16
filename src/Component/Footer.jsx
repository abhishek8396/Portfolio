import React from 'react'
import "./Footer.css";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                <p>Tilak Nagar</p>
                <p>New Delhi</p>
            </div>
            </div>
            
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                8851711435
                </h4>
                
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    abhishekmedia1289@gmail.com
                </h4>
            </div>
        </div>
        <div className="left">
            <h4>About Me</h4>
            <p>I am Abhishek kumar. I Enjoy Web Development and new Project and Design Challanges.</p>
            <div className="social">
                <FaFacebook size={40} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter size={40} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={40} style={{color:"#fff", marginRight:"1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
