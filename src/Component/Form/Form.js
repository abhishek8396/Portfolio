import React from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace these values with your own from EmailJS
    const serviceID = 'service_5rczw9g';
    const templateID = 'template_wmo1v2u';
    const userID = 'f76Df89nMlhyzccMd';
    
    // Fetch form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Prepare email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
    };
    
    // Send the email
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Handle success, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input type='text' name='name' />
        <label>Email:</label>
        <input type='email' name='email' />
        <label>Subject:</label>
        <input type='text' name='subject' />
        <label>Message:</label>
        <textarea rows="6" name='message' placeholder='Type your message'></textarea>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Form;

