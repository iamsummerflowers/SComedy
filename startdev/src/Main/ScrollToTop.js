import React from 'react';
import './ScrollToTop.css';
import { useState, useRef, useEffect } from 'react';



function ScrollToTop() {

      const [visible, setVisible] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      if (!visible) return null;


  
  return (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#E5C048]"
        >
          <svg className="w-6 h-6 text-[#2B2B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>
  );
}

export default ScrollToTop;