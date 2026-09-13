import React from 'react';
import { Shield, Award, Clock, FileCheck, Layers, ArrowRight, UserCheck } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function WhyChooseUs() {
  const steps = [
    {
      num: "01",
      title: "Diagnostic & Needs Assessment",
      desc: "Kami melakukan telaah kebutuhan mendalam terhadap tantangan bisnis Anda, baik gap kompetensi SDM bank, kebutuhan pengamanan kantor, maupun audit sengketa hukum."
    },
    {
      num: "02",
      title: "Desain Solusi & Proposal SLA",
      desc: "Merumuskan kurikulum pelatihan spesifik, penawaran alokasi tenaga kerja dengan SLA transparan, atau opsi strategi penanganan hukum litigasi/non-litigasi."
    },
    {
      num: "03",
      title: "Eksekusi Profesional Terpadu",
      desc: "Pelaksanaan pelatihan oleh instruktur senior, deployment personel security/cleaning/driver bersertifikat, atau pelaksanaan pendampingan mediasi hukum."
    },
    {
      num: "04",
      title: "Monitoring, Evaluasi & Reporting",
      desc: "Laporan kemajuan berkala, evaluasi efektivitas pasca-pelatihan, audit kepatuhan kerja, dan peninjauan berkala untuk perbaikan berkelanjutan."
    }
  ];

  return (
    <section id="mengapa-kami" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Standar Keunggulan Korporat</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Institusi Finansial Mempercayakan Kepada Kami?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Kombinasi unik antara penguasaan regulasi keuangan, disiplin operasional fasilitas, dan benteng perlindungan hukum yang kokoh.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-4 font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-2">
              Kepatuhan Regulasi 100%
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Seluruh kurikulum dan metodologi kerja disusun mengacu pada ketentuan terkini Otoritas Jasa Keuangan (OJK), Bank Indonesia, dan UU Ketenagakerjaan RI.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-4 font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-2">
              Praktisi Senior & Advokat Ahli
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dikelola oleh para mantan pimpinan bank BUKU 4, instruktur bersertifikasi BNSP, dan advokat senior anggota PERADI dengan rekam jejak terbukti.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-4 font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-2">
              SLA Responsif & Tim Pengganti
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jaminan ketersediaan tenaga kerja alih daya 100% dengan cadangan personel siap kirim dalam tempo 2 jam jika terjadi ketidakhadiran mendesak.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4 font-bold">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 mb-2">
              Integritas & Kerahasiaan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Penerapan Non-Disclosure Agreement (NDA) ketat untuk menjaga kerahasiaan data nasabah bank, strategi operasional, dan perkara hukum klien.
            </p>
          </div>
        </div>

        {/* 4-Step Engagement Flow */}
        <div className="bg-brand-navy rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-brand-tealLight uppercase tracking-wider block mb-2">
              Siklus Kolaborasi & Metodologi Kerja
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              4 Langkah Mudah Memulai Kerjasama Strategis
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, sidx) => (
              <div key={sidx} className="bg-brand-dark/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-black text-brand-tealLight block mb-3">
                    {step.num}
                  </span>
                  <h4 className="font-display text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300">
              Siap berdiskusi untuk kebutuhan lembaga keuangan atau perusahaan Anda?
            </div>
            <a
              href={`tel:${companyProfile.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-brand-tealDark text-white text-xs font-bold shadow-lg transition-all"
            >
              <span>Hubungi Tim Konsultan Kami</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
