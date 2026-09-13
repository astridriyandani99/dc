import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { faqData } from '../data/faqData';
import { companyProfile } from '../data/companyProfile';

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pusat Informasi & Tanya Jawab</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Temukan jawaban cepat seputar kurikulum pelatihan, standar alih daya tenaga kerja, skema pendampingan hukum, dan proses transaksi resmi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {faqData.map((cat, cidx) => (
            <button
              key={cidx}
              onClick={() => {
                setActiveCategory(cidx);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cidx
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqData[activeCategory].items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-slate-800 leading-snug">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-teal-50 text-brand-teal' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Direct Assistance Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display text-sm font-bold text-slate-900">
              Punya pertanyaan spesifik lainnya?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Tim konsultan kami siap memberikan penjelasan terperinci melalui WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${companyProfile.whatsappRaw}?text=Halo%20PT%20Daya%20Cipta%20Mandiri,%20saya%20memiliki%20pertanyaan%20lanjutan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold whitespace-nowrap shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat WhatsApp CS</span>
          </a>
        </div>

      </div>
    </section>
  );
}
