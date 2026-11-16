import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, AlertCircle, Clock, MapPin, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [responseMsg, setResponseMsg] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setValidationErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setValidationErrors([]);
    setResponseMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setResponseMsg(data.message || 'Pesan Anda berhasil terkirim!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
        setResponseMsg(data.message || 'Gagal mengirim pesan.');
        if (data.errors && Array.isArray(data.errors)) {
          setValidationErrors(data.errors);
        }
      }
    } catch (err) {
      console.error('Error pengiriman form kontak:', err);
      setStatus('error');
      setResponseMsg('Tidak dapat terhubung ke server backend Node.js. Silakan periksa koneksi Anda.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Kontak Langsung</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Saya
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Silakan kirimkan pesan untuk penawaran kerja sama, peluang kerja operasional/IT, atau pertanyaan lebih lanjut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Informasi Kontak
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-900">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500">Telepon / WhatsApp</span>
                    <a
                      href={`https://wa.me/62${profile.phone.replace(/[^0-9]/g, '').replace(/^0/, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-900 hover:text-blue-900 font-mono"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-900">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500">Email Pribadi</span>
                    <a href={`mailto:${profile.email}`} className="font-semibold text-slate-900 hover:text-blue-900 font-mono">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-900">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500">Domisili</span>
                    <span className="font-semibold text-slate-900">{profile.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-900">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500">Status Ketersediaan</span>
                    <span className="font-semibold text-slate-900">Siap Dihubungi Kapan Saja</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/62${profile.phone.replace(/[^0-9]/g, '').replace(/^0/, '')}?text=Halo%20Ade%20Sufyansah,%20saya%20tertarik%20dengan%20profil%20Anda.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan WhatsApp Langsung</span>
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-blue-100 bg-blue-50/50 text-xs text-blue-950 space-y-1">
              <span className="font-bold block">Komitmen Profesional:</span>
              <p className="text-slate-600 leading-relaxed">
                Terbiasa bekerja dengan disiplin waktu, cepat beradaptasi dengan alur kerja baru, dan siap memberikan kontribusi maksimal bagi operasional tim.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Kirim Pesan Formulir
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Pesan akan langsung diproses dan tersimpan di sistem backend portofolio.
              </p>

              {/* State: Success Feedback */}
              {status === 'success' && (
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900">Pesan Berhasil Terkirim</h4>
                      <p className="text-xs text-emerald-700 mt-1">{responseMsg}</p>
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="mt-3 text-xs font-semibold text-emerald-900 underline hover:text-emerald-950"
                      >
                        Kirim pesan lain
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* State: Error Feedback */}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-rose-900">{responseMsg}</h4>
                      {validationErrors.length > 0 && (
                        <ul className="mt-2 list-disc list-inside text-xs text-rose-700 space-y-0.5">
                          {validationErrors.map((err, idx) => (
                            <li key={idx}>{err}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Alamat Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                    Subjek / Keperluan
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Tawaran Pekerjaan Operasional / Logistik"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Isi Pesan <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan, rincian pekerjaan, atau pertanyaan Anda..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Mengirim Pesan...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
