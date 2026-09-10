import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Star, Users, Clock, ShieldCheck } from 'lucide-react';

interface RollingCounterProps {
  value: string;
  suffix?: string;
}

const RollingNumber: React.FC<{ targetDigit: number; inView: boolean; delay: number }> = ({ targetDigit, inView, delay }) => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const height = 72; // height in px matching line height

  return (
    <span className="inline-block relative overflow-hidden h-[54px] sm:h-[64px] lg:h-[72px] leading-none">
      <motion.span
        initial={{ y: 0 }}
        animate={inView ? { y: -(targetDigit * height) } : { y: 0 }}
        transition={{
          duration: 1.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="flex flex-col items-center select-none"
      >
        {digits.map((d) => (
          <span
            key={d}
            style={{ height: `${height}px` }}
            className="flex items-center justify-center font-medium tracking-tight text-[#111212]"
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export const RiseOdometerStats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      id: 'stat-1',
      label: 'Years of Clinical Practice in Internal Medicine',
      valueDigits: [1, 4],
      suffix: '+',
      icon: Award,
      subtext: 'Compassionate medical care in South Kolkata'
    },
    {
      id: 'stat-2',
      label: '5-Star Google Patient Reviews',
      valueDigits: [8, 0],
      suffix: '+',
      icon: Star,
      subtext: 'Consistently praised for attentive listening'
    },
    {
      id: 'stat-3',
      label: 'Overall Google Patient Rating',
      prefix: '4.',
      valueDigits: [9],
      suffix: ' ★',
      icon: ShieldCheck,
      subtext: 'High trust score at Arnay Medical'
    },
    {
      id: 'stat-4',
      label: 'Minutes Average Consultation Time',
      valueDigits: [2, 0],
      suffix: '+',
      icon: Clock,
      subtext: 'Thorough, unhurried symptom evaluation'
    }
  ];

  return (
    <section ref={ref} className="w-full pb-14 sm:pb-20 xl:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top small category label */}
        <div className="mb-6 border-b border-slate-200/80 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Track Record & Trust
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Verified Medical Credentials · Arnay Medical, Haltu
          </span>
        </div>

        {/* Stats Grid with Rise at Seven Animated Number Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative flex flex-col justify-between border-l-2 border-slate-200 hover:border-emerald-600 pl-5 sm:pl-6 py-2 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-emerald-700 transition-colors mb-3">
                    <Icon className="w-4 h-4" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      Verified Stat 0{idx + 1}
                    </span>
                  </div>

                  {/* Mechanical Rolling Number */}
                  <div className="flex items-baseline text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#111212] lining-nums mb-2">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    <div className="flex">
                      {stat.valueDigits.map((digit, dIdx) => (
                        <RollingNumber
                          key={dIdx}
                          targetDigit={digit}
                          inView={isInView}
                          delay={idx * 0.15 + dIdx * 0.1}
                        />
                      ))}
                    </div>
                    {stat.suffix && (
                      <span className="text-emerald-600 font-semibold text-4xl sm:text-5xl ml-0.5">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
