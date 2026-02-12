import React from 'react';
import { useState } from 'react';

import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';

import image1 from './assets/heroImage1.jpg';

// --NAVBAR
import Navbar from './Header/Navbar.js';
// -- HOME
import HeroSection from './Main/HeroSection.js';
import AboutSection from './Main/AboutSection.js';
import BlurbSection1 from './Main/BlurbSection1.js';
import BlurbSection2 from './Main/BlurbSection2.js';
import BlurbSection3 from './Main/BlurbSection3.js';
import BlurbSection4 from './Main/BlurbSection4.js';
import BlurbSection5 from './Main/BlurbSection5.js';
import MediaSection from './Main/MediaSection.js';
import ContactSection from './Main/ContactSection.js';

// --- ABOUT
import AboutBobbyHero from './AboutPage/AboutBobbyHero.js';
import AboutBobbyContent from './AboutPage/AboutBobbyContent.js';
import TestimonialsSection from './AboutPage/TestimonialsSection.js';
import LicensesSection from './AboutPage/LicensesSection.js';
import InterestedInStandupSection from './AboutPage/InterestedInStandupSection.js';

// -- EVENTS
import CurrentEventsSection from './Events/CurrentEventsSection.js';
import UpcomingEventsSection from './Events/UpcomingEventsSection.js';
import PastEventsSection from './Events/PastEventsSection.js';

// -- MEDIA
import MediaPageHero from './Media/MediaPageHero.js';
import MediaGallerySection from './Media/MediaGallerySection.js';
import SingleVideoSection from './Media/SingleVideoSection.js';
import DoubleVideoSection from './Media/DoubleVideoSection.js';

// -- MAKINGSENSE
import MakingSenseHero from './MakingSense/MakingSenseHero.js';
import MakingSenseShowSection from './MakingSense/MakingSenseShowSection.js';
import MakingSenseAboutSection from './MakingSense/MakingSenseAboutSection.js';
import SlaughterComedySection from './MakingSense/SlaughterComedySection.js';

// -- RESOURCES
import ResourcesHero from './Resources/ResourcesHero.js';
import Resources from './Resources/Resources.js';


// --FOOTER
import Footer from './Footer/Footer.js';
import ScrollToTop from './Main/ScrollToTop.js';



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App h-full bg-[#2B2B2B]">
      <Navbar onNavigate={handleNavigate} />
          {currentPage === 'home' && (
            <>
              <HeroSection onNavigate={handleNavigate} />
              <AboutSection onNavigate={handleNavigate} />
              <BlurbSection1 />
              <BlurbSection2 onNavigate={handleNavigate} />
              <BlurbSection3 />
              <BlurbSection4 onNavigate={handleNavigate} />
              <BlurbSection5 onNavigate={handleNavigate} />
              <MediaSection onNavigate={handleNavigate} />
              <ContactSection />
              <Footer />
              <ScrollToTop />
            </>
          )}
          {currentPage === 'about-bobby' && (
            <>
              <AboutBobbyHero />
              <AboutBobbyContent />
              <TestimonialsSection />
              <LicensesSection />
              <InterestedInStandupSection onNavigate={handleNavigate} />
              <Footer />
              <ScrollToTop />
            </>
          )}
          {currentPage === 'resources' && (
            // <div className="min-h-screen flex flex-col items-center justify-center p-8">
            //   <h1 className="font-display text-5xl text-[#D4AF37] mb-8">Resources Page</h1>
            //   <p className="text-[#F5F5DC] text-xl mb-8">Curated resources for aspiring comedians coming soon...</p>
            //   <button onClick={() => handleNavigate('home')} className="gold-gradient text-[#2B2B2B] px-8 py-4 rounded-full font-semibold">
            //     Back to Home
            //   </button>
            // </div>
            <>
              <ResourcesHero onNavigate={handleNavigate} />
              <Resources onNavigate={handleNavigate} />
              <Footer />
              <ScrollToTop />
            </>
          )}
          {currentPage === 'contact' && (
            <div className="min-h-screen flex flex-col items-center justify-center p-8">
              <h1 className="font-display text-5xl text-[#D4AF37] mb-8">Contact Page</h1>
              <p className="text-[#F5F5DC] text-xl mb-8">Contact details coming soon...</p>
              <button onClick={() => handleNavigate('home')} className="gold-gradient text-[#2B2B2B] px-8 py-4 rounded-full font-semibold">
                Back to Home
              </button>
            </div>
          )}
        {currentPage === 'events' && (
            <>
              <HeroSection config={{
                heading: "Events at Vegas Comedy Club",
                subtext: "Upcoming shows, live recordings, and comedy celebrations",
                buttonText: "See Events",
                media: [
                  { type: 'image', src: image1, alt: 'Comedy Stage' }
                ]
              }} onNavigate={handleNavigate} />
              <CurrentEventsSection />
              <UpcomingEventsSection />
              <PastEventsSection />
              {/* <ContactSection /> */}
              <Footer />
              <ScrollToTop />
            </>
          )}
          {/* {currentPage === 'services' && (
            <div className="min-h-screen flex flex-col items-center justify-center p-8">
              <h1 className="font-display text-5xl text-[#D4AF37] mb-8">Services Page</h1>
              <p className="text-[#F5F5DC] text-xl mb-8">Full services details coming soon...</p>
              <button onClick={() => handleNavigate('home')} className="gold-gradient text-[#2B2B2B] px-8 py-4 rounded-full font-semibold">
                Back to Home
              </button>
            </div>
          )} */}
          {currentPage === 'media' && (
            <>
              <MediaPageHero />
              <MediaGallerySection />
              <SingleVideoSection />
              <DoubleVideoSection />
              <Footer />
              <ScrollToTop />
            </>
          )}
          {currentPage === 'making-sense' && (
            <>
              <MakingSenseHero />
              <MakingSenseShowSection />
              <MakingSenseAboutSection />
              <SlaughterComedySection />
              <ContactSection />
              <Footer />
              <ScrollToTop />
            </>
          )}
    </div>
  );
}

export default App;
