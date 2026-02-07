import React from 'react';
import './MediaPageHero.css';
import { useState, useEffect } from 'react';


function MediaPageHero() {

      const [scrollY, setScrollY] = useState(0);

      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  
  return (
        <section className="relative h-screen min-h-[600px] overflow-hidden pt-20 flex items-center justify-center bg-[#2B2B2B]">
          {/* Parallax Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: '../assets/heroImage1.jpg',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`,
              willChange: 'transform'
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content */}
          <div className="relative z-20 text-center">
            <h1 className="font-display text-7xl md:text-8xl font-bold text-[#D4AF37] drop-shadow-lg">
              Media
            </h1>
          </div>
        </section>
  );
}

export default MediaPageHero;