import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, User, FileText, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: 'General Medicine Consultation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate frontend submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      reason: 'General Medicine Consultation',
      message: ''
    });
    onClose();
  };

  const sendViaWhatsApp = () => {
    const text = `Hello, I would like to enquire about an appointment with Dr. Souvonik Mandal.\n\nName: ${formData.fullName || 'Patient'}\nPhone: ${formData.phone || 'N/A'}\nPreferred Date: ${formData.preferredDate || 'Flexible'}\nTime: ${formData.preferredTime || 'Flexible'}\nReason: ${formData.reason}`;
    const url = `https://wa.me/919433827531?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative my-auto">
        
        {/* Header */}
        <div className="bg-[#0A2540] text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-1">
            Arnay Medical · Haltu
          </span>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            Request an Appointment
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Consult Dr. Souvonik Mandal (Medicine Specialist & Diabetologist)
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto border-2 border-teal-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                Appointment Enquiry Received
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your appointment request has been logged. The clinic will review current timings and call you directly at <strong>{formData.phone}</strong> to confirm your slot.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1">
                <p><strong>Enquiry Summary:</strong></p>
                <p>Consultation: {formData.reason}</p>
                {formData.preferredDate && <p>Preferred Date: {formData.preferredDate}</p>}
                {formData.preferredTime && <p>Preferred Time: {formData.preferredTime}</p>}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={sendViaWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Fast-Track via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Note on confirmation */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <AlertCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Please note:</strong> Submitting this form sends an appointment enquiry. The clinic will confirm availability separately.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter patient full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 094338 27531 or Mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                    >
                      <option value="">Select time slot</option>
                      <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                      <option value="Evening (7:00 PM - 9:00 PM)">Evening (7:00 PM - 9:00 PM)</option>
                      <option value="Flexible / As Available">Flexible / As Available</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Reason for Consultation */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reason for Consultation
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                >
                  <option value="General Medicine Consultation">General Medicine Consultation</option>
                  <option value="Diabetes Care & Management">Diabetes Care & Management</option>
                  <option value="Routine Health Checkup Review">Routine Health Checkup Review</option>
                  <option value="Follow-up Consultation">Follow-up Consultation</option>
                  <option value="Other Adult Medical Concern">Other Adult Medical Concern</option>
                </select>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Message or Symptoms (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe symptoms or past reports you will bring..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="submit-appointment-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#0A2540] hover:bg-[#13385e] text-white font-bold text-sm shadow-md transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-teal-400" />
                  <span>{isSubmitting ? 'Submitting Enquiry...' : 'Request Appointment'}</span>
                </button>
              </div>

              {/* Direct WhatsApp Alternative */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={sendViaWhatsApp}
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Or connect directly via WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
