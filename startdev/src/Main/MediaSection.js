import React from 'react';
import './MediaSection.css';
import {mediaConfig} from '../Data/mediaConfig';
import { useState } from 'react';



function MediaSection({ onNavigate, config = mediaConfig }) {

      const [modalOpen, setModalOpen] = useState(false);
      const [currentImage, setCurrentImage] = useState(0);

      const openModal = (index) => {
        setCurrentImage(index);
        setModalOpen(true);
      };

      const closeModal = () => setModalOpen(false);

      const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % config.images.length);
      };

      const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + config.images.length) % config.images.length);
      };


  return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
                {config.heading}
              </h2>
              <p className="text-xl text-[#F5F5DC]/70 uppercase tracking-widest">
                {config.subheading}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {config.images.map((image, index) => (
                <div
                  key={index}
                  className="image-grid-item relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', e.target.src);
                      e.target.style.background = '#6B4C7C';
                      e.target.alt = 'Image unavailable';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#8B1538]/0 hover:bg-[#8B1538]/50 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate('media')}
                className="burgundy-gradient text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {config.buttonText}
              </button>
            </div>
          </div>

          {/* Image Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-6">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white text-4xl hover:text-[#D4AF37] transition-colors"
              >
                ×
              </button>
              <button
                onClick={prevImage}
                className="absolute left-6 text-white text-4xl hover:text-[#D4AF37] transition-colors p-4"
              >
                ‹
              </button>
              <img
                src={config.images[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
                className="max-w-full max-h-[80%] object-contain rounded-xl"
                loading="lazy"
              />
              <button
                onClick={nextImage}
                className="absolute right-6 text-white text-4xl hover:text-[#D4AF37] transition-colors p-4"
              >
                ›
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg">
                {currentImage + 1} / {config.images.length}
              </div>
            </div>
          )}
        </section>
  );
}

export default MediaSection;