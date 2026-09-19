import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, AlertCircle, CreditCard, Lock } from 'lucide-react';
import { bankAccounts } from '../data/bankAccounts';
import { companyProfile } from '../data/companyProfile';

export default function BankAccounts() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (accountNumber, id) => {
    navigator.clipboard.writeText(accountNumber.replace(/-/g, ''));
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="rekening" className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-800/60 inline-block mb-3">
            Official Corporate Banking
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[38px] font-black text-white tracking-tight">
            Informasi Rekening Resmi Perusahaan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Seluruh transaksi pembayaran jasa pelatihan, kontrak alih daya tenaga kerja, dan jasa konsultasi hukum <strong className="text-white">wajib disetorkan hanya ke nomor rekening resmi atas nama badan hukum perusahaan kami</strong> berikut ini.
          </p>
        </div>

        {/* Bank Cards Container - Centered for single account */}
        <div className={bankAccounts.length === 1 ? "max-w-xl mx-auto mb-12" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"}>
          {bankAccounts.map((bank) => {
            const isCopied = copiedId === bank.id;
            return (
              <div 
                key={bank.id}
                className="rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-500 shadow-2xl flex flex-col justify-between relative group transition-all duration-200"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-black tracking-wider px-3 py-1.5 rounded-lg bg-blue-600 text-white shadow-md">
                        {bank.shortName}
                      </span>
                      <span className="font-display text-base font-bold text-white">
                        {bank.bankName}
                      </span>
                    </div>
                    <div className="w-9 h-6 rounded bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
                      <div className="w-4 h-2.5 rounded-xs bg-amber-400/80"></div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6">
                    Kantor Cabang: <strong className="text-slate-200">{bank.branch}</strong>
                  </p>

                  {/* Account Number Box */}
                  <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 mb-6">
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>Nomor Rekening Resmi ({bank.currency}):</span>
                      <CreditCard className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="font-mono text-2xl sm:text-3xl font-black text-white tracking-widest text-teal-300">
                      {bank.accountNumber}
                    </div>
                  </div>

                  {/* Beneficiary */}
                  <div className="mb-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10.5px] text-slate-400 font-bold uppercase tracking-wider block">
                        Atas Nama Rekening:
                      </span>
                      <span className="text-sm sm:text-base font-black text-white uppercase tracking-wide block mt-0.5">
                        {bank.accountName}
                      </span>
                    </div>
                    <ShieldCheck className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  </div>
                </div>

                {/* Copy Button */}
                <div className="pt-4 border-t border-slate-700/80">
                  <button
                    onClick={() => handleCopy(bank.accountNumber, bank.id)}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2.5 transition-all shadow-md ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-teal-600 hover:bg-teal-500 text-white'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-5 h-5 text-white animate-bounce" />
                        <span>Nomor Rekening Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-white" />
                        <span>Salin Nomor Rekening BCA</span>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-3 leading-relaxed">
                    {bank.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Anti-Fraud Warning Box */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 sm:p-6 max-w-4xl mx-auto flex items-start space-x-4 shadow-lg">
          <div className="p-2.5 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-800/60 flex-shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <strong className="text-white font-bold block mb-1">
              Peringatan Keamanan Transaksi (Anti-Fraud Notice):
            </strong>
            PT Daya Cipta Mandiri <span className="text-amber-300 font-bold">tidak pernah menggunakan rekening bank atas nama pribadi (perorangan)</span> untuk transaksi resmi perusahaan. Seluruh pembayaran resmi diterbitkan Invoice bernomor seri dan Faktur Pajak resmi. Jika ada keraguan, silakan hubungi kontak verifikasi keuangan kami di <strong className="text-white">{companyProfile.phone}</strong>.
          </div>
        </div>

      </div>
    </section>
  );
}
