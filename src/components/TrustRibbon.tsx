import React from 'react';
import { Award, Star, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

export const TrustRibbon: React.FC = () => {
  const trustFeatures = [
    {
      icon: <Award className="w-6 h-6 text-emerald-700" />,
      title: "Evidence-Based Medicine",
      desc: "Modern clinical guidelines & scientific therapies for adult healthcare."
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
      title: "Top Rating (4.9 ★)",
      desc: "Consistently rated 5 stars across 80+ Google patient reviews."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-700" />,
      title: "Attentive Consultations",
      desc: "Unhurried consultation environment with time to listen and explain."
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-700" />,
      title: "Arnay Medical, Haltu",
      desc: "Centrally located at Kalitala Rd, North Purbachal, South Kolkata."
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                  {f.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
