import React, { useState } from 'react';
import { 
  GraduationCap, Users, Scale, CheckCircle2, ArrowRight, ShieldCheck, 
  FileText, Sparkles, Building2, UserCheck, Car, HelpCircle 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { companyProfile } from '../data/companyProfile';

export default function ServicesSection() {
  const [activePillar, setActivePillar] = useState(0);

  const currentService = servicesData[activePillar];

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-brand-teal text-xs font-bold uppercase tracking-wider mb-3">
            <span>Ruang Lingkup Layanan Terpadu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            3 Pilar Solusi Bisnis & Operasional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dirancang secara khusus untuk memenuhi tuntutan kepatuhan, keandalan operasional, dan perlindungan hukum bagi lembaga keuangan, perbankan, dan korporasi di Indonesia.
          </p>
        </div>

        {/* 3 Pillar Tab Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-12">
          {servicesData.map((service, index) => {
            const isActive = activePillar === index;
            return (
              <button
                key={service.id}
                onClick={() => setActivePillar(index)}
                className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-brand-navy text-white border-brand-navy shadow-xl scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                      isActive 
                        ? 'bg-brand-teal text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      PILAR {service.pillarNumber}
                    </span>

                    {index === 0 && <GraduationCap className={`w-5 h-5 ${isActive ? 'text-brand-tealLight' : 'text-slate-400'}`} />}
                    {index === 1 && <Users className={`w-5 h-5 ${isActive ? 'text-brand-tealLight' : 'text-slate-400'}`} />}
                    {index === 2 && <Scale className={`w-5 h-5 ${isActive ? 'text-brand-tealLight' : 'text-slate-400'}`} />}
                  </div>

                  <h3 className={`font-display text-lg font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs mt-1 font-medium ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {service.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/20 flex items-center justify-between">
                  <span className={`text-xs font-semibold ${isActive ? 'text-brand-tealLight' : 'text-brand-teal'}`}>
                    Lihat Modul Lengkap &rarr;
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded ${
                    isActive ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {service.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content 1: Pelatihan Lembaga Keuangan */}
        {activePillar === 0 && (
          <div id="pelatihan" className="space-y-8 animate-fadeIn">
            {/* Overview Banner */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-teal uppercase tracking-wider mb-2">
                    <span>Pilar A: Kapasitas Human Capital & Kepatuhan Perbankan</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    Pelatihan Khusus Lembaga Keuangan & Bank
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                    Menjawab tantangan industri finansial modern: peningkatan NPL, pengetatan regulasi OJK/BI, kebutuhan digital risk scoring, dan akselerasi KPI tenaga penjual serta operasional.
                  </p>
                </div>
                <div>
                  <a
                    href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20kami%20tertarik%20mengajukan%20proposal%20In-House%20Training%20Lembaga%20Keuangan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white text-sm font-semibold shadow-md transition-all whitespace-nowrap"
                  >
                    <span>Minta Silabus Pelatihan</span>
                    <ArrowRight className="w-4 h-4 text-brand-tealLight" />
                  </a>
                </div>
              </div>
            </div>

            {/* 6 Sub-Topics Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService.modules.map((mod, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-teal/60 hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-brand-teal bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {mod.code}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">Modul Intensif</span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-slate-900 tracking-tight mb-2">
                      {mod.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {mod.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-3">
                      <span className="text-xs font-semibold text-slate-700 block mb-2">
                        Materi & Silabus Pembahasan:
                      </span>
                      <ul className="space-y-1.5">
                        {mod.topics.map((t, tidx) => (
                          <li key={tidx} className="flex items-start text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">Format: In-House & Public Training</span>
                    <span className="text-xs text-brand-teal font-semibold">Tersedia Sertifikasi &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Jasa Tenaga Kerja (Outsourcing) */}
        {activePillar === 1 && (
          <div id="outsourcing" className="space-y-8 animate-fadeIn">
            {/* Overview Banner */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-teal uppercase tracking-wider mb-2">
                    <span>Pilar B: Fasilitas & Penyedia Tenaga Kerja Alih Daya</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    Penyedia Jasa Tenaga Kerja (Outsourcing) Profesional
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                    Menyediakan tenaga pengamanan fisik, kebersihan lingkungan kerja, dan pengemudi korporat yang terlatih dengan kepatuhan hukum ketenagakerjaan penuh tanpa risiko bagi perusahaan mitra.
                  </p>
                </div>
                <div>
                  <a
                    href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20kami%20membutuhkan%20penawaran%20jasa%20tenaga%20kerja%20(Outsourcing).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white text-sm font-semibold shadow-md transition-all whitespace-nowrap"
                  >
                    <span>Ajukan Kebutuhan Personel</span>
                    <ArrowRight className="w-4 h-4 text-brand-tealLight" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3 Core Outsourcing Profiles */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {currentService.modules.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-teal/60 hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5 border border-slate-200">
                      {idx === 0 && <ShieldCheck className="w-6 h-6 text-brand-teal" />}
                      {idx === 1 && <Sparkles className="w-6 h-6 text-brand-teal" />}
                      {idx === 2 && <Car className="w-6 h-6 text-brand-teal" />}
                    </div>

                    <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {item.code}
                    </span>
                    <h4 className="font-display text-xl font-bold text-slate-900 tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-slate-800 block mb-3">
                        Standar Kualifikasi & Layanan:
                      </span>
                      <ul className="space-y-2">
                        {item.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] text-slate-500 mb-2">
                      &bull; Terlindungi Asuransi & BPJS Ketenagakerjaan Penuh
                    </div>
                    <a
                      href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi%20mengenai%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-tealDark"
                    >
                      Konsultasikan Kebutuhan Ini &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Jasa & Konsultasi Hukum */}
        {activePillar === 2 && (
          <div id="hukum" className="space-y-8 animate-fadeIn">
            {/* Overview Banner */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-teal uppercase tracking-wider mb-2">
                    <span>Pilar C: Proteksi Bisnis, Litigasi & Penyelesaian Kredit</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    Jasa Konsultasi Hukum & Penyelesaian Sengketa
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                    Memberikan kepastian hukum, mediasi penyelesaian kredit macet/wanprestasi, pendampingan restrukturisasi utang, serta pembelaan hak hukum di pengadilan secara etis dan profesional.
                  </p>
                </div>
                <div>
                  <a
                    href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20kami%20membutuhkan%20pendampingan%20konsultasi%20hukum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white text-sm font-semibold shadow-md transition-all whitespace-nowrap"
                  >
                    <span>Jadwalkan Konsultasi Legal</span>
                    <ArrowRight className="w-4 h-4 text-brand-tealLight" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3 Core Legal Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {currentService.modules.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-brand-teal/60 hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5 border border-amber-200/60">
                      <Scale className="w-6 h-6 text-amber-600" />
                    </div>

                    <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {item.code}
                    </span>
                    <h4 className="font-display text-xl font-bold text-slate-900 tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-slate-800 block mb-3">
                        Cakupan Layanan Hukum:
                      </span>
                      <ul className="space-y-2">
                        {item.points.map((pt, pidx) => (
                          <li key={pidx} className="flex items-start text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] text-slate-500 mb-2">
                      &bull; Kerahasiaan Klien Dijamin Undang-Undang Advokat
                    </div>
                    <a
                      href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi%20mengenai%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-tealDark"
                    >
                      Konsultasikan Masalah Hukum &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
