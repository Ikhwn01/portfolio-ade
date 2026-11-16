import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Mail, Phone, MapPin, CheckCircle2, FileText, Briefcase, Layers } from 'lucide-react';

export default function Hero() {
  const { profile } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Header Card */}
        <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              {/* Profile Avatar / Photo */}
              <div className="relative flex-shrink-0">
                {!imageError && profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    onError={() => setImageError(true)}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-slate-200 shadow-sm"
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-blue-900 text-white font-bold flex items-center justify-center text-2xl sm:text-3xl shadow-sm border border-blue-950">
                    AS
                  </div>
                )}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{profile.status}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {profile.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-900">
                  {profile.role}
                </p>
              </div>
            </div>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap md:flex-col gap-2.5 text-xs text-slate-600">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{profile.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <Phone className="w-4 h-4 text-slate-500" />
                <a href={`tel:${profile.phone}`} className="hover:text-blue-900 font-mono">
                  {profile.phone}
                </a>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href={`mailto:${profile.email}`} className="hover:text-blue-900 font-mono">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bio Overview */}
          <div className="pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Profil Profesional & Ringkasan Diri
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>Lihat Studi Kasus Skripsi</span>
              </a>
              <a
                href="#experience"
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Pengalaman Kerja</span>
              </a>
              <a
                href="/CV_Ade_Sufyansah.pdf"
                download="CV_Ade_Sufyansah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors inline-flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Unduh CV Asli (PDF)</span>
              </a>
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-blue-900 hover:underline"
              >
                Hubungi Saya Langsung →
              </a>
            </div>
          </div>
        </div>

        {/* Executive Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-blue-900" />
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 leading-normal">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
