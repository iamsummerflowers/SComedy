import React from 'react';
import './MakingSenseShowSection.css';
import { useState, useEffect } from 'react';
import image2 from '../assets/eventsPageImage2.jpg';



function MakingSenseShowSection() {
  
  return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="order-first">
                <img
                  src={image2}
                  alt="Making Sense with Sanchez"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-[#D4AF37]"
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
                  Making Sense with Sanchez N Slaughter
                </h2>
                
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Making Sense with Sanchez N Slaughter Facebook represents the collaborative efforts of Sanchez and Slaughter and serves as a source to access our broadcast content as well as a place to interact with us. We hope you enjoy the shared insights!
                </p>

                {/* <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  The show cuts through the noise and gets to the heart of what makes comedy work. From hilarious stories to serious discussions about the craft, "Making Sense with Sanchez" is your backstage pass to the Vegas comedy scene. New episodes drop weekly, so tune in and join the conversation that's changing the comedy game.
                </p> */}

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 pt-6">
                  <a
                    href="https://makingsensewithsancheznslaughter.buzzsprout.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-gradient text-[#2B2B2B] font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    Listen to Our Podcast
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCf9isuBRlwmxjrpAWBhXrJg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="burgundy-gradient text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    Follow Our YouTube Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default MakingSenseShowSection;