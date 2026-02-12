import React from 'react';
import './Resources.css';
import { useState } from 'react';
import image1 from '../assets/resourcesPageImage1.jpg';



function Resources() {

  // const currentYear = new Date().getFullYear();

  return (
              <section className="relative h-96 min-h-[300px] overflow-hidden pt-20 flex items-center justify-center bg-[#2B2B2B]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${image1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative z-20 text-center">
                  <h1 className="font-display text-6xl md:text-7xl font-bold text-[#D4AF37] drop-shadow-lg">
                    Resources
                  </h1>
                  <p className="text-xl text-[#F5F5DC]/90 mt-4">Curated tools and websites for investing, technology, and learning</p>
                </div>
              </section>

  );
}

export default Resources;