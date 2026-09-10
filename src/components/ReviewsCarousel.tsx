import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { REVIEWS_DATA, DOCTOR_INFO } from '../data/doctorData';

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const current = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-200">
              <Star className="w-3.5 h-3.5 fill-teal-600 text-teal-600" />
              <span>Google Review Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Patients Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Patient experiences reflect the importance of compassionate communication and attentive medical care.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900 text-sm">4.9 ★</span>
              <span className="text-xs text-slate-500">80 Google Reviews</span>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevReview}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs cursor-pointer transition-colors active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs cursor-pointer transition-colors active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-sm relative overflow-hidden">
          
          {/* Giant Decorative Watermark Quotation Mark */}
          <div className="absolute -top-6 -right-6 text-slate-100 font-serif select-none pointer-events-none opacity-60">
            <Quote className="w-48 h-48 text-slate-100" />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Star Rating */}
            <div className="flex items-center gap-1.5 text-amber-400 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-semibold text-slate-500 ml-2">
                5.0 Star Rating
              </span>
            </div>

            {/* Large Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-800 leading-snug tracking-tight mb-8">
              “{current.text}”
            </blockquote>

            {/* Author Identity & Verification */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0A2540] to-teal-700 text-white font-bold text-base flex items-center justify-center shadow-2xs">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {current.author}
                  </h4>
                  <p className="text-xs font-medium text-teal-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Google Patient Review · {current.verifiedTheme}</span>
                  </p>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {REVIEWS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                      currentIndex === i ? 'w-8 bg-[#0A2540]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
