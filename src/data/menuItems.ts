import { MenuItem } from '../types';

import idliImg from '../assets/images/idli_sambar_chutney_1790045411619.jpg';
import plainDosaImg from '../assets/images/plain_dosa_crispy_1790045428159.jpg';
import masalaDosaImg from '../assets/images/masala_dosa_filling_1790045441523.jpg';
import upmaImg from '../assets/images/rava_upma_authentic_1790045455625.jpg';
import venPongalImg from '../assets/images/ven_pongal_ghee_1790045468772.jpg';
import uttapamImg from '../assets/images/uttapam_onion_tomato_1790045482682.jpg';
import vadaImg from '../assets/images/medu_vada_crispy_1790045493873.jpg';
import pooriImg from '../assets/images/poori_masala_curry_1790045506698.jpg';
import pesarattuImg from '../assets/images/pesarattu_dosa_1790045517181.jpg';
import mysoreBondaImg from '../assets/images/mysore_bonda_crisp_1790045531986.jpg';
import semiyaUpmaImg from '../assets/images/semiya_upma_tiffin_1790045545185.jpg';
import mealsImg from '../assets/images/south_indian_meals_1790045574716.jpg';
import chickenBiryaniImg from '../assets/images/andhra_chicken_biryani_1790047626057.jpg';
import muttonCurryImg from '../assets/images/andhra_mutton_curry_1790047640123.jpg';
import kajuPaneerImg from '../assets/images/kaju_paneer_curry_1790047660280.jpg';
import gulabJamunImg from '../assets/images/gulab_jamun_sweet_1790045587051.jpg';
import paneerTikkaImg from '../assets/images/paneer_tikka_live_1790045597639.jpg';
import filterCoffeeImg from '../assets/images/filter_coffee_brass_1790045561276.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // 1. Idli
  {
    id: 'idli',
    name: 'Idli',
    nameTe: 'ఇడ్లీ',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    isChefSpecial: true,
    description: 'Hot, fluffy steamed rice and urad dal cakes prepared fresh at live steaming counters. Served with authentic coconut chutney, tomato chutney, and hot flavorful vegetable sambar.',
    descriptionTe: 'వేడివేడి మెత్తని ఆవిరి ఇడ్లీలు. కొబ్బరి చట్నీ, టమాటా చట్నీ మరియు ఘుమఘుమలాడే వెజిటబుల్ సాంబారుతో వడ్డించబడుతుంది.',
    accompanimentsEn: ['Fresh Coconut Chutney', 'Tomato Chutney', 'Hot Sambar', 'Desi Ghee'],
    accompanimentsTe: ['కొబ్బరి చట్నీ', 'టమాటా చట్నీ', 'సాంబారు', 'నెయ్యి'],
    dietary: 'veg',
    image: idliImg,
    servingStyleEn: 'Live Steaming Station',
    servingStyleTe: 'లైవ్ స్టీమింగ్ కౌంటర్'
  },
  // 2. Plain Dosa
  {
    id: 'plain-dosa',
    name: 'Plain Dosa',
    nameTe: 'ప్లెయిన్ దోశ',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    description: 'Paper-thin, golden crisp South Indian crepe roasted on a live cast-iron griddle with pure ghee. Accompanied by fresh chutneys and sambar.',
    descriptionTe: 'క్రిస్పీగా, దోరగా కాల్చిన సంప్రదాయ ప్లెయిన్ దోశ. కొబ్బరి చట్నీ, అల్లం పచ్చడి మరియు సాంబారుతో సర్వ్ చేస్తాము.',
    accompanimentsEn: ['Coconut Chutney', 'Allam Pachadi', 'Spiced Sambar'],
    accompanimentsTe: ['కొబ్బరి చట్నీ', 'అల్లం పచ్చడి', 'సాంబారు'],
    dietary: 'veg',
    image: plainDosaImg,
    servingStyleEn: 'Live Tawa Counter',
    servingStyleTe: 'లైవ్ తవా కౌంటర్'
  },
  // 3. Masala Dosa
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    nameTe: 'మసాలా దోశ',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    isChefSpecial: true,
    description: 'Crisp golden-brown dosa smeared with house chutney and folded with a hearty filling of spiced mustard-tempered potato masala.',
    descriptionTe: 'బంగారు వర్ణంలో వేయించిన కరకరలాడే దోశలో రుచికరమైన ఆలు మసాలా కూర. కొబ్బరి చట్నీ, ఎర్ర చట్నీ మరియు సాంబారుతో వడ్డింపు.',
    accompanimentsEn: ['Potato Masala', 'Coconut Chutney', 'Red Chutney', 'Hot Sambar'],
    accompanimentsTe: ['ఆలు మసాలా', 'కొబ్బరి చట్నీ', 'ఎర్ర చట్నీ', 'వేడి సాంబారు'],
    dietary: 'veg',
    image: masalaDosaImg,
    servingStyleEn: 'Live Tawa Counter',
    servingStyleTe: 'లైవ్ తవా కౌంటర్'
  },
  // 4. Upma
  {
    id: 'upma',
    name: 'Upma',
    nameTe: 'ఉప్మా',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    description: 'Traditional roasted semolina upma tempered with roasted cashews, curry leaves, mustard seeds, and ginger with pure ghee.',
    descriptionTe: 'జీడిపప్పులు, అల్లం, పచ్చిమిర్చి, కరివేపాకు మరియు స్వచ్ఛమైన నేతి పోపుతో వండిన కమ్మని రవ్వ ఉప్మా.',
    accompanimentsEn: ['Roasted Cashews', 'Coconut Chutney', 'Gunpowder Podi'],
    accompanimentsTe: ['జీడిపప్పు', 'కొబ్బరి చట్నీ', 'కారప్పొడి'],
    dietary: 'veg',
    image: upmaImg,
    servingStyleEn: 'Warm Buffet Chafing Dish',
    servingStyleTe: 'హాట్ బఫే సర్వింగ్'
  },
  // 5. Ven Pongal / Katte Pongali
  {
    id: 'ven-pongal',
    name: 'Ven Pongal / Katte Pongali',
    nameTe: 'వెన్ పొంగల్ / కట్టె పొంగలి',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isChefSpecial: true,
    description: 'Creamy South Indian rice and yellow moong dal dish simmered with crushed black pepper, cumin seeds, roasted cashews, and pure desi ghee.',
    descriptionTe: 'బియ్యం మరియు పెసరపప్పుతో మెత్తగా ఉడికించి, మిరియాలు, జీలకర్ర, జీడిపప్పు మరియు స్వచ్ఛమైన నేతితో తాళింపు పెట్టిన రుచికరమైన కట్టె పొంగలి.',
    accompanimentsEn: ['Coconut Chutney', 'Brinjal Gothsu', 'Pure Ghee'],
    accompanimentsTe: ['కొబ్బరి చట్నీ', 'వంకాయ గొజ్జు', 'నెయ్యి'],
    dietary: 'veg',
    image: venPongalImg,
    servingStyleEn: 'Warm Buffet Chafing Dish',
    servingStyleTe: 'హాట్ బఫే సర్వింగ్'
  },
  // 6. Uttapam (Onion / Tomato)
  {
    id: 'uttapam',
    name: 'Uttapam (Onion / Tomato)',
    nameTe: 'ఉల్లి / టమాటా ఊతప్పం',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    description: 'Thick, fluffy fermented pancake griddled to golden perfection and topped with finely chopped red onions, vine tomatoes, and coriander.',
    descriptionTe: 'సన్నగా తరిగిన ఎర్ర ఉల్లిపాయలు, పండిన టమాటాలు మరియు కొత్తిమీరతో తవాపై కాల్చిన మృదువైన ఊతప్పం.',
    accompanimentsEn: ['Mint Chutney', 'Coconut Chutney', 'Hot Sambar'],
    accompanimentsTe: ['పుదీనా చట్నీ', 'కొబ్బరి చట్నీ', 'సాంబారు'],
    dietary: 'veg',
    image: uttapamImg,
    servingStyleEn: 'Live Tawa Counter',
    servingStyleTe: 'లైవ్ తవా కౌంటర్'
  },
  // 7. Vada
  {
    id: 'vada',
    name: 'Vada',
    nameTe: 'వడ (గారె)',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    description: 'Crispy golden brown outside and fluffy inside doughnut-shaped medu vada spiced with crushed black pepper and ginger, fried fresh.',
    descriptionTe: 'బయట కరకరలాడుతూ లోపల మెత్తగా ఉండే వేడివేడి మినప గారెలు. తాజా కొబ్బరి చట్నీ మరియు సాంబారుతో అద్భుతమైన రుచి.',
    accompanimentsEn: ['Fresh Coconut Chutney', 'Hot Sambar'],
    accompanimentsTe: ['కొబ్బరి చట్నీ', 'వేడి సాంబారు'],
    dietary: 'veg',
    image: vadaImg,
    servingStyleEn: 'Live Frying Counter',
    servingStyleTe: 'లైవ్ ఫ్రైయింగ్ కౌంటర్'
  },
  // 8. Poori
  {
    id: 'poori',
    name: 'Poori',
    nameTe: 'పూరి',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    description: 'Puffed, inflated golden whole wheat pooris fried hot at the live counter, served with homestyle spiced potato curry (aloo sagu).',
    descriptionTe: 'లైవ్ కౌంటర్లో వేడి నూనెలో పొంగించిన బంగారు రంగు పూరీలు. కమ్మని ఆలు కుర్మా / సాగుతో వడ్డింపు.',
    accompanimentsEn: ['Potato Curry (Aloo Sagu)', 'Pickle', 'Onion Slices'],
    accompanimentsTe: ['ఆలు కుర్మా', 'ఊరగాయ', 'ఉల్లిపాయలు'],
    dietary: 'veg',
    image: pooriImg,
    servingStyleEn: 'Live Frying Counter',
    servingStyleTe: 'లైవ్ ఫ్రైయింగ్ కౌంటర్'
  },
  // 9. Pesarattu
  {
    id: 'pesarattu',
    name: 'Pesarattu',
    nameTe: 'పెసరట్టు',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    isChefSpecial: true,
    description: 'Authentic Andhra green gram (moong dal) crepe cooked crisp on the griddle, served with classic Allam Pachadi (ginger chutney) and upma.',
    descriptionTe: 'ఆంధ్రా ప్రత్యేకమైన కరకరలాడే పెసరట్టు. సంప్రదాయ ఘాటైన అల్లం పచ్చడి మరియు ఉప్మాతో అద్భుతమైన కలయిక.',
    accompanimentsEn: ['Spicy Allam Pachadi', 'Coconut Chutney', 'Upma Topping'],
    accompanimentsTe: ['అల్లం పచ్చడి', 'కొబ్బరి చట్నీ', 'ఉప్మా'],
    dietary: 'veg',
    image: pesarattuImg,
    servingStyleEn: 'Live Tawa Counter',
    servingStyleTe: 'లైవ్ తవా కౌంటర్'
  },
  // 10. Mysore Bonda
  {
    id: 'mysore-bonda',
    name: 'Mysore Bonda',
    nameTe: 'మైసూర్ బోండా',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    isLiveCounter: true,
    description: 'Signature round golden fried fritters made with fermented batter, cumin, and coconut bits. Crisp on the outside and cotton-soft inside.',
    descriptionTe: 'బంగారు రంగులో గుండ్రంగా వేయించిన మెత్తని మైసూర్ బోండాలు. స్పైసీ కొబ్బరి చట్నీతో నోరూరించే రుచి.',
    accompanimentsEn: ['Spicy Coconut Chutney', 'Peanut Chutney'],
    accompanimentsTe: ['స్పైసీ కొబ్బరి చట్నీ', 'పల్లీల చట్నీ'],
    dietary: 'veg',
    image: mysoreBondaImg,
    servingStyleEn: 'Live Frying Counter',
    servingStyleTe: 'లైవ్ ఫ్రైయింగ్ కౌంటర్'
  },
  // 11. Semiya Upma
  {
    id: 'semiya-upma',
    name: 'Semiya Upma',
    nameTe: 'సేమియా ఉప్మా',
    category: 'tiffins',
    categoryLabelEn: 'Tiffins / Breakfast',
    categoryLabelTe: 'టిఫిన్స్ / అల్పాహారం',
    description: 'Roasted vermicelli upma tossed with tender carrots, green peas, curry leaves, roasted cashews, and mustard tempering.',
    descriptionTe: 'క్యారెట్, బఠానీలు, జీడిపప్పు మరియు తాళింపు గింజలతో విడివిడిగా ఉడికించిన కమ్మని సేమియా ఉప్మా.',
    accompanimentsEn: ['Lemon Coconut Chutney', 'Podi'],
    accompanimentsTe: ['కొబ్బరి చట్నీ', 'పోడి'],
    dietary: 'veg',
    image: semiyaUpmaImg,
    servingStyleEn: 'Warm Buffet Chafing Dish',
    servingStyleTe: 'హాట్ బఫే సర్వింగ్'
  },
  // 12. VEG / CATERING MEALS: South Indian Meals
  {
    id: 'south-indian-meals',
    name: 'Traditional South Indian Wedding Meals / Thali',
    nameTe: 'సంప్రదాయ ఆంధ్రా వివాహ భోజనం (విస్తరాకు భోజనం)',
    category: 'veg',
    categoryLabelEn: 'Veg / Catering Meals',
    categoryLabelTe: 'శాఖాహార వంటకాలు / భోజనం',
    isChefSpecial: true,
    description: 'Grand traditional banana leaf feast: fragrant steamed rice with pure ghee, pappu, sambar, rasam, aviyal, kootu, poriyal, appalam, curd, and payasam.',
    descriptionTe: 'అరిటాకులో సంప్రదాయ విందు: వేడి అన్నం, ముద్దపప్పు, నెయ్యి, సాంబారు, రసం, కూరలు, వేపుళ్లు, అప్పడాలు, పచ్చడి, పెరుగు మరియు పాయసం.',
    accompanimentsEn: ['Pappu & Ghee', 'Sambar & Rasam', 'Vegetable Curries', 'Payasam & Appalam'],
    accompanimentsTe: ['ముద్దపప్పు & నెయ్యి', 'సాంబారు & రసం', 'కూరలు & వేపుడు', 'పాయసం & అప్పడం'],
    dietary: 'veg',
    image: mealsImg,
    servingStyleEn: 'Traditional Banana Leaf Service',
    servingStyleTe: 'సంప్రదాయ అరిటాకు విందు'
  },
  // 13. NON-VEG: Andhra Chicken Biryani
  {
    id: 'chicken-biryani',
    name: 'Andhra Chicken Dum Biryani',
    nameTe: 'ఆంధ్రా చికెన్ దమ్ బిర్యానీ',
    category: 'non-veg',
    categoryLabelEn: 'Non-Veg Specialties',
    categoryLabelTe: 'మాంసాహార వంటకాలు',
    isChefSpecial: true,
    description: 'Authentic Dum Chicken Biryani cooked with fragrant aged basmati rice, succulent spiced marinated chicken, saffron, fried onions, and mint.',
    descriptionTe: 'సుగంధ ద్రవ్యాలు, బాస్మతి బియ్యం మరియు మసాలా చికెన్‌తో దమ్ పద్ధతిలో వండిన ఘుమఘుమలాడే ఆంధ్రా చికెన్ బిర్యానీ.',
    accompanimentsEn: ['Mirchi Ka Salan', 'Onion Raitha', 'Boiled Egg'],
    accompanimentsTe: ['మిర్చి కా సాలన్', 'ఆనియన్ రైతా', 'ఉడికించిన గుడ్డు'],
    dietary: 'non-veg',
    image: chickenBiryaniImg,
    servingStyleEn: 'Warm Royal Handi Service',
    servingStyleTe: 'రాయల్ హండీ సర్వింగ్'
  },
  // 14. NON-VEG: Andhra Mutton Curry
  {
    id: 'mutton-curry',
    name: 'Andhra Mutton Curry (Mamsam Kura)',
    nameTe: 'ఆంధ్రా మటన్ కర్రీ (మాంసం కూర)',
    category: 'non-veg',
    categoryLabelEn: 'Non-Veg Specialties',
    categoryLabelTe: 'మాంసాహార వంటకాలు',
    isChefSpecial: true,
    description: 'Traditional homestyle tender goat meat slow-cooked in a rich onion-tomato gravy with roasted spices and fresh coriander.',
    descriptionTe: 'తాజా మటన్ ముక్కలను ప్రత్యేకంగా దంచిన గరం మసాలాలతో మందపాటి గ్రేవీలో వండిన సంప్రదాయ ఆంధ్రా మాంసం కూర.',
    accompanimentsEn: ['Bagara Rice / Steamed Rice', 'Onion Salad', 'Lemon Wedges'],
    accompanimentsTe: ['బగారా అన్నం / తెల్లన్నం', 'ఉల్లిపాయలు', 'నిమ్మకాయ'],
    dietary: 'non-veg',
    image: muttonCurryImg,
    servingStyleEn: 'Warm Buffet Chafing Dish',
    servingStyleTe: 'హాట్ బఫే సర్వింగ్'
  },
  // 15. SPECIAL ITEMS: Kaju Paneer Curry
  {
    id: 'kaju-paneer',
    name: 'Kaju Paneer Curry',
    nameTe: 'కాజూ పన్నీర్ కర్రీ',
    category: 'special',
    categoryLabelEn: 'Special Items',
    categoryLabelTe: 'ప్రత్యేక వంటకాలు',
    isChefSpecial: true,
    description: 'Fresh soft cottage cheese cubes and whole roasted cashews simmered in a luscious, aromatic creamy tomato-cashew gravy.',
    descriptionTe: 'రుచికరమైన పన్నీర్ ముక్కలు మరియు వేయించిన జీడిపప్పులను క్రీమీ గ్రేవీలో వండిన రిచ్ స్పెషల్ కర్రీ.',
    accompanimentsEn: ['Roti / Naan', 'Pulao / Biryani'],
    accompanimentsTe: ['రోటీ / నాన్', 'పులావ్ / బిర్యానీ'],
    dietary: 'veg',
    image: kajuPaneerImg,
    servingStyleEn: 'Warm Buffet Chafing Dish',
    servingStyleTe: 'హాట్ బఫే సర్వింగ్'
  },
  // 16. SPECIAL ITEMS: Gulab Jamun
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    nameTe: 'గులాబ్ జామున్',
    category: 'special',
    categoryLabelEn: 'Special Items & Sweets',
    categoryLabelTe: 'స్వీట్స్ & స్పెషల్ ఐటమ్స్',
    isChefSpecial: true,
    description: 'Soft, melt-in-mouth milk solid dumplings simmered in warm saffron and green cardamom infused rose sugar syrup.',
    descriptionTe: 'పాల కోవాతో చేసి, యాలకులు మరియు కుంకుమపువ్వు పాకంలో నానబెట్టిన తియ్యని మృదువైన గులాబ్ జామున్.',
    accompanimentsEn: ['Slivered Pistachios', 'Warm Sugar Syrup'],
    accompanimentsTe: ['పిస్తా పలుకులు', 'యాలకుల పాకం'],
    dietary: 'veg',
    image: gulabJamunImg,
    servingStyleEn: 'Warm Dessert Chafing Dish',
    servingStyleTe: 'స్వీట్ సర్వింగ్'
  },
  // 17. LIVE COUNTERS: Paneer Tikka
  {
    id: 'paneer-tikka-live',
    name: 'Paneer Tikka (Tandoor Live Counter)',
    nameTe: 'పన్నీర్ టిక్కా (లైవ్ తందూరీ కౌంటర్)',
    category: 'live',
    categoryLabelEn: 'Live Counters',
    categoryLabelTe: 'లైవ్ కౌంటర్లు',
    isLiveCounter: true,
    description: 'Skewered marinated paneer cubes, bell peppers, and onions roasted hot on live tandoor / barbecue grills, served with mint chutney.',
    descriptionTe: 'లైవ్ బొగ్గుల తందూరీ పొయ్యిపై కాల్చిన పన్నీర్, ఉల్లి, క్యాప్సికమ్ ముక్కలు. పుదీనా చట్నీ మరియు నిమ్మరసంతో వేడిగా సర్వ్ చేస్తాము.',
    accompanimentsEn: ['Fresh Mint Chutney', 'Lachha Onion', 'Chaat Masala'],
    accompanimentsTe: ['పుదీనా చట్నీ', 'ఉల్లిపాయ ముక్కలు', 'చాట్ మసాలా'],
    dietary: 'veg',
    image: paneerTikkaImg,
    servingStyleEn: 'Live Barbecue Counter',
    servingStyleTe: 'లైవ్ బార్బెక్యూ కౌంటర్'
  },
  // 18. LIVE COUNTERS: Filter Coffee
  {
    id: 'filter-coffee-live',
    name: 'South Indian Filter Coffee Live Counter',
    nameTe: 'ఫిల్టర్ కాఫీ లైవ్ కౌంటర్ (డిగ్రీ కాఫీ)',
    category: 'live',
    categoryLabelEn: 'Live Counters',
    categoryLabelTe: 'లైవ్ కౌంటర్లు',
    isLiveCounter: true,
    description: 'Fresh aromatic decoction brewed live with thick farm milk and poured into traditional brass dabarah-tumblers with rich foam.',
    descriptionTe: 'తాజా డికాక్షన్ మరియు చిక్కని పాలతో తయారుచేసి, సంప్రదాయ ఇత్తడి గ్లాసుల్లో నురగతో సర్వ్ చేసే అసలైన ఫిల్టర్ కాఫీ.',
    accompanimentsEn: ['Brass Dabarah & Tumbler Service'],
    accompanimentsTe: ['ఇత్తడి దబరా & గ్లాసు సర్వింగ్'],
    dietary: 'veg',
    image: filterCoffeeImg,
    servingStyleEn: 'Live Meter Coffee Station',
    servingStyleTe: 'లైవ్ మీటర్ కాఫీ స్టేషన్'
  }
];
