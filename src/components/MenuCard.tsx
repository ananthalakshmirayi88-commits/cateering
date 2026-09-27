import React from 'react';
import { MenuItem, Language } from '../types';
import { Flame, Check, Plus, Sparkles, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../i18n/translations';

interface MenuCardProps {
  item: MenuItem;
  language: Language;
  isSelected: boolean;
  onToggleSelect: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  language,
  isSelected,
  onToggleSelect,
}) => {
  const t = TRANSLATIONS[language];
  const displayName = language === 'te' ? item.nameTe : item.name;
  const secondaryName = language === 'te' ? item.name : item.nameTe;
  const displayDescription = language === 'te' ? item.descriptionTe : item.description;
  const categoryLabel = language === 'te' ? item.categoryLabelTe : item.categoryLabelEn;
  const servingStyle = language === 'te' ? item.servingStyleTe : item.servingStyleEn;
  const accompaniments = language === 'te' ? item.accompanimentsTe : item.accompanimentsEn;

  return (
    <div
      id={`menu-card-${item.id}`}
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-lg ${
        isSelected
          ? 'border-amber-600 ring-2 ring-amber-600/20 bg-amber-50/10'
          : 'border-stone-200/90 hover:border-amber-400'
      }`}
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-stone-100">
        <img
          id={`menu-img-${item.id}`}
          src={item.image}
          alt={displayName}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          {/* Dietary Indicator */}
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold text-stone-800 shadow-xs">
            {item.dietary === 'veg' ? (
              <>
                <span className="w-2.5 h-2.5 rounded-full border border-emerald-600 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                </span>
                <span>{language === 'te' ? 'శాఖాహారం' : 'Pure Veg'}</span>
              </>
            ) : (
              <>
                <span className="w-2.5 h-2.5 rounded-full border border-rose-600 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                </span>
                <span>{language === 'te' ? 'నాన్-వెజ్' : 'Non-Veg'}</span>
              </>
            )}
          </div>

          {/* Live Counter Badge */}
          {item.isLiveCounter && (
            <div
              id={`live-counter-badge-${item.id}`}
              className="flex items-center gap-1 bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md"
            >
              <Flame className="w-3.5 h-3.5 fill-current animate-pulse text-amber-200" />
              <span>{t.menu.liveCounterBadge}</span>
            </div>
          )}
        </div>

        {/* Bottom Tag overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {item.isChefSpecial ? (
            <span className="inline-flex items-center gap-1 bg-rose-700/95 text-white text-[11px] font-medium px-2 py-0.5 rounded-md shadow-xs">
              <Sparkles className="w-3 h-3" />
              {language === 'te' ? 'స్పెషల్' : "Chef's Special"}
            </span>
          ) : (
            <span></span>
          )}
          <span className="text-[11px] font-medium bg-black/75 text-amber-100 px-2 py-0.5 rounded-md backdrop-blur-xs">
            {servingStyle}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category Subtitle */}
          <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 mb-1">
            {categoryLabel}
          </div>

          {/* Dish Name */}
          <h3
            id={`dish-title-${item.id}`}
            className="text-lg font-bold text-stone-900 tracking-tight leading-snug group-hover:text-amber-900 transition-colors"
          >
            {displayName}
          </h3>
          <div className="text-xs text-stone-500 font-medium">
            {secondaryName}
          </div>

          {/* Professional Description */}
          <p className="mt-2.5 text-xs leading-relaxed text-stone-600 line-clamp-3">
            {displayDescription}
          </p>

          {/* Accompaniments tags */}
          {accompaniments && accompaniments.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-stone-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                {t.menu.servedWith}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {accompaniments.slice(0, 3).map((acc, index) => (
                  <span
                    key={index}
                    className="text-[11px] px-2 py-0.5 bg-amber-50/80 border border-amber-200/60 text-stone-700 rounded-md"
                  >
                    {acc}
                  </span>
                ))}
                {accompaniments.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 text-stone-600 font-medium">
                    +{accompaniments.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Button & Selection State */}
        <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
          <div className="text-xs text-stone-500 italic">
            {isSelected ? (
              <span className="flex items-center gap-1 font-semibold text-emerald-700 not-italic">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.menu.selectedButton}
              </span>
            ) : (
              <span>{t.menu.priceOnEnquiry}</span>
            )}
          </div>

          <button
            id={`btn-select-${item.id}`}
            type="button"
            onClick={() => onToggleSelect(item)}
            className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
              isSelected
                ? 'bg-emerald-700 hover:bg-emerald-800 text-white ring-1 ring-emerald-600'
                : 'bg-amber-700 hover:bg-amber-800 text-white'
            }`}
          >
            {isSelected ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{t.menu.selectedButton}</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{t.menu.addButton}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
