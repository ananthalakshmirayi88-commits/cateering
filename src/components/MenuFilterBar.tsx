import React from 'react';
import { Search, Flame, X } from 'lucide-react';
import { Language, MenuCategoryKey } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface MenuFilterBarProps {
  language: Language;
  activeCategory: MenuCategoryKey;
  onSelectCategory: (category: MenuCategoryKey) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showLiveOnly: boolean;
  onToggleLiveOnly: () => void;
  totalCount: number;
  filteredCount: number;
}

export const MenuFilterBar: React.FC<MenuFilterBarProps> = ({
  language,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  showLiveOnly,
  onToggleLiveOnly,
  totalCount,
  filteredCount,
}) => {
  const t = TRANSLATIONS[language];

  const categories: { key: MenuCategoryKey; label: string }[] = [
    { key: 'all', label: t.menu.categories.all },
    { key: 'tiffins', label: t.menu.categories.tiffins },
    { key: 'veg', label: t.menu.categories.veg },
    { key: 'non-veg', label: t.menu.categories['non-veg'] },
    { key: 'special', label: t.menu.categories.special },
    { key: 'live', label: t.menu.categories.live },
  ];

  return (
    <div className="bg-white border-b border-stone-200 sticky top-20 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Top Controls: Search and Quick Toggles */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="menu-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-10 pr-9 py-2 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 text-xs sm:text-sm bg-stone-50/50 placeholder:text-stone-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Filter Toggles */}
          <div className="flex items-center gap-2">
            <button
              id="filter-live-only-btn"
              type="button"
              onClick={onToggleLiveOnly}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                showLiveOnly
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${showLiveOnly ? 'text-amber-200' : 'text-amber-600'}`} />
              <span>{t.menu.liveOnly}</span>
            </button>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                id={`cat-btn-${cat.key}`}
                type="button"
                onClick={() => onSelectCategory(cat.key)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}

          <div className="ml-auto pl-2 text-xs text-stone-500 whitespace-nowrap hidden md:block">
            {language === 'te' ? (
              <>
                మొత్తం <strong className="text-stone-900">{filteredCount}</strong> వంటకాలు
              </>
            ) : (
              <>
                Showing <strong className="text-stone-900">{filteredCount}</strong> of {totalCount} dishes
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
