import React from 'react';
import { Shield, Award, Clock, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      title: "Kepatuhan Regulasi Penuh",
      subtitle: "Regulatory Governance",
      desc: "Seluruh silabus pelatihan dan alur operasional dirancang tunduk pada ketentuan Otoritas Jasa Keuangan (OJK), Bank Indonesia, serta undang-undang ketenagakerjaan.",
      icon: Shield,
      points: ["Standar POJK Terkini", "Kesiapan Audit Eksternal", "Governance Tanpa Celah"]
    },
    {
      num: "02",
      title: "Praktisi Senior & Advokat Ahli",
      subtitle: "Industry Practitioner",
      desc: "Fasilitator merupakan mantan eksekutif perbankan BUKU 4 dengan rekam jejak puluhan tahun, didukung advokat senior anggota PERADI berintegritas tinggi.",
      icon: Award,
      points: ["Instruktur Tersertifikasi", "Advokat Beracara Sah", "Pengalaman Kasus Nyata"]
    },
    {
      num: "03",
      title: "SLA Responsif & Tim Pengganti",
      subtitle: "Guaranteed Availability",
      desc: "Jaminan kehadiran personel alih daya 100% dengan mekanisme tim reliever yang siap diterjunkan dalam waktu maksimal 2 jam jika terjadi hal mendesak.",
      icon: Clock,
      points: ["100% Attendance SLA", "Reliever Pool Siap Kirim", "Zero Interruption Ops"]
    },
    {
      num: "04",
      title: "Kerahasiaan & Integritas Hukum",
      subtitle: "Strict Confidentiality",
      desc: "Pemberlakuan Non-Disclosure Agreement (NDA) mutlak untuk menjaga kerahasiaan data nasabah bank, strategi operasional, dan perkara hukum klien.",
      icon: FileCheck,
      points: ["Terikat Sumpah Advokat", "Perlindungan Data Nasabah", "Pencegahan Benturan Kepentingan"]
    }
  ];

  const steps = [
    {
      num: "01",
      label: "Diagnostic Assessment",
      title: "Audit Kebutuhan & Masalah",
      desc: "Telaah mendalam terhadap gap kompetensi perbankan, evaluasi pos pengamanan, atau analisis risiko perkara sengketa hukum."
    },
    {
      num: "02",
      label: "Solution Architecture",
      title: "Perumusan Desain Solusi",
      desc: "Penyusunan kurikulum In-House Training spesifik, alokasi penempatan personel bersertifikat, atau opsi strategi litigasi/non-litigasi."
    },
    {
      num: "03",
      label: "Integrated Deployment",
      title: "Eksekusi & Pendampingan",
      desc: "Pelaksanaan pelatihan oleh instruktur senior, penempatan satpam/cleaning/driver berseragam resmi, atau mediasi sengketa."
    },
    {
      num: "04",
      label: "Performance Review",
      title: "Monitoring & Evaluasi SLA",
      desc: "Laporan kemajuan berkala, evaluasi pasca-pelatihan, audit kepatuhan kerja, dan peninjauan berkala untuk perbaikan berkelanjutan."
    }
  ];

  return (
    <section id="mengapa-kami" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block mb-3">
            Corporate Benchmark
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight">
            Mengapa Institusi Finansial Mempercayakan Kepada Kami?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            Kombinasi unik antara penguasaan regulasi keuangan, disiplin operasional fasilitas, dan benteng perlindungan hukum yang kokoh.
          </p>
        </div>

        {/* 4 Pillars Grid - Senior Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-teal-700 transition-colors">
                      {item.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-teal-700 group-hover:border-teal-300 transition-colors shadow-xs">
                      <IconComp className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>

                  <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-teal-800 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-lg font-black text-slate-900 tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <ul className="space-y-1.5">
                    {item.points.map((pt, pidx) => (
                      <li key={pidx} className="flex items-center text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 mr-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Engagement Flow - Executive Midnight Section */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold tracking-widest text-teal-400 uppercase block mb-2">
              Siklus Engagement & Metodologi
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
              Alur Kerja Sama Terstruktur & Terukur
            </h3>
            <p className="text-sm text-slate-400 mt-2 font-normal">
              Setiap penugasan dijalankan melalui tahapan audit, perumusan SLA, eksekusi disiplin, dan evaluasi berkala.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {steps.map((step, sidx) => (
              <div 
                key={sidx} 
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-slate-500 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-black text-teal-400">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Step {step.num}
                    </span>
                  </div>

                  <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {step.label}
                  </span>
                  <h4 className="font-display text-base font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300">
              Konsultasikan kebutuhan operasional, sumber daya, atau hukum perbankan Anda hari ini.
            </div>
            <a
              href={`tel:${companyProfile.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-lg transition-all"
            >
              <span>Hubungi Konsultan Kami Langsung</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
