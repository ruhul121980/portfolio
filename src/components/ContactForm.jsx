// src/components/ContactForm.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_fv1rbuc',
        'template_1mqyv2d', 
        formData,
        'Yn_psqIv3FRR4u-7Z' 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message');
        }
      );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
      <motion.h2
        whileInView={{opacity:1,y:-10}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='text-center text-4xl'>Contact</motion.h2>
        
        <label htmlFor="name" className="block text-sm font-bold mb-2">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="What's your name?"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="What's your email?" className="block text-sm font-bold mb-2">Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-bold mb-2">What You want to say?</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
