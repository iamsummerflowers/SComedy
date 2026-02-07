import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import navLogo from '../assets/navLogo.png';

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
          <div className="max-w-7xl mx-auto px-6 py-4 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={() => handleNavClick('home')}
                className="w-2/12 flex items-center gap-2 hover:opacity-80 transition-opacity"
                // title="Vegas Comedy Club"
              >
                <img
                  src= {navLogo}
                  alt="navLogo"
                  className="scale-100 rounded-3xl"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#6B4C7C';
                    e.target.alt = 'Image unavailable';
                  }}
                />
                {/* <span className="font-display text-xl font-bold text-[#8B1538] hidden sm:inline">Vegas</span> */}
              </button>

              {/* Desktop Menu */}
              <div className="w-3/4 text-sm hidden md:flex items-center gap-8">
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
                  About
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
                  Podcast
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
                  About Us
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
                  Making Sense with Sanchez & Slaughter
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