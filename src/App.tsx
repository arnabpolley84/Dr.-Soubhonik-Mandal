import React, { useState } from 'react';
import { EditorialNavbar } from './components/editorial/EditorialNavbar';
import { EditorialHero } from './components/editorial/EditorialHero';
import { EditorialTrustTransition } from './components/editorial/EditorialTrustTransition';
import { EditorialAbout } from './components/editorial/EditorialAbout';
import { EditorialServices } from './components/editorial/EditorialServices';
import { EditorialDiabetesFocus } from './components/editorial/EditorialDiabetesFocus';
import { EditorialReviews } from './components/editorial/EditorialReviews';
import { EditorialConsultationJourney } from './components/editorial/EditorialConsultationJourney';
import { EditorialMidLeadForm } from './components/editorial/EditorialMidLeadForm';
import { EditorialClinicSection } from './components/editorial/EditorialClinicSection';
import { EditorialFaq } from './components/editorial/EditorialFaq';
import { EditorialFinalCta } from './components/editorial/EditorialFinalCta';
import { EditorialFooter } from './components/editorial/EditorialFooter';
import { AppointmentModal } from './components/AppointmentModal';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleOpenAppointment = () => {
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0A0E0C] text-slate-900 flex flex-col antialiased selection:bg-emerald-500/30 selection:text-white">
      {/* Floating / Sticky Transparent Editorial Header */}
      <EditorialNavbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Page Flow */}
      <main className="flex-1 pt-0">
        {/* Section 1: Cinematic Full-Width Edge-to-Edge Hero with Sophisticated Multi-Layer Gradient */}
        <EditorialHero onOpenAppointment={handleOpenAppointment} />

        {/* Section 2: Seamless Dark Trust Transition & Core Credentials */}
        <EditorialTrustTransition onOpenAppointment={handleOpenAppointment} />

        {/* Section 3: Asymmetric Editorial Physician Profile & Clinical Values */}
        <EditorialAbout onOpenAppointment={handleOpenAppointment} />

        {/* Section 4: Numbered Editorial Clinical Focus & Health Solutions */}
        <EditorialServices onOpenAppointment={handleOpenAppointment} />

        {/* Section 5: Dedicated Diabetology Care & 5-Step Metabolic Roadmap */}
        <EditorialDiabetesFocus onOpenAppointment={handleOpenAppointment} />

        {/* Section 6: Large Quotation Patient Testimonials & Google Score */}
        <EditorialReviews />

        {/* Section 7: 4-Step Patient Consultation Pathway */}
        <EditorialConsultationJourney onOpenAppointment={handleOpenAppointment} />

        {/* Section 8: Direct Clinic Scheduling & Consultation Enquiry Form */}
        <EditorialMidLeadForm onOpenAppointment={handleOpenAppointment} />

        {/* Section 9: Practice Location, Facility & Environment Photos */}
        <EditorialClinicSection onOpenAppointment={handleOpenAppointment} />

        {/* Section 10: Frequently Asked Questions Accordion */}
        <EditorialFaq onOpenAppointment={handleOpenAppointment} />

        {/* Section 11: Final Cinematic Consultation Call-to-Action Banner */}
        <EditorialFinalCta onOpenAppointment={handleOpenAppointment} />
      </main>

      {/* Editorial Healthcare Footer */}
      <EditorialFooter onOpenAppointment={handleOpenAppointment} />

      {/* Functional Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
      />

      {/* Mobile Sticky Bottom Action Bar with Direct Triggers */}
      <MobileActionBar onOpenAppointment={handleOpenAppointment} />
    </div>
  );
}


