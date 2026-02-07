import React from 'react';
import './AboutSection.css';
import {aboutConfig} from '../Data/aboutConfig';


function AboutSection({ onNavigate, config = aboutConfig }) {

  
  return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <h2 className="font-display text-5xl md:text-6xl font-bold text-[#D4AF37]">
                  {config.heading}
                </h2>
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  {config.paragraph}
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {config.socials.map((social, index) => (
                    <button
                      key={index}
                      className="social-btn w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: social.color }}
                      title={social.name}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('about-bobby')}
                  className="burgundy-gradient text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {config.buttonText}
                </button>
              </div>

              {/* Owner Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={config.ownerImage}
                    alt={config.ownerName}
                    className="w-80 h-80 rounded-full object-cover mx-auto border-4 border-[#D4AF37] shadow-2xl"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                  <div className="text-center mt-6">
                    <h3 className="font-display text-2xl font-bold text-[#F5F5DC]">{config.ownerName}</h3>
                    <p className="text-[#D4AF37]">{config.ownerTitle}</p>
                  </div>
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6B4C7C]/30 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>
  );
}

export default AboutSection;