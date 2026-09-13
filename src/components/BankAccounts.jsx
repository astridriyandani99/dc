import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, AlertCircle, Building, CreditCard } from 'lucide-react';
import { bankAccounts } from '../data/bankAccounts';

export default function BankAccounts() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (accountNumber, id) => {
    // Remove dashes for cleaner copy if needed or copy as-is
    navigator.clipboard.writeText(accountNumber.replace(/-/g, ''));
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="rekening" className="py-20 lg:py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparansi & Keamanan Finansial</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Informasi Rekening Resmi Perusahaan
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Seluruh transaksi pembayaran jasa pelatihan, kontrak alih daya tenaga kerja, dan jasa konsultasi hukum <strong className="text-white">wajib disetorkan hanya ke nomor rekening resmi atas nama badan hukum perusahaan kami</strong> berikut ini.
          </p>
        </div>

        {/* Bank Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {bankAccounts.map((bank) => {
            const isCopied = copiedId === bank.id;
            return (
              <div 
                key={bank.id}
                className={`rounded-2xl p-6 bg-gradient-to-b ${bank.cardBg} border ${bank.borderAccent} shadow-xl flex flex-col justify-between relative group hover:scale-[1.02] transition-all duration-200`}
              >
                <div>
                  {/* Bank Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md tracking-wider ${bank.badgeColor}`}>
                      {bank.shortName}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {bank.currency}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-1">
                    {bank.bankName}
                  </h3>
                  <p className="text-xs text-slate-400 mb-5">
                    {bank.branch}
                  </p>

                  {/* Account Number Box */}
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-700/80 mb-4">
                    <div className="text-[11px] text-slate-400 font-medium mb-1 flex items-center justify-between">
                      <span>Nomor Rekening:</span>
                      <CreditCard className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div className="font-mono text-lg font-bold text-amber-300 tracking-wider">
                      {bank.accountNumber}
                    </div>
                  </div>

                  {/* Beneficiary Name */}
                  <div className="mb-4">
                    <span className="text-[11px] text-slate-400 block">Atas Nama Rekening:</span>
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      {bank.accountName}
                    </span>
                  </div>
                </div>

                {/* Copy Button */}
                <div className="pt-3 border-t border-slate-700/60">
                  <button
                    onClick={() => handleCopy(bank.accountNumber, bank.id)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all duration-150 ${
                      isCopied
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/50'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-white animate-bounce" />
                        <span>Nomor Rekening Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
                        <span>Salin No. Rekening</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2 leading-tight">
                    {bank.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Anti-Fraud Warning Box */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 sm:p-6 max-w-4xl mx-auto flex items-start space-x-4">
          <div className="p-2.5 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-800/60 flex-shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold block mb-1">
              Peringatan Keamanan Transaksi (Anti-Fraud Notice):
            </strong>
            PT Daya Cipta Mandiri <span className="text-amber-300 font-semibold">tidak pernah menggunakan rekening bank atas nama pribadi (perorangan)</span> untuk transaksi resmi perusahaan. Mohon waspada terhadap segala bentuk penipuan yang mengatasnamakan manajemen kami. Apabila ada keraguan, silakan hubungi kontak telepon kantor kami langsung di <strong className="text-white">021-5890-7766</strong> untuk verifikasi faktur tagihan.
          </div>
        </div>

      </div>
    </section>
  );
}
