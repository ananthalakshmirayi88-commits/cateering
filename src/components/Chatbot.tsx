import React, { useState, useRef, useEffect } from 'react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS, BUSINESS_INFO } from '../i18n/translations';
import { MessageCircle, X, Send, Phone, MessageSquare, Utensils, MapPin, Sparkles, Bot } from 'lucide-react';

interface ChatbotProps {
  language: Language;
  onNavigateTo: (sectionId: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ language, onNavigateTo }) => {
  const t = TRANSLATIONS[language];
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: t.chatbot.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Handle language switch on initial message
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'bot',
            text: t.chatbot.welcome,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ];
      }
      return prev;
    });
  }, [language]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Generate intelligent response based on keywords in Telugu and English
    setTimeout(() => {
      const botResponse = generateBotResponse(userText.toLowerCase(), language);
      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  const generateBotResponse = (query: string, lang: Language): ChatMessage => {
    const isTe = lang === 'te';

    // Phone / Contact query
    if (
      query.includes('phone') ||
      query.includes('number') ||
      query.includes('contact') ||
      query.includes('ఫోన్') ||
      query.includes('నంబర్') ||
      query.includes('కాల్') ||
      query.includes('call')
    ) {
      return {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: isTe
          ? `మా అధికారిక ఫోన్ నంబర్లు:\n1. 9000828073\n2. 9346356298\n3. 6304377019\n\nమీరు నేరుగా ఈ నంబర్లకు కాల్ చేయవచ్చు లేదా వాట్సాప్ చేయవచ్చు!`
          : `Official contact numbers for Shalini Devi Cooking & Catering:\n1. 9000828073\n2. 9346356298\n3. 6304377019\n\nYou can call directly or connect on WhatsApp!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    // Address / Location query
    if (
      query.includes('address') ||
      query.includes('location') ||
      query.includes('where') ||
      query.includes('చిరునామా') ||
      query.includes('ఎక్కడ') ||
      query.includes('ప్లేస్')
    ) {
      return {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: isTe
          ? `మా చిరునామా:\nశాలిని దేవి కుకింగ్ & క్యాటరింగ్,\nనువ్వుల గుంట వీధి, పెద్దాపురం - 533437.\n(పెద్దాపురం, సామర్లకోట, కాకినాడ మరియు పరిసర ప్రాంతాలలో సేవలు అందిస్తాము).`
          : `Business Address:\nShalini Devi Cooking & Catering,\nNuvvula Gunta Vidhi, Peddapuram - 533437.\n(We cater across Peddapuram, Samalkota, Kakinada, and nearby areas).`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    // Live Counter query
    if (
      query.includes('live') ||
      query.includes('counter') ||
      query.includes('లైవ్') ||
      query.includes('కౌంటర్') ||
      query.includes('దోశ') ||
      query.includes('dosa')
    ) {
      return {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: isTe
          ? `మేము వివాహాలు, గృహప్రవేశాలు మరియు ఫంక్షన్లకు లైవ్ తవా దోశలు (ప్లెయిన్, మసాలా, పెసరట్టు), లైవ్ వేడి పూరి & వడలు, పన్నీర్ టిక్కా మరియు ఫిల్టర్ కాఫీ కౌంటర్లు ఏర్పాటు చేస్తాము!`
          : `We provide interactive live counters including Live Tawa Dosas (Plain, Masala, Pesarattu), sizzling Pooris, crisp Medu Vadas, Tandoor Paneer Tikka, and Meter Filter Coffee!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    // Booking query
    if (
      query.includes('book') ||
      query.includes('price') ||
      query.includes('cost') ||
      query.includes('order') ||
      query.includes('బుకింగ్') ||
      query.includes('ధర') ||
      query.includes('ఆర్డర్')
    ) {
      return {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: isTe
          ? `క్యాటరింగ్ ధరలు మీ అతిథుల సంఖ్య మరియు ఎంపిక చేసుకున్న మెనూ ప్రకారం నిర్ణయించబడతాయి (ధర వివరాలకు సంప్రదించండి). వెబ్‌సైట్‌లోని బుకింగ్ ఫారమ్ పూర్తి చేయండి లేదా 9000828073 కి నేరుగా కాల్ చేయండి.`
          : `Catering prices depend on guest count and customized menu choices (Price on enquiry). Please fill the booking form on the website or call 9000828073 directly for an immediate quote.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    // Tiffins / Breakfast query
    if (
      query.includes('tiffin') ||
      query.includes('breakfast') ||
      query.includes('idli') ||
      query.includes('upma') ||
      query.includes('pongal') ||
      query.includes('టిఫిన్') ||
      query.includes('ఇడ్లీ')
    ) {
      return {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: isTe
          ? `మా టిఫిన్స్ మెనూలో: 1. ఇడ్లీ, 2. ప్లెయిన్ దోశ, 3. మసాలా దోశ, 4. ఉప్మా, 5. వెన్ పొంగల్ / కట్టె పొంగలి, 6. ఉల్లి / టమాటా ఊతప్పం, 7. వడ, 8. పూరి, 9. పెసరట్టు, 10. మైసూర్ బోండా, 11. సేమియా ఉప్మా కలవు.`
          : `Our Breakfast / Tiffins menu includes: 1. Idli, 2. Plain Dosa, 3. Masala Dosa, 4. Upma, 5. Ven Pongal / Katte Pongali, 6. Uttapam, 7. Vada, 8. Poori, 9. Pesarattu, 10. Mysore Bonda, 11. Semiya Upma. Each item has its own authentic preparation!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    // Default fallback
    return {
      id: `b-${Date.now()}`,
      sender: 'bot',
      text: isTe
        ? `ధన్యవాదాలు! క్యాటరింగ్ బుకింగ్స్ లేదా మెనూ వివరాల కోసం నేరుగా సంప్రదించండి: 9000828073, 9346356298, 6304377019. మేము ఎల్లప్పుడూ మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాము!`
        : `Thank you! For catering reservations or custom menus, reach out directly at 9000828073, 9346356298, or 6304377019. We are delighted to serve your event!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          id="btn-chatbot-open"
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-full shadow-2xl transition-all duration-300 border-2 border-amber-400 hover:scale-105 cursor-pointer"
          title="Shalini Devi Catering Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full absolute -top-0.5 -right-0.5 border-2 border-amber-700 animate-pulse"></span>
          </div>
          <span className="text-xs font-bold font-serif hidden sm:inline">
            {language === 'te' ? 'క్యాటరింగ్ సహాయకుడు' : 'Catering Assistant'}
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="w-[92vw] sm:w-96 h-[500px] max-h-[85vh] bg-stone-900 border border-amber-600/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="bg-amber-950 p-4 border-b border-amber-800/60 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-800 border border-amber-600 flex items-center justify-center text-amber-200">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold font-serif">
                  {t.chatbot.title}
                </h3>
                <p className="text-[10px] text-amber-300/80">
                  {t.chatbot.subtitle}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-amber-900/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Helpline Strip */}
          <div className="bg-stone-950 px-3 py-1.5 border-b border-stone-800 flex items-center justify-between text-[11px] text-stone-300">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-amber-400" />
              <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:underline font-bold text-amber-300">
                {BUSINESS_INFO.phones[0]}
              </a>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-bold flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-900/90 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                    m.sender === 'user'
                      ? 'bg-amber-700 text-white rounded-br-xs'
                      : 'bg-stone-800 text-stone-100 border border-stone-700 rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-stone-500 mt-1 px-1">{m.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="p-2 bg-stone-950 border-t border-stone-800 flex gap-1.5 overflow-x-auto scrollbar-none">
            {t.chatbot.quickChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(chip)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-stone-800 hover:bg-amber-800 text-stone-300 hover:text-white text-[11px] font-medium border border-stone-700 transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-2.5 bg-stone-950 border-t border-stone-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chatbot.placeholder}
              className="flex-1 px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-100 placeholder:text-stone-500 focus:outline-hidden focus:border-amber-600"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
