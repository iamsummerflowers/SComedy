import React from 'react';
import './AboutBobbyContent.css';
import { useState } from 'react';


function AboutBobbyContent() {

  return (
        <section className="relative z-30 w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Two Paragraphs */}
            <div className="space-y-6 mb-16">
              <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                Bobby's journey in entertainment began over two decades ago when he first stepped onto a comedy stage in his hometown. What started as a passion for making people laugh quickly evolved into a full-fledged career that took him across the country performing at prestigious venues and festivals. His unique comedic style blends sharp observational humor with relatable life experiences, earning him a loyal fanbase and critical acclaim throughout the comedy circuit.
              </p>
              <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                In 2010, Bobby decided to channel his extensive industry experience into building something bigger than himself. He envisioned a comedy club that would serve as a launching pad for emerging talent while also providing a platform for established comedians. Vegas Comedy Club was born from this dream—a venue that reflects Bobby's commitment to creating authentic, accessible entertainment without the pretentiousness often associated with Las Vegas nightlife.
              </p>
            </div>

            {/* Images and Text Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              {/* Images Section */}
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop"
                  alt="Bobby on stage"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#6B4C7C';
                    e.target.alt = 'Image unavailable';
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=400&fit=crop"
                  alt="Comedy club interior"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#8B1538';
                    e.target.alt = 'Image unavailable';
                  }}
                />
              </div>

              {/* Text Section */}
              <div className="space-y-6">
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Beyond the stage and the business side, Bobby is deeply invested in mentoring the next generation of comedians. He believes that comedy should challenge, provoke thought, and ultimately bring people together. His philosophy extends to every aspect of the club—from the carefully curated lineup of performers to the welcoming atmosphere that makes patrons feel like they're part of something special.
                </p>
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  Today, Vegas Comedy Club stands as a testament to Bobby's dedication to the craft. It's a place where laughter is currency, where comedy is art, and where every night promises to be unforgettable. Bobby continues to perform regularly, but more importantly, he's created a legacy that ensures comedy remains accessible, authentic, and alive in Las Vegas.
                </p>
              </div>
            </div>

            {/* Single Paragraph */}
            <p className="text-lg text-[#F5F5DC]/80 leading-relaxed text-center">
              Bobby's approach to comedy and business reminds us that success isn't just about personal achievement—it's about building something that benefits the entire community. Whether you're a seasoned comedy enthusiast or someone experiencing live comedy for the first time, Bobby's vision ensures you'll find a welcoming space where laughter is celebrated and creativity thrives.
            </p>
          </div>
        </section>
  );
}

export default AboutBobbyContent;