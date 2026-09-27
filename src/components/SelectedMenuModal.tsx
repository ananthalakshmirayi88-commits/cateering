import React from 'react';
import { MenuItem, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { X, Trash2, CalendarCheck, UtensilsCrossed, Flame } from 'lucide-react';

interface SelectedMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: MenuItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  language: Language;
  onProceedToBooking: () => void;
}

export const SelectedMenuModal: React.FC<SelectedMenuModalProps> = ({
  isOpen,
  onClose,
  selectedItems,
  onRemoveItem,
  onClearAll,
  language,
  onProceedToBooking,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] bg-stone-900 border border-amber-600/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-stone-100">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-700/80 text-white flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white font-serif">
                {t.selectedDrawer.title} ({selectedItems.length})
              </h2>
              <p className="text-[11px] text-amber-200/80">
                {t.selectedDrawer.subtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {selectedItems.length === 0 ? (
            <div className="text-center py-10 text-stone-400">
              <UtensilsCrossed className="w-12 h-12 mx-auto mb-3 opacity-30 text-amber-400" />
              <p className="text-sm font-medium">{t.selectedDrawer.empty}</p>
            </div>
          ) : (
            selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={language === 'te' ? item.nameTe : item.name}
                    className="w-12 h-12 rounded-lg object-cover shrink-0 border border-stone-700"
                  />
                  <div className="truncate">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                      {language === 'te' ? item.nameTe : item.name}
                    </h4>
                    <p className="text-[11px] text-amber-300 truncate">
                      {language === 'te' ? item.name : item.nameTe}
                    </p>
                    {item.isLiveCounter && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 font-bold mt-0.5">
                        <Flame className="w-3 h-3 fill-current" />
                        {t.menu.liveCounterBadge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-stone-400 italic hidden sm:inline">
                    {t.menu.priceOnEnquiry}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 rounded-lg text-rose-400 hover:text-white hover:bg-rose-900/60 transition-colors cursor-pointer"
                    title={t.selectedDrawer.remove}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        {selectedItems.length > 0 && (
          <div className="p-4 bg-stone-950 border-t border-stone-800 space-y-3">
            <div className="text-[11px] text-stone-400 text-center italic">
              {t.selectedDrawer.pricingNotice}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClearAll}
                className="text-xs text-stone-400 hover:text-rose-300 font-medium px-3 py-2 cursor-pointer"
              >
                {t.selectedDrawer.clearAll}
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onProceedToBooking();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer transition-colors"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.selectedDrawer.proceedToBooking}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
