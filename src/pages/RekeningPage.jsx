import React, { useState } from 'react';
import { Copy, Check, ArrowLeft, CreditCard, MessageSquare } from 'lucide-react';
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
    <div className="py-10 sm:py-14 bg-slate-50/60 min-h-[65vh] flex flex-col justify-center">
      <div className="max-w-md mx-auto px-4 w-full">
        
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-6">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        {/* Header - Simple & Compact */}
        <div className="text-center mb-6">
          <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            Informasi Rekening
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Rekening pembayaran resmi transaksi {companyProfile.name}.
          </p>
        </div>

        {/* Small, Compact, Non-Flashy Bank Card */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm">
          
          {/* Bank Title & Branch */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                {bank.shortName}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                {bank.bankName}
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              {bank.branch}
            </span>
          </div>

          {/* Account Number Box */}
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/70 mb-3">
            <div className="text-[10.5px] text-slate-500 font-medium mb-1 flex items-center justify-between">
              <span>Nomor Rekening:</span>
              <CreditCard className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="font-mono text-lg font-bold text-slate-900 tracking-wider">
              {bank.accountNumber}
            </div>
          </div>

          {/* Beneficiary */}
          <div className="mb-4 px-3 py-2 rounded-lg bg-slate-50/70 border border-slate-100 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-medium">
              Atas Nama:
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase">
              ASTRID RIYANDANI
            </span>
          </div>

          {/* Copy Button - Clean Neutral Style */}
          <button
            onClick={() => handleCopy(bank.accountNumber, bank.id)}
            className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border ${
              copiedId === bank.id
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-800'
            }`}
          >
            {copiedId === bank.id ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Nomor Rekening Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-300" />
                <span>Salin Nomor Rekening</span>
              </>
            )}
          </button>
        </div>

        {/* WhatsApp Confirmation Link - Simple & Discreet */}
        <div className="mt-4 text-center">
          <a
            href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20mengonfirmasi%20pembayaran%20ke%20rekening%20BCA%20Astrid%20Riyandani.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-teal-700 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Konfirmasi bukti transfer via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
