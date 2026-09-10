import React from 'react';
import { Activity, HeartPulse, ZapOff, Thermometer, ArrowRight, Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { CORE_HEALTH_SOLUTIONS, DOCTOR_INFO } from '../data/doctorData';

interface HealthSolutionsProps {
  onOpenAppointment: () => void;
}

const iconsMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-7 h-7 text-[#004C3F]" />,
  HeartPulse: <HeartPulse className="w-7 h-7 text-[#004C3F]" />,
  ZapOff: <ZapOff className="w-7 h-7 text-[#004C3F]" />,
  Thermometer: <Thermometer className="w-7 h-7 text-[#004C3F]" />
};

export const HealthSolutions: React.FC<HealthSolutionsProps> = ({ onOpenAppointment }) => {
  return (
    <section id="solutions" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Pattern directly adapted from MS Haque Clinics) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider font-extrabold text-[#004C3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Specialized Adult Medical Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            We Provide Reliable Solutions For Your Health Problems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Chronic and acute health symptoms require attentive diagnostic evaluation, clear lifestyle advice, and evidence-based medical treatment.
          </p>
        </div>

        {/* 4 Core Health Problem / Condition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CORE_HEALTH_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-emerald-300"
            >
              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-[#004C3F] group-hover:border-[#004C3F] transition-colors shadow-2xs">
                    <span className="group-hover:text-white transition-colors">
                      {iconsMap[item.iconName] || <Activity className="w-7 h-7 text-[#004C3F]" />}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Bengali Translation */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#004C3F] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-700 font-bengali block mt-0.5">
                    ({item.bengaliTitle})
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-500 mb-4">
                  {item.subtitle}
                </p>

                {/* Symptom & Cause Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Clinical Remedy / Focus */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Clinical Focus:</strong> {item.remedy}</span>
                </div>
              </div>

              {/* Action Button: Book an Appointment */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#004C3F] hover:text-emerald-700 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
                >
                  <Phone className="w-3 h-3 text-emerald-600" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* High-Converting Mid-Section Banner (Kolkata's Most Trusted Medicine Clinic) */}
        <div className="mt-12 bg-gradient-to-r from-[#004C3F] to-[#013830] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-300">
              Personalized Consultations in South Kolkata
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 mb-2 tracking-tight">
              Kolkata's Trusted Medicine & Diabetes Clinic
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Dr. Souvonik Mandal offers structured medical evaluations for blood sugar regulation, cardiovascular health, and general vitality at Arnay Medical.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call {DOCTOR_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
