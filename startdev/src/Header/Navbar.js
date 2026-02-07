import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Navbar({onNavigate }) {


  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (target) => {
    setIsOpen(false);
    if (target === 'contact') {
      window.scrollTo({ top: document.getElementById('contact-section')?.offsetTop || 0, behavior: 'smooth' });
    } else if (target === 'home') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                title="Vegas Comedy Club"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  {/* Background circle */}
                  <circle cx="24" cy="24" r="22" fill="#8B1538" stroke="#D4AF37" strokeWidth="2"/>
                  
                  {/* Stage spotlight effect */}
                  <path d="M24 8 L30 18 L18 18 Z" fill="#D4AF37" opacity="0.9"/>
                  
                  {/* Microphone stand */}
                  <rect x="22" y="18" width="4" height="14" fill="#D4AF37"/>
                  <circle cx="24" cy="18" r="3" fill="#F5D76E"/>
                  
                  {/* Comedy masks hint - curved lines */}
                  <path d="M16 28 Q14 26 14 24" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M32 28 Q34 26 34 24" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  
                  {/* Sparkle accents */}
                  <circle cx="12" cy="12" r="1.5" fill="#F5D76E"/>
                  <circle cx="36" cy="12" r="1.5" fill="#F5D76E"/>
                  <circle cx="12" cy="36" r="1.5" fill="#F5D76E"/>
                  <circle cx="36" cy="36" r="1.5" fill="#F5D76E"/>
                </svg>
                <span className="font-display text-xl font-bold text-[#8B1538] hidden sm:inline">Vegas</span>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('about-bobby')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors"
                >
                  About Bobby
                </button>
                <button
                  onClick={() => handleNavClick('events')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors"
                >
                  Events
                </button>
                <button
                  onClick={() => handleNavClick('media')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors"
                >
                  Media
                </button>
                <button
                  onClick={() => handleNavClick('making-sense')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors"
                >
                  Making Sense
                </button>
                <button
                  onClick={() => handleNavClick('resources')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors"
                >
                  Resources
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer"
              >
                <span className={`h-1 bg-[#2B2B2B] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-1 bg-[#2B2B2B] transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-1 bg-[#2B2B2B] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#D4AF37]/30 pt-4">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('about-bobby')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors text-left"
                >
                  About Bobby
                </button>
                <button
                  onClick={() => handleNavClick('events')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors text-left"
                >
                  Events
                </button>
                <button
                  onClick={() => handleNavClick('media')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors text-left"
                >
                  Media
                </button>
                <button
                  onClick={() => handleNavClick('making-sense')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors text-left"
                >
                  Making Sense
                </button>
                <button
                  onClick={() => handleNavClick('resources')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors text-left"
                >
                  Resources
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-[#2B2B2B] font-semibold hover:text-[#8B1538] transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </nav>
  );
}

export default Navbar;