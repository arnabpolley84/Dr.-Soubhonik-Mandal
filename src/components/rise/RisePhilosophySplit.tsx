import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Stethoscope, Heart, Clock, FileCheck } from 'lucide-react';
import { RiseTextReveal } from './RiseTextReveal';

interface RisePhilosophySplitProps {
  onOpenAppointment: () => void;
}

export const RisePhilosophySplit: React.FC<RisePhilosophySplitProps> = ({ onOpenAppointment }) => {
  return (
    <section id="about" className="w-full pb-14 sm:pb-20 xl:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-12 xl:gap-x-16 items-start">
          
          {/* Left Column: Giant Statement Headline */}
          <div className="col-span-12 lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 block">
              Core Clinical Philosophy
            </span>
            <RiseTextReveal
              as="h2"
              text="We are evidence-first for a reason."
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold sm:font-extrabold tracking-tight text-[#111212] leading-[1.05]"
              delay={0.1}
              stagger={0.03}
              inlinePill={{
                index: 2, // after "evidence-first"
                content: (
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/80 shadow-xs">
                    <Stethoscope className="w-4 h-4 text-emerald-700" />
                  </span>
                ),
              }}
              highlightWords={['evidence-first']}
              highlightClassName="text-[#004C3F] underline decoration-emerald-500/40 decoration-wavy decoration-2 underline-offset-6"
            />

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111212] hover:bg-[#004C3F] active:scale-98 text-white font-semibold text-sm transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <span className="text-xs text-slate-500 font-medium font-bengali">
                দক্ষ ও যত্নশীল চিকিৎসা পরামর্শ
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Depth Paragraphs & 4 Core Pillars */}
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                We combine objective laboratory biomarkers with dedicated patient listening to make clinical decisions that last — <span className="font-semibold text-slate-900">why? Because true medical care is root-cause diagnosis, not 3-minute symptom masking.</span>
              </p>
              <p>
                We don’t rely on rushed prescriptions or generalized dietary assumptions. We examine how diabetes, blood pressure fluctuations, and metabolic shifts interact with your specific daily routine, family history, and psychological stress.
              </p>
              <p>
                Every consultation at <span className="font-semibold text-slate-900">Arnay Medical</span> is structured to give you clarity, comfort, and a transparent medical roadmap you can actually follow without feeling overwhelmed.
              </p>
            </div>

            {/* 4 Feature Micro-Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-slate-200/80">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Unhurried Time</h4>
                <p className="text-xs text-slate-500 mt-1">20+ minutes dedicated to listening and answering questions.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Biomarker Precision</h4>
                <p className="text-xs text-slate-500 mt-1">HbA1c, renal profiling, lipids, and continuous glucose tracking.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Organ Protection</h4>
                <p className="text-xs text-slate-500 mt-1">Proactive prevention of diabetic renal, ocular, and cardiac risks.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Rational Medications</h4>
                <p className="text-xs text-slate-500 mt-1">No unnecessary polypharmacy or exaggerated drug loads.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
