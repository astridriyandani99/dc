import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MessageSquare, Menu, X, ChevronDown, Shield, Award } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Header Information Bar */}
      <div className="bg-brand-dark text-slate-300 text-xs border-b border-slate-800/80 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${companyProfile.phoneRaw}`} 
              className="flex items-center space-x-2 text-slate-300 hover:text-brand-tealLight transition-colors font-medium"
              title="Klik untuk menelepon kantor"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal" />
              <span>Telepon Kantor: <strong className="text-white">{companyProfile.phone}</strong></span>
            </a>
            <div className="flex items-center space-x-2 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{companyProfile.operationalHours}</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>{companyProfile.email}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
              <Shield className="w-3 h-3 mr-1" />
              Kepatuhan Standar OJK & Mabes POLRI
            </span>
            <a 
              href="#rekening" 
              className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Rekening Resmi PT &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-3.5 border-b border-slate-700/50' 
          : 'bg-brand-navy py-4 border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-teal to-brand-tealDark flex items-center justify-center shadow-md shadow-teal-900/30 group-hover:scale-105 transition-transform duration-200">
              <span className="font-display font-extrabold text-white text-lg tracking-wider">DC</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg tracking-tight block leading-tight">
                PT DAYA CIPTA MANDIRI
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                Financial, Workforce & Legal Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#beranda" 
              className="text-sm font-medium text-slate-200 hover:text-brand-tealLight transition-colors"
            >
              Beranda
            </a>

            {/* Services Dropdown */}
            <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center space-x-1 text-sm font-medium text-slate-200 hover:text-brand-tealLight transition-colors py-2"
              >
                <span>Layanan Utama</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 bg-brand-navyLight border border-slate-700 rounded-xl shadow-2xl py-2 z-50 animate-fadeIn">
                  <a 
                    href="#pelatihan" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-4 py-3 hover:bg-brand-navy text-left group"
                  >
                    <div className="text-sm font-semibold text-white group-hover:text-brand-tealLight">
                      1. Pelatihan Lembaga Keuangan
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      SDM, Risiko, Kepatuhan OJK, Loan Scoring & KPI
                    </div>
                  </a>
                  <div className="h-px bg-slate-700/50 mx-3 my-1"></div>
                  <a 
                    href="#outsourcing" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-4 py-3 hover:bg-brand-navy text-left group"
                  >
                    <div className="text-sm font-semibold text-white group-hover:text-brand-tealLight">
                      2. Jasa Tenaga Kerja (Outsourcing)
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Security berlisensi, Cleaning Service, Driver Eksekutif
                    </div>
                  </a>
                  <div className="h-px bg-slate-700/50 mx-3 my-1"></div>
                  <a 
                    href="#hukum" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-4 py-3 hover:bg-brand-navy text-left group"
                  >
                    <div className="text-sm font-semibold text-white group-hover:text-brand-tealLight">
                      3. Jasa & Konsultasi Hukum
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Konsultasi Hukum, Mediasi Litigasi & Non-Litigasi
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#mengapa-kami" 
              className="text-sm font-medium text-slate-200 hover:text-brand-tealLight transition-colors"
            >
              Keunggulan
            </a>

            <a 
              href="#rekening" 
              className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1"
            >
              <span>No. Rekening Bank</span>
            </a>

            <a 
              href="#faq" 
              className="text-sm font-medium text-slate-200 hover:text-brand-tealLight transition-colors"
            >
              FAQ
            </a>

            <a 
              href="#kontak" 
              className="text-sm font-medium text-slate-200 hover:text-brand-tealLight transition-colors"
            >
              Kritik & Saran
            </a>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href={`tel:${companyProfile.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg border border-slate-600 bg-slate-800/80 text-white text-xs font-semibold hover:bg-slate-700 hover:border-slate-500 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-tealLight" />
              <span>Hubungi Kantor</span>
            </a>

            <a 
              href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20perusahaan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-900/40 hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Konsultasi Cepat</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href={`tel:${companyProfile.phoneRaw}`}
              className="p-2 rounded-lg bg-slate-800 text-brand-tealLight border border-slate-700"
              title="Telepon Kantor"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white bg-slate-800 border border-slate-700 focus:outline-none"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-dark/95 border-b border-slate-700 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <a 
              href="#beranda" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 border-b border-slate-800"
            >
              Beranda
            </a>
            <div className="py-2 border-b border-slate-800 space-y-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                3 Pilar Layanan Utama
              </span>
              <a 
                href="#pelatihan" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-sm text-slate-300 hover:text-brand-tealLight"
              >
                &bull; Pelatihan Lembaga Keuangan (SDM, Risk, KPI)
              </a>
              <a 
                href="#outsourcing" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-sm text-slate-300 hover:text-brand-tealLight"
              >
                &bull; Jasa Tenaga Kerja (Security, Cleaning, Driver)
              </a>
              <a 
                href="#hukum" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-sm text-slate-300 hover:text-brand-tealLight"
              >
                &bull; Jasa & Konsultasi Hukum (Litigasi & Non-Litigasi)
              </a>
            </div>
            <a 
              href="#mengapa-kami" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 border-b border-slate-800"
            >
              Keunggulan Strategis
            </a>
            <a 
              href="#rekening" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-amber-400 border-b border-slate-800"
            >
              Rekening Resmi Perusahaan
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 border-b border-slate-800"
            >
              Tanya Jawab (FAQ)
            </a>
            <a 
              href="#kontak" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 border-b border-slate-800"
            >
              Formulir Kritik & Saran
            </a>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <a 
                href={`tel:${companyProfile.phoneRaw}`}
                className="flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-slate-800 text-white text-xs font-semibold border border-slate-700"
              >
                <Phone className="w-4 h-4 text-brand-tealLight" />
                <span>Telepon Kantor</span>
              </a>
              <a 
                href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
