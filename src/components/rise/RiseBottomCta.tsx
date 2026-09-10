import React from 'react';
import { Phone, MessageSquare, Calendar, MapPin, ArrowUpRight, Clock, Star } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';
import { RiseTextReveal } from './RiseTextReveal';

interface RiseBottomCtaProps {
  onOpenAppointment: () => void;
}

export const RiseBottomCta: React.FC<RiseBottomCtaProps> = ({ onOpenAppointment }) => {
  return (
    <section className="w-full pb-16 sm:pb-24 xl:pb-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Full-Width Bold Action Card */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#111212] via-[#0d2822] to-[#004C3F] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Ambient Corner Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
            
            {/* Left Headline & Content */}
            <div className="col-span-12 lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-mono tracking-wider uppercase border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Now Accepting Appointment Enquiries</span>
              </div>

              <RiseTextReveal
                as="h2"
                text="This is your moment to take control of your health."
                className="text-3xl sm:text-5xl lg:text-6xl font-bold sm:font-extrabold tracking-tight text-white leading-[1.06]"
                delay={0.1}
                stagger={0.03}
                highlightWords={['control', 'health.']}
                highlightClassName="text-emerald-300"
              />

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Whether you need precise diabetes management, blood pressure stabilization, or a second opinion on chronic symptoms, Dr. Souvonik Mandal is here to guide you with unhurried clinical care.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white text-[#111212] hover:bg-emerald-400 hover:text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-800" />
                  <span>Book an Appointment</span>
                  <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 active:scale-98 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-xs transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>Call: {DOCTOR_INFO.phone}</span>
                </a>

                <a
                  href={DOCTOR_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 font-bold text-xs sm:text-sm border border-emerald-400/30 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp Fast-Track</span>
                </a>
              </div>
            </div>

            {/* Right Side: Chamber Quick Info Card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-6 sm:p-7 space-y-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-bold text-base text-white">Chamber Information</span>
                  <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    Arnay Medical
                  </span>
                </div>

                <div className="space-y-3 text-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">351, Kalitala Rd, North Purbachal, Haltu</p>
                      <p className="text-slate-400 text-xs mt-0.5">Kolkata, West Bengal 700078 · South Kolkata</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Visiting Arrangements</p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Please contact the clinic to confirm appointments and current visiting schedules.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">4.9 ★ Rated by 80+ Patients</p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        Recognized for attentive listening and compassionate care.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={DOCTOR_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
