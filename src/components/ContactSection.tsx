import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';
import { Phone, MapPin, MessageSquare, ExternalLink, Sparkles, Navigation, Clock } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 text-amber-300 text-xs font-bold border border-amber-600/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-stone-100">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Official Phone Numbers */}
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-amber-800/40 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center mb-4 border border-amber-800/60">
                <Phone className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white font-serif mb-1">
                {t.contact.phoneTitle}
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                {language === 'te'
                  ? 'క్యాటరింగ్ ఆర్డర్లు, తేదీల అందుబాటు మరియు మెనూ వివరాల కోసం సంప్రదించండి.'
                  : 'Call our team directly for availability, tastings, and menu finalization.'}
              </p>

              <div className="space-y-3">
                {BUSINESS_INFO.phones.map((phone, idx) => (
                  <div
                    key={phone}
                    className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-900/60 text-amber-300 text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-bold text-amber-200 tracking-wider">
                        {phone}
                      </span>
                    </div>

                    <a
                      href={`tel:${phone}`}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-700 hover:bg-amber-600 text-white text-xs font-bold transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{t.contact.callNowBtn}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <div className="mt-6 pt-4 border-t border-stone-800">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  language === 'te'
                    ? 'నమస్తే శాలిని దేవి క్యాటరింగ్, నేను క్యాటరింగ్ బుకింగ్ వివరాలు తెలుసుకోవాలనుకుంటున్నాను.'
                    : 'Hello Shalini Devi Cooking & Catering, I would like to inquire about catering bookings.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsappBtn} ({BUSINESS_INFO.phones[0]})</span>
              </a>
            </div>
          </div>

          {/* Card 2: Official Address & Directions */}
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-950 border border-amber-800/40 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center mb-4 border border-amber-800/60">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white font-serif mb-1">
                {t.contact.addressTitle}
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                {language === 'te'
                  ? 'పెద్దాపురం పట్టణంలో మా కార్యాలయం మరియు వంటగది ఉంది.'
                  : 'Our main office and central catering kitchen located in Peddapuram.'}
              </p>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  {language === 'te' ? BUSINESS_INFO.nameTe : BUSINESS_INFO.nameEn}
                </div>
                <div className="text-sm font-semibold text-stone-100 leading-snug">
                  {t.address}
                </div>
                <div className="text-xs text-stone-400 pt-1 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-amber-500" />
                  <span>{language === 'te' ? 'పెద్దాపురం, ఆంధ్రప్రదేశ్ - 533437' : 'Peddapuram, Andhra Pradesh - 533437'}</span>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="mt-6 pt-4 border-t border-stone-800 space-y-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 border border-amber-600/40 font-bold text-xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>{t.contact.directionsBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <p className="text-[11px] text-stone-400 text-center">
                {language === 'te'
                  ? 'సేవలు: పెద్దాపురం, సామర్లకోట, కాకినాడ, రాజమండ్రి & పరిసర ప్రాంతాలు'
                  : 'Service Area: Peddapuram, Samalkota, Kakinada, Rajahmundry & nearby regions'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
