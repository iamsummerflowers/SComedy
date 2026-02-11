import React from 'react';
import './AboutSection.css';
import {aboutConfig} from '../Data/aboutConfig';


function AboutSection({ onNavigate, config = aboutConfig }) {

  
  return (
        <section className="py-24 px-6 mx-auto bg-white xxbg-gradient-to-b xxfrom-[#2B2B2B] xxto-[#1a1a1a]">
          <div className="max-w-7xl mx-auto lg:flex flex-row xxsm:relative xxmd:relative ">
            
              {/* Owner Image */}
              <div className="relative p-10">
                <div className="relative z-10">
                  <img
                    src={config.ownerImage}
                    alt={config.ownerName}
                    className="w-80 h-80 rounded-md object-cover mx-auto border-4 border-[#D4AF37] shadow-2xl"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                  <div className="text-center mt-6">
                    <h3 className="font-display text-2xl font-bold text-[#2B2B2B] xxtext-[#F5F5DC]">{config.ownerName}</h3>
                    <p className="text-[#2B2B2B] xxtext-[#D4AF37]">{config.ownerTitle}</p>
                  </div>
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6B4C7C]/30 rounded-full blur-3xl" />
              </div>


            <div className="grid lg:grid-cols-1 gap-16 items-center p-10">
              {/* Text Content */}
              <div className="space-y-8">
                <h2 className="font-display text-5xl md:text-4xl font-bold text-[#2B2B2B] xxtext-[#D4AF37]">
                  {config.heading}
                </h2>
                <p className="text-lg text-[#2B2B2B] xxtext-[#F5F5DC]/80 leading-relaxed">
                  {config.paragraph1}
                </p>
                <p className="text-lg text-[#2B2B2B] xxtext-[#F5F5DC]/80 leading-relaxed">
                  {config.paragraph2}
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {config.socials.map((social, index) => (
                    <button
                      key={index}
                      className="social-btn w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: social.color }}
                      title={social.name}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('about-bobby')}
                  className="w-fit gold-gradient text-gradient font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {config.buttonText}
                </button>
              </div>


            </div>
          </div>
        </section>
  );
}

export default AboutSection;