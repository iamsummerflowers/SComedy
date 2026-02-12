import React from 'react';
import './InterestedInStandupSection.css';
import { useState } from 'react';


function InterestedInStandupSection({ onNavigate }) {


      return (
        <section className="w-full bg-gradient-to-b from-[#2B2B2B] to-[#1a1a1a] px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] text-center mb-12">
              Do You Want to Do Standup in Vegas?
            </h2>

            <div className="space-y-6 text-center">
              <p className="text-lg text-[#F5F5DC]/80">
                The definitive list of Las Vegas comedy open mics is kept on a facebook document and also embedded in the posts below.vvIt also lives in the pinned post at the top of two facebook groups:
              </p>

              <p className="text-lg text-[#F5F5DC]/80">
                <a
                  href="https://www.facebook.com/groups/vegaslocalcomedy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5D76E] transition-colors font-semibold underline"
                >
                  Las Vegas Comedy Shows
                </a>
                {" "} only allows posts about local comedy shows. We keep the post volume to a minimum so fans can know what’s going on without scrolling through a bunch of crap or drowning in notifications.
              </p>

              <p className="text-lg text-[#F5F5DC]/80">
                <a
                  href="http://facebook.com/groups/vegascomediansonly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F5D76E] transition-colors font-semibold underline"
                >
                  Las Vegas Comedians (Discussion & Open Mics)
                </a>
                {" "}is for comedians/producers that live in Vegas, got started there, or come through often. It allows discussion and posting stage time offers (like open mics).
              </p>

              <p className="text-lg text-[#F5F5DC]/80 mt-8">
                <span className="text-[#D4AF37] font-semibold">These are the resources that helped me to get started.</span>
              </p>

              <button
                onClick={() => onNavigate('resources')}
                className="w-fit inline-block mt-6 gold-gradient text-[#2B2B2B] font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Check Out Resources
              </button>
            </div>
          </div>
        </section>
  );
}

export default InterestedInStandupSection;