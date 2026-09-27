export type Language = 'te' | 'en';

export type MenuCategoryKey = 'all' | 'tiffins' | 'veg' | 'non-veg' | 'special' | 'live' | 'catering';

export interface MenuItem {
  id: string;
  name: string;
  nameTe: string;
  category: MenuCategoryKey;
  categoryLabelEn: string;
  categoryLabelTe: string;
  isLiveCounter?: boolean;
  isChefSpecial?: boolean;
  description: string;
  descriptionTe: string;
  accompanimentsEn?: string[];
  accompanimentsTe?: string[];
  dietary: 'veg' | 'non-veg';
  image: string;
  servingStyleEn: string;
  servingStyleTe: string;
}

export interface CateringInquiry {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  foodPreference: 'veg' | 'non-veg' | 'both';
  requiredServices: string[];
  notes: string;
}

export interface CateringServiceItem {
  id: string;
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  descriptionTe: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  quickReplies?: { textEn: string; textTe: string; action: string }[];
}
