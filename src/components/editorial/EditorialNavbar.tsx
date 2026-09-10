import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { DOCTOR_INFO } from '../../data/doctorData';

interface EditorialNavbarProps {
  onOpenAppointment: () => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    { name: 'Expertise', href: '#expertise' },
    { name: 'Diabetes Care', href: '#diabetes' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Clinic & Hours', href: '#clinic' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="editorial-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#0B0F0E]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2.5 sm:gap-4 w-full">
          
          {/* Brand Identity */}
          <a href="#" className="group flex items-center gap-2 sm:gap-3 min-w-0 flex-1 sm:flex-initial" id="editorial-nav-brand">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold text-xs sm:text-sm tracking-wider group-hover:border-emerald-400 transition-colors shrink-0">
              SM
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="font-['Outfit',sans-serif] font-bold text-white tracking-tight text-sm sm:text-base xl:text-lg truncate">
                  {DOCTOR_INFO.name}
                </span>
                <span className="hidden xl:inline text-[11px] text-emerald-300/80 font-bengali whitespace-nowrap">
                  {DOCTOR_INFO.bengaliName}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] xl:text-xs text-slate-300 font-medium tracking-wide truncate">
                <span className="sm:hidden">Medicine & Diabetology · Haltu</span>
                <span className="hidden sm:inline whitespace-nowrap">{DOCTOR_INFO.specialization} · {DOCTOR_INFO.clinic}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0 flex-nowrap" id="editorial-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap px-2.5 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-wide shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0 flex-nowrap">
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 xl:px-3.5 py-2 rounded-full text-xs font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap">{DOCTOR_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-3.5 xl:px-4 py-2 rounded-full text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all active:scale-98 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span className="whitespace-nowrap">Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Buttons (Guaranteed shrink-0, perfectly aligned with right margin) */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0 ml-auto">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-sm transition-all active:scale-95 shrink-0 whitespace-nowrap"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15 focus:outline-none shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F0E]/98 border-b border-white/10 px-4 pt-3 pb-6 mt-2 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="space-y-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-emerald-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <a
              href={`tel:${DOCTOR_INFO.phoneRaw}`}
              className="w-full py-3 px-4 rounded-xl bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Clinic: {DOCTOR_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
