import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';
import { CalendarCheck, MessageSquare, Send, Sparkles, Heart, Home, Gift, BellRing, Users, Star, Music } from 'lucide-react';

interface CateringServicesSectionProps {
  language: Language;
  onBookClick: (eventType?: string) => void;
}

export const CateringServicesSection: React.FC<CateringServicesSectionProps> = ({
  language,
  onBookClick,
}) => {
  const t = TRANSLATIONS[language];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'weddings': return <Heart className="w-5 h-5 text-rose-600" />;
      case 'birthdays': return <Gift className="w-5 h-5 text-amber-600" />;
      case 'anniversaries': return <Star className="w-5 h-5 text-amber-500" />;
      case 'housewarming': return <Home className="w-5 h-5 text-emerald-600" />;
      case 'religious': return <BellRing className="w-5 h-5 text-orange-600" />;
      case 'family': return <Users className="w-5 h-5 text-indigo-600" />;
      case 'special': return <Sparkles className="w-5 h-5 text-purple-600" />;
      default: return <Music className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="catering" className="py-16 sm:py-20 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 text-amber-300 text-xs font-bold border border-amber-600/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-stone-100">
            {t.services.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 8 Function Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-2xl bg-stone-850 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.id)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-800/80">
                <button
                  type="button"
                  onClick={() => onBookClick(service.title)}
                  className="w-full text-center py-2 px-3 rounded-xl bg-stone-800 hover:bg-amber-700 text-amber-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {language === 'te' ? 'ఈ వేడుకకు బుక్ చేయండి' : 'Enquire for this Event'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-950 border border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-white font-serif">
              {language === 'te' ? 'మీ ఈవెంట్ కోసం మెనూ ప్లాన్ చేయాలా?' : 'Ready to Plan Your Event Menu?'}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {language === 'te'
                ? 'మా వంట మాస్టర్లతో మాట్లాడి మెనూ మరియు ఏర్పాట్లను ఖరారు చేసుకోండి.'
                : 'Connect directly with our catering team to customize dishes and schedule your date.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              id="services-btn-book"
              type="button"
              onClick={() => onBookClick()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t.services.bookCateringBtn}</span>
            </button>

            <button
              id="services-btn-enquiry"
              type="button"
              onClick={() => onBookClick()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-bold transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.services.sendEnquiryBtn}</span>
            </button>

            <a
              id="services-btn-whatsapp"
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                language === 'te'
                  ? 'నమస్తే, నేను ఫంక్షన్ క్యాటరింగ్ సర్వీసుల వివరాలు తెలుసుకోవాలనుకుంటున్నాను.'
                  : 'Hello, I want to inquire about your catering services for an upcoming function.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.services.whatsappBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
