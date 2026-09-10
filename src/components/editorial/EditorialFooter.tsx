import React from 'react';
import { Phone, MapPin, Calendar, MessageSquare, ArrowUp, Heart } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';

interface EditorialFooterProps {
  onOpenAppointment: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({ onOpenAppointment }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A09] text-white border-t border-white/10 pt-16 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold">
                SM
              </div>
              <div>
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-white">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {DOCTOR_INFO.specialization}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Providing dedicated general internal medicine and structured diabetes management in South Kolkata. Committed to evidence-based healing, unhurried patient listening, and long-term health vitality.
            </p>

            <p className="text-xs text-slate-500 font-bengali">
              ডাঃ সৌভনিক মন্ডল — মেডিসিন স্পেশালিস্ট অ্যান্ড ডায়াবেটোলজিস্ট, হালতু, সাউথ কলকাতা
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">About Dr. Mandal</a></li>
              <li><a href="#expertise" className="hover:text-emerald-300 transition-colors">Clinical Areas & Care</a></li>
              <li><a href="#diabetes" className="hover:text-emerald-300 transition-colors">Diabetes Care Focus</a></li>
              <li><a href="#reviews" className="hover:text-emerald-300 transition-colors">Patient Reviews</a></li>
              <li><a href="#clinic" className="hover:text-emerald-300 transition-colors">Arnay Medical Location</a></li>
              <li><a href="#faq" className="hover:text-emerald-300 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Practice Location & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
              Chamber & Contact
            </h4>
            
            <div className="space-y-2 text-sm text-slate-400">
              <p className="text-white font-medium">Arnay Medical</p>
              <p className="text-xs text-slate-400">
                351, Kalitala Rd, North Purbachal, Haltu, Kolkata, West Bengal 700078
              </p>
              <p className="text-xs text-slate-400">
                Telephone: <a href={`tel:${DOCTOR_INFO.phoneRaw}`} className="text-emerald-400 hover:underline">{DOCTOR_INFO.phone}</a>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all cursor-pointer"
              >
                Schedule Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Disclaimer & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Dr. Souvonik Mandal. All rights reserved. Arnay Medical, South Kolkata.
          </p>

          <p className="text-[11px] text-slate-500 text-center sm:text-right max-w-md">
            Medical disclaimer: Information on this website is for informational purposes and does not substitute direct professional medical advice or emergency care.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
