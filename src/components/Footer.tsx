import React from 'react';
import { Phone, MapPin, UtensilsCrossed, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';

interface FooterProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onToggleLanguage }) => {
  const t = TRANSLATIONS[language];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Business Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-700 flex items-center justify-center text-white shrink-0">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                  {BUSINESS_INFO.nameTe}
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  {BUSINESS_INFO.nameEn}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              {language === 'te'
                ? 'పెద్దాపురం మరియు పరిసర ప్రాంతాలలో వివాహాలు, గృహప్రవేశాలు, పుట్టినరోజులు మరియు కుటుంబ వేడుకల కోసం పరిశుభ్రమైన, రుచికరమైన ఆంధ్రా సంప్రదాయ వంటకాలు & క్యాటరింగ్ సేవలు.'
                : 'Authentic South Indian & Andhra catering service based in Peddapuram. Delivering delicious food, hygienic preparation, and dedicated event hospitality.'}
            </p>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <span className="text-stone-400">{t.footer.langSwitch}</span>
              <button
                type="button"
                onClick={() => onToggleLanguage('te')}
                className={`px-2 py-0.5 rounded cursor-pointer ${
                  language === 'te' ? 'bg-amber-700 text-white font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                తెలుగు
              </button>
              <span className="text-stone-600">|</span>
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-0.5 rounded cursor-pointer ${
                  language === 'en' ? 'bg-amber-700 text-white font-bold' : 'text-stone-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-amber-300 cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-300 cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-amber-300 cursor-pointer"
                >
                  {t.nav.menu}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('catering')}
                  className="hover:text-amber-300 cursor-pointer"
                >
                  {t.nav.catering}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('live-counters')}
                  className="hover:text-amber-300 cursor-pointer"
                >
                  {t.nav.liveCounters}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('booking')}
                  className="hover:text-amber-300 cursor-pointer"
                >
                  {t.nav.booking}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Contact & Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              {BUSINESS_INFO.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 hover:text-amber-300 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{phone}</span>
                </a>
              ))}

              <div className="pt-2 flex items-start gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{t.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <div>
            © {new Date().getFullYear()} {language === 'te' ? BUSINESS_INFO.nameTe : BUSINESS_INFO.nameEn}. {t.footer.copyright}
          </div>
          <div>
            {language === 'te' ? 'పెద్దాపురం - 533437, ఆంధ్రప్రదేశ్' : 'Peddapuram - 533437, Andhra Pradesh'}
          </div>
        </div>
      </div>
    </footer>
  );
};
