import React from 'react';
import { Calendar, MessageSquare, ClipboardCheck, ArrowRight, UserCheck } from 'lucide-react';
import { CONSULTATION_JOURNEY } from '../data/doctorData';

const stepIcons = [
  <Calendar className="w-5 h-5 text-teal-600" />,
  <MessageSquare className="w-5 h-5 text-teal-600" />,
  <ClipboardCheck className="w-5 h-5 text-teal-600" />,
  <UserCheck className="w-5 h-5 text-teal-600" />
];

export const ConsultationJourney: React.FC = () => {
  return (
    <section id="consultation-journey" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Patient Pathway
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            The Consultation Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            What to expect when scheduling and attending an adult medical consultation with Dr. Souvonik Mandal.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline / Mobile: Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          {CONSULTATION_JOURNEY.map((item, idx) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative z-10 group"
            >
              <div>
                {/* Step Marker Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540] transition-colors shadow-2xs">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    STEP {item.step}
                  </span>
                </div>

                <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">
                  {item.subtitle}
                </span>

                <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 group-hover:text-teal-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Phase {idx + 1} of 4</span>
                {idx < 3 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                ) : (
                  <span className="text-[11px] font-semibold text-teal-700">Ongoing</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
