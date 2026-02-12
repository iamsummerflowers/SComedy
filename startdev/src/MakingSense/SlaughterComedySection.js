import React from 'react';
import './SlaughterComedySection.css';
import { useState, useEffect } from 'react';

import image3 from '../assets/podcastPageImage4.jpg';


function SlaughterComedySection() {

  
  return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B]">
          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="flex justify-center">
                <img
                  src={image3}
                  alt="Dog Tags with Slaughter Comedy engraved on them"
                  className="w-full h-full md:h-[500px] object-auto rounded-2xl shadow-2xl border-4 border-[#D4AF37]"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#8B1538';
                    e.target.alt = 'Image unavailable';
                  }}
                />
              </div>

              {/* Text Right */}
              <div className="space-y-6">

                <h2 className="font-display text-5xl font-bold text-[#D4AF37]">
                  Slaughter Comedy
                </h2>

                              <div className="order-first">
                {/* <img
                  src={image3}
                  alt="Dog Tags with Slaughter Comedy engraved on them"
                  className="w-full h-full md:h-[500px] object-auto rounded-2xl shadow-2xl border-4 border-[#D4AF37]"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#8B1538';
                    e.target.alt = 'Image unavailable';
                  }}
                /> */}
              </div>
                
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  A Vetrepreneur, Comedian and businessperson dedicated to promoting local comedy and comics in Las Vegas to bring some laughter to all communities. Slaughter Comedy is a member of the Las Vegas Metro Chamber of Commerce and licensed as a Limited Liability Company in the State of Nevada and licensed as a promoter in Clark Country. Additionally, Slaughter Comedy maintains a licensed membership with the American Society of Composers, Authors, and Publishers.
                </p>
                  <a
                    href="https://www.facebook.com/SlaughterComedy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex w-fit gold-gradient text-[#2B2B2B] font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                  >Follow Slaughter Comedy
                  </a>
              </div>
            </div>
          </div>
        </section>
  );
}

export default SlaughterComedySection;