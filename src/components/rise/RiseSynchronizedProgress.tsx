import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Activity, ShieldCheck, Heart, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { RiseTextReveal } from './RiseTextReveal';

interface TabItem {
  id: string;
  number: string;
  title: string;
  bengali: string;
  tagline: string;
  description: string;
  metricHighlight: string;
  metricLabel: string;
  biomarkers: string[];
  clinicalGoal: string;
  bgColor: string;
}

const TABS: TabItem[] = [
  {
    id: 'tab-1',
    number: '01',
    title: 'Precision Glycemic Titration',
    bengali: 'সুনির্দিষ্ট সুগার নিয়ন্ত্রণ ও HbA1c ট্র্যাকিং',
    tagline: 'Continuous glucose profiling without hypoglycemic risk',
    description: 'We move beyond static fasting numbers by examining post-prandial spikes, dawn phenomenon, and 90-day glycated hemoglobin trends. Every patient receives a calibrated, gentle medicine roadmap.',
    metricHighlight: '< 6.5%',
    metricLabel: 'HbA1c Target Range',
    biomarkers: ['Fasting Glucose: 80-110 mg/dL', 'Post-Meal: < 140 mg/dL', 'Estimated Average Glucose (eAG)'],
    clinicalGoal: 'Protect microvascular health and eliminate diabetic lethargy.',
    bgColor: 'from-emerald-950 via-slate-900 to-[#111212]'
  },
  {
    id: 'tab-2',
    number: '02',
    title: 'Cardiovascular & Renal Shielding',
    bengali: 'রক্তচাপ, কিডনি ও হার্ট সুরক্ষা',
    tagline: 'Defending vital organs from chronic pressure stress',
    description: 'Hypertension often progresses silently until it strains the kidneys and coronary vessels. We conduct targeted screening for microalbuminuria, eGFR, and lipid sub-fractions to guard long-term organ health.',
    metricHighlight: '< 125/80',
    metricLabel: 'Blood Pressure Target',
    biomarkers: ['eGFR / Serum Creatinine Monitoring', 'ApoB & Non-HDL Cholesterol', 'Urine Albumin-to-Creatinine Ratio (uACR)'],
    clinicalGoal: 'Zero cardiac strain and sustained renal filtration.',
    bgColor: 'from-teal-950 via-slate-900 to-[#111212]'
  },
  {
    id: 'tab-3',
    number: '03',
    title: 'Metabolic Vitality & Lifestyle Architecture',
    bengali: 'শারীরিক ক্লান্তি দূরীকরণ ও মেটাবলিক স্বাস্থ্য',
    tagline: 'Sustainable daily nutrition, sleep, and restorative stamina',
    description: 'A prescription is only half the therapy. We analyze sleep architecture, work schedules, thyroid hormones, and micro-nutrient status (Vitamin D, B12, Ferritin) to rebuild natural energy and eliminate chronic fatigue.',
    metricHighlight: '100%',
    metricLabel: 'Personalized Daily Protocol',
    biomarkers: ['TSH & Free T4 Thyroid Profiling', 'Serum 25-OH Vitamin D3 & Active B12', 'Visceral Fat & Liver Enzyme Balance'],
    clinicalGoal: 'Reclaim alert daily vigor and deep metabolic resilience.',
    bgColor: 'from-zinc-900 via-emerald-950 to-[#111212]'
  }
];

interface RiseSynchronizedProgressProps {
  onOpenAppointment: () => void;
}

export const RiseSynchronizedProgress: React.FC<RiseSynchronizedProgressProps> = ({ onOpenAppointment }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // Auto-cycling interval with synchronized progress bar
  useEffect(() => {
    const duration = 6000; // 6 seconds per tab
    const step = 50; // update every 50ms
    const increment = (step / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((cur) => (cur + 1) % TABS.length);
          return 0;
        }
        return prev + increment;
      });
    }, step);

    return () => clearInterval(timer);
  }, [activeTab]);

  const currentTab = TABS[activeTab];

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setProgress(0);
  };

  return (
    <section id="diabetes" className="w-full pb-14 sm:pb-20 xl:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow and Section Heading */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Clinical Measurement & Framework
          </span>
          <RiseTextReveal
            as="h2"
            text="The Clinical Science Behind Patient Longevity."
            className="text-3xl sm:text-5xl font-bold sm:font-extrabold tracking-tight text-[#111212] mt-1"
            delay={0.1}
            stagger={0.03}
            highlightWords={['Patient', 'Longevity.']}
            highlightClassName="text-emerald-800"
          />
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            How Dr. Souvonik Mandal tracks biological markers to formulate reliable, evidence-backed health turnarounds.
          </p>
        </div>

        {/* 2-Column Rise at Seven Section 7 Layout */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 xl:gap-x-16 items-center">
          
          {/* Left Column: Visual Diagnostic Box with Auto-Sync Progress Bars */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className={`relative rounded-3xl p-6 sm:p-8 text-white bg-gradient-to-br ${currentTab.bgColor} border border-white/10 shadow-xl overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-between transition-all duration-700`}
            >
              {/* Top Bar with Step & Bengali */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3.5 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-mono font-bold tracking-wide border border-white/10">
                  PILLAR {currentTab.number} OF 03
                </span>
                <span className="text-xs font-medium text-slate-300 font-bengali">
                  {currentTab.bengali}
                </span>
              </div>

              {/* Central Dynamic Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="my-6 z-10"
                >
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
                    {currentTab.tagline}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4">
                    {currentTab.title}
                  </h3>

                  {/* Biomarker Checklist */}
                  <div className="space-y-2 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xs">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Key Diagnostic Biomarkers Evaluated:
                    </p>
                    {currentTab.biomarkers.map((bio, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{bio}</span>
                      </div>
                    ))}
                  </div>

                  {/* Primary Target Metric Display */}
                  <div className="flex items-baseline justify-between p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                    <div>
                      <span className="text-xs text-slate-300 block">{currentTab.metricLabel}</span>
                      <span className="text-xs text-emerald-300 font-medium">{currentTab.clinicalGoal}</span>
                    </div>
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-emerald-300 tracking-tight">
                      {currentTab.metricHighlight}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Synchronized Progress Indicator (Modeled exactly after Rise At Seven Section 7) */}
              <div className="z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 w-full max-w-xs">
                  {TABS.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectTab(index)}
                      className="h-1.5 rounded-full bg-white/20 flex-1 overflow-hidden cursor-pointer"
                    >
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-75"
                        style={{
                          width: index < activeTab ? '100%' : index === activeTab ? `${progress}%` : '0%'
                        }}
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Ambient Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Clickable Tab Selector List */}
          <div className="col-span-12 lg:col-span-6 space-y-3 sm:space-y-4">
            {TABS.map((tab, idx) => {
              const isSelected = idx === activeTab;
              return (
                <div
                  key={tab.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`group cursor-pointer rounded-3xl p-5 sm:p-6 transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-slate-300 shadow-md scale-[1.01]'
                      : 'bg-white/60 hover:bg-white border-slate-200/60 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-emerald-100 text-emerald-900' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {tab.number}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                        {tab.title}
                      </h4>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-emerald-700 translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
                    {tab.description}
                  </p>

                  {isSelected && (
                    <div className="mt-3 pl-9 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                      <span>Active Focus · {tab.tagline}</span>
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
