import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../types';
import { SafeImage } from './SafeImage';

interface LightboxModalProps {
  image: GalleryImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 max-h-[75vh]">
          <SafeImage
            src={image.src}
            fallbackSrc={image.fallbackSrc}
            alt={image.alt}
            className="max-h-[75vh] w-auto object-contain mx-auto"
          />
        </div>

        <div className="mt-4 text-center text-white max-w-xl">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-1">
            {image.label}
          </span>
          <p className="text-sm font-medium text-slate-200">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
};
