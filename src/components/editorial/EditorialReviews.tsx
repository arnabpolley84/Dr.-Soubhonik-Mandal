import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA, DOCTOR_INFO } from '../../data/doctorData';

export const EditorialReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 lg:py-36 bg-[#F9FAF8] text-[#121715] border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Google Score Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-800">
              // Patient Experiences
            </p>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
              What patients say about Dr. Mandal's care.
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-xs shrink-0">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left border-l border-slate-200 pl-3">
              <p className="font-bold text-sm text-slate-900 leading-none">4.9 / 5.0</p>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">80+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Large Editorial Testimonial Showcase */}
        <div className="pt-12 sm:pt-16 max-w-4xl mx-auto">
          <div className="relative">
            
            {/* Elegant Quotation Mark */}
            <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-800/15 mb-6" />

            {/* Large Quote Statement */}
            <blockquote className="font-['Outfit',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 leading-snug tracking-tight text-balance">
              "{current.text}"
            </blockquote>

            {/* Reviewer Metadata & Navigation Controls */}
            <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              {/* Reviewer Bio */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900">
                    {current.author}
                  </h4>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Patient</span>
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {current.source} · Focus: {current.verifiedTheme}
                </p>
              </div>

              {/* Slider Pagination Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-medium text-slate-400">
                  0{currentIndex + 1} / 0{REVIEWS_DATA.length}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevReview}
                    className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextReview}
                    className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
