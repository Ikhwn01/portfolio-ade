import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-slate-200 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-900 text-white font-bold flex items-center justify-center text-xs">
              AS
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">Ade Sufyansah, S.Kom</span>
              <span className="text-[11px] text-slate-500">Lulusan S1 Teknik Informatika (UNINDRA)</span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600" aria-label="Navigasi Footer">
            <a href="#about" className="hover:text-blue-900 transition-colors">Tentang</a>
            <a href="#projects" className="hover:text-blue-900 transition-colors">Studi Kasus</a>
            <a href="#skills" className="hover:text-blue-900 transition-colors">Keahlian</a>
            <a href="#experience" className="hover:text-blue-900 transition-colors">Pengalaman</a>
            <a href="#education" className="hover:text-blue-900 transition-colors">Pendidikan</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Kontak</a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>© {currentYear} Ade Sufyansah. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Frontend: React</span>
            <span>•</span>
            <span>Backend: Node.js</span>
            <span>•</span>
            <span>Kota Bekasi, Jawa Barat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
