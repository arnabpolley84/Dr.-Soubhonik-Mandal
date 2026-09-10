import React from 'react';
import { Calendar, Phone, MessageSquare, Star, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SafeImage } from './SafeImage';

interface FinalCtaProps {
  onOpenAppointment: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0A2540] rounded-3xl overflow-hidden shadow-2xl relative text-white">
          
          {/* Background Ambient Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <SafeImage
              src="/images/img10.jpg"
              fallbackSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlIfgS48rKWGqgaFTjUTZyB-zEeqbfvyfaiHSIT9wP13zxemjbERtlr_aKJ2x99rjWt8q8EybK9tZcyBUN2DL4ohRgg9rztlDTYumuDxX1bqf58SC6iCBWR30LnhswriUwVJsWH"
              alt="Arnay Medical background"
              className="w-full h-full object-cover filter blur-xs contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/95 to-[#0A2540]/80" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Arnay Medical · Haltu, South Kolkata</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Looking for Thoughtful Medical Care in South Kolkata?
              </h2>

              <p className="text-slate-200 text-base sm:text-lg mb-6 leading-relaxed">
                Connect with Dr. Souvonik Mandal for a professional medical consultation.
              </p>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-white">4.9 / 5</span>
                </div>
                <span>•</span>
                <span>80 Google Reviews</span>
                <span>•</span>
                <span>General Medicine & Diabetes</span>
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <button
                id="final-cta-book-btn"
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 active:scale-98 transition-all shadow-lg text-sm sm:text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>Book an Appointment</span>
              </button>

              <a
                id="final-cta-call-btn"
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 active:scale-98 transition-all text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Call {DOCTOR_INFO.phone}</span>
              </a>

              <a
                href={DOCTOR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-medium text-xs text-emerald-300 hover:text-emerald-200 hover:bg-emerald-950/40 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
