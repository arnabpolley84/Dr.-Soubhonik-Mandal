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
      className="fixed sm:hidden bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-lg safe-area-bottom"
    >
      <div className="flex items-center justify-between gap-2">
        {/* Call Button - Make a Call */}
        <a
          id="mobile-bar-call"
          href={`tel:${DOCTOR_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Make a Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-bar-whatsapp"
          href={DOCTOR_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-900 font-bold text-xs border border-emerald-300 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Appointment CTA */}
        <button
          id="mobile-bar-appointment"
          type="button"
          onClick={onOpenAppointment}
          className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-[#004C3F] active:bg-[#003830] text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-emerald-300" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
