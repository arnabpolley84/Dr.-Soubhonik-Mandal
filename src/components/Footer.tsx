import React from 'react';
import { Phone, MapPin, Star, AlertCircle, Heart } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer id="contact" className="bg-[#0A192F] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Doctor Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center border border-teal-500/30">
                SM
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {DOCTOR_INFO.name}
                </h3>
                <p className="text-xs text-teal-400 font-medium">
                  {DOCTOR_INFO.specialization}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-bengali">
              {DOCTOR_INFO.bengaliSpecialization}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing thoughtful adult medical consultations and ongoing diabetes management in South Kolkata with an emphasis on attentive listening and clear communication.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5</span>
              <span>(80 Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Dr. Mandal</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">Specialties</a>
              </li>
              <li>
                <a href="#diabetes" className="hover:text-white transition-colors">Diabetes Care</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">Arnay Medical Clinic</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinic Details & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
              Clinic Location
            </h4>
            <div className="text-sm text-slate-400 space-y-1">
              <p className="font-semibold text-white">{DOCTOR_INFO.clinic}</p>
              <p>{DOCTOR_INFO.address.line1}</p>
              <p>{DOCTOR_INFO.address.line2}</p>
              <p>{DOCTOR_INFO.address.city}, {DOCTOR_INFO.address.state} {DOCTOR_INFO.address.pincode}</p>
              <p className="text-xs text-teal-400 font-mono pt-1">
                Plus Code: {DOCTOR_INFO.address.plusCode}
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-500">Contact Number</p>
              <a
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="text-base font-bold text-white hover:text-teal-400 transition-colors flex items-center gap-2 mt-0.5"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>{DOCTOR_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                Request Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-300 block mb-1">Medical Disclaimer:</span>
            <p className="leading-relaxed">
              “This website is for general informational and appointment-enquiry purposes only. It does not replace professional medical diagnosis, treatment or emergency medical care.”
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Policy Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <p>
            © {new Date().getFullYear()} Dr. Souvonik Mandal · Arnay Medical, South Kolkata. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-default">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-default">Terms of Consultation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
