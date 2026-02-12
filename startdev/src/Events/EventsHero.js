import React from 'react';
import './EventsHero.css';
import { useState, useEffect } from 'react';
import image1 from '../assets/eventsPageImage1.jpg';



function EventsHero() {

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
              backgroundImage: `url(${image1})`,
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
              Check out our Events
            </h1>
          </div>
        </section>
  );
}

export default EventsHero;