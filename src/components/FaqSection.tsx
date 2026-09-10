import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Phone, Calendar } from 'lucide-react';
import { FAQS, DOCTOR_INFO } from '../data/doctorData';

interface FaqSectionProps {
  onOpenAppointment: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAppointment }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3 border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Common Queries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Helpful information regarding clinic location, specialties, and consultation arrangements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50/90 border-teal-200 shadow-2xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full bg-white border border-slate-200 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Contact Support Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Please contact the clinic directly at 094338 27531 to speak with staff.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs"
            >
              Call Clinic
            </a>
            <button
              type="button"
              onClick={onOpenAppointment}
              className="px-4 py-2 rounded-xl bg-[#0A2540] hover:bg-[#13385e] text-white text-xs font-semibold shadow-2xs cursor-pointer"
            >
              Enquire Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
