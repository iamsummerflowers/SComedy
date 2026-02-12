import React from 'react';
import './HeroSection.css';
import {heroConfig} from '../Data/heroConfig';
import { useState, useEffect, useRef } from 'react';


function HeroSection({ onNavigate, config = heroConfig }) {

      const [currentSlide, setCurrentSlide] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(false);
      const videoRefs = useRef([]);

      useEffect(() => {
        const timer = setInterval(() => {
          if (!isTransitioning) {
            nextSlide();
          }
        }, 6000);
        return () => clearInterval(timer);
      }, [currentSlide, isTransitioning]);

      useEffect(() => {

        
        // Play the current video
        if (videoRefs.current[currentSlide]) {
          videoRefs.current[currentSlide].play().catch(err => {
            console.log('Autoplay prevented:', err);
          });
        }
        
        // Pause all other videos
        videoRefs.current.forEach((video, index) => {
          if (video && index !== currentSlide) {
            video.pause();
            video.currentTime = 0;
          }
        });
      }, [currentSlide]);
      

      const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % config.media.length);
        setTimeout(() => setIsTransitioning(false), 500);
      };

      const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + config.media.length) % config.media.length);
        setTimeout(() => setIsTransitioning(false), 500);
      };

      const goToSlide = (index) => {
        if (index !== currentSlide) {
          setIsTransitioning(true);
          setCurrentSlide(index);
          setTimeout(() => setIsTransitioning(false), 500);
        }
      };

  
  return (
        <section className="h-screen min-h-full overflow-hidden pt-20 max-w-7xl mx-auto">
          {/* Media Carousel */}
          <div className="absolute inset-0 overflow-hidden">
            {config.media.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {item.type === 'image' ? (
                  <div
                    className={`w-full h-full bg-cover bg-center ${index === currentSlide ? 'carousel-slide' : ''}`}
                    style={{ backgroundImage: `url(${item.src})` }}
                  />
                ) : (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="w-full h-full object-cover"
                    src={item.src}
                    poster={item.poster}
                    // autoPlay
                    muted
                    loop
                    playsInline
                    autoPlay={index === currentSlide}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-20" />

          {/* Content */}
          <div className="relative z-30 h-full flex flex-col items-center justify-center px-6 text-center">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F5DC] mb-6 animate-fade-in drop-shadow-2xl">
              {config.heading}
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F5DC]/90 mb-10 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {config.subtext}
            </p>
            <button
              onClick={() => onNavigate('about-bobby')}
              className="w-fit gold-gradient text-[#2B2B2B] font-semibold px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              {config.buttonText}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute flex items-center justify-center bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-3">
            {config.media.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#D4AF37] w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </section>
  );
}

export default HeroSection;