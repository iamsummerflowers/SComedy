import React from 'react';
import './BlurbSection5.css';
import {blurb5Config} from '../Data/blurb5Config';


function BlurbSection5({ onNavigate, config = blurb5Config }) {

  
  return (
        <section className="py-20 px-6 bg-[#B85450]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-10">
                  {config.heading}
                </h2>
                <ul className="space-y-6 mb-10">
                  {config.services.map((service, index) => (
                    <li key={index} className="bg-black/20 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-[#D4AF37] mb-2">{service.title}</h3>
                      <p className="text-[#F5F5DC]/90">{service.description}</p>
                    </li>
                  ))}
                </ul>
                {/* <button
                  onClick={() => onNavigate('services')}
                  className="gold-gradient text-[#2B2B2B] font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {config.buttonText}
                </button> */}
              </div>
              <div className="relative">
                <img
                  src={config.image}
                  alt="Our Services"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = 'linear-gradient(135deg, #6B4C7C, #2B2B2B)';
                    e.target.alt = 'Image unavailable';
                  }}
                />
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#D4AF37] rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>
  );
}

export default BlurbSection5;