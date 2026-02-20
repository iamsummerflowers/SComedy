import React from 'react';
import './ContactSection.css';
import {contactConfig} from '../Data/contactConfig';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactSection({ config = contactConfig }) {


  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ygkfx7s',
      'template_d66swgn',
      form.current,
      'zFLZH29bRNDazrYni'
      ).then((result) => {
        setMessageSent(true);  
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("message in error");
      });
  };

  // original is above

      // const [formData, setFormData] = useState({
      //   name: '',
      //   email: '',
      //   subject: '',
      //   message: ''
      // });
      // const [submitted, setSubmitted] = useState(false);

      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   setSubmitted(true);
      //   setTimeout(() => {
      //     setSubmitted(false);
      //     setFormData({ name: '', email: '', subject: '', message: '' });
      //   }, 3000);
      // };

      // const handleChange = (e) => {
      //   setFormData({ ...formData, [e.target.name]: e.target.value });
      // };


  
  return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a]" id="contact-section"
        // style={{ backgroundImage: `url(${config.contactImage})` }}
        >


          <div className="z-50 max-w-4xl mx-auto"
          
          >


            
            <div className="z-50 text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
                {config.heading}
              </h2>
              <p className="text-xl text-[#F5F5DC]/70">
                {config.subheading}
              </p>
            </div>

            {/* Contact Info */}
            {/* <div className="z-30 flex flex-wrap items-center mx-auto justify-center mb-12 w-fit">
              <a href={`tel:${config.phone}`} className="mx-10 flex items-center gap-3 text-[#F5F5DC] hover:text-[#D4AF37] transition-colors">
                <div className="w-12 h-12 bg-[#8B1538] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="w-fit text-lg">{config.phone}</span>
              </a>
              <a href={`mailto:${config.email}`} className="flex items-center gap-3 text-[#F5F5DC] hover:text-[#D4AF37] transition-colors">
                <div className="w-12 h-12 bg-[#8B1538] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg text-wrap w-1/5">{config.email}</span>
              </a>
            </div> */}

            {/* Contact Form */}
            <form 
              ref={form} onSubmit={sendEmail}
              // onSubmit={handleSubmit} 
              className="z-30 bg-[#2B2B2B] p-8 rounded-2xl border border-[#D4AF37]/30"
              style={{ backgroundImage: `url(${config.contactImage})` }}
            >
              {/* {submitted ? ( */}
                {/* <div className="text-center py-12">
                  
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">Message Sent!</h3>
                  <p className="text-[#F5F5DC]/70">We'll get back to you soon.</p>
                </div> */}
              {/* ) : ( */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#F5F5DC] mb-2 font-medium">{config.fields.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      // value={formData.name}
                      // onChange={handleChange}
                      required
                      className="w-3/5 px-4 py-3 bg-[#1a1a1a] border border-[#6B4C7C]/50 rounded-lg text-[#F5F5DC] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#F5F5DC] mb-2 font-medium">{config.fields.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      // value={formData.email}
                      // onChange={handleChange}
                      required
                      className="w-3/5 px-4 py-3 bg-[#1a1a1a] border border-[#6B4C7C]/50 rounded-lg text-[#F5F5DC] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-[#F5F5DC] mb-2 font-medium">{config.fields.subject}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      // value={formData.subject}
                      // onChange={handleChange}
                      required
                      className="w-3/5 px-4 py-3 bg-[#1a1a1a] border border-[#6B4C7C]/50 rounded-lg text-[#F5F5DC] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#F5F5DC] mb-2 font-medium">{config.fields.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      // value={formData.message}
                      // onChange={handleChange}
                      required
                      rows="5"
                      className="w-ful px-4 py-3 bg-[#1a1a1a] border border-[#6B4C7C]/50 rounded-lg text-[#F5F5DC] focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-fit px-10 burgundy-gradient text-white font-bold py-4 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    {config.buttonText}
                  </button>
                </div>
              {/* )} */}
              {messageSent && <p>Thanks for submitting!</p>}
            </form>


          </div>
        </section>
  );
}

export default ContactSection;