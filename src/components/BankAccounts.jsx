import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, AlertCircle, CreditCard } from 'lucide-react';
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
    <section id="rekening" className="py-14 sm:py-16 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Proportional & Clean */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-teal-400 bg-teal-950/70 px-3 py-1 rounded-full border border-teal-800/50 inline-block mb-2.5">
            Pembayaran Resmi
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Informasi Rekening
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Rekening resmi untuk administrasi dan transaksi pembayaran layanan {companyProfile.name}.
          </p>
        </div>

        {/* Bank Card - Compact & Proportional */}
        <div className="max-w-md mx-auto">
          {bankAccounts.map((bank) => {
            const isCopied = copiedId === bank.id;
            return (
              <div 
                key={bank.id}
                className="rounded-2xl p-5 sm:p-6 bg-slate-800/90 border border-slate-700/90 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-xs font-black tracking-wider px-2.5 py-1 rounded bg-blue-600 text-white shadow-xs">
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
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-700/80 mb-4">
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Nomor Rekening:</span>
                      <CreditCard className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <div className="font-mono text-xl sm:text-2xl font-bold text-teal-300 tracking-wider">
                      {bank.accountNumber}
                    </div>
                  </div>

                  {/* Beneficiary */}
                  <div className="mb-4 px-3.5 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                        Atas Nama:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide block">
                        {bank.accountName}
                      </span>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  </div>
                </div>

                {/* Copy Button */}
                <div className="pt-3 border-t border-slate-700/70">
                  <button
                    onClick={() => handleCopy(bank.accountNumber, bank.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                      isCopied
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-teal-700 hover:bg-teal-600 text-white shadow-xs'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white animate-bounce" />
                        <span>Nomor Rekening Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-white" />
                        <span>Salin Nomor Rekening BCA</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Anti-Fraud Notice - Compact & Discreet */}
          <div className="mt-4 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 flex items-start space-x-2.5 text-[11px] text-slate-400 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 font-semibold">Peringatan:</strong> {companyProfile.name} tidak pernah menggunakan rekening perorangan/pribadi. Pastikan transfer hanya ditujukan ke rekening resmi di atas.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
