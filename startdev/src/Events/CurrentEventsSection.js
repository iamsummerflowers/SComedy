import React from 'react';
import './CurrentEventsSection.css';
import { useState } from 'react';



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
                <h3 className="text-2xl font-bold text-[#F5F5DC] mb-6 text-center">HOT 7025 FM</h3>
                <img
                  src='../assets/heroImage1.jpg'
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
                  className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors underline"
                >
                  Every Wednesday from 5:00 - 6:00 PM
                </a>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Join us every Wednesday evening as we host the popular HOT 7025 FM radio show live from our venue. This weekly event has become a staple in the Vegas comedy community, bringing together some of the funniest people in the business.
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Featured on this week's show is our own <button onClick={() => onNavigate('making-sense')} className="text-blue-500 hover:text-blue-400 underline font-semibold">Sanchez</button> from the "Making Sense" series. Get ready for an evening of laughs, behind-the-scenes stories, and live entertainment that captures the raw energy of Vegas comedy.
                </p>
              </div>
            </div>
          </div>
        </section>
  );
}

export default CurrentEventsSection;