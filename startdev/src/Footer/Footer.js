import React from 'react';
import './Footer.css';
import { useState } from 'react';
import {footerConfig} from '../Data/footerConfig';



function Footer({ config = footerConfig }) {

  const currentYear = new Date().getFullYear();

  return (
        <footer className="py-8 px-6 bg-[#1a1a1a] border-t border-[#D4AF37]/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-[#D4AF37] font-display text-xl mb-2">{config.tagline}</p>
            <p className="text-[#F5F5DC]/60 text-sm">© {currentYear} Beyond Sight Solutions. All rights reserved.</p>
          </div>
        </footer>
  );
}

export default Footer;