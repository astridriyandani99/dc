import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, ArrowLeft, CreditCard, MessageSquare, AlertCircle } from 'lucide-react';
import { bankAccounts } from '../data/bankAccounts';
import { companyProfile } from '../data/companyProfile';

export default function RekeningPage({ onNavigateHome }) {
  const [copiedId, setCopiedId] = useState(null);
  const bank = bankAccounts[0];

  const handleCopy = (accountNumber, id) => {
    navigator.clipboard.writeText(accountNumber.replace(/-/g, ''));
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-teal-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Utama</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
            Halaman Khusus Pembayaran
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Informasi Rekening
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Rekening resmi terverifikasi untuk transaksi administrasi dan pembayaran layanan {companyProfile.name}.
          </p>
        </div>

        {/* Single Proportional Bank Card */}
        <div className="max-w-md mx-auto">
          <div className="rounded-3xl p-6 sm:p-7 bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-2.5">
                  <span className="text-xs font-black tracking-wider px-2.5 py-1 rounded-md bg-blue-600 text-white shadow-xs">
                    {bank.shortName}
                  </span>
                  <span className="font-display text-sm font-bold text-slate-100">
                    {bank.bankName}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {bank.branch}
                </span>
              </div>

              {/* Account Number Box */}
              <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 mb-5">
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Nomor Rekening ({bank.currency}):</span>
                  <CreditCard className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-teal-300 tracking-wider">
                  {bank.accountNumber}
                </div>
              </div>

              {/* Beneficiary */}
              <div className="mb-5 px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                    Atas Nama Rekening:
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wide block mt-0.5">
                    {bank.accountName}
                  </span>
                </div>
                <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
              </div>
            </div>

            {/* Copy Button */}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => handleCopy(bank.accountNumber, bank.id)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-md ${
                  copiedId === bank.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-teal-700 hover:bg-teal-600 text-white'
                }`}
              >
                {copiedId === bank.id ? (
                  <>
                    <Check className="w-4 h-4 text-white animate-bounce" />
                    <span>Nomor Rekening Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white" />
                    <span>Salin Nomor Rekening BCA</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Verification & Transfer Confirmation Guide */}
          <div className="mt-5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs text-slate-600">
            <div className="flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Pastikan transfer pembayaran hanya ditujukan ke nomor rekening di atas atas nama <strong>Astrid Riyandani</strong>.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Konfirmasi Bukti Transfer:</span>
              <a
                href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20mengonfirmasi%20pembayaran%20ke%20rekening%20BCA%20Astrid%20Riyandani.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Kirim Bukti via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
