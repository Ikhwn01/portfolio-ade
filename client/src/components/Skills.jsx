import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Package, Monitor, Award, Sparkles } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    'Logistik & Operasional': Package,
    'Teknologi Informasi & Komputer': Monitor,
    'Karakter Kerja & Keterampilan': Award,
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50/50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skill & Keahlian</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kompetensi & Keahlian Praktis
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Kombinasi keahlian operasional logistik, kemampuan dasar teknologi informasi, serta etos kerja disiplin dan adaptif.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => {
            const IconComponent = categoryIcons[cat.category] || Sparkles;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-blue-950 border border-slate-200">
                      <IconComponent className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {cat.items.length} Poin Keahlian
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed min-h-[36px]">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {cat.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/90 hover:bg-slate-100/70 transition-colors"
                      >
                        {/* Left: Name and Tag */}
                        <div className="min-w-0 pr-2">
                          <div className="font-semibold text-slate-900 text-xs sm:text-sm leading-tight">
                            {skill.name}
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                            {skill.tag}
                          </div>
                        </div>

                        {/* Right: Clean Mastery Badge */}
                        <span
                          className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border flex-shrink-0 whitespace-nowrap self-center ${
                            skill.level === 'Mahir'
                              ? 'text-emerald-800 bg-emerald-50 border-emerald-200'
                              : 'text-blue-800 bg-blue-50 border-blue-200'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Status */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Teruji di Lapangan</span>
                  </span>
                  <span className="font-mono text-slate-400">
                    {cat.items.length} Poin
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
