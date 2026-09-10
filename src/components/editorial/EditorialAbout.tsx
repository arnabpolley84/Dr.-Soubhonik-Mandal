import React from 'react';
import { Calendar, Phone, ArrowUpRight, Star, ShieldCheck, Award, CheckCircle2, Stethoscope, MapPin } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';
import { SafeImage } from '../SafeImage';

interface EditorialAboutProps {
  onOpenAppointment: () => void;
}

export const EditorialAbout: React.FC<EditorialAboutProps> = ({ onOpenAppointment }) => {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36 bg-[#F9FAF8] text-[#121715] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: LARGE CINEMATIC DOCTOR PHOTOGRAPH (ASYMMETRIC COMPOSITION) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80">
              <SafeImage
                src="/images/img1.png"
                fallbackSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmdC4brDEGpID-w0hz9w_6QH-Qff-UaIx0lvaGAesTzoj-5F8PfXXv7Fcj4kzv_CEa3piBbpphMQMBQnWTxSskGg0H2zGcPGEv7-QO03m7NaSff1DQeAwK6PlJdqT6K-Dz1VJA"
                alt="Dr. Souvonik Mandal - Physician Profile"
                className="w-full h-[460px] sm:h-[560px] lg:h-[620px] object-cover object-top filter contrast-[1.02]"
              />

              {/* Minimal Editorial Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white">
                <p className="font-['Outfit',sans-serif] text-xl font-bold tracking-tight">
                  {DOCTOR_INFO.name}
                </p>
                <p className="text-xs text-emerald-300 font-medium">
                  {DOCTOR_INFO.specialization} · Arnay Medical
                </p>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/80 items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">4.9/5 Rating (80+ Reviews)</p>
                <p className="text-[11px] text-slate-500">Known for compassionate patient care</p>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL PROFILE & CLINICAL PHILOSOPHY */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-900">
              <span>Physician Profile</span>
              <span className="text-emerald-400">•</span>
              <span className="font-bengali text-emerald-800">{DOCTOR_INFO.bengaliName}</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12]">
                Medicine practiced with patience, precision, and respect.
              </h2>
              <p className="text-lg font-semibold text-emerald-800 font-['Outfit',sans-serif]">
                Consultant in General Medicine & Clinical Diabetology
              </p>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
              <p>
                Dr. Souvonik Mandal consults at Arnay Medical in Haltu, South Kolkata. With an unhurried, patient-centered philosophy, he addresses both acute health crises and chronic metabolic disorders with thorough diagnostic reasoning.
              </p>
              <p>
                Rather than rushing through symptom checklists, Dr. Mandal takes the necessary consultation time to listen to your lived experience, review longitudinal blood test trends, and explain the biological rationale behind every therapeutic recommendation.
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-bengali leading-relaxed bg-white p-4 rounded-xl border border-slate-200">
                ডাঃ সৌভনিক মন্ডল দক্ষিণ কলকাতার হালতুতে অবস্থিত আর্নয় মেডিকেলে অত্যন্ত ধৈর্য সহকারে রোগীদের প্রতিটি সমস্যা শোনেন এবং দীর্ঘমেয়াদী সুস্থতার সঠিক চিকিৎসা দিকনির্দেশনা প্রদান করেন।
              </p>
            </div>

            {/* Core Medical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h4 className="font-['Outfit',sans-serif] font-bold text-sm text-slate-900">Attentive Listening</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated time to articulate your symptoms and medical history without being interrupted.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h4 className="font-['Outfit',sans-serif] font-bold text-sm text-slate-900">Transparent Explanation</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear breakdowns of lab tests, HbA1c metrics, and medication rationales in plain language.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-950 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all duration-200 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 hover:bg-white text-slate-800 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Clinic: {DOCTOR_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
