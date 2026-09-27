import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';
import { Utensils, Sparkles, CheckCircle2, HeartHandshake, ShieldCheck, Clock } from 'lucide-react';
import liveDosaImg from '../assets/images/live_dosa_catering_counter_1790047697469.jpg';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="about" className="py-16 sm:py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual of Live Preparation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-amber-900/10 bg-white">
              <img
                src={liveDosaImg}
                alt="Shalini Devi Cooking & Catering Live Kitchen Preparation"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-amber-950 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {language === 'te' ? 'వ్యాపార చిరునామా' : 'Business Location'}
                  </div>
                  <div className="text-xs text-stone-200 mt-0.5">
                    {t.address}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-amber-400">
                    {language === 'te' ? 'కాల్ చేయండి' : 'Call Directly'}
                  </div>
                  <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="text-xs text-white font-bold hover:underline">
                    {BUSINESS_INFO.phones[0]}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 font-serif leading-snug">
              {t.about.title}
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>{t.about.para1}</p>
              <p>{t.about.para2}</p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              {t.about.highlights.map((h, index) => (
                <div key={index} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-stone-200 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-stone-900">{h.title}</h3>
                    <p className="text-[11px] text-stone-600 mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
