import React, { useState } from 'react';
import { Phone, Calendar, User, MessageSquare, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';

interface EditorialMidLeadFormProps {
  onOpenAppointment: () => void;
}

export const EditorialMidLeadForm: React.FC<EditorialMidLeadFormProps> = ({ onOpenAppointment }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: 'Diabetes Care & Blood Sugar',
    preferredTime: 'Evening (5:00 PM - 7:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  const sendWhatsApp = () => {
    const text = `Hello Dr. Souvonik Mandal / Arnay Medical Clinic,\n\nI would like to enquire about a consultation.\nPatient Name: ${formData.name || 'Patient'}\nContact Number: ${formData.phone || 'N/A'}\nHealth Concern: ${formData.concern}\nPreferred Timing: ${formData.preferredTime}\nNotes: ${formData.notes || 'None'}`;
    window.open(`https://wa.me/919433827531?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="consultation-form" className="py-20 sm:py-28 bg-[#0B100E] text-white relative overflow-hidden">
      {/* Soft atmospheric gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-mono tracking-wider uppercase border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Clinic Scheduling</span>
            </div>

            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Schedule your consultation with Dr. Mandal.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Submit your consultation request online. The Arnay Medical clinic desk will review current visiting arrangements and get in touch with you promptly.
            </p>

            <div className="pt-4 space-y-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Chamber Hours: Evenings</p>
                  <p className="text-xs text-slate-400">Please confirm appointment prior to visit</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Direct Clinic Assistance</p>
                  <a href={`tel:${DOCTOR_INFO.phoneRaw}`} className="text-xs text-emerald-300 hover:underline">
                    {DOCTOR_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Enquiry Card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-['Outfit',sans-serif] text-2xl font-bold text-slate-900">
                    Enquiry Received
                  </h3>

                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Arnay Medical will contact you at <strong>{formData.phone}</strong> to confirm your slot.
                  </p>

                  <div className="pt-4 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={sendWhatsApp}
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirm Faster via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-900 underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                      Consultation Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Arnay Medical · 351, Kalitala Rd, Haltu
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Patient Full Name <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Ghosh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Contact Phone Number <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 094338 27531 or 98300xxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Health Concern
                      </label>
                      <select
                        value={formData.concern}
                        onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 focus:outline-none bg-white"
                      >
                        <option value="Diabetes Care & Blood Sugar">Diabetes & Blood Sugar</option>
                        <option value="Hypertension & High BP">Hypertension & BP</option>
                        <option value="Thyroid & Chronic Fatigue">Thyroid & Fatigue</option>
                        <option value="Fever & General Illness">Fever & General Medicine</option>
                        <option value="Routine Health Evaluation">Routine Health Check</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Timing
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 focus:outline-none bg-white"
                      >
                        <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 - 7:00 PM)</option>
                        <option value="Late Evening (7:00 PM - 8:30 PM)">Late Evening (7:00 - 8:30 PM)</option>
                        <option value="Flexible / As Available">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>{loading ? 'Submitting Request...' : 'Submit Consultation Request'}</span>
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your medical inquiry is treated with strict confidentiality.</span>
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
