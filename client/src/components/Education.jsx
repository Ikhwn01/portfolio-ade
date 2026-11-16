import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Riwayat Pendidikan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pendidikan Formal
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Latar belakang jenjang pendidikan akademik di bidang teknologi informasi dan kejuruan teknik otomotif.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* Header Period & Icon */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-900 border border-blue-100">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-mono font-medium border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1">
                  {item.degree}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-blue-900 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-800 flex-shrink-0" />
                  <span>{item.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Catatan & Fokus Studi:
                    </span>
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{item.location}</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Terdaftar Resmi
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
