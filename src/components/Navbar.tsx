import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MessageSquare, MapPin } from 'lucide-react';
import { DOCTOR_INFO } from '../data/doctorData';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Diabetes Care', href: '#diabetes' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Clinic', href: '#clinic' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-2.5 sm:py-3 border-b border-slate-200/80'
            : 'bg-white/90 backdrop-blur-xs py-2.5 sm:py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 w-full">
            {/* Brand Logo & Specialty */}
            <a href="#" className="group flex items-center gap-2 sm:gap-3 min-w-0 flex-1 sm:flex-initial" id="nav-brand-logo">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#004C3F] to-[#0F766E] flex items-center justify-center text-white font-bold text-sm sm:text-base xl:text-lg shadow-xs group-hover:scale-105 transition-transform shrink-0">
                SM
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base xl:text-lg truncate whitespace-nowrap">
                    {DOCTOR_INFO.name}
                  </span>
                  <span className="hidden xl:inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 font-bengali whitespace-nowrap shrink-0">
                    ডাঃ সৌভনিক মন্ডল
                  </span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-emerald-800 flex items-center gap-1 sm:gap-1.5 truncate">
                  <span className="truncate">{DOCTOR_INFO.specialization}</span>
                  <span className="hidden xs:inline-block w-1 h-1 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="hidden xs:inline text-slate-500 shrink-0">{DOCTOR_INFO.location}</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0" id="desktop-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-slate-600 hover:text-[#004C3F] hover:bg-emerald-50/60 rounded-lg transition-colors whitespace-nowrap inline-flex items-center"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons - Styled like MS Haque Clinics with Make a Call */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
              <div className="hidden md:flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200 text-xs text-slate-800 whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 text-[#004C3F] shrink-0" />
                <span className="font-bold text-[#004C3F] tracking-wide whitespace-nowrap">{DOCTOR_INFO.phone}</span>
              </div>

              <a
                id="navbar-make-call-btn"
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="px-3 xl:px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-full shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <Phone className="w-3 h-3 shrink-0" />
                <span className="whitespace-nowrap">Make a Call</span>
              </a>

              <button
                id="navbar-book-btn"
                type="button"
                onClick={onOpenAppointment}
                className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-white bg-[#004C3F] hover:bg-[#003830] active:scale-98 rounded-xl shadow-xs transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span className="whitespace-nowrap">Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex sm:hidden items-center gap-1.5 shrink-0 ml-auto">
              <a
                id="mobile-call-quick"
                href={`tel:${DOCTOR_INFO.phoneRaw}`}
                className="p-2 rounded-xl bg-emerald-50 text-[#004C3F] border border-emerald-200 active:bg-emerald-100 flex items-center justify-center shrink-0"
                aria-label="Call clinic"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                id="mobile-menu-trigger"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:outline-none flex items-center justify-center border border-slate-200 shrink-0"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200 shadow-xl"
          >
            <div className="pb-2 border-b border-slate-100">
              <p className="text-xs text-slate-500 font-medium font-bengali">
                {DOCTOR_INFO.bengaliSpecialization}
              </p>
              <p className="text-xs text-emerald-800 font-medium flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-emerald-600" />
                Arnay Medical · Haltu, South Kolkata
              </p>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-drawer-book-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-white bg-[#004C3F] hover:bg-[#003830] rounded-xl shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${DOCTOR_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Call Clinic</span>
                </a>
                <a
                  href={DOCTOR_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer for fixed navbar */}
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </>
  );
};
