import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Award, Building2, Scale, Users } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-brand-dark overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Architectural Patterns (Clean, subtle, corporate grid) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Ambient Light (Deep Navy/Teal only, no neon purple) */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 mb-6 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-brand-tealLight animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-300">
            Mitra Strategis Sektor Perbankan, Korporasi & Lembaga Keuangan Indonesia
          </span>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Membangun Kapasitas Insan Finansial, Menyediakan Tenaga Kerja Andal & Solusi Hukum Terpercaya.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Solusi enterprise 3-in-1 yang mengintegrasikan <strong className="text-white font-semibold">Pelatihan Lembaga Keuangan</strong> berstandar regulator, <strong className="text-white font-semibold">Alih Daya Tenaga Kerja (Outsourcing)</strong> bersertifikasi resmi, dan <strong className="text-white font-semibold">Pendampingan Hukum & Mediasi</strong> berintegritas tinggi.
            </p>

            {/* Quick Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <span>Modul Pelatihan Berdasarkan POJK & BI</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <span>Satpam Berijazah POLRI (Gada Pratama)</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <span>Mediasi & Restrukturisasi Non-Litigasi</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <span>SLA Kehadiran 100% dengan Tim Cadangan</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#pelatihan"
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-brand-teal hover:bg-brand-tealDark text-white text-sm font-bold shadow-lg shadow-teal-950/50 hover:shadow-teal-900/70 transition-all duration-200"
              >
                <span>Jelajahi 3 Pilar Layanan</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${companyProfile.phoneRaw}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-brand-tealLight" />
                <span>Hubungi: {companyProfile.phone}</span>
              </a>
            </div>

            {/* Micro Trust Quote */}
            <div className="pt-2 text-xs text-slate-400 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Transparansi finansial terjamin &bull; Rekening resmi PT terverifikasi di 4 bank nasional</span>
            </div>
          </div>

          {/* Right Column: Corporate Metric & Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Header of Card */}
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
                <div>
                  <span className="text-xs font-semibold text-brand-tealLight uppercase tracking-wider block">
                    Portofolio Solusi Terintegrasi
                  </span>
                  <span className="font-display text-lg font-bold text-white">
                    3 Pilar Layanan Korporat
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* 3 Pillar Summary Items */}
              <div className="space-y-3">
                <a 
                  href="#pelatihan" 
                  className="block p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-brand-teal/50 transition-all group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/50 group-hover:scale-105 transition-transform">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-brand-tealLight transition-colors">
                        Pilar A: Pelatihan Lembaga Keuangan
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        SDM, Operasional, Risk Management, Compliance, Loan Scoring & KPI.
                      </p>
                    </div>
                  </div>
                </a>

                <a 
                  href="#outsourcing" 
                  className="block p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-brand-teal/50 transition-all group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-teal-950/80 text-teal-400 border border-teal-800/50 group-hover:scale-105 transition-transform">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-brand-tealLight transition-colors">
                        Pilar B: Jasa Tenaga Kerja (Outsourcing)
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Security berijazah Mabes POLRI, Cleaning Service & Driver Korporat.
                      </p>
                    </div>
                  </div>
                </a>

                <a 
                  href="#hukum" 
                  className="block p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-brand-teal/50 transition-all group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/50 group-hover:scale-105 transition-transform">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-brand-tealLight transition-colors">
                        Pilar C: Jasa & Konsultasi Hukum
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Legal Advisory, Somasi, Mediasi Restrukturisasi & Litigasi Pengadilan.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Verified Trust Statement */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>Legalitas PT Berbadan Hukum Sah</span>
                <span className="text-emerald-400 font-semibold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                  Operasional Aktif
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Real Metrics Stats Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyProfile.stats.map((item, idx) => (
            <div key={idx} className="border-l-2 border-brand-teal pl-4">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
