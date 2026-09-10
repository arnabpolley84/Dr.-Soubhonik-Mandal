import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { RiseTextReveal } from './RiseTextReveal';

interface StepItem {
  number: string;
  title: string;
  bengali: string;
  summary: string;
  triggers: string[];
  clinicalActions: string[];
  expectedOutcome: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "In-Depth Symptom & Health History Inquiry",
    bengali: "পুঙ্খানুপুঙ্খ শারীরিক সমস্যা ও অতীত ইতিহাস পর্যালোচনা",
    summary: "A relaxed, 20+ minute unhurried consultation focusing on your complete story — past reports, medication tolerance, family traits, and subtle symptoms often overlooked in brief 3-minute visits.",
    triggers: [
      "Frequent blood sugar spikes or sudden drops",
      "Morning dizziness, headaches, or palpitations",
      "Chronic tiredness despite full night sleep"
    ],
    clinicalActions: [
      "Comprehensive chronological timeline review",
      "Verification of past and existing prescriptions",
      "Physical examination (BP, pulse, heart & chest sounds)"
    ],
    expectedOutcome: "Immediate clarity on symptom triggers and elimination of medical anxiety."
  },
  {
    number: "02",
    title: "Root-Cause Pathology & Biomarker Profiling",
    bengali: "সঠিক ল্যাব টেস্ট ও রুট-কজ ডায়াগনসিস",
    summary: "Targeted lab investigations that pinpoint metabolic dysfunctions rather than prescribing generic blind antibiotics or symptom-masking pills.",
    triggers: [
      "Uncontrolled HbA1c (> 8.0%) with erratic spikes",
      "Elevated uric acid, liver enzymes, or creatinine",
      "Prolonged or recurrent seasonal fevers"
    ],
    clinicalActions: [
      "Glycated Hemoglobin (HbA1c) & continuous glucose correlation",
      "Renal panel (Creatinine, eGFR, Microalbuminuria)",
      "Thyroid profile (TSH, Free T4) & essential vitamins (D3, B12)"
    ],
    expectedOutcome: "Accurate diagnosis differentiating primary disease from secondary complications."
  },
  {
    number: "03",
    title: "Precision Pharmacology & Dietary Architecture",
    bengali: "সুনির্দিষ্ট ওষুধ নির্ধারণ ও বাস্তবসম্মত খাদ্যতালিকা",
    summary: "Formulating a tailored therapeutic plan combining modern clinical medicines with realistic dietary modifications that fit your actual Bengali culinary and daily routine.",
    triggers: [
      "Struggling to follow generic, rigid diet sheets",
      "Excessive polypharmacy (taking 8+ pills a day)",
      "Fear of diabetic kidney or retinal complications"
    ],
    clinicalActions: [
      "Rationalizing medication down to essential, organ-protective drugs",
      "Carbohydrate-budgeting tailored to traditional household meals",
      "Timing medication with meal windows to prevent hypoglycemia"
    ],
    expectedOutcome: "A sustainable health protocol you can maintain with ease and confidence."
  },
  {
    number: "04",
    title: "Structured Monitoring & Adaptive Follow-Up",
    bengali: "নিয়মিত ফলো-আপ ও শারীরিক উন্নতি পর্যালোচনা",
    summary: "Healthcare doesn't stop after the chamber visit. Scheduled follow-ups ensure your dosages are titrated downward as your body parameters normalize.",
    triggers: [
      "Need for ongoing dose adjustment as HbA1c improves",
      "Seasonal health check-ups and vaccine updates",
      "Periodic lipid and cardiovascular health check"
    ],
    clinicalActions: [
      "Review of home blood pressure and glucose log charts",
      "Tapering medications as metabolic health stabilizes",
      "Direct communication channel for urgent symptom queries"
    ],
    expectedOutcome: "Long-term metabolic peace of mind and prevention of emergency hospitalizations."
  }
];

interface RiseClinicalAccordionProps {
  onOpenAppointment: () => void;
}

export const RiseClinicalAccordion: React.FC<RiseClinicalAccordionProps> = ({ onOpenAppointment }) => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const toggleStep = (idx: number) => {
    setActiveStep(activeStep === idx ? null : idx);
  };

  return (
    <section className="w-full pb-14 sm:pb-20 xl:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Rise at Seven Section 9 Style) */}
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-12 xl:gap-x-16 items-start mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2 block">
              Clinical Journey
            </span>
            <RiseTextReveal
              as="h2"
              text="From First Consultation to Sustained Vitality."
              className="text-3xl sm:text-5xl font-bold sm:font-extrabold tracking-tight text-[#111212] leading-[1.08]"
              delay={0.1}
              stagger={0.03}
              highlightWords={['Sustained', 'Vitality.']}
              highlightClassName="text-emerald-800"
            />
          </div>

          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Discover how our four-stage clinical consultation framework transforms complex, confusing symptoms into clear, disciplined health turnarounds for adults in Kolkata.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
              >
                <span>Book your stage-one consultation today</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Accordion List */}
        <div className="border-t border-slate-200/90 divide-y divide-slate-200/90">
          {STEPS.map((step, idx) => {
            const isOpen = activeStep === idx;
            return (
              <div key={step.number} className="py-5 sm:py-7">
                <div
                  onClick={() => toggleStep(idx)}
                  className="w-full flex items-center justify-between cursor-pointer group select-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className={`text-base sm:text-xl font-mono font-semibold transition-colors ${
                      isOpen ? 'text-emerald-700' : 'text-slate-400 group-hover:text-slate-900'
                    }`}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className={`text-lg sm:text-2xl font-medium tracking-tight transition-colors ${
                        isOpen ? 'text-emerald-950 font-semibold' : 'text-[#111212] group-hover:text-emerald-800'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-bengali mt-0.5">
                        {step.bengali}
                      </p>
                    </div>
                  </div>

                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? 'bg-[#111212] text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {/* Smooth Animated Drawer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-8 sm:pl-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-6 space-y-4">
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                            {step.summary}
                          </p>

                          {/* Symptom Triggers */}
                          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                              Common Patient Presentations:
                            </span>
                            <ul className="space-y-1.5">
                              {step.triggers.map((t, tIdx) => (
                                <li key={tIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="md:col-span-6 space-y-4">
                          {/* Clinical Actions */}
                          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                              What Dr. Mandal Evaluates:
                            </span>
                            <ul className="space-y-1.5">
                              {step.clinicalActions.map((act, aIdx) => (
                                <li key={aIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcome Pill */}
                          <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 font-medium flex items-center justify-between">
                            <span><strong>Target Outcome:</strong> {step.expectedOutcome}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
