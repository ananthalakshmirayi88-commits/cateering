import React from 'react';
import { Language, MenuItem } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Flame, Sparkles, Check, Plus } from 'lucide-react';

interface LiveCountersSectionProps {
  language: Language;
  liveItems: MenuItem[];
  selectedItems: MenuItem[];
  onToggleSelect: (item: MenuItem) => void;
  onBookClick: () => void;
}

export const LiveCountersSection: React.FC<LiveCountersSectionProps> = ({
  language,
  liveItems,
  selectedItems,
  onToggleSelect,
  onBookClick,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="live-counters" className="py-16 sm:py-20 bg-stone-950 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950 text-amber-300 text-xs font-bold border border-amber-600/50 mb-3 shadow-xs">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
            <span>{t.liveCounters.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-stone-100">
            {t.liveCounters.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {t.liveCounters.subtitle}
          </p>
        </div>

        {/* Live Counters Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveItems.map((item) => {
            const isSelected = selectedItems.some((i) => i.id === item.id);
            return (
              <div
                key={item.id}
                id={`live-counter-card-${item.id}`}
                className={`group rounded-2xl bg-stone-900 border overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/20'
                    : 'border-stone-800 hover:border-amber-500/40'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={language === 'te' ? item.nameTe : item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    <Flame className="w-3.5 h-3.5 fill-current animate-pulse text-amber-200" />
                    <span>{language === 'te' ? 'లైవ్ కౌంటర్' : 'Live Counter'}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-right">
                    <span className="text-[11px] font-medium bg-black/80 text-amber-200 px-2.5 py-1 rounded-md backdrop-blur-xs">
                      {language === 'te' ? item.servingStyleTe : item.servingStyleEn}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {language === 'te' ? item.nameTe : item.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium mt-0.5">
                      {language === 'te' ? item.name : item.nameTe}
                    </p>
                    <p className="mt-2 text-xs text-stone-300 leading-relaxed line-clamp-3">
                      {language === 'te' ? item.descriptionTe : item.description}
                    </p>

                    {/* Accompaniments */}
                    {item.accompanimentsEn && (
                      <div className="mt-3 pt-2.5 border-t border-stone-800 flex flex-wrap gap-1.5">
                        {(language === 'te' ? item.accompanimentsTe : item.accompanimentsEn)?.map((acc, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-stone-800 text-amber-200 border border-stone-700"
                          >
                            {acc}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Add / Selected button */}
                  <div className="mt-5 pt-3.5 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 italic">
                      {t.menu.priceOnEnquiry}
                    </span>

                    <button
                      type="button"
                      onClick={() => onToggleSelect(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white ring-1 ring-emerald-500'
                          : 'bg-amber-600 hover:bg-amber-500 text-white'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.menu.selectedButton}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{t.menu.addButton}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
