import React from 'react';
import { Calendar, Phone, ArrowUpRight, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';
import { SafeImage } from '../SafeImage';

interface EditorialHeroProps {
  onOpenAppointment: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenAppointment }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#0A0E0C] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* 1. CINEMATIC DOCTOR PHOTOGRAPHY SHIFTED TO THE RIGHT (SHORTENED AT TOP IN MOBILE VIEW) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Responsive container: shortened top banner on mobile, right-aligned on desktop */}
        <div className="absolute top-0 inset-x-0 h-[280px] xs:h-[320px] sm:h-full sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[75%] md:w-[62%] lg:w-[56%] xl:w-[50%]">
          {/* Crisp, natural doctor portrait - face clearly visible and properly proportioned */}
          <SafeImage
            src={DOCTOR_INFO.profilePhotoLocal}
            fallbackSrc={DOCTOR_INFO.profilePhoto}
            alt={`${DOCTOR_INFO.name} - Medicine Specialist & Diabetologist at Arnay Medical, South Kolkata`}
            className="w-full h-full object-cover object-[46%_34%] sm:object-[46%_40%] lg:object-[46%_45%] brightness-100 contrast-[1.03]"
          />

          {/* FADED EFFECT: Left-to-right gentle gradient blending image seamlessly into dark background */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-60 lg:w-80 bg-gradient-to-r from-[#0A0E0C] via-[#0A0E0C]/75 to-transparent pointer-events-none" />

          {/* FADED EFFECT: Right edge subtle fade on mobile */}
          <div className="sm:hidden absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0A0E0C] to-transparent pointer-events-none" />

          {/* Top smooth vignette for navbar readability */}
          <div className="absolute inset-x-0 top-0 h-20 sm:h-36 bg-gradient-to-b from-[#0A0E0C] via-[#0A0E0C]/40 to-transparent pointer-events-none" />

          {/* Bottom smooth fade: melts seamlessly into the solid dark hero canvas */}
          <div className="absolute inset-x-0 bottom-0 h-28 xs:h-36 sm:h-52 bg-gradient-to-t from-[#0A0E0C] via-[#0A0E0C]/85 to-transparent pointer-events-none" />
        </div>

        {/* Solid dark canvas on left for desktop typography legibility */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-[42%] bg-[#0A0E0C] pointer-events-none" />

        {/* Ambient subtle emerald glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT CONTAINER (LEFT-ALIGNED EDITORIAL TYPOGRAPHY) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 xs:pt-48 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 my-auto w-full">
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Clinical Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Consultant Physician & Diabetologist</span>
          </div>

          {/* Main Headline with Bengali Sub-heading */}
          <div className="space-y-3">
            <h1 className="font-['Outfit',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] text-balance">
              {DOCTOR_INFO.name}
            </h1>
            
            <div className="flex items-center gap-3">
              <p className="font-bengali text-xl sm:text-2xl font-semibold text-emerald-300 tracking-wide">
                {DOCTOR_INFO.bengaliName}
              </p>
              <span className="text-white/40">•</span>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-300 uppercase">
                Arnay Medical, South Kolkata
              </p>
            </div>
          </div>

          {/* Editorial Philosophy Statement */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light text-balance max-w-2xl">
            A patient-first clinical practice dedicated to accurate diagnosis, personalized diabetes management, and honest, unhurried care.
          </p>

          {/* Bengali Clinical Note */}
          <p className="text-sm sm:text-base text-slate-300 font-bengali leading-relaxed max-w-xl">
            রোগীর প্রতিটি সমস্যার গভীর মূল্যায়ন এবং আধুনিক চিকিৎসা পদ্ধতির মাধ্যমে দীর্ঘমেয়াদী সুস্থতার সঠিক দিকনির্দেশনা।
          </p>

          {/* Clear Call-to-Action Group */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="group inline-flex items-center gap-3 px-7 sm:px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base shadow-2xl transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book an Appointment</span>
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all duration-200 active:scale-98"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {DOCTOR_INFO.phone}</span>
            </a>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span className="text-slate-400">(80+ Google Reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-300">
              <CheckCircle2 className="w-4 h-4" />
              <span>Attentive Consultation Time</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>351 Kalitala Rd, Haltu</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM CREDENTIALS RIBBON (Melts smoothly into next section) */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/30 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-slate-300">
            <div>
              <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Specialization</p>
              <p className="font-semibold text-sm sm:text-base text-white mt-0.5">Medicine & Diabetology</p>
            </div>
            <div>
              <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Practice Location</p>
              <p className="font-semibold text-sm sm:text-base text-white mt-0.5">Arnay Medical, Haltu</p>
            </div>
            <div>
              <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Visiting Hours</p>
              <p className="font-semibold text-sm sm:text-base text-white mt-0.5">Evenings · Call to Confirm</p>
            </div>
            <div>
              <p className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Patient Rating</p>
              <p className="font-semibold text-sm sm:text-base text-white mt-0.5">4.9 ★ Exceptional Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
