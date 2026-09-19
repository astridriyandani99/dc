import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MessageSquare, Menu, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${companyProfile.phoneRaw}`} 
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors font-medium"
              title="Klik untuk menelepon kantor"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kontak / HP: <strong className="text-white font-bold tracking-wide">{companyProfile.phone}</strong></span>
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


        </div>
      </div>

      {/* Main Navbar - Premium Crisp Corporate White */}
      <nav className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md py-3 border-b border-slate-200/90' 
          : 'bg-white py-4 border-b border-slate-200/80 shadow-xs'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#beranda" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy to-slate-900 border border-slate-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <span className="font-display font-extrabold text-white text-lg tracking-wider">
                DC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-slate-900 text-lg sm:text-[19px] tracking-tight leading-none group-hover:text-teal-800 transition-colors">
                DAYA CIPTA MANDIRI
              </span>
              <span className="text-[10px] uppercase tracking-wider text-teal-700 font-bold mt-1 leading-tight">
                Financial, Workforce & Legal Advisory &bull; Est. 2021
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            <a 
              href="#beranda" 
              className="text-[14px] font-semibold text-slate-700 hover:text-teal-700 transition-colors"
            >
              Beranda
            </a>

            {/* Services Dropdown */}
            <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center space-x-1.5 text-[14px] font-semibold text-slate-700 hover:text-teal-700 transition-colors py-2"
              >
                <span>Layanan Utama</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-teal-700' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-84 bg-white border border-slate-200 rounded-2xl shadow-2xl py-3 z-50 animate-fadeIn">
                  <a 
                    href="#pelatihan" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-5 py-3 hover:bg-slate-50 text-left group transition-colors"
                  >
                    <div className="text-[13px] font-bold text-slate-900 group-hover:text-teal-700 flex items-center justify-between">
                      <span>1. Pelatihan Lembaga Keuangan</span>
                      <span className="text-[10px] font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-100">POJK</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                      SDM, Operasional, Risiko, Kepatuhan, Loan Scoring & KPI
                    </div>
                  </a>
                  <div className="h-px bg-slate-100 mx-4 my-1"></div>
                  <a 
                    href="#outsourcing" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-5 py-3 hover:bg-slate-50 text-left group transition-colors"
                  >
                    <div className="text-[13px] font-bold text-slate-900 group-hover:text-teal-700 flex items-center justify-between">
                      <span>2. Jasa Tenaga Kerja (Outsourcing)</span>
                      <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">POLRI</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Satpam Gada Pratama, Cleaning Service & Driver Eksekutif
                    </div>
                  </a>
                  <div className="h-px bg-slate-100 mx-4 my-1"></div>
                  <a 
                    href="#hukum" 
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-5 py-3 hover:bg-slate-50 text-left group transition-colors"
                  >
                    <div className="text-[13px] font-bold text-slate-900 group-hover:text-teal-700 flex items-center justify-between">
                      <span>3. Jasa & Konsultasi Hukum</span>
                      <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-100">PERADI</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Legal Advisory, Somasi, Mediasi & Pendampingan Litigasi
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#mengapa-kami" 
              className="text-[14px] font-semibold text-slate-700 hover:text-teal-700 transition-colors"
            >
              Keunggulan
            </a>

            <a 
              href="#rekening" 
              className="text-[14px] font-semibold text-slate-700 hover:text-teal-700 transition-colors"
            >
              No. Rekening
            </a>

            <a 
              href="#faq" 
              className="text-[14px] font-semibold text-slate-700 hover:text-teal-700 transition-colors"
            >
              FAQ
            </a>

            <a 
              href="#kontak" 
              className="text-[14px] font-semibold text-slate-700 hover:text-teal-700 transition-colors"
            >
              Kritik & Saran
            </a>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href={`tel:${companyProfile.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all shadow-xs"
              title="Hubungi Kantor"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Hubungi Kantor</span>
            </a>

            <a 
              href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20perusahaan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm hover:shadow transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href={`tel:${companyProfile.phoneRaw}`}
              className="p-2 rounded-xl bg-slate-100 text-teal-800 border border-slate-200"
              title="Telepon Kantor"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <a 
              href="#beranda" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              Beranda
            </a>
            <div className="py-2 border-b border-slate-100 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-teal-800 font-bold block">
                3 Pilar Layanan Utama
              </span>
              <a 
                href="#pelatihan" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-xs font-medium text-slate-700 hover:text-teal-700"
              >
                &bull; Pelatihan Lembaga Keuangan (SDM, Risk, KPI)
              </a>
              <a 
                href="#outsourcing" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-xs font-medium text-slate-700 hover:text-teal-700"
              >
                &bull; Jasa Tenaga Kerja (Security, Cleaning, Driver)
              </a>
              <a 
                href="#hukum" 
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-xs font-medium text-slate-700 hover:text-teal-700"
              >
                &bull; Jasa & Konsultasi Hukum (Litigasi & Non-Litigasi)
              </a>
            </div>
            <a 
              href="#mengapa-kami" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              Keunggulan Strategis
            </a>
            <a 
              href="#rekening" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              Rekening Resmi Perusahaan
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              Tanya Jawab (FAQ)
            </a>
            <a 
              href="#kontak" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              Formulir Kritik & Saran
            </a>

            <div className="pt-3 grid grid-cols-2 gap-3">
              <a 
                href={`tel:${companyProfile.phoneRaw}`}
                className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Telepon Kantor</span>
              </a>
              <a 
                href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp CS</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
