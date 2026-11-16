import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Studi Kasus', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        isScrolled
          ? 'border-b border-slate-200 shadow-sm py-3.5'
          : 'border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-900 text-white font-bold flex items-center justify-center text-sm tracking-wider shadow-sm transition-transform group-hover:scale-105">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base text-slate-900 leading-tight">
              Ade Sufyansah, S.Kom
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              S1 Teknik Informatika
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="/CV_Ade_Sufyansah.pdf"
            download="CV_Ade_Sufyansah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>Unduh CV</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2" aria-label="Navigasi Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="/CV_Ade_Sufyansah.pdf"
              download="CV_Ade_Sufyansah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Unduh CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
