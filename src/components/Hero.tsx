import React, { useState } from 'react';
import { Phone, Calendar, Star, MapPin, ShieldCheck, CheckCircle2, Sliders } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenAppointment: () => void;
}

export type HeroPattern = 'A' | 'B' | 'C' | 'D' | 'E';

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const [activePattern, setActivePattern] = useState<HeroPattern>('A');
  const [showPatternSelector, setShowPatternSelector] = useState(false);

  const heroImageSrc = "/images/profile_mandal.png";
  const heroImageFallback = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA";

  return (
    <section id="hero" className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Background architectural grid & soft glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Optional Pattern Switcher Pill (Demonstrates Architecture Flexibility per Section 7) */}
        <div className="flex justify-end mb-4">
          <div className="inline-flex items-center gap-1.5 p-1 bg-white/90 backdrop-blur-xs border border-slate-200 rounded-full shadow-2xs text-xs">
            <button
              onClick={() => setShowPatternSelector(!showPatternSelector)}
              className="px-2.5 py-1 text-slate-500 hover:text-slate-900 flex items-center gap-1 text-[11px] font-medium"
              title="Toggle Layout Pattern"
            >
              <Sliders className="w-3 h-3 text-teal-600" />
              <span>Layout Variant: <strong>Pattern {activePattern}</strong></span>
            </button>
            {showPatternSelector && (
              <div className="flex items-center gap-1 border-l border-slate-200 pl-1.5 animate-in fade-in duration-150">
                {(['A', 'B', 'C', 'D', 'E'] as HeroPattern[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setActivePattern(p)}
                    className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                      activePattern === p
                        ? 'bg-[#0A2540] text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* =======================================================================
            PATTERN A: Split-Screen Editorial Doctor Portrait (Primary Implementation)
            ======================================================================= */}
        {activePattern === 'A' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Doctor Name & Bengali Tag */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-teal-600"></span>
                <span className="font-semibold text-[#0A2540]">{DOCTOR_INFO.name}</span>
                <span className="text-slate-300">|</span>
                <span className="text-teal-800 font-medium">{DOCTOR_INFO.specialization}</span>
                <span className="hidden sm:inline-block text-slate-300">|</span>
                <span className="hidden sm:inline-block text-slate-600 font-bengali text-xs">
                  {DOCTOR_INFO.bengaliName}
                </span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
                Expert Medical Care With A <span className="text-[#0A2540] underline decoration-teal-500/50 decoration-4 underline-offset-6">Patient-First</span> Approach
              </h1>

              {/* Subheading & Location Lockup */}
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-slate-800">
                  Dr. Souvonik Mandal
                </h2>
                <p className="text-sm sm:text-base font-medium text-teal-700">
                  Medicine Specialist & Diabetologist · Arnay Medical, South Kolkata
                </p>
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Trusted medical care for adults with a focus on thoughtful consultation, careful listening and personalized treatment guidance.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                <button
                  id="hero-primary-book-btn"
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#0A2540] hover:bg-[#13385e] shadow-md shadow-slate-900/10 active:scale-98 transition-all duration-150 cursor-pointer text-sm sm:text-base"
                >
                  <Calendar className="w-5 h-5 text-teal-400" />
                  <span>Book an Appointment</span>
                </button>

                <a
                  id="hero-secondary-call-btn"
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs active:scale-98 transition-all duration-150 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call Clinic: {DOCTOR_INFO.phone}</span>
                </a>
              </div>

              {/* Compact Trust Strip */}
              <div className="w-full pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">{DOCTOR_INFO.googleRating} / 5</span>
                    <span className="text-xs text-slate-500 font-medium">({DOCTOR_INFO.totalReviews} Google Reviews)</span>
                  </div>
                </div>
                <div className="hidden sm:block text-slate-300">•</div>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  “Patients value compassionate care and attentive consultation.”
                </p>
              </div>

            </div>

            {/* Right Asymmetric Composition with Doctor Portrait */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
              
              {/* Outer Decorative Architectural Elements */}
              <div className="relative w-full max-w-md">
                
                {/* Background Framing Card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540] to-teal-700 rounded-3xl transform rotate-2 scale-[1.02] opacity-20 -z-10 blur-xs" />
                
                {/* Main Portrait Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border-4 border-white">
                  <SafeImage
                    src={heroImageSrc}
                    fallbackSrc={heroImageFallback}
                    alt="Dr. Souvonik Mandal - Medicine Specialist & Diabetologist in South Kolkata"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                  />
                  
                  {/* Subtle Gradient Shade at Bottom of Image */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/30 to-transparent pointer-events-none" />
                  
                  {/* Doctor Name Overlay on Mobile/Tablet */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-base font-bold tracking-wide drop-shadow-sm">Dr. Souvonik Mandal</p>
                    <p className="text-xs text-teal-200 drop-shadow-sm">Medicine Specialist & Diabetologist</p>
                  </div>
                </div>

                {/* Floating Rating Badge (Top Left / Offset) */}
                <div className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-100 flex items-center gap-3 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-slate-900 text-sm">4.9</span>
                      <span className="text-xs text-slate-500">/ 5.0</span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-600">80 Google Reviews</p>
                  </div>
                </div>

                {/* Floating Location & Clinic Badge (Bottom Right / Offset) */}
                <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-100 flex items-center gap-3 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700 border border-teal-200">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Arnay Medical</p>
                    <p className="text-[11px] text-slate-500">Haltu, South Kolkata</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* =======================================================================
            PATTERN B: Full-Width Cinematic Clinic/Doctor Image with Dark Overlay
            ======================================================================= */}
        {activePattern === 'B' && (
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white min-h-[480px] flex items-center p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="absolute inset-0">
              <SafeImage
                src={heroImageSrc}
                fallbackSrc={heroImageFallback}
                alt="Dr. Souvonik Mandal"
                className="w-full h-full object-cover object-center opacity-30 filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-medium mb-4">
                <span>{DOCTOR_INFO.clinic} · {DOCTOR_INFO.location}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                Expert Medical Care With A Patient-First Approach
              </h1>
              <p className="text-lg text-slate-200 mb-2 font-medium">
                Dr. Souvonik Mandal · {DOCTOR_INFO.specialization}
              </p>
              <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed">
                Trusted medical care for adults with a focus on thoughtful consultation, careful listening and personalized treatment guidance.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="px-6 py-3.5 rounded-xl font-semibold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md"
                >
                  Book an Appointment
                </button>
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  Call {DOCTOR_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================================
            PATTERN C: Minimal White Hero with Floating Doctor Portrait
            ======================================================================= */}
        {activePattern === 'C' && (
          <div className="max-w-4xl mx-auto text-center py-6">
            <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-teal-500/30">
              <SafeImage
                src={heroImageSrc}
                fallbackSrc={heroImageFallback}
                alt="Dr. Souvonik Mandal"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700 mb-4">
              South Kolkata · 4.9 ★ (80 Reviews)
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Expert Medical Care With A Patient-First Approach
            </h1>
            <p className="text-lg font-semibold text-teal-800 mb-4">
              Dr. Souvonik Mandal · Medicine Specialist & Diabetologist
            </p>
            <p className="text-slate-600 max-w-xl mx-auto mb-8 text-base">
              Trusted medical care for adults with a focus on thoughtful consultation, careful listening and personalized treatment guidance.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-xl bg-[#0A2540] text-white font-semibold shadow-md"
              >
                Book an Appointment
              </button>
              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold border border-slate-200"
              >
                Call Clinic
              </a>
            </div>
          </div>
        )}

        {/* =======================================================================
            PATTERN D: Asymmetric Magazine-Style Medical Layout
            ======================================================================= */}
        {activePattern === 'D' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <SafeImage
                  src={heroImageSrc}
                  fallbackSrc={heroImageFallback}
                  alt="Dr. Souvonik Mandal"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest font-bold text-teal-700">
                Medical Consultation & Diabetology
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
                Expert Medical Care With A Patient-First Approach
              </h1>
              <p className="text-base text-slate-600 mb-6">
                “Dr. Souvonik Mandal provides consultation in South Kolkata with a focus on general medicine and diabetes care, prioritizing listening and compassionate communication.”
              </p>
              <div className="flex gap-4">
                <button
                  onClick={onOpenAppointment}
                  className="px-5 py-3 rounded-xl bg-[#0A2540] text-white font-semibold"
                >
                  Book an Appointment
                </button>
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="px-5 py-3 rounded-xl border border-slate-300 font-semibold text-slate-800"
                >
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =======================================================================
            PATTERN E: Centered Premium Physician Introduction with Floating Trust Cards
            ======================================================================= */}
        {activePattern === 'E' && (
          <div className="text-center max-w-3xl mx-auto py-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>4.9 / 5 Rating on Google · 80 Reviews</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Dr. Souvonik Mandal
            </h1>
            <p className="text-xl text-teal-700 font-medium mb-6">
              Medicine Specialist & Diabetologist in South Kolkata
            </p>
            <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Trusted medical care for adults with a focus on thoughtful consultation, careful listening and personalized treatment guidance.
            </p>
            <div className="flex justify-center gap-4 mb-10">
              <button
                onClick={onOpenAppointment}
                className="px-7 py-3.5 bg-[#0A2540] text-white rounded-xl font-semibold shadow-md"
              >
                Book an Appointment
              </button>
              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="px-7 py-3.5 bg-white border border-slate-300 text-slate-800 rounded-xl font-semibold"
              >
                Call {DOCTOR_INFO.phone}
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
