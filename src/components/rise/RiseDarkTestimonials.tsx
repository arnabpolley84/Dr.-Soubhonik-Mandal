import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { REVIEWS_DATA } from '../../data/doctorData';
import { RiseTextReveal } from './RiseTextReveal';

const EXTENDED_REVIEWS = [
  ...REVIEWS_DATA,
  {
    id: "review-4",
    author: "Prabir Sen",
    rating: 5,
    text: "Dr. Souvonik Mandal's diagnosis of my long-standing high blood pressure and diabetes was an eye-opener. He spent over 25 minutes explaining the exact diet and medication routine. My sugars are now completely stable.",
    source: "Google Review · Verified Patient",
    verifiedTheme: "Blood Sugar & BP Control"
  },
  {
    id: "review-5",
    author: "Mitali Mukherjee",
    rating: 5,
    text: "Very down-to-earth doctor who doesn't prescribe unnecessary heavy tests. He listens with complete empathy and patience. Highly recommended medicine specialist in Haltu, South Kolkata.",
    source: "Google Review · Verified Patient",
    verifiedTheme: "Empathetic & Rational Medicine"
  }
];

export const RiseDarkTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((cur) => (cur === 0 ? EXTENDED_REVIEWS.length - 1 : cur - 1));
  };

  const next = () => {
    setCurrentIndex((cur) => (cur + 1) % EXTENDED_REVIEWS.length);
  };

  const current = EXTENDED_REVIEWS[currentIndex];

  return (
    <section id="reviews" className="w-full pb-14 sm:pb-20 xl:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Obsidian Hero Block (Rise at Seven Section 10 Style) */}
        <div className="relative rounded-3xl bg-[#111212] text-white py-14 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden flex flex-col items-center justify-between min-h-[500px]">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Pill & 5 Stars */}
          <div className="flex flex-col items-center gap-3 z-10 text-center">
            <div className="flex items-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              Verified Patient Testimony · 4.9 ★ Rating on Google
            </span>

            {/* Section Heading with Masked Text Reveal & Inline Avatar Pill (Rise at Seven Section 10 Signature) */}
            <div className="mt-4 mb-2 max-w-2xl mx-auto flex justify-center">
              <RiseTextReveal
                as="h2"
                text="Recommended by patients across South Kolkata and beyond."
                className="text-2xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-white text-center justify-center tracking-tight leading-[1.08]"
                delay={0.1}
                stagger={0.025}
                inlinePill={{
                  index: 3, // after "across"
                  content: (
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-emerald-400/80 shadow-xs bg-slate-800">
                      <img
                        src="/images/profile_mandal.png"
                        alt="Dr. Souvonik Mandal"
                        className="w-full h-full object-cover object-top"
                      />
                    </span>
                  ),
                }}
                highlightWords={['South', 'Kolkata']}
                highlightClassName="text-emerald-300"
              />
            </div>
          </div>

          {/* Main Giant Testimonial Quote */}
          <div className="w-full max-w-4xl my-6 sm:my-10 text-center z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold font-['Outfit',sans-serif] tracking-tight text-white/95 leading-relaxed text-balance">
                  "{current.text}"
                </h3>

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                      {current.author}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">
                    {current.source} · {current.verifiedTheme}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls & Navigation */}
          <div className="w-full flex items-center justify-between pt-6 border-t border-white/10 z-10">
            <div className="flex items-center gap-2">
              {EXTENDED_REVIEWS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to review ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous patient review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next patient review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
