import React from 'react';
import { ArrowUpRight, TrendingDown, HeartPulse, Activity, Sparkles, ShieldCheck } from 'lucide-react';

interface CaseStudyItem {
  id: string;
  tag: string;
  year: string;
  condition: string;
  headline: string;
  metricLabel: string;
  metricValue: string;
  summary: string;
  icon: React.ElementType;
  bgGradient: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-1',
    tag: 'Diabetology',
    year: '[2025]',
    condition: 'Type 2 Diabetes',
    headline: 'Glycemic Stabilization & HbA1c Normalization',
    metricLabel: 'HbA1c Reduction',
    metricValue: '10.4% → 6.2%',
    summary: '90-day titration combining modern oral agents, micro-meal planning, and home glucose logging without hypoglycemic episodes.',
    icon: Activity,
    bgGradient: 'from-emerald-950 via-slate-900 to-[#111212]'
  },
  {
    id: 'case-2',
    tag: 'Cardiovascular',
    year: '[2025]',
    condition: 'Severe Hypertension',
    headline: 'Critical BP Spikes Stabilized with Renal Protection',
    metricLabel: 'Blood Pressure Target',
    metricValue: '175/110 → 122/78',
    summary: 'Identification of secondary nocturnal spikes, rationalized dual-agent therapy, and sodium modulation to safeguard heart & kidney function.',
    icon: HeartPulse,
    bgGradient: 'from-slate-900 via-teal-950 to-[#111212]'
  },
  {
    id: 'case-3',
    tag: 'Metabolism',
    year: '[2024]',
    condition: 'Thyroid & Fatigue',
    headline: 'Severe Exhaustion Reversed Through Endocrine Balance',
    metricLabel: 'TSH Level Optimization',
    metricValue: '14.8 → 2.1 mIU/L',
    summary: 'Detailed investigation of subclinical hypothyroid state and vitamin deficiencies, restoring active daily energy and vitality.',
    icon: Sparkles,
    bgGradient: 'from-zinc-900 via-emerald-950 to-[#111212]'
  },
  {
    id: 'case-4',
    tag: 'Internal Medicine',
    year: '[2025]',
    condition: 'Prolonged Fever (PUO)',
    headline: 'Targeted Diagnosis and Recovery for Persistent Fever',
    metricLabel: 'Days to Recovery',
    metricValue: '14-Day Fever Cleared',
    summary: 'Stepwise lab profiling ruling out drug fever and atypical infections, followed by targeted treatment and complete recovery.',
    icon: ShieldCheck,
    bgGradient: 'from-slate-900 via-sky-950 to-[#111212]'
  },
  {
    id: 'case-5',
    tag: 'Geriatric Health',
    year: '[2024]',
    condition: 'Senior Multi-Morbidity',
    headline: 'Polypharmacy Reduction & Comprehensive Senior Care',
    metricLabel: 'Medication Streamlined',
    metricValue: '11 Pills → 5 Core Meds',
    summary: 'Eliminated redundant medications and adverse drug interactions for a 72-year-old patient, improving mobility and cognitive alertness.',
    icon: TrendingDown,
    bgGradient: 'from-emerald-950 via-slate-900 to-[#111212]'
  }
];

interface RiseCaseStudiesMarqueeProps {
  onOpenAppointment: () => void;
}

export const RiseCaseStudiesMarquee: React.FC<RiseCaseStudiesMarqueeProps> = ({ onOpenAppointment }) => {
  // Duplicate array for seamless infinite looping
  const items = [...CASE_STUDIES, ...CASE_STUDIES];

  return (
    <section className="w-full pb-12 sm:pb-16 xl:pb-24 overflow-hidden select-none">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Clinical Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111212] mt-1">
            Real Patient Health Transformations
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          ← Hover to pause ticker · Drag or scroll →
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="w-full overflow-hidden relative">
        {/* Left and right fade gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F6F7F9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F6F7F9] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4 sm:gap-6 py-2 px-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.id}-${index}`}
                onClick={onOpenAppointment}
                className="group relative cursor-pointer w-[310px] sm:w-[380px] lg:w-[420px] shrink-0 rounded-3xl p-6 sm:p-7 text-white bg-gradient-to-br border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(135deg, #111212 0%, #0d2822 60%, #004C3F 100%)'
                }}
              >
                {/* Header Pills */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold tracking-wide border border-white/10">
                        {item.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {item.year}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                    {item.condition}
                  </p>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white leading-snug group-hover:text-emerald-100 transition-colors">
                    {item.headline}
                  </h3>
                </div>

                {/* Metric Badge */}
                <div className="my-5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">
                    {item.metricLabel}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-emerald-300 font-mono tracking-tight">
                    {item.metricValue}
                  </span>
                </div>

                {/* Summary */}
                <div>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Evidence-informed outcome</span>
                    <span className="text-emerald-300 font-bold group-hover:underline">Consult Dr. Mandal →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
