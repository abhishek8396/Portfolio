import React from 'react'
import "./Content2.css";
const Content2 = (props) => {
  return (
    <div className='hero-img'>
      <div className="heading">
        <h1>{props.data.heading}</h1>
        <p>{props.data.text}</p>
      </div>
    </div>
  )
}

export default Content2
