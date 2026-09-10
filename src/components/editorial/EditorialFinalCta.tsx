import React from 'react';
import { Calendar, Phone, ArrowUpRight, MessageSquare, MapPin, Star, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';

interface EditorialFinalCtaProps {
  onOpenAppointment: () => void;
}

export const EditorialFinalCta: React.FC<EditorialFinalCtaProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0E0C] text-white overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-mono tracking-wider uppercase border border-white/15">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Now Scheduling Consultations</span>
          </div>

          <h2 className="font-['Outfit',sans-serif] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] text-balance">
            Ready to take the next step in your health?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-light text-balance">
            Whether you are managing diabetes, stabilizing blood pressure, or seeking an attentive evaluation for unresolved symptoms, Dr. Souvonik Mandal is here to guide your recovery.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-2xl transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book an Appointment</span>
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all active:scale-98"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {DOCTOR_INFO.phone}</span>
            </a>

            <a
              href={DOCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 text-sm font-semibold border border-emerald-500/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center sm:justify-start gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Arnay Medical · Haltu, Kolkata 700078</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 / 5.0 (80+ Reviews)</span>
            </span>
            <span>•</span>
            <span>WBMC Registered Physician</span>
          </div>

        </div>
      </div>
    </section>
  );
};
