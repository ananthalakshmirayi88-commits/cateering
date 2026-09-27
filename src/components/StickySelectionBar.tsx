import React from 'react';
import { MenuItem, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { ShoppingBag, ChevronRight } from 'lucide-react';

interface StickySelectionBarProps {
  selectedItems: MenuItem[];
  onOpenModal: () => void;
  language: Language;
}

export const StickySelectionBar: React.FC<StickySelectionBarProps> = ({
  selectedItems,
  onOpenModal,
  language,
}) => {
  if (selectedItems.length === 0) return null;

  const t = TRANSLATIONS[language];

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-xl mx-auto z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-stone-900/95 backdrop-blur-md border border-amber-600/50 shadow-2xl rounded-2xl p-3 sm:px-4 flex items-center justify-between text-white gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-xs">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <span>{selectedItems.length}</span>
              <span>{language === 'te' ? 'వంటకాలు ఎంచుకోబడ్డాయి' : 'Dishes Selected'}</span>
            </div>
            <p className="text-[11px] text-stone-300 truncate max-w-[200px] sm:max-w-xs">
              {selectedItems.map((i) => (language === 'te' ? i.nameTe : i.name)).join(', ')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenModal}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold shrink-0 transition-colors shadow-xs cursor-pointer"
        >
          <span>{language === 'te' ? 'జాబితా చూడండి' : 'View Menu'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
