import React from 'react';
import './UpcomingEventsSection.css';
import { useState } from 'react';
import image3 from '../assets/upcomingEventsImage3.jpg';
import image4 from '../assets/upcomingEventsImage4.jpg';
import image5 from '../assets/upcomingEventsImage5.jpg';


function UpcomingEventsSection({ onNavigate }) {

      const upcomingEvents = [
        {
          title: "Slaughter Comedy Night",
          image: image3,
          date: "This Saturday - 9:00 PM"
        },
        {
          title: "Stand-Up Showcase",
          image: image4,
          date: "Next Saturday - 10:00 PM"
        },
        {
          title: "Comedy Open Mic",
          image: image5,
          date: "Tuesday - 8:00 PM"
        }
      ];
  
  return (
        <section className="w-full bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a] px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Upcoming Events
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-[#2B2B2B] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-[#D4AF37]/30">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-center font-bold text-xl text-[#F5F5DC] mb-2">{event.title}</h3>
                    {/* <p className="text-[#D4AF37] text-sm mb-6">{event.date}</p> */}
                    {/* <a
                      href="https://www.facebook.com/SlaughterComedy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#8B1538] hover:bg-[#A91E4A] text-white font-bold py-3 rounded-lg text-center transition-all duration-300 hover:scale-105"
                    >
                      Register
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}

export default UpcomingEventsSection;