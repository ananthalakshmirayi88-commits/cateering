import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { Sparkles, Camera } from 'lucide-react';

import buffetImg from '../assets/images/catering_buffet_setup_1790047673048.jpg';
import liveDosaImg from '../assets/images/live_dosa_catering_counter_1790047697469.jpg';
import mealsImg from '../assets/images/south_indian_meals_1790045574716.jpg';
import biryaniImg from '../assets/images/andhra_chicken_biryani_1790047626057.jpg';
import paneerTikkaImg from '../assets/images/paneer_tikka_live_1790045597639.jpg';
import filterCoffeeImg from '../assets/images/filter_coffee_brass_1790045561276.jpg';

interface GallerySectionProps {
  language: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const galleryItems = [
    {
      img: buffetImg,
      titleEn: 'Grand Wedding Buffet Setup',
      titleTe: 'గ్రాండ్ వివాహ బఫే సెటప్',
      descEn: 'Elegant chafing dish presentation with warm lighting',
      descTe: 'విందు భోజనాల అందమైన బఫే ఏర్పాట్లు',
      span: 'sm:col-span-2 sm:row-span-2',
    },
    {
      img: liveDosaImg,
      titleEn: 'Live Tiffin & Tawa Dosa Counter',
      titleTe: 'లైవ్ టిఫిన్ & తవా దోశ కౌంటర్',
      descEn: 'Hot crispy dosas served fresh before the guests',
      descTe: 'అతిథుల సమక్షంలో వేడివేడిగా కాల్చిన దోశలు',
      span: 'sm:col-span-1 sm:row-span-1',
    },
    {
      img: mealsImg,
      titleEn: 'Traditional South Indian Meals',
      titleTe: 'సంప్రదాయ విస్తరాకు విందు భోజనం',
      descEn: 'Authentic Andhra feast with pure ghee and pappu',
      descTe: 'ముద్దపప్పు, నెయ్యి మరియు ఆంధ్రా కూరల విందు',
      span: 'sm:col-span-1 sm:row-span-1',
    },
    {
      img: biryaniImg,
      titleEn: 'Andhra Chicken Dum Biryani',
      titleTe: 'ఆంధ్రా చికెన్ దమ్ బిర్యానీ',
      descEn: 'Fragrant basmati rice slow-cooked with tender meat',
      descTe: 'సుగంధ ద్రవ్యాలతో వండిన ఘుమఘుమలాడే బిర్యానీ',
      span: 'sm:col-span-1 sm:row-span-1',
    },
    {
      img: filterCoffeeImg,
      titleEn: 'Brass Meter Filter Coffee Counter',
      titleTe: 'ఇత్తడి గ్లాసుల ఫిల్టర్ కాఫీ కౌంటర్',
      descEn: 'Fresh aromatic decoction poured in traditional brass dabarah',
      descTe: 'నురగతో కూడిన వేడివేడి డిగ్రీ కాఫీ',
      span: 'sm:col-span-1 sm:row-span-1',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-stone-950 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 text-amber-300 text-xs font-bold border border-amber-600/40 mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-stone-100">
            {t.gallery.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-md ${item.span}`}
            >
              <div className="aspect-4/3 sm:aspect-auto sm:h-full overflow-hidden">
                <img
                  src={item.img}
                  alt={language === 'te' ? item.titleTe : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {language === 'te' ? item.titleTe : item.titleEn}
                </h3>
                <p className="text-[11px] text-stone-300 mt-1">
                  {language === 'te' ? item.descTe : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
