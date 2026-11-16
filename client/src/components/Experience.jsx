import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-20 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman Kerja & Magang
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Riwayat pengalaman kerja di bidang logistik, operasional usaha, pengiriman barang, serta praktik teknis kejuruan otomotif.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 space-y-8">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-900 shadow-sm"></div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-900 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-blue-800" />
                      <span>{item.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 font-normal">{item.type}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono font-medium self-start sm:self-auto border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
