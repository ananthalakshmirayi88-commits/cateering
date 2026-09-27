import React, { useState } from 'react';
import { Language, MenuItem, CateringInquiry } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';
import { CalendarCheck, Phone, MessageSquare, CheckCircle2, User, Users, Calendar, Sparkles, Send, Utensils } from 'lucide-react';

interface BookingSectionProps {
  language: Language;
  selectedItems: MenuItem[];
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  language,
  selectedItems,
}) => {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState<CateringInquiry>({
    fullName: '',
    phone: '',
    eventType: language === 'te' ? 'వివాహం (Wedding)' : 'Wedding',
    eventDate: '',
    guestCount: 200,
    foodPreference: 'veg',
    requiredServices: ['Live Counters', 'Buffet Catering'],
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const selectedList = selectedItems.length > 0
      ? selectedItems.map(i => language === 'te' ? i.nameTe : i.name).join(', ')
      : language === 'te' ? 'మెనూ సంప్రదింపు' : 'Menu consultation';

    if (language === 'te') {
      return `నమస్తే శాలిని దేవి కుకింగ్ & క్యాటరింగ్,
నేను క్యాటరింగ్ బుకింగ్ కోసం వివరాలు పంపుతున్నాను:
పేరు: ${formData.fullName}
ఫోన్: ${formData.phone}
వేడుక రకం: ${formData.eventType}
తేదీ: ${formData.eventDate || 'ఖరారు చేయాలి'}
అతిథుల సంఖ్య: ${formData.guestCount}
ఆహార ప్రాధాన్యత: ${formData.foodPreference}
ఎంచుకున్న వంటకాలు: ${selectedList}
గమనిక: ${formData.notes || 'ఏమీ లేదు'}`;
    } else {
      return `Hello Shalini Devi Cooking & Catering,
I am submitting a catering enquiry:
Name: ${formData.fullName}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Date: ${formData.eventDate || 'To be decided'}
Guests: ${formData.guestCount}
Food Preference: ${formData.foodPreference}
Selected Dishes: ${selectedList}
Notes: ${formData.notes || 'None'}`;
    }
  };

  return (
    <section id="booking" className="py-16 sm:py-20 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 text-amber-900 text-xs font-bold border border-amber-300 mb-3">
            <CalendarCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.booking.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-stone-900">
            {t.booking.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Selected Dishes Banner */}
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-bold text-amber-900 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-700" />
              {t.booking.selectedDishesNotice} ({selectedItems.length})
            </span>
            <span className="text-amber-800 italic">
              {t.menu.priceOnEnquiry}
            </span>
          </div>

          {selectedItems.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 mt-1">
              {selectedItems.map((item) => (
                <span
                  key={item.id}
                  className="px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-stone-800 text-[11px] font-semibold"
                >
                  {language === 'te' ? item.nameTe : item.name}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-stone-500 italic mt-0.5">
              {t.booking.noDishesYet}
            </p>
          )}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
          {isSubmitted ? (
            /* Success View */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 mb-2">
                {t.booking.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-6">
                {t.booking.successDesc}
              </p>

              {/* Action Buttons: Call & WhatsApp */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0]}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.booking.actionCall} ({BUSINESS_INFO.phones[0]})</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.booking.actionWhatsApp}</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs text-stone-500 hover:text-stone-800 underline block mx-auto cursor-pointer"
              >
                {language === 'te' ? 'మరొక విచారణ నమోదు చేయండి' : 'Submit Another Enquiry'}
              </button>
            </div>
          ) : (
            /* Enquiry Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.booking.nameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={language === 'te' ? 'ఉదా: పి. రమేష్ రెడ్డి' : 'e.g. Ramesh Reddy'}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.booking.phoneLabel}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={language === 'te' ? 'ఉదా: 98480 12345' : 'e.g. 98480 12345'}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.booking.eventTypeLabel}
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  >
                    <option value="Wedding / వివాహం">{language === 'te' ? 'వివాహం (Wedding)' : 'Wedding'}</option>
                    <option value="Reception / రిసెప్షన్">{language === 'te' ? 'రిసెప్షన్ (Reception)' : 'Reception'}</option>
                    <option value="Housewarming / గృహప్రవేశం">{language === 'te' ? 'గృహప్రవేశం (Housewarming)' : 'Housewarming'}</option>
                    <option value="Birthday / పుట్టినరోజు">{language === 'te' ? 'పుట్టినరోజు (Birthday)' : 'Birthday'}</option>
                    <option value="Pooja / Religious Function">{language === 'te' ? 'పూజలు & వ్రతాలు (Religious)' : 'Religious / Pooja'}</option>
                    <option value="Thread Ceremony / ఉపనయనం">{language === 'te' ? 'ఉపనయనం (Upanayanam)' : 'Upanayanam'}</option>
                    <option value="Corporate / Family Gathering">{language === 'te' ? 'కుటుంబ వేడుక (Family Event)' : 'Family / Corporate Event'}</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.booking.guestsLabel}
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      min="25"
                      max="10000"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.booking.dateLabel}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                {/* Food Preference */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.booking.foodPrefLabel}
                  </label>
                  <select
                    value={formData.foodPreference}
                    onChange={(e) => setFormData({ ...formData, foodPreference: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                  >
                    <option value="veg">{t.booking.prefVeg}</option>
                    <option value="non-veg">{t.booking.prefNonVeg}</option>
                    <option value="both">{t.booking.prefBoth}</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {t.booking.notesLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    language === 'te'
                      ? 'ఉదా: లైవ్ దోశ కౌంటర్ కావాలి, స్వీట్లు, కాఫీ కౌంటర్ లేదా ప్రత్యేక సూచనలు...'
                      : 'e.g. Need Live Dosa counter, sweets selection, morning coffee arrangements...'
                  }
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-stone-500">
                  {language === 'te'
                    ? 'వివరాల కోసం నేరుగా కాల్ చేయండి: 9000828073'
                    : 'Direct Assistance: 9000828073'}
                </p>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.booking.submitBtn}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
