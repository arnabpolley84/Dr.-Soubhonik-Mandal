import React from 'react';

interface RiseGiantMarqueeProps {
  onOpenAppointment?: () => void;
}

export const RiseGiantMarquee: React.FC<RiseGiantMarqueeProps> = ({ onOpenAppointment }) => {
  const marqueeText = "EVIDENCE FIRST • COMPASSIONATE CARE • DIABETES SPECIALIST • ROOT CAUSE MEDICINE • ";
  const fullText = marqueeText.repeat(4);

  return (
    <section className="w-full py-8 sm:py-12 xl:py-16 overflow-hidden select-none bg-[#111212] text-white">
      <div 
        onClick={onOpenAppointment}
        className="w-full relative overflow-hidden cursor-pointer group"
      >
        <div className="animate-marquee-fast flex whitespace-nowrap items-center">
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase text-white/90 group-hover:text-emerald-400 transition-colors duration-300">
            {fullText}
          </span>
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase text-white/90 group-hover:text-emerald-400 transition-colors duration-300">
            {fullText}
          </span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 flex justify-between items-center text-xs text-slate-400">
        <span className="font-mono uppercase tracking-wider text-emerald-400">
          Dr. Souvonik Mandal · Kolkata
        </span>
        <span className="font-medium hover:text-white transition-colors cursor-pointer" onClick={onOpenAppointment}>
          Click anywhere to book appointment →
        </span>
      </div>
    </section>
  );
};
