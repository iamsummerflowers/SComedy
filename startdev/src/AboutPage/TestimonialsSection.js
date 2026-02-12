import React from 'react';
import './TestimonialsSection.css';
import { useState } from 'react';
import image4 from '../assets/testimonialsPageImage1.jpg';


function TestimonialsSection() {

      const testimonials = [
        {
          text: "We signed a six-month agreement with Slaughter Comedy with an option to have Slaughter Comedy produce and promote increased business operations by establishing entertainment at Pop’s OMD Theater. Since signing an agreement with Bobby, we’ve witnessed a dramatic increase in foot traffic and the bottom line to business profits. Bobby now plans and produces comedy shows, he has the technical expertise to assist the company in establishing a business web presence on the internet and social media sites. Our overall business has seen 45% increase in sales and we continue to see new business. Bobby is versatile as a comedian who produces, promotes (to include show designs, tickets, flyers, posters) and arranges all aspects of show planning. Slaughter Comedy is your one-stop shop for small local business entertainment. He’ll design an affordable comedy show that fits your budget.",
          author: "Pop’s Soups, Subs, Sandwiches and Beverages/Official Music District (OMD) Theater (Jan 2017 – Present) Las Vegas, NV",
          icon: "M3 21a6 6 0 016-6h.01M9 21a4 4 0 014-4h.01M15 5a2 2 0 012 2v.01M21 3a2 2 0 012 2v.01"
        },
        {
          text: "Bobby was the MC for the Variety Show featuring the World famous InkSpots, Lou Ragland, Dean Lambus as “Sammy,” Phil Flowers and many more entertainers. Bobby not only hosted the show but performed his standup to entertain a diverse audience of old and young alike. Bobby is the consummate professional.",
          author: "Bobby was the MC for the Variety Show featuring the World famous InkSpots, Lou Ragland, Dean Lambus as “Sammy,” Phil Flowers and many more entertainers. Bobby not only hosted the show but performed his standup to entertain a diverse audience of old and young alike. Bobby is the consummate professional.",
          icon: "M3 21a6 6 0 016-6h.01M9 21a4 4 0 014-4h.01M15 5a2 2 0 012 2v.01M21 3a2 2 0 012 2v.01"
        }
      ];

      return (
        <section className="w-full bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a] px-6 py-20" id="testimonials-section"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${image4})`,
              backgroundPosition: 'top',
              backgroundSize: '250%',
              backgroundRepeat: 'no-repeat'
              // transform: `translateY(${scrollY * 0.5}px)`
            }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Testimonials
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  {/* Quotes Icon */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 2.972C1 11.226 2.256 20 3 21z"/>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 2.972C13 11.226 14.256 20 15 21z"/>
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-[#F5F5DC]/80 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <p className="text-[#D4AF37] font-bold text-lg">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}

export default TestimonialsSection;