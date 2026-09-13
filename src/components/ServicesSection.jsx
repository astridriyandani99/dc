import React, { useState } from 'react';
import { 
  GraduationCap, Users, Scale, CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, Building2, Car, ChevronRight, FileCheck, Landmark, Briefcase
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { companyProfile } from '../data/companyProfile';

export default function ServicesSection() {
  const [activePillar, setActivePillar] = useState(0);
  const currentService = servicesData[activePillar];

  const pillarPhotos = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80", // Banking Training & Boardroom
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80", // Security & Facility Operations
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"  // Legal Consultation & Scale
  ];

  const outsourcingImages = [
    "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80", // Security
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80", // Cleaning
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80"  // Driver
  ];

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block mb-3">
            Core Business Pillars
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
            3 Pilar Solusi Terintegrasi
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Portofolio layanan komprehensif yang dirancang untuk memperkuat tata kelola, menjamin keamanan operasional, dan memberikan kepastian hukum bagi lembaga keuangan di Indonesia.
          </p>
        </div>

        {/* 3 Pillar Tab Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {servicesData.map((service, index) => {
            const isActive = activePillar === index;
            return (
              <button
                key={service.id}
                onClick={() => setActivePillar(index)}
                className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md ${
                      isActive 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      PILAR {service.pillarNumber}
                    </span>

                    <span className={`text-xs font-semibold ${isActive ? 'text-teal-400' : 'text-slate-400'}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className={`font-display text-lg font-black tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs mt-1 leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {service.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/20 flex items-center justify-between text-xs font-bold">
                  <span className={isActive ? 'text-teal-400' : 'text-teal-700'}>
                    Buka Rincian Silabus &rarr;
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-teal-400' : 'bg-slate-300'}`}></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Content Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden mb-12">
          
          {/* Editorial Banner with Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200">
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-2 block">
                  Cakupan Detail &bull; Pilar {currentService.pillarNumber}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  {currentService.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi%20mengenai%20${encodeURIComponent(currentService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-all"
                >
                  <span>Ajukan Konsultasi / Proposal</span>
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                </a>

                <div className="text-xs text-slate-500 font-medium">
                  &bull; Format disesuaikan dengan kebutuhan In-House & Retainer
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full overflow-hidden bg-slate-100">
              <img 
                src={pillarPhotos[activePillar]} 
                alt={currentService.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-950/20"></div>
            </div>
          </div>

          {/* Module Cards Grid */}
          <div className="p-6 sm:p-10 bg-slate-50/50">
            {activePillar === 0 && (
              <div id="pelatihan" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentService.modules.map((mod, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-teal-600 hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                          {mod.code}
                        </span>
                        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wide">
                          Modul Terakreditasi
                        </span>
                      </div>

                      <h4 className="font-display text-base font-black text-slate-900 tracking-tight mb-2">
                        {mod.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {mod.desc}
                      </p>

                      <div className="pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                          Silabus & Studi Kasus:
                        </span>
                        <ul className="space-y-1.5">
                          {mod.topics.map((topic, tidx) => (
                            <li key={tidx} className="flex items-start text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-400 font-medium">Instruktur Senior Bank</span>
                      <a
                        href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20tertarik%20dengan%20modul%20${encodeURIComponent(mod.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-teal-700 hover:text-teal-900"
                      >
                        Pilih Modul &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activePillar === 1 && (
              <div id="outsourcing" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {currentService.modules.map((mod, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-teal-600 hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-44 w-full overflow-hidden bg-slate-100 relative">
                        <img 
                          src={outsourcingImages[idx]} 
                          alt={mod.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="font-mono text-xs font-bold text-white bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                            {mod.code}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="font-display text-lg font-black text-slate-900 tracking-tight mb-2">
                          {mod.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {mod.desc}
                        </p>

                        <div className="pt-3 border-t border-slate-100">
                          <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
                            Standar Kualifikasi & Fasilitas:
                          </span>
                          <ul className="space-y-2">
                            {mod.features.map((feat, fidx) => (
                              <li key={fidx} className="flex items-start text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <a
                        href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20kami%20membutuhkan%20tenaga%20${encodeURIComponent(mod.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold flex items-center justify-center space-x-2 border border-slate-200 transition-all"
                      >
                        <span>Minta Penawaran SLA Personel</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activePillar === 2 && (
              <div id="hukum" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {currentService.modules.map((mod, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-teal-600 hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                          {mod.code}
                        </span>
                        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                          Advokat Berlisensi
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-black text-slate-900 tracking-tight mb-2">
                        {mod.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed mb-5">
                        {mod.desc}
                      </p>

                      <div className="pt-4 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
                          Cakupan Kuasa & Pendampingan:
                        </span>
                        <ul className="space-y-2">
                          {mod.points.map((pt, pidx) => (
                            <li key={pidx} className="flex items-start text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <a
                        href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20konsultasi%20hukum%20mengenai%20${encodeURIComponent(mod.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold flex items-center justify-center space-x-2 border border-slate-200 transition-all"
                      >
                        <span>Jadwalkan Konsultasi Rahasia</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
