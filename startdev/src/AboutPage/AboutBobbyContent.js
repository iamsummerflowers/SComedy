import React from 'react';
import './AboutBobbyContent.css';
import { useState } from 'react';
import image3 from '../assets/mediaConfigImage5.jpg';
import image1 from '../assets/aboutConfigImage1.jpg';

function AboutBobbyContent() {

  return (
        <section className="relative z-30 w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Two Paragraphs */}
            <div className="space-y-6 mb-16">
              <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                Slaughter Comedy LLC, owned and operated by Bobby Slaughter, a veteran of the U.S. Air Force was established as a Limited Liability Company (NRS86) in November 2016. Slaughter Comedy is a member of the Las Vegas Metro Chamber of Commerce, the Las Vegas Music Association (LVMA), a 401K organization, and registered with the American Society of Composers, Authors and Publishers (ASCAP). Slaughter Comedy promotes local businesses, local comedians, and entertainers through the production of comedy and entertainment venues in commercial areas all around Las Vegas. Slaughter Comedy accomplishes its goals by producing affordable clean (but adult) comedy/variety shows at local venues. Slaughter Comedy additionally produces and promotes shows through tasteful viral videos posted on social media networks such as Facebook and YouTube.
              </p>
              <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                Slaughter Comedy Productions’ goal is to provide a professional, competent interaction between the audience and the performers. As comedian and Host, Bobby regularly performs in Las Vegas from the bright lights of The StLrip to the cozy confines of the Local’s favorite haunts to improve his standup. As an industry professional Bobby works tirelessly to put on professional high-quality performances; working with an eclectic mix of entertainers (comedians, singers, rappers, spoken word, and others). I support venues as small as 45- 75 seats and larger, to seated venues of 250-400 to provide a well-organized and smoothly choreographed reliable entertainment experience. Slaughter Comedy also collaborates with other producers to develop and promote shows!
              </p>
            </div>

            {/* Images and Text Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              {/* Images Section */}
              <div className="space-y-6 grid md:grid-cols-2 gap-12 ">
                <img
                  src={image3}
                  alt="Bobby on stage"
                  className="mx-auto w-64 h-64 object-cover bg-top rounded-xl shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#6B4C7C';
                    e.target.alt = 'Image unavailable';
                  }}
                />
                <img
                  src= {image1}
                  alt="Comedy club interior"
                  className="mx-auto w-64 h-72 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.background = '#8B1538';
                    e.target.alt = 'Image unavailable';
                  }}
                />
              </div>

              {/* Text Section */}
              <div className="space-y-6 p-0 mx-0">
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed ">
                  His taste for the outrageous clearly established and his comedic influences firmly initiated, Bobby kept his head down, did what he had to do, and developed a compliant and competent exterior that belied the witty irreverence that was aching to escape his lips. With a career in the Air Force and a well-traveled life as fodder for the stage show that was always running behind the curtains in Bobby’s brain, he would regularly pull aside the curtain for intimate gatherings of his friends, family, and co-workers bringing them to tears with laughter. Finally having belief that he had summoned the courage to perform for the first time, young Mr. Slaughter found himself next up at an Atlanta comedy night when he was completely blown away by an up-and-coming young comedian.
                </p>
                <p className="text-lg text-[#F5F5DC]/80 leading-relaxed">
                  With each roar from the crowd for the shining star of the night, Bobby shrunk further side-stage until he turned and walked away. He had lost his will, his courage to follow such a polished act. Yet it was this very bitter defeat that drove Bobby to study, work, write, and grind to become the pro he is today. You see Bobby got back on that stage, brought his game and something amazing happened: The audience laughed. And Laughed. Some even fell out of their chairs. In fact, they’re still laughing every time Bobby Slaughter takes the stage. And are we all grateful he did. If you haven’t been Slaughtered by comedy then you need to book this Unique Performer.
                </p>
              </div>
            </div>

            {/* Single Paragraph */}
            <p className="text-lg text-[#F5F5DC]/80 leading-relaxed text-center">
              Working through my company, Slaughter Comedy, I work to create the right event, tailored to your unique venue (space) and budget by arranging shows (sound, lighting, staging, design, posters, flyers and décor) for the event; this includes booking comedians and entertainers. I have worked with some of the best local performers in Las Vegas and for less than the price of a television advertisement, Slaughter Comedy will create and produce an event that will increase foot traffic and revenue for your company. Slaughter Comedy is a member of the Las Vegas Metro Chamber of Commerce and the Las Vegas Music Association (401C) which supports charitable causes.
            </p>
          </div>
        </section>
  );
}

export default AboutBobbyContent;