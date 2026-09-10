import React from 'react';
import { ArrowUpRight, Award, Shield, Users, Clock, CheckCircle } from 'lucide-react';
import { DOCTOR_INFO, TRUST_THEMES } from '../../data/doctorData';

interface EditorialTrustTransitionProps {
  onOpenAppointment: () => void;
}

export const EditorialTrustTransition: React.FC<EditorialTrustTransitionProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative bg-[#0A0E0C] text-white pt-12 pb-24 sm:pt-20 sm:pb-32 overflow-hidden border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Editorial Headline */}
        <div className="max-w-4xl space-y-6">
          <p className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 uppercase">
            // Clinical Philosophy & Patient Commitment
          </p>

          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
            Expert care. Personal attention. Better health decisions.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Modern adult medicine requires more than a hasty prescription. Dr. Souvonik Mandal dedicates genuine clinical consultation time to thoroughly evaluate your lab parameters, understand your symptoms, and craft a realistic recovery plan.
          </p>
        </div>

        {/* 4 Refined Editorial Value Columns */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TRUST_THEMES.map((item, idx) => (
            <div
              key={item.title}
              className="group relative pt-6 border-t border-white/15 hover:border-emerald-400/80 transition-colors"
            >
              <span className="font-mono text-xs text-emerald-400 font-semibold mb-3 block">
                0{idx + 1}
              </span>
              
              <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
