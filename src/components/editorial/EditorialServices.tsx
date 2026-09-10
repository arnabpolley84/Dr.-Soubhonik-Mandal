import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { CORE_HEALTH_SOLUTIONS } from '../../data/doctorData';

interface EditorialServicesProps {
  onOpenAppointment: () => void;
}

export const EditorialServices: React.FC<EditorialServicesProps> = ({ onOpenAppointment }) => {
  const [activeService, setActiveService] = useState<string>(CORE_HEALTH_SOLUTIONS[0].id);

  return (
    <section id="expertise" className="py-20 sm:py-28 lg:py-36 bg-white text-[#121715] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: LARGE EDITORIAL HEADING & PHILOSOPHY */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 border border-slate-200">
              <span>Clinical Focus</span>
              <span className="text-slate-400">•</span>
              <span>Evidence-Based</span>
            </div>

            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12]">
              Specialized medical focus for complex adult health.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              Adult internal medicine demands diagnostic precision and ongoing management. Dr. Mandal focuses on steady metabolic control, vascular protection, and systemic recovery.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <span>Book Consultation for Your Condition</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: VERTICALLY STACKED NUMBERED EDITORIAL SERVICE ROWS */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {CORE_HEALTH_SOLUTIONS.map((service, index) => {
              const isSelected = activeService === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`group py-8 sm:py-10 cursor-pointer transition-all duration-300 ${
                    isSelected ? 'bg-slate-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl' : 'hover:bg-slate-50/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 max-w-xl">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-emerald-800">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100/60 text-emerald-900">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm font-semibold text-slate-500 font-bengali">
                        {service.bengaliTitle} · {service.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 pt-2">
                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'border-emerald-800 bg-emerald-800 text-white rotate-45' 
                          : 'border-slate-300 text-slate-500 group-hover:border-slate-900 group-hover:text-slate-900'
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded / Visible Clinical Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isSelected ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 sm:max-h-24 opacity-80'
                  }`}>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-medium text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Clinical Strategy:</strong> {service.remedy}</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenAppointment();
                        }}
                        className="text-xs font-bold text-slate-900 hover:text-emerald-800 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Schedule Assessment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
