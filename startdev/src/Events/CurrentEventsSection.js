import React from 'react';
import './CurrentEventsSection.css';
import { useState } from 'react';

import image2 from '../assets/eventsPageImage2.jpg';


function CurrentEventsSection({ onNavigate }) {

  
  return (
        <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Current Events
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <div>
                <h3 className="text-2xl font-bold text-[#F5F5DC] mb-6 text-center">
                  {/* HOT 7025 FM */}
                                  <a
                  href="https://hot7025fm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-blue-500 hover:text-yellow-400 transition-colors xxunderline"
                >
                  HOT 7025 FM
                </a>
                </h3>
                <img
                  src={image2}
                  alt="HOT 7025 FM Event"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl border-2 border-[#D4AF37]"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#8B1538';
                    e.target.alt = 'Image unavailable';
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <a
                  href="https://www.facebook.com/hot7025fm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-blue-500 hover:text-yellow-400 transition-colors underline"
                >
                  Every Wednesday from 5:00 - 6:00 PM
                </a>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Minority Report featuring <button onClick={() => onNavigate('making-sense')} className="w-fit text-blue-500 hover:text-yellow-400 underline font-semibold">Sanchez and Slaughter</button> (S2)
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                 #MinorityReport #HOT7025FM #minoritybusiness #minorityreport #minoritymentalhealth
                </p>
              </div>
            </div>
          </div>
        </section>
  );
}

export default CurrentEventsSection;