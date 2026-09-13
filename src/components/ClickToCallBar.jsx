import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function ClickToCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-navy/95 backdrop-blur-md border-t border-slate-700 p-2.5 px-4 shadow-2xl flex items-center justify-between gap-3">
      <a
        href={`tel:${companyProfile.phoneRaw}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center space-x-2 border border-slate-600 transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 text-brand-tealLight" />
        <span>Telepon Kantor</span>
      </a>

      <a
        href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20ingin%20berkonsultasi.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Chat WhatsApp</span>
      </a>
    </div>
  );
}
