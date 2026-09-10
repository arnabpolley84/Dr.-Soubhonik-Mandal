import React from 'react';
import { Calendar, Phone, ArrowUpRight, Activity, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { DIABETES_STEPS, DOCTOR_INFO } from '../../data/doctorData';

interface EditorialDiabetesFocusProps {
  onOpenAppointment: () => void;
}

export const EditorialDiabetesFocus: React.FC<EditorialDiabetesFocusProps> = ({ onOpenAppointment }) => {
  return (
    <section id="diabetes" className="py-20 sm:py-28 lg:py-36 bg-[#0E1412] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            <Activity className="w-3.5 h-3.5" />
            <span>Dedicated Diabetology Spotlight</span>
          </div>

          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Comprehensive, individualized diabetes care.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Effective diabetes management extends far beyond simply reducing a single blood sugar number. Dr. Souvonik Mandal designs tailored glycemic strategies that protect your kidneys, eyesight, cardiovascular system, and day-to-day vitality.
          </p>
        </div>

        {/* 5-Step Clinical Diabetes Roadmap */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {DIABETES_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.08] transition-all duration-200 flex flex-col justify-between h-full"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-emerald-400 block mb-4">
                  {step.step}
                </span>

                <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1 text-[11px] text-emerald-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Evidence-Guided</span>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900/40 via-emerald-800/20 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-['Outfit',sans-serif] text-xl font-bold text-white">
              Struggling with erratic HbA1c or high fasting sugar?
            </h4>
            <p className="text-sm text-slate-300">
              Consult Dr. Mandal at Arnay Medical for a comprehensive metabolic evaluation and medication review.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenAppointment}
            className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shrink-0 shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            Book Diabetes Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
