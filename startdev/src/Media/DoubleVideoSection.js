import React from 'react';
import './DoubleVideoSection.css';
import { useState, useEffect } from 'react';
import video1 from '../assets/heroVideo1.mp4';



function DoubleVideoSection() {

  
  return (
        <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] text-center mb-12">
              Recent Performances
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Video 1 */}
              <div className="relative">
                <div className="relative pb-[56.25%] bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    src='../assets/heroVideo1.mp4'
                    poster='../assets/heroImage1.jpg'
                    controls
                    muted
                    playsInline
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl -z-10" />
              </div>

              {/* Video 2 */}
              <div className="relative">
                <div className="relative pb-[56.25%] bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    src= '../assets/heroVideo1.mp4'
                    poster='../assets/heroImage1.jpg'
                    controls
                    muted
                    playsInline
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>
  );
}

export default DoubleVideoSection;