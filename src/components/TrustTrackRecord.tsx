import React from 'react';
import { Award, ShieldCheck, Heart, Stethoscope, Star, CheckCircle, Phone, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SafeImage } from './SafeImage';

interface TrustTrackRecordProps {
  onOpenAppointment: () => void;
}

export const TrustTrackRecord: React.FC<TrustTrackRecordProps> = ({ onOpenAppointment }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Counter Stat Banner (Adapted from Reference Site) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-extrabold text-[#004C3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Trusted Clinical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Over <span className="text-[#004C3F]">80+ 5-Star Reviews</span> Have Brought Peace of Mind to Patients
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Dedicated Medical Practice & Attentive Care Without Disappointment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Doctor Profile Photo (Using exact requested URL) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-100 shadow-2xl bg-slate-900">
              <SafeImage
                src="/images/profile_mandal.png"
                fallbackSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA"
                alt="Dr. Souvonik Mandal - Chief Medicine Specialist & Diabetologist"
                className="w-full h-96 sm:h-[460px] object-cover object-top"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              {/* Identity Overlay Box */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-extrabold mb-1">
                  <span>Medicine Specialist & Diabetologist</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs text-emerald-200 font-bengali">
                  {DOCTOR_INFO.bengaliSpecialization}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Consulting at {DOCTOR_INFO.clinic}, Haltu, South Kolkata
                </p>
              </div>
            </div>

            {/* Floating Reputation Pill */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">4.9 / 5.0 Google Rating</p>
                <p className="text-[11px] text-slate-500">80+ Verified Patient Reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#004C3F]">
                About The Physician
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 mb-3">
                Compassionate Medical Care Rooted in Science & Patient Listening
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Health, vitality, and peace of mind — three fundamental desires of every human being that deserve thoughtful medical attention. Dr. Souvonik Mandal believes effective treatment begins with listening attentively to the patient, thoroughly evaluating past reports, and clearly explaining the road to recovery.
              </p>
            </div>

            {/* Core Values & Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Evidence-Based Medicine</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Adherence to clinical diagnostic guidelines and scientific pharmacology for adult medicine.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-sm">
                  <Heart className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unhurried Consultation</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated time to ask questions, review past medical reports, and understand daily lifestyle routines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-sm">
                  <Stethoscope className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Diabetology & Metabolic Care</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Targeted glycemic control, dietary modifications, and preventive organ health safeguarding.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1 text-slate-900 font-bold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent Explanations</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complex medical terms broken down simply in Bengali or English for patient understanding.
                </p>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#004C3F] hover:bg-[#003830] text-white font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book a Consultation</span>
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all flex items-center justify-center gap-2 border border-slate-200"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Clinic ({DOCTOR_INFO.phone})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
