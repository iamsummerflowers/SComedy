import React from 'react';
import './SlaughterComedySection.css';
import { useState, useEffect } from 'react';



function SlaughterComedySection() {

  
  return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="flex justify-center">
                <img
                  src='../assets/heroImage1.jpg'
                  alt="Slaughter Comedy"
                  className="w-full max-w-sm h-auto rounded-2xl shadow-2xl border-4 border-[#D4AF37] object-cover"
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
                
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Slaughter Comedy is where the magic happens. Our brand represents the cutting edge of comedy—fierce, unafraid, and absolutely hilarious. We're committed to showcasing the most talented and entertaining performers in the industry.
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Every show is a celebration of comedic excellence. From intimate performances to packed-out spectacles, Slaughter Comedy delivers moments that will stay with you long after the laughter fades. We're not just telling jokes—we're creating experiences that connect with audiences on a deeper level.
                </p>

                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Join us for the comedy events that are changing the game. Whether you're a comedy fan or a fellow performer, Slaughter Comedy welcomes you to be part of something special and truly unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>
  );
}

export default SlaughterComedySection;