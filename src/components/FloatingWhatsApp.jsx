import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = userMsg.trim() 
      ? userMsg 
      : 'Halo PT Daya Cipta Mandiri, saya ingin berkonsultasi mengenai layanan perusahaan.';
    const url = `https://wa.me/${companyProfile.whatsappRaw}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setUserMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pop-up Chat Modal */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-brand-navy p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">
                  DCM
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-brand-navy rounded-full"></span>
              </div>
              <div>
                <h4 className="font-display font-bold text-sm leading-tight">
                  Konsultasi WhatsApp CS
                </h4>
                <span className="text-[11px] text-emerald-300 flex items-center">
                  Online &bull; Responsif dalam jam kerja
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg focus:outline-none"
              aria-label="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 text-xs text-slate-700 shadow-sm leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1">
                Selamat Datang di PT Daya Cipta Mandiri! 👋
              </p>
              Ada yang bisa kami bantu seputar <strong>Pelatihan Bank</strong>, <strong>Jasa Outsourcing (Security/Cleaning/Driver)</strong>, atau <strong>Konsultasi Hukum</strong>?
            </div>

            {/* Quick Consultation Chips */}
            <div className="space-y-1.5 pt-1">
              <button
                type="button"
                onClick={() => setUserMsg('Saya tertarik mendiskusikan program Pelatihan Lembaga Keuangan (SDM & Risk Management).')}
                className="w-full text-left text-[11px] p-2 rounded-lg bg-white border border-slate-200 hover:border-brand-teal text-slate-700 hover:text-brand-teal transition-colors"
              >
                1. Info Pelatihan Lembaga Keuangan
              </button>
              <button
                type="button"
                onClick={() => setUserMsg('Saya membutuhkan penawaran personel Outsourcing (Security / Cleaning / Driver).')}
                className="w-full text-left text-[11px] p-2 rounded-lg bg-white border border-slate-200 hover:border-brand-teal text-slate-700 hover:text-brand-teal transition-colors"
              >
                2. Kebutuhan Jasa Tenaga Kerja (Outsourcing)
              </button>
              <button
                type="button"
                onClick={() => setUserMsg('Saya ingin konsultasi penanganan sengketa hukum atau mediasi kredit perbankan.')}
                className="w-full text-left text-[11px] p-2 rounded-lg bg-white border border-slate-200 hover:border-brand-teal text-slate-700 hover:text-brand-teal transition-colors"
              >
                3. Konsultasi Masalah Hukum & Mediasi
              </button>
            </div>
          </div>

          {/* Chat Footer Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Ketik pesan Anda..."
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-800"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-colors"
              title="Kirim ke WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all duration-200 focus:outline-none"
        aria-label="Buka Chat WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping"></span>
        </div>
        <span className="font-display text-xs font-bold tracking-wide hidden sm:inline">
          Live Chat WhatsApp
        </span>
      </button>
    </div>
  );
}
