import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Star, MessageSquareQuote, ShieldCheck } from 'lucide-react';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="reviews" className="py-16 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300 mb-3">
          <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
          <span>{t.reviews.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900 mb-3">
          {t.reviews.title}
        </h2>

        {/* Honest reviews container */}
        <div className="mt-8 p-8 bg-white rounded-2xl border border-stone-200 shadow-xs max-w-2xl mx-auto">
          <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquareQuote className="w-6 h-6" />
          </div>

          <h3 className="text-base font-bold text-stone-900 mb-2">
            {t.reviews.placeholderNotice}
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg mx-auto">
            {t.reviews.note}
          </p>

          <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-center gap-2 text-xs text-stone-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {language === 'te'
                ? 'పారదర్శకమైన మరియు వాస్తవిక క్యాటరింగ్ సేవలు'
                : 'Commitment to Genuine Quality & Honest Hospitality'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
