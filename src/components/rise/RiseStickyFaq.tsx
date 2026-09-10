import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight, HelpCircle } from 'lucide-react';
import { FAQS } from '../../data/doctorData';
import { RiseTextReveal } from './RiseTextReveal';

interface RiseStickyFaqProps {
  onOpenAppointment: () => void;
}

export const RiseStickyFaq: React.FC<RiseStickyFaqProps> = ({ onOpenAppointment }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="faq" className="w-full pb-14 sm:pb-20 xl:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 xl:gap-x-16 items-start">
          
          {/* Left Column: Sticky Heading (Rise at Seven Section 11 Style) */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 block">
                Common Inquiries
              </span>
              <RiseTextReveal
                as="h2"
                text="Frequently Asked Questions."
                className="text-3xl sm:text-5xl font-bold sm:font-extrabold tracking-tight text-[#111212] leading-[1.08]"
                delay={0.1}
                stagger={0.03}
                highlightWords={['Questions.']}
                highlightClassName="text-emerald-800"
              />
              <p className="text-sm text-slate-600 leading-relaxed">
                Everything you need to know about visiting Arnay Medical, consultation timings, diabetes management, and appointment confirmation.
              </p>

              <div className="pt-4 border-t border-slate-200/80">
                <p className="text-xs text-slate-500 mb-2">Have a specific medical concern?</p>
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>Speak with clinic assistant</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Morphing Corner Cards (hover:rounded-[2.5rem]) */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-8 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => toggle(index)}
                  className={`cursor-pointer transition-all duration-300 bg-white border border-slate-200/80 p-5 sm:p-6 shadow-2xs hover:shadow-md ${
                    isOpen ? 'rounded-[2rem] border-slate-300 ring-1 ring-emerald-500/10' : 'rounded-2xl hover:rounded-[2.2rem]'
                  }`}
                >
                  <div className="w-full flex items-center justify-between gap-4 select-none">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Q0{index + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-medium text-[#111212] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#111212] text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-2 border-t border-slate-100 pl-7 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <p>{faq.answer}</p>
                          <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                            <span>Arnay Medical · 094338 27531</span>
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
      </div>
    </section>
  );
};
