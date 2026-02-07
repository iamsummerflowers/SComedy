import React from 'react';
import './LicensesSection.css';
import { useState } from 'react';


function LicensesSection() {


      return (
        <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Licenses & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* License 1 */}
              <div className="flex justify-center">
                <div className="w-64 h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
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
              <div className="flex justify-center">
                <div className="w-64 h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
                  <img
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=400&fit=crop"
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