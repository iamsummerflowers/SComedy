import React from 'react';
import './TestimonialsSection.css';
import { useState } from 'react';


function TestimonialsSection() {

      const testimonials = [
        {
          text: "Bobby's club has become my second home. The energy, the talent, and the genuine care for comedy is unmatched. I've performed here dozens of times and each night feels special.",
          author: "Marcus Johnson",
          icon: "M3 21a6 6 0 016-6h.01M9 21a4 4 0 014-4h.01M15 5a2 2 0 012 2v.01M21 3a2 2 0 012 2v.01"
        },
        {
          text: "This is where I discovered my favorite comedians. The lineup is always fresh, the drinks are strong, and the atmosphere is electric. Bobby knows what he's doing.",
          author: "Sarah Mitchell",
          icon: "M3 21a6 6 0 016-6h.01M9 21a4 4 0 014-4h.01M15 5a2 2 0 012 2v.01M21 3a2 2 0 012 2v.01"
        },
        {
          text: "I brought my team here for a corporate event and it was phenomenal. Bobby personally oversaw everything. The production quality and professionalism were exceptional.",
          author: "David Chen",
          icon: "M3 21a6 6 0 016-6h.01M9 21a4 4 0 014-4h.01M15 5a2 2 0 012 2v.01M21 3a2 2 0 012 2v.01"
        },
        {
          text: "As an emerging comedian, this club gave me my first real opportunities. Bobby believed in me when I had nothing but a dream. Forever grateful.",
          author: "Alex Rivera",
          icon: "M3 21a6 6 0 016-6h.01M9 21a4 4 0 014-4h.01M15 5a2 2 0 012 2v.01M21 3a2 2 0 012 2v.01"
        }
      ];

      return (
        <section className="w-full bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a] px-6 py-20" id="testimonials-section">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Testimonials
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  {/* Quotes Icon */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 2.972C1 11.226 2.256 20 3 21z"/>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 2.972C13 11.226 14.256 20 15 21z"/>
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-[#F5F5DC]/80 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <p className="text-[#D4AF37] font-bold text-lg">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}

export default TestimonialsSection;