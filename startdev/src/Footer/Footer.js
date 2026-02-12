import React from 'react';
import './Footer.css';
import { useState } from 'react';
import {footerConfig} from '../Data/footerConfig';


function Footer({ config = footerConfig }) {

  const currentYear = new Date().getFullYear();

  return (
        // <footer className="py-8 px-6 bg-[#1a1a1a] border-t border-[#D4AF37]/20">
        //   <div className="max-w-7xl mx-auto text-center">
        //     <p className="text-[#D4AF37] font-display text-xl mb-2">{config.tagline}</p>
        //     <p className="text-[#F5F5DC]/60 text-sm">© {currentYear} Beyond Sight Solutions. All rights reserved.</p>
        //   </div>
        // </footer>

    <footer class="py-16 px-6 bg-[#1a1a1a] border-t border-[#D4AF37]/20">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12 mb-12">
          
          
          {/* <!-- About --> */}
        <div class="text-center md:text-left">
          <h3 class="font-display text-2xl font-bold text-[#D4AF37] mb-4">Slaughter Comedy</h3>
          <p class="text-[#F5F5DC]/70 leading-relaxed">Slaughter Comedy is a veteran-operated Limited Liability Entertainment Company in Las Vegas, Nevada that produces & promotes tailorable comedy shows for small to medium-sized businesses and theaters.</p>
        </div>
        
        {/* <!-- Contact Info --> */}
        <div class="text-center">
          <h3 class="font-display text-2xl font-bold text-[#D4AF37] mx-auto mb-6">Get In Touch</h3>
          <div class="space-y-4">
          <div class="flex items-center justify-center gap-3"><span class="w-fit text-[#D4AF37] text-2xl">☎</span> <a href="tel:888-888-8888" class="w-fit text-[#F5F5DC] hover:text-[#D4AF37] transition-colors font-semibold"> 888-888-8888 </a>
          </div>
          <div class="flex items-center justify-center gap-3"><span class="w-fit text-[#D4AF37] text-2xl">✉</span> <a href="mailto:joesmith@email.com" class="w-fit text-[#F5F5DC] hover:text-[#D4AF37] transition-colors font-semibold"> joesmith@email.com </a>
          </div>
          </div>
        </div>
        
        {/* <!-- Social Links --> */}
        <div class="text-center md:text-right mx-auto w-fit">
          <h3 class="font-display text-2xl font-bold text-[#D4AF37] text-center mb-5">Follow Us</h3>
          {/* <div class="flex justify-center md:justify-end gap-4">
              <a href="https://instagram.com" target="_blank" class="social-btn instagram-btn" title="Instagram">f</a>
              <a href="https://facebook.com" target="_blank" class="social-btn facebook-btn" title="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" class="social-btn twitter-btn" title="Twitter">𝕏</a>
              <a href="https://youtube.com" target="_blank" class="social-btn youtube-btn" title="YouTube">▶</a>
          </div> */}
          <div className="flex flex-wrap w-3/5 mx-auto w-fit space-x-2">
            {config.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn w-7 h-7 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: social.color }}
                title={social.name}
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        </div>
        <div class="border-t border-[#D4AF37]/20 pt-8 text-center">
        <p class="w-fit text-center mx-auto text-[#F5F5DC]/60 text-sm">{currentYear} Beyond Sight Solutions.</p>
        <p class="w-fit text-center mx-auto text-[#F5F5DC]/60 text-sm">All rights reserved.</p>

        </div>
      </div>
  </footer>
  );
}

export default Footer;