import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar, ShieldCheck, Building2 } from 'lucide-react';
import { DOCTOR_INFO, GALLERY_IMAGES } from '../../data/doctorData';
import { SafeImage } from '../SafeImage';

interface EditorialClinicSectionProps {
  onOpenAppointment: () => void;
}

export const EditorialClinicSection: React.FC<EditorialClinicSectionProps> = ({ onOpenAppointment }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="clinic" className="py-20 sm:py-28 bg-[#F9FAF8] text-[#121715] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-800">
              // Practice Location & Facility
            </p>
            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
              Arnay Medical, Haltu, South Kolkata
            </h2>
          </div>

          <a
            href={DOCTOR_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-xs font-bold text-slate-800 transition-all shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Clinic Details + Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Details Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-['Outfit',sans-serif] font-bold text-slate-900 text-sm">Chamber Address</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {DOCTOR_INFO.address.line1}, {DOCTOR_INFO.address.line2}, {DOCTOR_INFO.address.area}, {DOCTOR_INFO.address.city} - {DOCTOR_INFO.address.pincode}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    Plus Code: {DOCTOR_INFO.address.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                <Clock className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-['Outfit',sans-serif] font-bold text-slate-900 text-sm">Visiting Arrangements</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Evening consultations available. Please call Arnay Medical to confirm doctor visiting timings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                <Phone className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-['Outfit',sans-serif] font-bold text-slate-900 text-sm">Direct Phone</h4>
                  <a href={`tel:${DOCTOR_INFO.phoneRaw}`} className="text-xs font-bold text-emerald-800 hover:underline mt-1 block">
                    {DOCTOR_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="w-full py-3 rounded-xl bg-slate-950 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Photos Bento Showcase */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GALLERY_IMAGES.slice(1, 5).map((img) => (
              <div
                key={img.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-xs h-56 sm:h-64 cursor-pointer"
              >
                <SafeImage
                  src={img.src}
                  fallbackSrc={img.fallbackSrc}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end p-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                      {img.label}
                    </span>
                    <p className="text-xs text-white font-medium mt-1">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
