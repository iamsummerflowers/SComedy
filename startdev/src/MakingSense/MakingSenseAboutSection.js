import React from 'react';
import './MakingSenseAboutSection.css';
import { useState, useEffect } from 'react';



function MakingSenseAboutSection() {
  
  return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Left */}
              <div className="space-y-6">
                <h2 className="font-display text-5xl font-bold text-[#D4AF37]">
                  Sebastian's Vision
                </h2>
                
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Sebastian brings years of comedic experience and a sharp eye for talent to "Making Sense." His authentic approach to interviewing and his genuine passion for comedy shine through every episode, creating an atmosphere where guests feel comfortable sharing their real stories.
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  With roots deep in the Vegas comedy scene, Sebastian understands what it takes to make it in this industry. He's dedicated to elevating comedy conversations and giving comedians a platform to share their journey, their struggles, and their triumphs.
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Through "Making Sense with Sanchez," Sebastian is building a community of comedy enthusiasts and creators who appreciate the artistry and dedication behind every punchline. It's not just a show—it's a movement that's redefining what comedy podcasts can be.
                </p>
              </div>

              {/* Image Right */}
              <div className="flex justify-center">
                <img
                  src='../assets/heroImage1.jpg'
                  alt="Sebastian"
                  className="w-full max-w-md h-auto rounded-2xl shadow-2xl border-4 border-[#D4AF37] object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#6B4C7C';
                    e.target.alt = 'Image unavailable';
                  }}
                />
              </div>
            </div>
          </div>
        </section>
  );
}

export default MakingSenseAboutSection;