import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface MobileActionBarProps {
  onOpenAppointment: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenAppointment }) => {
  return (
    <div
      id="mobile-action-bar"
      className="fixed sm:hidden bottom-0 left-0 right-0 z-40 bg-[#0A0E0C]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-2xl safe-area-bottom"
    >
      <div className="flex items-center justify-between gap-2">
        {/* Call Button */}
        <a
          id="mobile-bar-call"
          href={`tel:${DOCTOR_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-white/10 active:bg-white/20 text-white font-bold text-xs border border-white/15 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-bar-whatsapp"
          href={DOCTOR_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-white/5 active:bg-white/10 text-emerald-300 font-bold text-xs border border-emerald-500/30 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Appointment CTA */}
        <button
          id="mobile-bar-appointment"
          type="button"
          onClick={onOpenAppointment}
          className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-full bg-emerald-500 active:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-slate-950" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
