import React from 'react';
import './BlurbSection1.css';
import {blurb1Config} from '../Data/blurb1Config';


function BlurbSection1({ config = blurb1Config }) {

  
  return (
        <section className="py-0 px-0 bg-[#8B1538]">
                            <img
                    src={config.blurb1Image}
                    alt="image of a microphone, dark blue background"
                    className="absolute z-10 w-full bg-cover bg-center w-80 h-80 object-cover mx-auto shadow-2xl"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
          <div className="max-w-4xl mx-auto text-center">


            <h2 className="relative z-30 py-10 px-10 font-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-8">
              {config.heading}
            </h2>
            <p className="relative z-30 text-xl text-[#F5F5DC]/90 leading-relaxed">
              {config.paragraph}
            </p>
          </div>
        </section>
  );
}

export default BlurbSection1;