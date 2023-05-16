import React from 'react'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Content2 from '../Component/Content2/Content2';
import Form from '../Component/Form/Form';
const Contact = () => {
  const data= {heading:"CONTACT.", text:"Lets have a Chat."}
  return (
    <div>
      <Navbar/>
      <Content2 data={data}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
