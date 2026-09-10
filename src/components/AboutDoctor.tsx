import React from 'react';
import { Star, MapPin, CheckCircle, HeartHandshake, Phone, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SafeImage } from './SafeImage';

interface AboutDoctorProps {
  onOpenAppointment: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenAppointment }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Visual Presentation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Back Accent Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-[#0A2540]/10 rounded-3xl transform -rotate-2 scale-102 -z-10" />
              
              <div className="rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200/80">
                <SafeImage
                  src="/images/profile_mandal.png"
                  fallbackSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA"
                  alt="Dr. Souvonik Mandal - Medicine Specialist & Diabetologist"
                  className="w-full h-96 sm:h-[440px] object-cover object-top"
                />
              </div>

              {/* Trust Marker Badge Overlaid */}
              <div className="absolute -bottom-5 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-bold text-slate-900 text-xs ml-1">4.9 / 5</span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500">80 Google Reviews</p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    Arnay Medical
                  </span>
                  <p className="text-[11px] text-slate-500 mt-0.5">South Kolkata</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Profile */}
          <div className="lg:col-span-7 flex flex-col items-start pt-4 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3 border border-slate-200">
              <span>Physician Profile</span>
              <span className="text-slate-300">•</span>
              <span className="font-bengali text-teal-800">{DOCTOR_INFO.bengaliName}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-2">
              Meet Dr. Souvonik Mandal
            </h2>

            <p className="text-lg font-semibold text-teal-800 mb-6">
              Medicine Specialist & Diabetologist
            </p>

            {/* Restrained, Authentic Copy strictly based on provided prompt */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Dr. Souvonik Mandal provides medical consultation in South Kolkata, with a focus on general medicine and diabetes care. His patient reviews frequently highlight attentive listening, compassionate communication and a thoughtful approach to treatment.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-bengali">
                ডাঃ সৌভনিক মন্ডল দক্ষিণ কলকাতার হালতুতে অবস্থিত আর্নয় মেডিকেলে মেডিসিন ও ডায়াবেটিস সংক্রান্ত পরামর্শ প্রদান করেন। রোগীদের সুবিধার্থে তিনি প্রতিটি সমস্যা মন দিয়ে শোনেন এবং প্রয়োজনীয় দিকনির্দেশনা দেন।
              </p>
            </div>

            {/* Key Clinical Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <HeartHandshake className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Attentive Listening</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Time to articulate health concerns and symptoms thoroughly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-5 h-5 text-[#0A2540] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Clear Explanations</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Understandable health guidance without medical jargon.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#13385e] text-white font-semibold text-sm shadow-sm cursor-pointer active:scale-98"
              >
                Request Appointment
              </button>

              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm"
              >
                Call Clinic: {DOCTOR_INFO.phone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
