import React from 'react';
import './LicensesSection.css';
import { useState, useEffect } from 'react';
import image5 from '../assets/businessLicImage1.jpg';
import image6 from '../assets/businessLicImage2.jpg';


function LicensesSection() {

      const [modalOpen, setModalOpen] = useState(false);
      const [currentImage, setCurrentImage] = useState(0);

      // 3 gallery images
      const businessLicImages = [
        image5,
        image6
      ];
        const openModal = (index) => {
          setCurrentImage(index);
          setModalOpen(true);
        };
  
        const closeModal = () => setModalOpen(false);
  
        const nextImage = () => {
          setCurrentImage((prev) => (prev + 1) % businessLicImages.length);
        };
  
        const prevImage = () => {
          setCurrentImage((prev) => (prev - 1 + businessLicImages.length) % businessLicImages.length);
        };
  
        // Handle keyboard navigation in modal
        useEffect(() => {
          const handleKeyDown = (e) => {
            if (!modalOpen) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeModal();
          };
          window.addEventListener('keydown', handleKeyDown);
          return () => window.removeEventListener('keydown', handleKeyDown);
        }, [modalOpen]);

      return (
        // <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
        //   <div className="max-w-6xl mx-auto">
        //     <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
        //       Licenses & Certifications
        //     </h2>

        //     <div className="grid md:grid-cols-2 gap-8">
        //       {/* License 1 */}
        //       <div className="flex justify-end">
        //         <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
        //           <img
        //             src={image5}
        //             alt="Nevada Business License"
        //             className="w-full h-full object-cover"
        //             loading="lazy"
        //             onError={(e) => {
        //               console.error('Image failed to load:', e.target.src);
        //               e.target.style.background = '#6B4C7C';
        //               e.target.alt = 'Image unavailable';
        //             }}
        //           />
        //         </div>
        //       </div>

        //       {/* License 2 */}
        //       <div className="flex justify-start">
        //         <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]">
        //           <img
        //             src={image6}
        //             alt="Entertainment Venue Certification"
        //             className="w-full h-full object-cover"
        //             loading="lazy"
        //             onError={(e) => {
        //               console.error('Image failed to load:', e.target.src);
        //               e.target.style.background = '#8B1538';
        //               e.target.alt = 'Image unavailable';
        //             }}
        //           />
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>

        <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20 mx-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Business Licenses
            </h2>

            {/* 5x5 Grid - 3 Images */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12 ">
              {businessLicImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-[#D4AF37]/30"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#8B1538]/0 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                  {/* <h3 className="text-center font-bold text-xl text-[#F5F5DC] mb-2">{event.title}</h3> */}

                </div>
                
              ))}
            </div>
          </div>

          {/* Lightbox Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 modal-backdrop flex flex-col items-center justify-center p-6">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="w-fit absolute top-6 w-fit flex right-10 text-white text-4xl hover:text-[#D4AF37] transition-colors z-60"
                title="Close (ESC)"
              >
                ×
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="w-fit absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[#D4AF37] transition-colors p-4 hover:bg-black/30 rounded-lg"
                title="Previous (←)"
              >
                ‹
              </button>

              {/* Image */}
              <img
                src={businessLicImages[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                loading="lazy"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="w-fit absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[#D4AF37] transition-colors p-4 hover:bg-black/30 rounded-lg"
                title="Next (→)"
              >
                ›
              </button>

              {/* Counter */}
              <div className="w-fit absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/50 px-6 py-2 rounded-full">
                {currentImage + 1} / {businessLicImages.length}
              </div>

              {/* Keyboard Instructions */}
              {/* <div className="absolute bottom-6 right-6 text-[#D4AF37]/70 text-sm">
                ��� ��� Arrow keys to navigate
              </div> */}
            </div>
          )}
        </section>
  );

}

export default LicensesSection;