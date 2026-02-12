import React from 'react';
import './BlurbSection1.css';
import {blurb1Config} from '../Data/blurb1Config';


function BlurbSection1({ config = blurb1Config }) {

  
  return (
        <section className=" py-0 px-0 bg-[#8B1538]"
        
                    style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${config.blurb1Image})`,
              backgroundPosition: 'top',
              backgroundSize: '250%',
              backgroundRepeat: 'no-repeat'
              // transform: `translateY(${scrollY * 0.5}px)`
            }}
        
        >

          <div className="max-w-4xlmx-auto text-center">


            <h2 className="relative z-30 py-10 px-10 font-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
              {config.heading}
            </h2>
            <p className="relative z-30 text-xl text-[#F5F5DC]/90 leading-relaxed pb-10 px-2">
              {config.paragraph}
            </p>
          </div>
        </section>
  );
}

export default BlurbSection1;