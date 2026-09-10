import React from 'react';
import { Calendar, Phone, Quote } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SafeImage } from './SafeImage';

interface PatientCareCalloutProps {
  onOpenAppointment: () => void;
}

export const PatientCareCallout: React.FC<PatientCareCalloutProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#0A2540] to-[#0d3b66] rounded-3xl overflow-hidden text-white shadow-xl relative">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16 relative z-10">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold mb-6">
                <span>The Patient Connection</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
                Good Medical Care Starts With Being Heard.
              </h2>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Patients often value more than a diagnosis. They value a doctor who listens carefully, explains clearly and helps them understand the next step.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-98 transition-all duration-150 shadow-md cursor-pointer text-sm sm:text-base"
                >
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>Book a Consultation</span>
                </button>

                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 active:scale-98 transition-all duration-150 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call {DOCTOR_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <SafeImage
                  src="/images/img11.png"
                  fallbackSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9FJdIuKHQS7fcjevDt2mHE2ZJYUSu1mmNXEQ3F8uv1mHPjGco_p8kEIUA4O8fXZNT4VDxWgijh_DRwLJQKNnVwtOFDdElD8w2sy0QI5mTup_jtayfugYfDvPBJLwoHM-oFCpX"
                  alt="Dr. Souvonik Mandal listening attentively during medical consultation"
                  className="w-full h-80 sm:h-96 object-cover object-center filter brightness-95"
                />

                {/* Floating Patient Testimonial Quote Bubble */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 text-slate-900 shadow-lg border border-slate-200">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 italic leading-snug">
                      “He listens patiently and explains everything in detail.”
                    </p>
                  </div>
                  <p className="text-[11px] font-bold text-slate-900 mt-1 text-right">
                    — Anurina Tarafdar (Google Review)
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
