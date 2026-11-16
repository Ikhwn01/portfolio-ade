import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Layers, 
  CheckCircle2, 
  Database, 
  Cpu, 
  FileText, 
  BarChart3, 
  Award,
  Binary,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Projects() {
  const project = portfolioData.projects && portfolioData.projects[0];

  if (!project) return null;

  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Studi Kasus & Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Studi Kasus & Hasil Pekerjaan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Penerapan algoritma data mining dan rekayasa perangkat lunak untuk standardisasi kendali mutu produk industri manufaktur pangan.
          </p>
        </div>

        {/* Featured Project Card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:border-slate-300 transition-all">
          
          {/* Card Top Banner */}
          <div className="p-6 md:p-8 bg-slate-50/70 border-b border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-900 text-white shadow-sm">
                  <Award className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Akurasi {project.accuracy} Terverifikasi</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="/TUGAS_AKHIR_ADE_SUFYANSAH.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 bg-white hover:bg-slate-100 px-3 py-1 rounded-md border border-slate-200 shadow-2xs transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Lihat Dokumen PDF Skripsi</span>
                </a>
                <span className="text-xs font-mono font-medium text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  Lulus Sidang Skripsi {project.graduationYear}
                </span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-blue-950 font-medium">
              {project.subtitle} • {project.partner}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 bg-white divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-5 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight text-blue-900">
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {metric.note}
                </div>
              </div>
            ))}
          </div>

          {/* Content Body Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column (Problem, Solution, Methodology) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>Tantangan & Masalah Lapangan</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution Overview */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-900" />
                  <span>Solusi Sistem Komputerisasi</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Step-by-Step Methodology */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Binary className="w-4 h-4 text-blue-900" />
                  <span>Alur Kerja & Metodologi KNN</span>
                </h4>
                <div className="space-y-2.5">
                  {project.methodology.map((m, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-900 mb-1">
                        {m.step}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {m.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dataset Scope */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-slate-600" />
                  <span>Cakupan Dataset & Parameter Pengujian</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-900 block">Atribut Uji:</span>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-600">
                      <li>Kandungan Air (% kelembaban)</li>
                      <li>Tekstur / Kekerasan (Newton)</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Klasifikasi Target:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold">Mutu Baik</span>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-semibold">Mutu Sedang</span>
                      <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200 text-[11px] font-semibold">Mutu Buruk</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Features, Tech Stack, Academic Reference) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Features List */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-900" />
                  <span>Fitur Utama Aplikasi Desktop</span>
                </h4>
                <div className="space-y-2.5">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Teknologi & Lingkungan Pengembangan
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white text-slate-800 font-mono text-xs font-semibold border border-slate-200 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Citation Box */}
              <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 text-blue-950 font-bold">
                  <FileText className="w-4 h-4 text-blue-900" />
                  <span>Data Skripsi & Pengesahan Akademik</span>
                </div>
                <div className="space-y-1 pt-1 font-sans">
                  <div>
                    <span className="font-semibold text-slate-800">Penulis: </span>
                    <span>{project.academicInfo.author} (NPM: {project.academicInfo.npm})</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Institusi: </span>
                    <span>{project.academicInfo.program}, {project.academicInfo.institution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Dosen Pembimbing: </span>
                    <span>{project.academicInfo.advisors}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Card Footer */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-500 font-mono">
              Lokasi Riset: Pabrik Tahu PU, Jatiwarna, Kota Bekasi
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/TUGAS_AKHIR_ADE_SUFYANSAH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-blue-900 hover:border-blue-300 font-semibold transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-blue-900" />
                <span>Buka Naskah Tugas Akhir (PDF)</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-bold text-blue-900 hover:text-blue-700"
              >
                <span>Diskusikan Implementasi Sistem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
