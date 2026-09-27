import React from 'react';
import { Phone, MessageSquare, CalendarCheck, Utensils, MapPin, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';
import heroImg from '../assets/images/catering_buffet_setup_1790047673048.jpg';

interface HeroSectionProps {
  language: Language;
  onBookClick: () => void;
  onExploreMenuClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onBookClick,
  onExploreMenuClick,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white pt-10 sm:pt-14 pb-16 border-b border-stone-800 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Tagline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.hero.subBadge}</span>
            </div>

            {/* Dual Business Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-100 font-serif leading-tight">
                {language === 'te' ? (
                  <>
                    <span className="block text-amber-400">{BUSINESS_INFO.nameTe}</span>
                    <span className="block text-xl sm:text-2xl text-stone-300 font-normal mt-1">
                      {BUSINESS_INFO.nameEn}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-amber-400">{BUSINESS_INFO.nameEn}</span>
                    <span className="block text-xl sm:text-2xl text-stone-300 font-normal mt-1">
                      {BUSINESS_INFO.nameTe}
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-medium text-amber-200/90 italic font-serif">
              "{t.tagline}"
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            {/* Address Banner */}
            <div className="flex items-center gap-2 text-xs text-stone-400 bg-stone-900/80 p-2.5 rounded-xl border border-stone-800 max-w-lg">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.address}</span>
            </div>

            {/* 4 Hero Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              {/* 1. Book Catering */}
              <button
                id="hero-btn-book"
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-amber-600/30 transition-all cursor-pointer active:scale-95"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.hero.bookBtn}</span>
              </button>

              {/* 2. Explore Menu */}
              <button
                id="hero-btn-menu"
                type="button"
                onClick={onExploreMenuClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 border border-amber-600/40 text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95"
              >
                <Utensils className="w-4 h-4" />
                <span>{t.hero.exploreMenuBtn}</span>
              </button>

              {/* 3. WhatsApp Us */}
              <a
                id="hero-btn-whatsapp"
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  language === 'te'
                    ? 'నమస్తే శాలిని దేవి క్యాటరింగ్, నేను క్యాటరింగ్ బుకింగ్ వివరాలు తెలుసుకోవాలనుకుంటున్నాను.'
                    : 'Hello Shalini Devi Cooking & Catering, I would like to know details about catering bookings.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.hero.whatsappBtn}</span>
              </a>

              {/* 4. Call Now */}
              <a
                id="hero-btn-call"
                href={`tel:${BUSINESS_INFO.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-800 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold border border-amber-500/50 shadow-md transition-all cursor-pointer active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{t.hero.callBtn}</span>
              </a>
            </div>

            {/* Clickable Phone Numbers Quick List */}
            <div className="pt-2 text-xs text-stone-400">
              <span className="font-semibold text-stone-300 mr-2">
                {language === 'te' ? 'కాల్ చేయండి:' : 'Direct Call:'}
              </span>
              <span className="space-x-3">
                {BUSINESS_INFO.phones.map((phone, idx) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="inline-block text-amber-300 hover:underline font-semibold"
                  >
                    {phone}
                    {idx < BUSINESS_INFO.phones.length - 1 ? ',' : ''}
                  </a>
                ))}
              </span>
            </div>
          </div>

          {/* Right Column: High Quality Authentic Catering Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-amber-600/30 shadow-2xl bg-stone-900 group">
              <img
                src={heroImg}
                alt="Shalini Devi Cooking & Catering Buffet Setup"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/80 backdrop-blur-md border border-amber-600/40">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Flame className="w-4 h-4 fill-current" />
                  <span>{language === 'te' ? 'ప్రత్యేక ఆకర్షణ' : 'Special Highlight'}</span>
                </div>
                <p className="text-xs text-stone-200 leading-snug">
                  {language === 'te'
                    ? 'వేడివేడి లైవ్ దోశ, పూరి కౌంటర్లు మరియు విస్తరాకు విందు భోజనాలు'
                    : 'Sizzling Live Dosa & Poori Counters + Traditional Banana Leaf Feasts'}
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-amber-300 font-semibold border-t border-stone-700/60 pt-2">
                  <span>{language === 'te' ? 'పెద్దాపురం & పరిసర ప్రాంతాలు' : 'Peddapuram & Nearby Towns'}</span>
                  <span>{BUSINESS_INFO.phones[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
