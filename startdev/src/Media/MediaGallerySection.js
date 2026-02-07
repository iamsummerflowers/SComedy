import React from 'react';
import './MediaGallerySection.css';
import { useState, useEffect } from 'react';
import image1 from '../assets/heroImage1.jpg';



function MediaGallerySection() {

      const [modalOpen, setModalOpen] = useState(false);
      const [currentImage, setCurrentImage] = useState(0);

      // 25 gallery images
      const galleryImages = [
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg',
        '../assets/heroImage1.jpg'

      ];

      const openModal = (index) => {
        setCurrentImage(index);
        setModalOpen(true);
      };

      const closeModal = () => setModalOpen(false);

      const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % galleryImages.length);
      };

      const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
        <section className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#2B2B2B] px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-[#D4AF37] text-center mb-16">
              Gallery
            </h2>

            {/* 5x5 Grid - 25 Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-[#D4AF37]/30"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
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
                className="absolute top-6 right-6 text-white text-4xl hover:text-[#D4AF37] transition-colors z-60"
                title="Close (ESC)"
              >
                ×
              </button>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[#D4AF37] transition-colors p-4 hover:bg-black/30 rounded-lg"
                title="Previous (←)"
              >
                ‹
              </button>

              {/* Image */}
              <img
                src={galleryImages[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                loading="lazy"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-[#D4AF37] transition-colors p-4 hover:bg-black/30 rounded-lg"
                title="Next (→)"
              >
                ›
              </button>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-semibold bg-black/50 px-6 py-2 rounded-full">
                {currentImage + 1} / {galleryImages.length}
              </div>

              {/* Keyboard Instructions */}
              <div className="absolute bottom-6 right-6 text-[#D4AF37]/70 text-sm">
                ��� ��� Arrow keys to navigate
              </div>
            </div>
          )}
        </section>
  );
}

export default MediaGallerySection;