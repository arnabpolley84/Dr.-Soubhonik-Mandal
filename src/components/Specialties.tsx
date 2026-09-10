import React, { useState } from 'react';
import { Stethoscope, Activity, CheckCircle2, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { SPECIALTIES_DATA } from '../data/doctorData';

interface SpecialtiesProps {
  onOpenAppointment: () => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onOpenAppointment }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="specialties" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Clinical Focus
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
            Areas of Medical Care
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Focused, individualized clinical consultation in adult medicine and metabolic health at Arnay Medical, South Kolkata.
          </p>
        </div>

        {/* Two Large Horizontal Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: General / Internal Medicine */}
          <div className="bg-slate-50/70 rounded-3xl p-7 sm:p-9 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center shadow-xs">
                  <Stethoscope className="w-7 h-7 text-teal-400" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-slate-600 border border-slate-200 font-bengali">
                  জেনারেল মেডিসিন
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                General / Internal Medicine
              </h3>
              
              <p className="text-sm font-medium text-teal-700 mb-4">
                Comprehensive health consultation for adult medical concerns
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Comprehensive medical consultation for adults, with attention to symptoms, health history and overall wellbeing.
              </p>

              {/* Key Clinical Attributes */}
              <div className="space-y-3 mb-6">
                {SPECIALTIES_DATA[0].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Expandable Learn More Content */}
              {expandedId === 'general-medicine' && (
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2.5 animate-in fade-in duration-200 bg-white/70 p-4 rounded-xl">
                  <p className="font-semibold text-slate-800">About Internal Medicine Consultations:</p>
                  <p>
                    Consultations prioritize structured differential evaluations, reviewing prior clinical reports, and discussing symptoms in depth before recommending diagnostic investigations or targeted management plans.
                  </p>
                  <p>
                    Special attention is given to understanding recurring complaints, routine adult health checks, and preventive guidance suited to your everyday life.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between mt-6">
              <button
                type="button"
                onClick={() => toggleExpand('general-medicine')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 cursor-pointer"
              >
                <span>{expandedId === 'general-medicine' ? 'Show Less' : 'Learn More Details'}</span>
                {expandedId === 'general-medicine' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A2540] hover:text-[#13385e] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>Consult Doctor</span>
              </button>
            </div>
          </div>

          {/* Card 2: Diabetes Care */}
          <div className="bg-slate-50/70 rounded-3xl p-7 sm:p-9 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-800 text-white flex items-center justify-center shadow-xs">
                  <Activity className="w-7 h-7 text-teal-200" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-slate-600 border border-slate-200 font-bengali">
                  ডায়াবেটিস কেয়ার
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Diabetes Care
              </h3>
              
              <p className="text-sm font-medium text-teal-700 mb-4">
                Structured guidance for blood glucose management & metabolic wellbeing
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Professional consultation and ongoing guidance for individuals managing diabetes and related metabolic health concerns.
              </p>

              {/* Key Clinical Attributes */}
              <div className="space-y-3 mb-6">
                {SPECIALTIES_DATA[1].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Expandable Learn More Content */}
              {expandedId === 'diabetes-care' && (
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2.5 animate-in fade-in duration-200 bg-white/70 p-4 rounded-xl">
                  <p className="font-semibold text-slate-800">About Ongoing Diabetes Guidance:</p>
                  <p>
                    Effective diabetes management goes beyond momentary readings. It involves understanding glycemic fluctuations, reviewing HbA1c tests, and adjusting daily food and exercise patterns with realistic expectations.
                  </p>
                  <p>
                    Dr. Mandal emphasizes empathetic communication so patients feel supported and confident in their everyday health habits.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between mt-6">
              <button
                type="button"
                onClick={() => toggleExpand('diabetes-care')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 cursor-pointer"
              >
                <span>{expandedId === 'diabetes-care' ? 'Show Less' : 'Learn More Details'}</span>
                {expandedId === 'diabetes-care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A2540] hover:text-[#13385e] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-600" />
                <span>Consult Doctor</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
