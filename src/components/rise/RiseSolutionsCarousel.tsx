import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Activity, HeartPulse, ZapOff, Thermometer, Check } from 'lucide-react';
import { CORE_HEALTH_SOLUTIONS } from '../../data/doctorData';
import { RiseTextReveal } from './RiseTextReveal';

interface RiseSolutionsCarouselProps {
  onOpenAppointment: () => void;
}

const SOLUTION_IMAGES = [
  {
    src: "/images/img11.png",
    fallback: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9FJdIuKHQS7fcjevDt2mHE2ZJYUSu1mmNXEQ3F8uv1mHPjGco_p8kEIUA4O8fXZNT4VDxWgijh_DRwLJQKNnVwtOFDdElD8w2sy0QI5mTup_jtayfugYfDvPBJLwoHM-oFCpX"
  },
  {
    src: "/images/img2.png",
    fallback: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA"
  },
  {
    src: "/images/img3.png",
    fallback: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSALG22NisF_1mXWMxkEpBn--SIegtfwoQEBiLkwjHlDzKf4hBK7B3TgpUtI8Nuo2M8XaSX5SWpEG5QOFI_Bn6h5OaUarcSESc0y_CpjoOOWMkQXDxF2tFUCeXLENGKrumBsIj"
  },
  {
    src: "/images/img4.png",
    fallback: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRoKF4kSYI0Be34rs-zc_hGqe0SHOo4VwqRRl2eDQLTFmWuAQQK3LRv7LQIFtxbEKXkQGWTEzTPiB__tBq-83Elpzm3r1V9JjGQJ98d6guUJ0UEj9ASob8CKCMqHUs4HWNXEr8"
  }
];

export const RiseSolutionsCarousel: React.FC<RiseSolutionsCarouselProps> = ({ onOpenAppointment }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const icons = [Activity, HeartPulse, ZapOff, Thermometer];

  return (
    <section id="specialties" className="w-full pb-14 sm:pb-20 xl:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Clinical Specializations
            </span>
            <RiseTextReveal
              as="h2"
              text="Reliable Solutions for Your Health Problems."
              className="text-3xl sm:text-5xl font-bold sm:font-extrabold tracking-tight text-[#111212] mt-1"
              delay={0.1}
              stagger={0.03}
              highlightWords={['Health', 'Problems.']}
              highlightClassName="text-emerald-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 active:scale-95 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-2xs"
              aria-label="Previous clinical solution"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 active:scale-95 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-2xs"
              aria-label="Next clinical solution"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Card Track (Rise at Seven Section 6 Style) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
        >
          {CORE_HEALTH_SOLUTIONS.map((item, index) => {
            const Icon = icons[index % icons.length];
            const imgData = SOLUTION_IMAGES[index % SOLUTION_IMAGES.length];

            return (
              <div
                key={item.id}
                className="group w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Aspect Ratio Image Container */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-5">
                    <img
                      src={imgData.src}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = imgData.fallback;
                      }}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#111212]/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wide">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 text-emerald-700" />
                    </div>
                  </div>

                  {/* Text & Bengali Title */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-emerald-800 font-bengali">
                      {item.bengaliTitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#111212] group-hover:text-emerald-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Clinical Remedy Box */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.remedy}</span>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onOpenAppointment}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-emerald-800 group/btn transition-colors cursor-pointer"
                  >
                    <span>Book Consultation for this</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-400">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
