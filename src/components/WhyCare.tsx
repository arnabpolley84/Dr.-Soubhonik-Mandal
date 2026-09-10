import React from 'react';
import { HeartHandshake, ClipboardCheck, Activity, MessageCircle } from 'lucide-react';
import { VALUE_CARDS } from '../data/doctorData';

const iconMap = [
  <HeartHandshake className="w-6 h-6 text-teal-600" />,
  <ClipboardCheck className="w-6 h-6 text-[#0A2540]" />,
  <Activity className="w-6 h-6 text-teal-600" />,
  <MessageCircle className="w-6 h-6 text-[#0A2540]" />,
];

export const WhyCare: React.FC = () => {
  return (
    <section id="why-care" className="py-16 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Consultation Philosophy
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Why Patients Value His Care
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A balanced clinical approach built on active listening, structured evaluations, and understandable guidance for every patient.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_CARDS.map((card, idx) => (
            <div
              key={card.number}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-teal-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-teal-50/80 border border-slate-100 group-hover:border-teal-200 flex items-center justify-center transition-colors">
                    {iconMap[idx]}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {card.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-900 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  “{card.description}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                <span className="text-xs font-semibold text-teal-800">
                  {card.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
