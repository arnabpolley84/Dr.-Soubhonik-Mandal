import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { FAQS, DOCTOR_INFO } from '../../data/doctorData';

interface EditorialFaqProps {
  onOpenAppointment: () => void;
}

export const EditorialFaq: React.FC<EditorialFaqProps> = ({ onOpenAppointment }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white text-[#121715] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-4">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-800">
              // Patient Assistance
            </p>

            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Frequently Asked Questions.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Clear answers regarding clinic location, appointment bookings, consultation timings, and medical care under Dr. Souvonik Mandal.
            </p>

            <div className="pt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <p className="text-xs font-bold text-slate-900">Have a specific question?</p>
              <p className="text-xs text-slate-600">Contact Arnay Medical desk directly during working hours.</p>
              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {DOCTOR_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 divide-y divide-slate-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <span className="font-['Outfit',sans-serif] text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {faq.question}
                    </span>
                    <span className={`w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-slate-900 text-white border-slate-900' : 'text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-light pr-8 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
