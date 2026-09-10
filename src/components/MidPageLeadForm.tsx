import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface MidPageLeadFormProps {
  onOpenAppointment: () => void;
}

export const MidPageLeadForm: React.FC<MidPageLeadFormProps> = ({ onOpenAppointment }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consultType, setConsultType] = useState('Clinic Consultation at Arnay Medical');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleWhatsApp = () => {
    const text = `Hello Dr. Souvonik Mandal / Arnay Medical Clinic,\n\nI want to book a consultation.\nName: ${name || 'Patient'}\nPhone: ${phone || 'N/A'}\nMode: ${consultType}`;
    window.open(`https://wa.me/919433827531?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-14 bg-gradient-to-r from-[#003d33] to-[#004C3F] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Arnay Medical · Priority Scheduling
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-2 mb-2">
            Book a Consultation With Dr. Souvonik Mandal
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl mx-auto">
            Leave your details and clinic staff will get back to you promptly to arrange your visit.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border-2 border-emerald-400/30 max-w-3xl mx-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Thank You, {name || 'Patient'}!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your consultation request has been received. Our clinic team will call you at <strong>{phone}</strong> to confirm your slot.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Book another slot
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#004C3F] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#004C3F] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Consultation Mode
                </label>
                <select
                  value={consultType}
                  onChange={(e) => setConsultType(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#004C3F] focus:outline-none bg-white text-xs font-medium"
                >
                  <option value="Clinic Consultation at Arnay Medical">Clinic Visit at Arnay Medical</option>
                  <option value="Diabetes Care Consultation">Diabetes Care Consultation</option>
                  <option value="Phone Enquiry & Slot Confirmation">Phone Enquiry</option>
                </select>
              </div>

              <div className="sm:col-span-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#004C3F] hover:bg-[#003830] text-white font-extrabold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>{submitting ? 'Booking...' : 'Book a Consultation'}</span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
            <span>Direct Call: <strong>094338 27531</strong></span>
            <span>Clinic: <strong>Arnay Medical, Haltu, Kolkata 700078</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
