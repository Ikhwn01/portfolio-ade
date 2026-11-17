import React, { useState } from 'react';
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
  Monitor,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Projects() {
  const project = portfolioData.projects && portfolioData.projects[0];
  const screenshots = project?.screenshots || [];

  const [activeTab, setActiveTab] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  if (!project) return null;

  const currentScreenshot = screenshots[activeTab] || screenshots[0];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

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

          {/* ======================================================== */}
          {/* GALERI TAMPILAN APLIKASI NETBEANS (JAVA SWING GUI) */}
          {/* ======================================================== */}
          {screenshots.length > 0 && (
            <div className="p-6 md:p-8 bg-slate-50/50 border-b border-slate-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Antarmuka Sistem Java NetBeans</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Tangkapan Layar Aplikasi Desktop
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Antarmuka visual Java Swing GUI terhubung ke database MySQL yang dibangun menggunakan NetBeans IDE.
                  </p>
                </div>

                {/* Tab Navigation Controls */}
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Tangkapan layar sebelumnya"
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-2xs focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-semibold text-slate-500 px-2">
                    {activeTab + 1} / {screenshots.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Tangkapan layar berikutnya"
                    className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-2xs focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Screen Tab Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-thin">
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                      activeTab === idx
                        ? 'bg-blue-900 text-white border-blue-900 shadow-sm'
                        : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75 mr-1.5">0{idx + 1}</span>
                    <span>{s.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Window Display Frame */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-md overflow-hidden">
                {/* Window Header Bar (Desktop App Simulator) */}
                <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500"></div>
                    <span className="ml-2 text-xs font-mono font-medium text-slate-600 truncate max-w-xs sm:max-w-md">
                      Klasifikasi Kualitas Tahu - Pabrik Tahu PU [{currentScreenshot.tag}]
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalImage(currentScreenshot)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold text-slate-600 hover:text-blue-900 hover:bg-white border border-transparent hover:border-slate-200 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Perbesar Layar</span>
                  </button>
                </div>

                {/* Screenshot Image Container */}
                <div 
                  className="relative group cursor-pointer bg-slate-900/5 flex items-center justify-center p-2 sm:p-4 overflow-hidden"
                  onClick={() => setModalImage(currentScreenshot)}
                >
                  <img
                    src={currentScreenshot.src}
                    alt={currentScreenshot.title}
                    className="w-full h-auto rounded-lg object-contain max-h-[480px] shadow-sm transition-transform duration-200 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900/80 text-white text-xs font-semibold backdrop-blur-xs shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                      <span>Klik untuk memperbesar tampilan</span>
                    </span>
                  </div>
                </div>

                {/* Screenshot Caption & Detail */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-900 border border-blue-200 font-mono">
                        {currentScreenshot.tag}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900">
                        {currentScreenshot.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                      {currentScreenshot.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0 self-start sm:self-center">
                    Java Swing NetBeans
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all p-0.5 text-left group ${
                      activeTab === idx
                        ? 'border-blue-900 shadow-sm'
                        : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={s.src}
                      alt={s.title}
                      className="w-full h-14 object-cover object-top rounded"
                    />
                    <div className="p-1 bg-white">
                      <span className="block text-[10px] font-bold text-slate-800 truncate">
                        {s.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

            </div>
          )}

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

      {/* Fullscreen Screenshot Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-200 font-mono">
                  {modalImage.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {modalImage.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                aria-label="Tutup pratinjau"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 bg-slate-950/5 overflow-auto flex items-center justify-center max-h-[70vh]">
              <img
                src={modalImage.src}
                alt={modalImage.title}
                className="w-full h-auto rounded-lg object-contain shadow-md"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
              <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                {modalImage.desc}
              </p>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
