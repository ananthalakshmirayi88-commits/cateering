import React, { useState } from 'react';
import { Phone, UtensilsCrossed, ShoppingBag, Menu as MenuIcon, X, Globe, MessageSquare } from 'lucide-react';
import { Language, MenuItem } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';

interface NavbarProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  selectedItems: MenuItem[];
  onOpenSelectionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  selectedItems,
  onOpenSelectionModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'menu', label: t.nav.menu },
    { id: 'catering', label: t.nav.catering },
    { id: 'live-counters', label: t.nav.liveCounters },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'booking', label: t.nav.booking },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-md border-b border-amber-900/40 text-stone-100 shadow-md">
      {/* Top Official Info Bar */}
      <div className="bg-amber-950/90 px-3 sm:px-4 py-1.5 border-b border-amber-900/30 text-[11px] text-amber-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
            <span className="truncate font-medium">
              {language === 'te'
                ? `శాలిని దేవి కుకింగ్ & క్యాటరింగ్ • ${t.address}`
                : `Shalini Devi Cooking & Catering • ${t.address}`}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phones[0]}`}
              className="flex items-center gap-1 hover:text-amber-100 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BUSINESS_INFO.phones[0]}</span>
            </a>
            <span className="text-amber-600 hidden md:inline">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phones[1]}`}
              className="hidden md:flex items-center gap-1 hover:text-amber-100 transition-colors"
            >
              <span>{BUSINESS_INFO.phones[1]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center text-amber-100 shadow-md border border-amber-500/40 shrink-0 group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif leading-tight">
              {language === 'te' ? BUSINESS_INFO.nameTe : BUSINESS_INFO.nameEn}
            </h1>
            <p className="text-[11px] text-amber-200/80 font-medium truncate max-w-[200px] sm:max-w-sm">
              {language === 'te' ? BUSINESS_INFO.nameEn : BUSINESS_INFO.nameTe}
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-xs font-semibold text-stone-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-stone-800/60 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Language Switcher, Selected Menu, Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* REAL Language Switcher */}
          <div
            id="lang-switcher"
            className="flex items-center bg-stone-900 rounded-xl p-1 border border-amber-700/50 shadow-inner"
          >
            <button
              id="lang-btn-te"
              type="button"
              onClick={() => onToggleLanguage('te')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                language === 'te'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-400 hover:text-white'
              }`}
              title="తెలుగు భాషను ఎంచుకోండి"
            >
              తెలుగు
            </button>
            <span className="text-stone-600 px-0.5 text-xs">|</span>
            <button
              id="lang-btn-en"
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-400 hover:text-white'
              }`}
              title="Select English Language"
            >
              English
            </button>
          </div>

          {/* Selected Menu Button */}
          <button
            id="btn-nav-selected-items"
            type="button"
            onClick={onOpenSelectionModal}
            className="relative inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 border border-amber-600/40 text-xs font-bold transition-all cursor-pointer"
            title={t.nav.selectedItems}
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{t.nav.selectedItems}</span>
            <span className="px-1.5 py-0.2 bg-amber-600 text-white text-[11px] font-bold rounded-full">
              {selectedItems.length}
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="btn-mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800 cursor-pointer border border-stone-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 py-5 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-left px-3 py-2.5 rounded-lg bg-stone-900 text-stone-200 hover:text-amber-300 hover:bg-stone-800"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-stone-400 pb-1">
              <span>{t.footer.langSwitch}</span>
              <span className="font-bold text-amber-300">
                {language === 'te' ? 'తెలుగు' : 'English'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phones[0]}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-700 text-white font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.nav.callNow}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  language === 'te'
                    ? 'నమస్తే శాలిని దేవి క్యాటరింగ్, నేను క్యాటరింగ్ వివరాల కోసం మెసేజ్ చేస్తున్నాను.'
                    : 'Hello Shalini Devi Cooking & Catering, I would like to inquire about catering services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.nav.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
