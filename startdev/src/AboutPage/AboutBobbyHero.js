import React from 'react';
import './AboutBobbyHero.css';
import { useState, useEffect } from 'react';


function AboutBobbyHero() {

      const [scrollY, setScrollY] = useState(0);

      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
        <section className="parallax-hero relative h-screen min-h-[600px] overflow-hidden pt-20 flex items-center justify-center">
          {/* Parallax Background */}
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=1080&fit=crop')`,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
            {/* Circular Image */}
            <div className="mb-10 relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Bobby"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#D4AF37] shadow-2xl"
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.background = '#8B1538';
                  e.target.alt = 'Image unavailable';
                }}
              />
            </div>

            {/* Heading */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[#D4AF37] mb-4 drop-shadow-lg">
              About Bobby
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl text-[#F5F5DC]/90 drop-shadow-lg">
              Owner
            </p>
          </div>
        </section>
  );
}

export default AboutBobbyHero;