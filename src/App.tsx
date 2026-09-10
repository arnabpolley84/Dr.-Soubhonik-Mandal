import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroLanding } from './components/HeroLanding';
import { TrustRibbon } from './components/TrustRibbon';
import { HealthSolutions } from './components/HealthSolutions';
import { TrustTrackRecord } from './components/TrustTrackRecord';
import { MidPageLeadForm } from './components/MidPageLeadForm';
import { Specialties } from './components/Specialties';
import { DiabetesFocus } from './components/DiabetesFocus';
import { ConsultationJourney } from './components/ConsultationJourney';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { ClinicSection } from './components/ClinicSection';
import { GalleryBento } from './components/GalleryBento';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F8FAFC] text-slate-900 flex flex-col antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Navigation Header with Direct Call & Appointment Buttons */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Page Content Flow - Modeled after the Reference Landing Page Pattern */}
      <main className="flex-1">
        {/* High-Converting Google Ads Style Hero with Inline Appointment Form & Doctor Photo */}
        <HeroLanding onOpenAppointment={handleOpenAppointment} />

        {/* 4 Trust & Credibility Badges Ribbon */}
        <TrustRibbon />

        {/* "We Provide Reliable Solutions For Your Health Problems" - 4 Condition Solution Cards */}
        <HealthSolutions onOpenAppointment={handleOpenAppointment} />

        {/* "Over 80+ 5-Star Reviews Have Brought Peace of Mind" - Trust Track Record & Doctor Bio */}
        <TrustTrackRecord onOpenAppointment={handleOpenAppointment} />

        {/* Mid-Page Fast Consultation Booking Form */}
        <MidPageLeadForm onOpenAppointment={handleOpenAppointment} />

        {/* Detailed Specialty Disciplines (General Medicine & Diabetology) */}
        <Specialties onOpenAppointment={handleOpenAppointment} />

        {/* Diabetes Care Framework */}
        <DiabetesFocus onOpenAppointment={handleOpenAppointment} />

        {/* 4-Step Consultation Journey */}
        <ConsultationJourney />

        {/* What Patients Say - 4.9 ★ Rating & Testimonials */}
        <ReviewsCarousel />

        {/* Visit Our Clinic - Arnay Medical, Haltu with Directions & Map */}
        <ClinicSection onOpenAppointment={handleOpenAppointment} />

        {/* Photo Gallery of Clinic Facility */}
        <GalleryBento />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenAppointment={handleOpenAppointment} />

        {/* "This Is Your Moment to Take Action!" - Final High-Impact CTA */}
        <FinalCta onOpenAppointment={handleOpenAppointment} />
      </main>

      {/* Comprehensive Medical Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
      />

      {/* Mobile Sticky Bottom Action Bar with Make a Call & Appointment */}
      <MobileActionBar onOpenAppointment={handleOpenAppointment} />
    </div>
  );
}
