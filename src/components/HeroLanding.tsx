import React, { useState } from 'react';
import { Phone, Calendar, Star, ShieldCheck, CheckCircle2, MessageSquare, Clock, MapPin, User, Stethoscope } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { SafeImage } from './SafeImage';

interface HeroLandingProps {
  onOpenAppointment: () => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({ onOpenAppointment }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: 'Diabetes Care & Blood Sugar',
    preferredTime: 'Evening (5:00 PM - 7:00 PM)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const sendDirectWhatsApp = () => {
    const text = `Hello Dr. Souvonik Mandal / Arnay Medical Clinic,\n\nI would like to book a consultation.\nName: ${formData.name || 'Patient'}\nPhone: ${formData.phone || 'N/A'}\nConcern: ${formData.concern}\nPreferred Timing: ${formData.preferredTime}`;
    window.open(`https://wa.me/919433827531?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="hero-landing" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 bg-gradient-to-b from-[#003830]/90 via-[#004C3F] to-[#01352c] text-white overflow-hidden">
      
      {/* Background Decorative Lighting & Medical Lattice Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill / Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">Kolkata's Trusted Medicine Specialist</span>
            <span className="text-emerald-300/60 hidden sm:inline">•</span>
            <span className="text-emerald-200 hidden sm:inline">Diabetologist · Arnay Medical</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-emerald-100/90 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            <span>351, Kalitala Rd, Haltu, South Kolkata</span>
          </div>
        </div>

        {/* Hero Main Grid (Doctor Portrait & Intro on Left, Instant Booking Form on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines, Doctor Photo & Credibility */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 mb-2">
              Reclaim Your Health & Vitality
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              <span className="text-[#aad4cd]">Kolkata's Trusted</span> <br />
              Medicine Specialist Doctor
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl mb-6">
              Are you suffering from fluctuating blood sugar levels, chronic fatigue, uncontrolled hypertension, or persistent health concerns? Consult <strong>Dr. Souvonik Mandal</strong> at Arnay Medical for attentive, evidence-based adult medical care.
            </p>

            {/* Doctor Photo Card with Badges (Using the User-Provided Exact Image URL) */}
            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 shadow-xl mb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                
                {/* Profile Photo (Requested URL: https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA) */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-emerald-300/40 shadow-lg bg-slate-800">
                    <SafeImage
                      src="/images/profile_mandal.png"
                      fallbackSrc="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAKdDOhDK57iqY9McQAbeYcfxkzhccVRLEqkquVTtKAPtoqJaShlCRi0l4EVmLP4DsQDDxBU_0X2yO6OoCkJ7StwkVibN9lhKVUuORO0--yr3a72O1p4s87YcV7oXAcBM9SLlAhA"
                      alt="Dr. Souvonik Mandal - Medicine Specialist & Diabetologist in South Kolkata"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 p-1.5 rounded-lg shadow-md">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                </div>

                {/* Doctor Bio Lockup */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {DOCTOR_INFO.name}
                    </h2>
                    <span className="text-xs text-emerald-200 font-bengali font-semibold">
                      {DOCTOR_INFO.bengaliName}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-emerald-300 mb-1">
                    {DOCTOR_INFO.specialization}
                  </p>
                  
                  <p className="text-xs text-emerald-100/80 mb-3">
                    Arnay Medical · 351 Kalitala Rd, Haltu, South Kolkata 700078
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/15 text-white font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>4.9 / 5.0 Rating</span>
                    </div>
                    <span className="text-emerald-300/80">•</span>
                    <span className="text-emerald-100 font-medium">80+ Google Reviews</span>
                    <span className="text-emerald-300/80">•</span>
                    <span className="text-emerald-200 font-medium">Attentive Listening</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Trust Pills Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                <span className="block text-base sm:text-lg font-bold text-emerald-300">4.9 ★</span>
                <span className="text-[11px] text-emerald-100">Top Rating</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                <span className="block text-base sm:text-lg font-bold text-emerald-300">80+</span>
                <span className="text-[11px] text-emerald-100">Google Reviews</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                <span className="block text-base sm:text-lg font-bold text-emerald-300">Adult</span>
                <span className="text-[11px] text-emerald-100">Medicine Care</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                <span className="block text-base sm:text-lg font-bold text-emerald-300">Haltu</span>
                <span className="text-[11px] text-emerald-100">South Kolkata</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting "BOOK AN APPOINTMENT" Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-400/30 relative">
              
              {/* Form Title Banner */}
              <div className="border-b border-slate-100 pb-4 mb-5">
                <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#004C3F] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  Arnay Medical · Direct Enquiry
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1.5">
                  BOOK AN APPOINTMENT
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Schedule your consultation with Dr. Souvonik Mandal
                </p>
              </div>

              {submitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Enquiry Logged Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. The clinic staff at Arnay Medical will review current slots and call you at <strong>{formData.phone}</strong> to confirm your consultation.
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left space-y-1">
                    <p><strong>Consultation:</strong> {formData.concern}</p>
                    <p><strong>Preferred Timing:</strong> {formData.preferredTime}</p>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={sendDirectWhatsApp}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Fast-Track via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Patient Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#004C3F] focus:border-[#004C3F] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 094338 27531 or mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#004C3F] focus:border-[#004C3F] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Health Concern / Specialty */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Health Concern
                    </label>
                    <select
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#004C3F] focus:outline-none bg-white"
                    >
                      <option value="Diabetes Care & Blood Sugar">Diabetes Care & Blood Sugar (ডায়াবেটিস)</option>
                      <option value="Hypertension & High BP">Hypertension & Blood Pressure (উচ্চ রক্তচাপ)</option>
                      <option value="Chronic Fatigue & Thyroid">Chronic Fatigue & Thyroid (ক্লান্তি ও থাইরয়েড)</option>
                      <option value="Fever, Infection & Internal Medicine">Fever, Infection & Adult Medicine (জ্বর ও সংক্রমণ)</option>
                      <option value="Routine Health Checkup Review">Routine Health Checkup Review (হেলথ চেকআপ)</option>
                    </select>
                  </div>

                  {/* Preferred Timing */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Consultation Timing
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#004C3F] focus:outline-none bg-white"
                      >
                        <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                        <option value="Evening (7:00 PM - 9:00 PM)">Evening (7:00 PM - 9:00 PM)</option>
                        <option value="Flexible / First Available">Flexible / First Available</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-2">
                    <button
                      id="hero-form-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm sm:text-base text-white bg-[#004C3F] hover:bg-[#003830] active:scale-98 transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-emerald-300" />
                      <span>{loading ? 'Submitting Enquiry...' : 'BOOK AN APPOINTMENT'}</span>
                    </button>
                  </div>

                  {/* Fast Call Alternative */}
                  <div className="pt-2 text-center border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Prefer calling directly?</span>
                    <a
                      href={`tel:${DOCTOR_INFO.phoneRaw}`}
                      className="font-bold text-[#004C3F] hover:text-teal-800 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-teal-600" />
                      <span>{DOCTOR_INFO.phone}</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
