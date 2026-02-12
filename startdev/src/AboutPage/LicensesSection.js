import React from 'react';
import './LicensesSection.css';
import { useState } from 'react';
import image5 from '../assets/businessLicImage1.jpg';
import image6 from '../assets/businessLicImage1.jpg';


function LicensesSection() {


      return (
        <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Licenses & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* License 1 */}
              <div className="flex justify-end">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
                  <img
                    src={image5}
                    alt="Nevada Business License"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                </div>
              </div>

              {/* License 2 */}
              <div className="flex justify-start">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
                  <img
                    src={image6}
                    alt="Entertainment Venue Certification"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#8B1538';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default LicensesSection;