import React from 'react';
import { CONSULTATION_JOURNEY } from '../../data/doctorData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface EditorialConsultationJourneyProps {
  onOpenAppointment: () => void;
}

export const EditorialConsultationJourney: React.FC<EditorialConsultationJourneyProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#121715] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-800">
            // Patient Pathway
          </p>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            From first consultation to sustained vitality.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Every step of your medical care is structured around transparency, clinical clarity, and personal comfort.
          </p>
        </div>

        {/* 4 Clean Editorial Steps */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONSULTATION_JOURNEY.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-3">
                  Step {item.step}
                </span>

                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-emerald-800 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Patient Focused</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
