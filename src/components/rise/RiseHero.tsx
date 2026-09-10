import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Star, MapPin, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';
import { RiseTextReveal } from './RiseTextReveal';

interface RiseHeroProps {
  onOpenAppointment: () => void;
}

export const RiseHero: React.FC<RiseHeroProps> = ({ onOpenAppointment }) => {
  return (
    <section id="hero" className="w-full pt-6 pb-12 sm:pt-10 sm:pb-16 xl:pt-14 xl:pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Category Label */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-y-4 gap-x-6 mb-6 sm:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-semibold text-slate-800 tracking-wide uppercase">
              Internal Medicine & Diabetology
            </span>
            <span className="text-slate-300 font-light">|</span>
            <span className="text-xs font-medium text-emerald-800 font-bengali">
              ডাঃ সৌভনিক মন্ডল
            </span>
          </motion.div>

          {/* Quick Doctor Credentials Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 text-xs text-slate-600 bg-white/70 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-200/70"
          >
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 ★</span>
            </div>
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-slate-800">80+ Google Reviews</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-600" />
              Arnay Medical, Haltu
            </span>
          </motion.div>
        </div>

        {/* Massive Bold Hero Headline (Rise At Seven Style) */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-start">
          <div className="col-span-12 lg:col-span-8">
            {/* Massive Bold Hero Headline with Sample Website Text Effect & Original Outfit Font */}
            <RiseTextReveal
              as="h1"
              immediate={true}
              text="Fueling recovery and long-term vitality through evidence-based medicine and personalized diabetic care."
              className="text-4xl sm:text-6xl md:text-7xl xl:text-[5rem] font-bold sm:font-extrabold tracking-tight text-[#111212] leading-[1.04]"
              delay={0.12}
              stagger={0.024}
              inlinePill={{
                index: 1, // after "recovery"
                content: (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300 text-xs font-bold tracking-normal align-middle shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Evidence Care</span>
                  </span>
                ),
              }}
              highlightWords={['evidence-based', 'medicine']}
              highlightClassName="text-[#004C3F] underline decoration-emerald-500/50 decoration-wavy decoration-2 underline-offset-8"
            />

            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-pretty"
            >
              Consult <span className="font-semibold text-slate-900">Dr. Souvonik Mandal</span> for comprehensive diagnosis, unhurried 20+ minute listening, and targeted treatment for diabetes, blood pressure spikes, thyroid disorders, and acute internal illnesses.
            </motion.p>

            {/* CTAs in Rise at Seven Pill & Arrow Format */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                type="button"
                onClick={onOpenAppointment}
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#111212] hover:bg-[#004C3F] active:scale-98 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Book an Appointment</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white hover:bg-slate-100 active:scale-98 text-slate-900 font-bold text-sm sm:text-base border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Make a Call: {DOCTOR_INFO.phone}</span>
              </a>
            </motion.div>

            {/* Trust Highlights Checklist */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Unhurried 20+ Minute Listening
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Detailed Pathology & Lab Analysis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Clear Lifestyle & Diet Roadmaps
              </span>
            </motion.div>
          </div>

          {/* Right Column: Doctor Portrait Card with Rise at Seven Floating Badge */}
          <div className="col-span-12 lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-lg p-3"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                <img
                  src={DOCTOR_INFO.profilePhotoLocal}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = DOCTOR_INFO.profilePhoto;
                  }}
                  alt="Dr. Souvonik Mandal - Medicine Specialist"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Top Pill */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                  <span className="px-3 py-1 rounded-full bg-[#111212]/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/10">
                    Dr. Souvonik Mandal
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    Available
                  </span>
                </div>

                {/* Floating Bottom Trust Glass Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>4.9 / 5.0 Rating</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-medium">80+ Patient Google Reviews</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Clinic & Timing Sub-strip */}
              <div className="mt-3 px-3 py-2 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Arnay Medical · Haltu</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  South Kolkata
                </span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
