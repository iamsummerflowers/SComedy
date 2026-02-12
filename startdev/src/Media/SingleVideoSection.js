import React from 'react';
import './SingleVideoSection.css';
import { useState, useEffect } from 'react';
import video1 from '../assets/scMediaShow.mp4';



function SingleVideoSection() {

      const [scrollY, setScrollY] = useState(0);

      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  
  return (
        <section className="w-full bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a] px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] text-center mb-12">
              Featured Performance
            </h2>

            <div className="relative">
              <div className="relative pb-[56.25%] bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
                <video
                  className="absolute top-0 left-0 w-full h-full"
                  src = {video1}
                  poster= '../assets/heroImage1.jpg'
                  controls
                  muted
                  playsInline
                  // autoplay
                  // picture-in-picture
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl -z-10" />
            </div>
          </div>
        </section>
  );
}

export default SingleVideoSection;