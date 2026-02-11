import React from 'react';
import './BlurbSection2.css';
import {blurb2Config} from '../Data/blurb2Config';


function BlurbSection2({ onNavigate, config = blurb2Config }) {

  
  return (
        <section className="relative py-20 px-6 bg-white xxbg-gradient-to-b xxfrom-[#1a1a1a] xxto-[#2B2B2B]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12 mx-auto">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2B2B2B] xxtext-[#F5F5DC] mb-4">
                {config.heading}
              </h2>
              <h3 className="text-2xl text-[#2B2B2B] xxtext-[#D4AF37] mb-6">{config.subheading}</h3>
              <p className="text-lg text-[#2B2B2B] xxtext-[#F5F5DC]/80 leading-relaxed mb-8">
                {config.paragraph}
              </p>
              <button
                onClick={() => {
                  onNavigate('about-bobby');
                  setTimeout(() => {
                    document.getElementById('testimonials-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-fit gold-gradient text-[#2B2B2B] font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {config.buttonText}
              </button>
            </div>

            {/* Image Layout */}
            <div className="relative mt-16">
              <img
                src={config.longImage}
                alt="Comedy Club Interior"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.background = 'linear-gradient(135deg, #6B4C7C, #8B1538)';
                  e.target.alt = 'Image unavailable';
                }}
              />
              <img
                src={config.squareImage}
                alt="Performance Moment"
                className="absolute -bottom-12 right-8 w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl border-4 border-[#D4AF37]"
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.background = '#8B1538';
                  e.target.alt = 'Image unavailable';
                }}
              />
            </div>
          </div>
        </section>
  );
}

export default BlurbSection2;