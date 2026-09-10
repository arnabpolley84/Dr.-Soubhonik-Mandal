import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/doctorData';
import { GalleryImage } from '../types';
import { SafeImage } from './SafeImage';
import { LightboxModal } from './LightboxModal';

export const GalleryBento: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (img: GalleryImage, index: number) => {
    setSelectedImage(img);
    setSelectedIndex(index);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % GALLERY_IMAGES.length;
    setSelectedIndex(nextIdx);
    setSelectedImage(GALLERY_IMAGES[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setSelectedIndex(prevIdx);
    setSelectedImage(GALLERY_IMAGES[prevIdx]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-200">
              <Camera className="w-3.5 h-3.5 text-teal-600" />
              <span>Clinic & Atmosphere</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Inside Arnay Medical
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Photographs of Dr. Souvonik Mandal and the clinical facilities at Haltu, South Kolkata.
            </p>
          </div>

          <span className="text-xs font-medium text-slate-500">
            Click any image to view fullscreen
          </span>
        </div>

        {/* Bento Grid Editorial Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img, idx)}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className="w-full h-full min-h-[240px] relative overflow-hidden bg-slate-100">
                <SafeImage
                  src={img.src}
                  fallbackSrc={img.fallbackSrc}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Tag / Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-xs text-slate-800 shadow-2xs border border-white/50">
                    {img.label}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-black/40 text-white backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs sm:text-sm font-medium drop-shadow-xs line-clamp-1">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
