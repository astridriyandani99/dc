import React from 'react';
import { Shield, ChevronUp, Phone, Mail, MapPin } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-teal to-brand-tealDark flex items-center justify-center text-white font-extrabold text-base">
                DC
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                PT DAYA CIPTA MANDIRI
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mitra strategis perbankan dan industri jasa keuangan terdepan dalam pengembangan kapasitas human capital, alih daya tenaga kerja bersertifikasi, dan konsultasi hukum terpercaya di Indonesia.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                <Shield className="w-3 h-3 text-brand-teal mr-1.5" />
                Badan Hukum Sah Republik Indonesia
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links 3 Pilar */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block mb-3 font-display">
              3 Pilar Layanan
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pelatihan" className="hover:text-brand-tealLight transition-colors">
                  Pelatihan Lembaga Keuangan (SDM & Risk)
                </a>
              </li>
              <li>
                <a href="#pelatihan" className="hover:text-brand-tealLight transition-colors">
                  Loan Scoring & Credit Risk Modeling
                </a>
              </li>
              <li>
                <a href="#pelatihan" className="hover:text-brand-tealLight transition-colors">
                  Kepatuhan Regulasi POJK & Governance
                </a>
              </li>
              <li>
                <a href="#outsourcing" className="hover:text-brand-tealLight transition-colors">
                  Jasa Keamanan / Satpam (Gada Pratama)
                </a>
              </li>
              <li>
                <a href="#outsourcing" className="hover:text-brand-tealLight transition-colors">
                  Jasa Kebersihan (Cleaning Service)
                </a>
              </li>
              <li>
                <a href="#outsourcing" className="hover:text-brand-tealLight transition-colors">
                  Driver Operasional & Eksekutif
                </a>
              </li>
              <li>
                <a href="#hukum" className="hover:text-brand-tealLight transition-colors">
                  Konsultasi Hukum Litigasi & Non-Litigasi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi Informasi */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block mb-3 font-display">
              Informasi Klien
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rekening" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                  Rekening Resmi Bank
                </a>
              </li>
              <li>
                <a href="#mengapa-kami" className="hover:text-brand-tealLight transition-colors">
                  Keunggulan & Alur Kerja
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-tealLight transition-colors">
                  Pusat Bantuan / FAQ
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-brand-tealLight transition-colors">
                  Formulir Kritik & Saran
                </a>
              </li>
              <li>
                <a href={`tel:${companyProfile.phoneRaw}`} className="hover:text-brand-tealLight transition-colors">
                  Click-to-Call Hotline
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kantor & Kontak */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-white font-bold text-xs uppercase tracking-wider block mb-3 font-display">
              Kontak Kantor
            </span>
            <p className="text-slate-300 leading-snug">
              {companyProfile.address}
            </p>
            <div className="pt-1 space-y-1">
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-brand-teal" />
                <a href={`tel:${companyProfile.phoneRaw}`} className="hover:text-white font-semibold">
                  {companyProfile.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-brand-teal" />
                <a href={`mailto:${companyProfile.email}`} className="hover:text-white">
                  {companyProfile.email}
                </a>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 pt-2">
              Jam Operasional: {companyProfile.operationalHours}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {companyProfile.name}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
