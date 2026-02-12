import React from 'react';
import './BlurbSection4.css';
import {blurb4Config} from '../Data/blurb4Config';


function BlurbSection4({ onNavigate, config = blurb4Config }) {

  
  return (
        <section className="py-20 px-6 bg-[#3D3D3D] xxbg-gradient-to-b xxfrom-[#2B2B2B] xxto-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video */}
              <div className="relative">
                <video
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  src={config.videoUrl}
                  poster={config.videoPoster}
                  preload= "auto"
                  controls
                  muted
                  playsInline
                  autoPlay
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#D4AF37] rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">
                  {config.heading}
                </h2>
                <p className="text-lg text-[#F5F5DC]/80 mb-8">
                  {/* {config.paragraph} */}
                </p>
                <ul className="space-y-4 mb-10">
                  {config.events.map((event, index) => (
                    <li key={index} className="flex items-center gap-4 text-[#F5F5DC]">
                      <span className="w-3 h-3 bg-[#D4AF37] rounded-full flex-shrink-0" />
                      <span className="text-lg">{event}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('events')}
                  className="w-fit burgundy-gradient text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {config.buttonText}
                </button>
              </div>
            </div>
          </div>
        </section>
  );
}

export default BlurbSection4;