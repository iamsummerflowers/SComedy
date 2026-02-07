import React from 'react';
import './PastEventsSection.css';
import { useState } from 'react';



function PastEventsSection({ onNavigate }) {

      const pastEvents = [
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg'
      ];
  
  return (
        <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Past Events
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {pastEvents.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-[#D4AF37]/30"
                >
                  <img
                    src={image}
                    alt={`Past Event ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">Event #{index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}

export default PastEventsSection;