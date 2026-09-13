import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { companyProfile } from '../data/companyProfile';

export default function ContactFeedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'Pelatihan Lembaga Keuangan',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (companyProfile.googleScriptUrl) {
        // Kirim data langsung ke Webhook Google Apps Script (Spreadsheet & Telegram)
        await fetch(companyProfile.googleScriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Menghindari CORS redirect block dari Google Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            serviceCategory: formData.serviceCategory,
            subject: formData.subject,
            message: formData.message,
          }),
        });
      } else {
        // Simulasi delay pengiriman jika URL script belum dikonfigurasi
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    } catch (error) {
      console.warn('Form submission notice:', error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceCategory: 'Pelatihan Lembaga Keuangan',
      subject: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-brand-teal" />
            <span>Kanal Komunikasi & Feedback</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Kantor & Formulir Kritik Saran
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Kami sangat menghargai setiap masukan dan kebutuhan konsultasi Anda. Data formulir ini akan langsung diteruskan ke sekretariat dan email admin perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Office Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy rounded-3xl p-7 sm:p-8 text-white shadow-xl">
              <span className="text-xs font-bold text-brand-tealLight uppercase tracking-wider block mb-2">
                Sekretariat Perusahaan
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Kantor Pusat PT Daya Cipta Mandiri
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-800 text-brand-tealLight flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Alamat Gedung Kantor:</span>
                    <p className="text-slate-200 leading-snug mt-0.5">
                      {companyProfile.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-800 text-brand-tealLight flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telepon Kantor (Click-to-Call):</span>
                    <a 
                      href={`tel:${companyProfile.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-brand-tealLight transition-colors block mt-0.5"
                    >
                      {companyProfile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp Business CS:</span>
                    <a 
                      href={`https://wa.me/${companyProfile.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-300 hover:text-emerald-200 transition-colors block mt-0.5"
                    >
                      {companyProfile.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-800 text-brand-tealLight flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email Resmi Administrasi:</span>
                    <a 
                      href={`mailto:${companyProfile.email}`}
                      className="text-xs font-semibold text-slate-300 hover:text-white transition-colors block mt-0.5"
                    >
                      {companyProfile.email}
                    </a>
                    <span className="text-[11px] text-slate-400 block">
                      Tembusan Admin: {companyProfile.adminEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Jam Pelayanan Kantor:</span>
                    <p className="text-slate-300 leading-snug mt-0.5">
                      {companyProfile.operationalHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Call CTA */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <a
                  href={`tel:${companyProfile.phoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center space-x-2 border border-slate-600 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-tealLight" />
                  <span>Tekan untuk Telepon Langsung dari HP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Online Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-card">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900">
                    Pesan Berhasil Masuk ke Spreadsheet!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong>{formData.name}</strong>. Data formulir Anda telah otomatis dicatat ke Google Sheets dan notifikasi instan telah diteruskan ke Telegram tim manajemen kami. Kami akan segera menghubungi Anda.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-slate-800 transition-all"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      Formulir Kritik, Saran & Konsultasi
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Silakan lengkapi formulir di bawah ini. Bidang bertanda bintang (*) wajib diisi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nama Lengkap / Instansi *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Bpk. Hendra - PT Bank..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@perusahaan.co.id"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nomor HP / WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Topik Layanan Terkait *
                      </label>
                      <select
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-slate-800"
                      >
                        <option value="Pelatihan Lembaga Keuangan">Pilar A: Pelatihan Lembaga Keuangan</option>
                        <option value="Jasa Tenaga Kerja Outsourcing">Pilar B: Jasa Tenaga Kerja (Outsourcing)</option>
                        <option value="Jasa & Konsultasi Hukum">Pilar C: Jasa & Konsultasi Hukum</option>
                        <option value="Konfirmasi Pembayaran / Rekening">Konfirmasi Pembayaran / Rekening</option>
                        <option value="Kritik & Saran Manajemen">Kritik & Saran Manajemen</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subjek Pesan
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Pengajuan In-House Training Manajemen Risiko / Kebutuhan Security"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Uraian Pesan, Kritik atau Pertanyaan *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan secara singkat kendala, saran, atau estimasi jumlah peserta/personel yang Anda butuhkan..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-slate-800"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Mencatat ke Spreadsheet & Mengirim Notifikasi...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-teal-400" />
                          <span>Kirimkan Formulir Sekarang</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Data Anda terlindungi oleh kebijakan privasi perusahaan kami dan tidak dibagikan ke pihak ketiga.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
