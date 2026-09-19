import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Award, Building2, Scale, Users, ChevronRight } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-teal-600"></span>
            <span>STRATEGIC ADVISORY &bull; FINANCIAL &bull; WORKFORCE &bull; LEGAL</span>
          </div>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sharp Editorial Headline */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Mitra Strategis Pengembangan Kapasitas, Fasilitas Tenaga Kerja & Solusi Hukum Terintegrasi.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Memberikan nilai tambah nyata bagi industri perbankan, lembaga keuangan, dan korporasi melalui <strong className="text-slate-900 font-semibold">Pelatihan Berstandar POJK</strong>, <strong className="text-slate-900 font-semibold">Alih Daya Tenaga Kerja Bersertifikasi</strong>, dan <strong className="text-slate-900 font-semibold">Pendampingan Hukum Korporat</strong> dengan integritas tanpa kompromi.
            </p>

            {/* Value Highlights with elegant icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-3 text-slate-700 text-sm">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="font-medium">Modul Sesuai Regulasi OJK & BI Terkini</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-700 text-sm">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="font-medium">Satpam Ijazah POLRI & SLA Kehadiran 100%</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-700 text-sm">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="font-medium">Mediasi Non-Litigasi & Restrukturisasi NPL</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-700 text-sm">
                <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="font-medium">Advokat Anggota PERADI & Legal Due Diligence</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="#pelatihan"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Eksplorasi 3 Pilar Layanan</span>
                <ArrowRight className="w-4 h-4 text-teal-400 stroke-[2.5]" />
              </a>

              <a
                href={`tel:${companyProfile.phoneRaw}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold border border-slate-300 shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-teal-700 stroke-[2]" />
                <span>Hubungi: {companyProfile.phone}</span>
              </a>
            </div>

            {/* Trust statement */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-700 stroke-[2]" />
              <span>Entitas Berbadan Hukum Resmi &bull; Rekening Perusahaan Terverifikasi Resmi (BCA)</span>
            </div>
          </div>

          {/* Right Column: High-End Visual Composite (Collectius style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              
              {/* Primary Image: Professional Financial Meeting */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" 
                  alt="Financial Advisory & Training Session"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Overlay Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-teal-600/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-white inline-block mb-1">
                    Excellence In Execution
                  </span>
                  <p className="text-sm font-bold text-white leading-tight">
                    Mendorong Keberhasilan Operasional Finansial & Perlindungan Hukum
                  </p>
                </div>
              </div>

              {/* 3 Pillars Compact Cards */}
              <div className="p-5 space-y-3 bg-slate-50/70 border-t border-slate-100">
                <a 
                  href="#pelatihan" 
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 hover:border-teal-600 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Pelatihan Lembaga Keuangan
                      </h4>
                      <p className="text-[11px] text-slate-500">SDM, Risiko Kredit, Kepatuhan & KPI</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
                </a>

                <a 
                  href="#outsourcing" 
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 hover:border-teal-600 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-800 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Users className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Penyedia Jasa Tenaga Kerja
                      </h4>
                      <p className="text-[11px] text-slate-500">Security Berijazah POLRI, Cleaning & Driver</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
                </a>

                <a 
                  href="#hukum" 
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 hover:border-teal-600 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Scale className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                        Jasa & Konsultasi Hukum
                      </h4>
                      <p className="text-[11px] text-slate-500">Legal Advisory, Mediasi & Litigasi Niaga</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
                </a>
              </div>

              {/* Bottom verified badge */}
              <div className="px-5 py-3 bg-slate-900 text-white flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">ISO 9001:2015 Terakreditasi</span>
                <span className="text-teal-400 font-bold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  <span>Mitra Terpercaya</span>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Real Metrics Stats Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyProfile.stats.map((item, idx) => (
            <div key={idx} className="border-l-2 border-teal-600 pl-4">
              <div className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-500">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
