import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CateringServicesSection } from './components/CateringServicesSection';
import { MenuFilterBar } from './components/MenuFilterBar';
import { MenuCard } from './components/MenuCard';
import { LiveCountersSection } from './components/LiveCountersSection';
import { BookingSection } from './components/BookingSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { SelectedMenuModal } from './components/SelectedMenuModal';
import { StickySelectionBar } from './components/StickySelectionBar';
import { MENU_ITEMS } from './data/menuItems';
import { MenuItem, Language, MenuCategoryKey } from './types';
import { TRANSLATIONS } from './i18n/translations';
import { Utensils, Sparkles } from 'lucide-react';

export default function App() {
  // Bilingual Language State ('te' as primary default as requested)
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('shalini_catering_lang');
      return saved === 'en' ? 'en' : 'te';
    } catch {
      return 'te';
    }
  });

  const handleToggleLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('shalini_catering_lang', lang);
    } catch {}
  };

  const t = TRANSLATIONS[language];

  // State for selected menu items
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>(() => {
    return MENU_ITEMS.filter((item) => item.id === 'idli' || item.id === 'masala-dosa');
  });

  // Filter & Search states
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showLiveOnly, setShowLiveOnly] = useState<boolean>(false);

  // Modal open state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Toggle selection
  const handleToggleSelect = (item: MenuItem) => {
    setSelectedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered menu items
  const filteredMenuItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'tiffins' && item.category !== 'tiffins') return false;
        if (activeCategory === 'veg' && item.category !== 'veg') return false;
        if (activeCategory === 'non-veg' && item.category !== 'non-veg') return false;
        if (activeCategory === 'special' && item.category !== 'special') return false;
        if (activeCategory === 'live' && !item.isLiveCounter) return false;
        if (activeCategory === 'catering' && item.category !== 'veg' && item.category !== 'non-veg') return false;
      }

      // Live Counter filter toggle
      if (showLiveOnly && !item.isLiveCounter) {
        return false;
      }

      // Search filter in both English and Telugu
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesNameTe = item.nameTe.includes(searchQuery);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesDescTe = item.descriptionTe.includes(searchQuery);
        const matchesCat = item.categoryLabelEn.toLowerCase().includes(q);
        const matchesCatTe = item.categoryLabelTe.includes(searchQuery);

        if (!matchesName && !matchesNameTe && !matchesDesc && !matchesDescTe && !matchesCat && !matchesCatTe) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, showLiveOnly, searchQuery]);

  // Live items subset for the dedicated Live Counters section
  const liveCounterItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => item.isLiveCounter);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50/70 text-stone-900 flex flex-col font-sans antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* 1. Official Navbar with Language Switcher */}
      <Navbar
        language={language}
        onToggleLanguage={handleToggleLanguage}
        selectedItems={selectedItems}
        onOpenSelectionModal={() => setIsModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <HeroSection
        language={language}
        onBookClick={() => scrollToSection('booking')}
        onExploreMenuClick={() => scrollToSection('menu')}
      />

      {/* 3. About Section */}
      <AboutSection language={language} />

      {/* 4. Catering Services Section (8 Categories) */}
      <CateringServicesSection
        language={language}
        onBookClick={() => scrollToSection('booking')}
      />

      {/* 5. Food Menu Catalog Section */}
      <section id="menu" className="scroll-mt-24">
        {/* Interactive Menu Filtering Bar */}
        <MenuFilterBar
          language={language}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showLiveOnly={showLiveOnly}
          onToggleLiveOnly={() => setShowLiveOnly(!showLiveOnly)}
          totalCount={MENU_ITEMS.length}
          filteredCount={filteredMenuItems.length}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
                <Utensils className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.menu.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif mt-1">
                {t.menu.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-2xl leading-relaxed">
                {t.menu.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-stone-600">
                {language === 'te' ? 'ఎంచుకున్న వంటకాలు:' : 'Selected in quotation:'}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                {selectedItems.length} {language === 'te' ? 'వంటకాలు' : 'items'}
              </span>
            </div>
          </div>

          {/* Food Menu Grid (3-column responsive grid on desktop) */}
          {filteredMenuItems.length > 0 ? (
            <div
              id="food-menu-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            >
              {filteredMenuItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  language={language}
                  isSelected={selectedItems.some((i) => i.id === item.id)}
                  onToggleSelect={handleToggleSelect}
                />
              ))}
            </div>
          ) : (
            /* Empty Search / Filter State */
            <div className="text-center py-16 px-4 bg-white rounded-2xl border border-stone-200 p-8 shadow-xs">
              <Utensils className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-stone-800">
                {t.menu.emptySearch}
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                {language === 'te'
                  ? 'మీరు వెతికిన పదం దొరకలేదు. ఇడ్లీ, దోశ, ఉప్మా, పొంగల్ లేదా బిర్యానీ అని వెతికి చూడండి.'
                  : `We couldn't find any dishes matching "${searchQuery}". Try searching for Idli, Dosa, Upma, or Pongal.`}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setShowLiveOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold cursor-pointer"
              >
                {t.menu.resetFilters}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 6. Dedicated Live Counters Section */}
      <LiveCountersSection
        language={language}
        liveItems={liveCounterItems}
        selectedItems={selectedItems}
        onToggleSelect={handleToggleSelect}
        onBookClick={() => scrollToSection('booking')}
      />

      {/* 7. Gallery Section */}
      <GallerySection language={language} />

      {/* 8. Booking / Enquiry Form Section */}
      <BookingSection
        language={language}
        selectedItems={selectedItems}
      />

      {/* 9. Reviews Section (Honest & Authentic) */}
      <ReviewsSection language={language} />

      {/* 10. Frequently Asked Questions (FAQ) Section */}
      <FaqSection language={language} />

      {/* 11. Official Contact & Location Section */}
      <ContactSection language={language} />

      {/* 12. Footer with Official Details & Language switch */}
      <Footer
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* 13. Interactive Bilingual AI Chatbot Assistant */}
      <Chatbot
        language={language}
        onNavigateTo={scrollToSection}
      />

      {/* 14. Floating Sticky Selection Bar */}
      <StickySelectionBar
        selectedItems={selectedItems}
        onOpenModal={() => setIsModalOpen(true)}
        language={language}
      />

      {/* 15. Modal / Drawer for Viewing Selected Menu */}
      <SelectedMenuModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedItems={selectedItems}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
        language={language}
        onProceedToBooking={() => scrollToSection('booking')}
      />
    </div>
  );
}
