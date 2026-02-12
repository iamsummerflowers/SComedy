import React from 'react';
import './MakingSenseAboutSection.css';
import { useState, useEffect } from 'react';
import image3 from '../assets/podcastPageImage3.jpg';



function MakingSenseAboutSection() {
  
  return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Left */}
              <div className="space-y-6">
                <h2 className="font-display text-5xl font-bold text-[#D4AF37]">
                  Sebastian Sanchez
                </h2>
                
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Sebastian is a Chilean immigrant, a world traveler and public servant who was raised in Miami, but currently resides in Las Vegas. As a former illegal immigrant, for many years his life revolved around uncertainty. Despite limited opportunities, Sebastian was able to earn a full scholarship to Florida State University where he earned a Bachelor of Science in Finance and a minor in Italian in 2008.
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Sebastian began his career working for a major for-profit university, where he became aware of the exploitation of vulnerable Americans within the educational system. Despite a promising career, he resigned from his job to pursue his passion for teaching minorities in neglected communities. In 2012, Sebastian earned a Master of Arts in English from National University which allowed him to transition into teaching college courses at Miami-Dade College and Strayer University. He currently works as a high school teacher and volunteers his time as an EMT Firefighter.
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  In 2020, Sebastian decided to combine his passion for service with his comedic persona and created The Minority Report. In collaboration with Bobby Slaughter, Sebastian aims to educate and inspire disenfranchised Americans from all economic backgrounds. When he is not recording, teaching, or working in an ambulance, you may be able to catch his stand up at local open mics and comedy clubs in Las Vegas.
                </p>
              </div>

              {/* Image Right */}
              <div className="flex justify-center">
                <img
                  src={image3}
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

                                <a
                    href="https://www.facebook.com/people/Making-Sense-with-Sanchez-Slaughter/100064042992396/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex w-fit burgundy-gradient text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                  >Follow Making Sense with Sanchez and Slaughter
                  </a>
            </div>
          </div>
        </section>
  );
}

export default MakingSenseAboutSection;