import React from 'react';
import { Activity, ArrowRight, CheckCircle, Heart, Sparkles, Droplets, Calendar } from 'lucide-react';
import { DIABETES_STEPS } from '../data/doctorData';

interface DiabetesFocusProps {
  onOpenAppointment: () => void;
}

export const DiabetesFocus: React.FC<DiabetesFocusProps> = ({ onOpenAppointment }) => {
  return (
    <section id="diabetes" className="py-16 sm:py-24 bg-gradient-to-b from-teal-950/5 via-slate-50 to-white relative overflow-hidden">
      
      {/* Subtle Metabolic Motif Waves in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0,300 C320,350 420,220 720,280 C1020,340 1140,240 1440,290 L1440,600 L0,600 Z" fill="rgba(13,148,136,0.03)" />
          <path d="M0,350 C360,280 500,400 800,320 C1100,240 1280,360 1440,310 L1440,600 L0,600 Z" fill="rgba(10,37,64,0.02)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Droplets className="w-3.5 h-3.5 text-teal-600" />
            <span>Dedicated Metabolic & Diabetes Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Better Understanding. <span className="text-teal-700">Better Management.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Diabetes care is a continuous partnership. Through thoughtful consultation and structured guidance, we focus on helping you understand your body’s signals and build sustainable habits.
          </p>
        </div>

        {/* Infographic 5-Step Linear Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {DIABETES_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-teal-300 transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 font-mono font-bold text-xs flex items-center justify-center border border-teal-100 group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                  {idx < DIABETES_STEPS.length - 1 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors" />
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-teal-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-teal-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                <span>Patient Focused</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Non-Exaggerated Reassurance & CTA */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-teal-100/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 text-teal-700 border border-teal-200">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Seeking guidance for diabetes or elevated blood glucose?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Consult Dr. Souvonik Mandal at Arnay Medical for a comprehensive review of your reports and lifestyle.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenAppointment}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0A2540] hover:bg-[#13385e] text-white text-xs sm:text-sm font-semibold shrink-0 cursor-pointer shadow-2xs active:scale-98"
          >
            <Calendar className="w-4 h-4 text-teal-400" />
            <span>Schedule Diabetes Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
