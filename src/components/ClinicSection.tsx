import React from 'react';
import { MapPin, Phone, Calendar, Navigation, Clock, Info, ExternalLink, MessageSquare } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SafeImage } from './SafeImage';

interface ClinicSectionProps {
  onOpenAppointment: () => void;
}

export const ClinicSection: React.FC<ClinicSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="clinic" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-semibold mb-3 border border-teal-200">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Clinic & Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Visit the Clinic
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Dr. Souvonik Mandal consults at Arnay Medical in Haltu, South Kolkata. Conveniently accessible for local residents and surrounding neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Image and Environment */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <SafeImage
                src="/images/img10.jpg"
                fallbackSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlIfgS48rKWGqgaFTjUTZyB-zEeqbfvyfaiHSIT9wP13zxemjbERtlr_aKJ2x99rjWt8q8EybK9tZcyBUN2DL4ohRgg9rztlDTYumuDxX1bqf58SC6iCBWR30LnhswriUwVJsWH"
                alt="Arnay Medical clinic exterior in Haltu, South Kolkata"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm border border-slate-200">
                Arnay Medical · Haltu
              </div>
            </div>

            {/* Embedded Google Map Directions Viewer */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 h-64 relative">
              <iframe
                title="Arnay Medical Location Map"
                src="https://maps.google.com/maps?q=Arnay+Medical+351+Kalitala+Rd+North+Purbachal+Haltu+Kolkata+West+Bengal+700078&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                aria-label="Google Map showing Arnay Medical at Kalitala Rd, Haltu"
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href={DOCTOR_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-md border border-slate-200 hover:bg-slate-50"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-600" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Plus Code, Schedule Notes, and Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Address Card */}
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-teal-700">
                    Consultation Location
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {DOCTOR_INFO.clinic}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 border border-teal-200">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Exact Address */}
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 space-y-0.5">
                <p className="font-semibold text-slate-900">{DOCTOR_INFO.address.line1}</p>
                <p>{DOCTOR_INFO.address.line2}</p>
                <p>{DOCTOR_INFO.address.city}, {DOCTOR_INFO.address.state} {DOCTOR_INFO.address.pincode}</p>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <span className="font-semibold text-slate-700">Plus Code:</span>
                  <span>{DOCTOR_INFO.address.plusCode}</span>
                </div>
              </div>

              {/* Phone & Contact */}
              <div className="pt-4 border-t border-slate-200/80 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Direct Clinic Phone</p>
                    <a
                      href={`tel:${DOCTOR_INFO.phoneRaw}`}
                      className="text-lg font-bold text-[#0A2540] hover:text-teal-700 transition-colors"
                    >
                      {DOCTOR_INFO.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${DOCTOR_INFO.phoneRaw}`}
                    className="p-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200 transition-colors"
                    aria-label="Call clinic phone"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Verified Notice regarding Consultation Schedule */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1 mb-6">
                <div className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Visiting Hours & Schedule Notice</span>
                </div>
                <p className="text-amber-800 leading-relaxed">
                  Current Google listing indicates: <em>Closed · Opens 5 PM Friday</em>. Consultation days and hours may vary. <strong>Please call or send an enquiry to confirm doctor availability before visiting.</strong>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  id="clinic-get-directions-btn"
                  href={DOCTOR_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-2xs active:scale-98 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions to Clinic</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    id="clinic-book-btn"
                    type="button"
                    onClick={onOpenAppointment}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0A2540] hover:bg-[#13385e] text-white font-semibold text-xs cursor-pointer active:scale-98 transition-all"
                  >
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>Book Slot</span>
                  </button>

                  <a
                    href={DOCTOR_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-xs active:scale-98 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
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
