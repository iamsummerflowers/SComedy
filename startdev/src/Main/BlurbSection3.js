import React from 'react';
import './BlurbSection3.css';
import {blurb3Config} from '../Data/blurb3Config';


function BlurbSection3({ config = blurb3Config }) {

  
  return (
        <section className="py-20 px-6 bg-[#3D3D3D]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-8">
              {config.heading}
            </h2>
            <p className="text-xl text-[#F5F5DC]/90 leading-relaxed">
              {config.paragraph}
            </p>
          </div>
        </section>
  );
}

export default BlurbSection3;