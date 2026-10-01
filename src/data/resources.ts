import { progressLabels, type LanguageCode, type LocalizedText } from './services'

export type ResourceCategoryId =
  | 'money'
  | 'jobs'
  | 'learning'
  | 'women'
  | 'business'
  | 'safety'
  | 'government'

export type LocalizedKeywords = Record<LanguageCode, string[]>

export interface Resource {
  id: string
  category: ResourceCategoryId
  name: LocalizedText
  shortDescription: LocalizedText
  simpleExplanation: LocalizedText
  whoItHelps: LocalizedText
  keywords: LocalizedKeywords
  officialUrl?: string
  sourceOrganization: LocalizedText
  type: string
  languages: LanguageCode[]
  verified: boolean
  availableActions: string[]
  helplineNumber?: string
}

export interface ResourceCategory {
  id: ResourceCategoryId
  icon: string
  name: LocalizedText
  description: LocalizedText
  keywords: LocalizedKeywords
}

const t = (ta: string, te: string, hi: string, en: string): LocalizedText => ({ ta, te, hi, en })
const k = (ta: string[], te: string[], hi: string[], en: string[]): LocalizedKeywords => ({ ta, te, hi, en })
const languages: LanguageCode[] = ['ta', 'te', 'hi', 'en']
const government = t('இந்திய அரசு', 'భారత ప్రభుత్వం', 'भारत सरकार', 'Government of India')
const electronics = t('மின்னணு மற்றும் தகவல் தொழில்நுட்ப அமைச்சகம்', 'ఎలక్ట్రానిక్స్ మరియు సమాచార సాంకేతిక మంత్రిత్వ శాఖ', 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय', 'Ministry of Electronics and Information Technology')
const labour = t('தொழிலாளர் மற்றும் வேலைவாய்ப்பு அமைச்சகம்', 'కార్మిక మరియు ఉపాధి మంత్రిత్వ శాఖ', 'श्रम और रोजगार मंत्रालय', 'Ministry of Labour and Employment')
const skill = t('திறன் மேம்பாடு மற்றும் தொழில்முனைவோர் அமைச்சகம்', 'నైపుణ్యాభివృద్ధి మరియు వ్యవస్థాపకత మంత్రిత్వ శాఖ', 'कौशल विकास और उद्यमिता मंत्रालय', 'Ministry of Skill Development and Entrepreneurship')
const education = t('கல்வி அமைச்சகம்', 'విద్యా మంత్రిత్వ శాఖ', 'शिक्षा मंत्रालय', 'Ministry of Education')
const womenMinistry = t('பெண்கள் மற்றும் குழந்தைகள் மேம்பாட்டு அமைச்சகம்', 'మహిళా మరియు శిశు అభివృద్ధి మంత్రిత్వ శాఖ', 'महिला एवं बाल विकास मंत्रालय', 'Ministry of Women and Child Development')
const msme = t('சிறு, குறு மற்றும் நடுத்தர தொழில் அமைச்சகம்', 'సూక్ష్మ, చిన్న మరియు మధ్య తరహా పరిశ్రమల మంత్రిత్వ శాఖ', 'सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय', 'Ministry of Micro, Small and Medium Enterprises')
const tamilNadu = t('தமிழ்நாடு அரசு', 'తమిళనాడు ప్రభుత్వం', 'तमिलनाडु सरकार', 'Government of Tamil Nadu')
const unavailableExplanation = t('சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ இணையதள இணைப்பு தற்போது கிடைக்கவில்லை.', 'ధృవీకరించిన అధికారిక వెబ్‌సైట్ లింక్ ప్రస్తుతం అందుబాటులో లేదు.', 'सत्यापित आधिकारिक वेबसाइट लिंक अभी उपलब्ध नहीं है।', 'A verified official website link is not currently available.')

export const resourceCategories: ResourceCategory[] = [
  { id: 'money', icon: '💰', name: t('பணம் மற்றும் நலன்கள்', 'డబ్బు మరియు ప్రయోజనాలు', 'पैसा और लाभ', 'Money & Benefits'), description: t('உதவக்கூடிய நலத்திட்டங்களைத் தேடுங்கள்.', 'మీకు తోడ్పడే పథకాలను కనుగొనండి.', 'आपकी मदद कर सकने वाली योजनाएँ खोजें।', 'Find schemes and benefits that may help you.'), keywords: k(['பணம்', 'உதவித்தொகை', 'நலத்திட்டம்', 'மானியம்'], ['డబ్బు', 'సహాయం', 'పథకం', 'ప్రయోజనం'], ['पैसा', 'लाभ', 'योजना', 'आर्थिक मदद'], ['money', 'benefit', 'scheme', 'financial help']) },
  { id: 'jobs', icon: '💼', name: t('வேலை மற்றும் வேலைவாய்ப்பு', 'ఉద్యోగాలు మరియు ఉపాధి', 'नौकरी और रोजगार', 'Jobs & Employment'), description: t('வேலை மற்றும் தொழில் உதவியைத் தேடுங்கள்.', 'ఉద్యోగాలు మరియు కెరీర్ సహాయం కనుగొనండి.', 'नौकरी और करियर सहायता खोजें।', 'Find jobs and career support.'), keywords: k(['வேலை', 'வேலைவாய்ப்பு', 'தொழில்', 'பணி'], ['ఉద్యోగం', 'ఉపాధి', 'పని', 'కెరీర్'], ['नौकरी', 'रोजगार', 'काम', 'करियर'], ['job', 'work', 'employment', 'career']) },
  { id: 'learning', icon: '📚', name: t('கற்றல் மற்றும் திறன்கள்', 'చదువు మరియు నైపుణ్యాలు', 'सीखना और कौशल', 'Learning & Skills'), description: t('படிப்புகள் மற்றும் திறன் பயிற்சிகளைத் தேடுங்கள்.', 'కోర్సులు మరియు నైపుణ్య శిక్షణ కనుగొనండి.', 'कोर्स और कौशल प्रशिक्षण खोजें।', 'Find courses and skill-development opportunities.'), keywords: k(['படிப்பு', 'படிக்க', 'பாடநெறி', 'பயிற்சி', 'கற்க', 'திறன்', 'course'], ['కోర్సు', 'నేర్చుకో', 'శిక్షణ', 'నైపుణ్యం'], ['कोर्स', 'सीखना', 'प्रशिक्षण', 'कौशल'], ['course', 'learn', 'training', 'skill', 'study']) },
  { id: 'women', icon: '👩', name: t('பெண்கள் ஆதரவு', 'మహిళలకు మద్దతు', 'महिला सहायता', 'Women Support'), description: t('பெண்கள் மற்றும் குடும்பங்களுக்கான ஆதரவைத் தேடுங்கள்.', 'మహిళలు మరియు కుటుంబాల మద్దతు కనుగొనండి.', 'महिलाओं और परिवारों के लिए सहायता खोजें।', 'Find support for women and families.'), keywords: k(['பெண்கள்', 'தாய்மை', 'குழந்தை பராமரிப்பு'], ['మహిళ', 'మాతృత్వం', 'పిల్లల సంరక్షణ'], ['महिला', 'मातृत्व', 'बच्चों की देखभाल'], ['women', 'woman', 'maternity', 'childcare']) },
  { id: 'business', icon: '🏪', name: t('தொழில் மற்றும் சுயதொழில்', 'వ్యాపారం మరియు స్వయం ఉపాధి', 'व्यवसाय और स्वरोजगार', 'Business & Self-Employment'), description: t('சிறு தொழில் தொடங்க உதவும் தகவல்களைத் தேடுங்கள்.', 'చిన్న వ్యాపారం ప్రారంభించడానికి సమాచారం కనుగొనండి.', 'छोटा व्यवसाय शुरू करने की जानकारी खोजें।', 'Find support for starting a small business.'), keywords: k(['வணிகம்', 'தொழில்', 'சுயதொழில்', 'கடை'], ['వ్యాపారం', 'స్వయం ఉపాధి', 'పరిశ్రమ'], ['व्यवसाय', 'कारोबार', 'स्वरोजगार', 'उद्यम'], ['business', 'loan', 'entrepreneur', 'startup', 'self employment']) },
  { id: 'safety', icon: '🛡️', name: t('பாதுகாப்பு மற்றும் உதவி', 'భద్రత మరియు సహాయం', 'सुरक्षा और सहायता', 'Safety & Support'), description: t('உடனடி உதவி மற்றும் பாதுகாப்பு ஆதரவைத் தேடுங்கள்.', 'అత్యవసర సహాయం మరియు భద్రతా మద్దతు కనుగొనండి.', 'तत्काल सहायता और सुरक्षा समर्थन खोजें।', 'Find urgent help and safety support.'), keywords: k(['பாதுகாப்பு', 'வன்முறை', 'அவசரம்', 'உதவி எண்', '181'], ['భద్రత', 'హింస', 'అత్యవసరం', 'హెల్ప్‌లైన్', '181'], ['सुरक्षा', 'हिंसा', 'आपातकाल', 'हेल्पलाइन', '181'], ['safety', 'violence', 'emergency', 'helpline', '181']) },
  { id: 'government', icon: '🏛️', name: t('அரசு சேவைகள்', 'ప్రభుత్వ సేవలు', 'सरकारी सेवाएँ', 'Government Services'), description: t('அரசு சேவைகள் மற்றும் தகவல்களைத் தேடுங்கள்.', 'ప్రభుత్వ సేవలు మరియు సమాచారాన్ని కనుగొనండి.', 'सरकारी सेवाएँ और जानकारी खोजें।', 'Find government services and information.'), keywords: k(['அரசு சேவை', 'இ-சேவை', 'அரசு இணையதளம்', 'இ-ஷ்ரம்'], ['ప్రభుత్వ సేవ', 'ఈ సేవ', 'ప్రభుత్వ వెబ్‌సైట్', 'ఈ-శ్రమ్'], ['सरकारी सेवा', 'ई सेवा', 'सरकारी वेबसाइट', 'ई-श्रम'], ['government service', 'e-sevai', 'e-shram', 'government website']) },
]

export const resourceUiLabels = {
  greeting: t('வணக்கம் 👋', 'నమస్కారం 👋', 'नमस्ते 👋', 'Hello 👋'),
  home: t('SakhiSetu முகப்பு', 'SakhiSetu హోమ్', 'SakhiSetu होम', 'SakhiSetu home'),
  language: progressLabels[0],
  navigatorHome: t('உதவி வகைகளுக்குத் திரும்பு', 'సహాయ వర్గాలకు తిరిగి వెళ్ళండి', 'सहायता श्रेणियों पर लौटें', 'Back to help categories'),
  question: t('உங்களுக்கு என்ன உதவி வேண்டும்?', 'మీకు ఏ సహాయం కావాలి?', 'आपको किस मदद की ज़रूरत है?', 'What do you need help with?'),
  chooseCategory: t('உங்களுக்கு தேவையானதைத் தேர்ந்தெடுக்கவும்', 'మీకు కావలసినదాన్ని ఎంచుకోండి', 'अपनी ज़रूरत चुनें', 'Choose what you need'),
  speak: t('🎙 குரல் வசதி விரைவில்', '🎙 వాయిస్ త్వరలో', '🎙 बोलने की सुविधा जल्द', '🎙 Speak (coming soon)'),
  type: t('⌨ தட்டச்சு செய்யுங்கள்', '⌨ టైప్ చేయండి', '⌨ लिखें', '⌨ Type'),
  trust: t('SakhiSetu அதிகாரப்பூர்வ சேவையைப் புரிந்து கொண்டு அதை அடைய உதவுகிறது. உண்மையான விண்ணப்பத்தை அதிகாரப்பூர்வ இணையதளமே கையாளும்.', 'SakhiSetu అధికారిక సేవను అర్థం చేసుకుని చేరుకోవడంలో సహాయపడుతుంది. అసలు దరఖాస్తును అధికారిక వెబ్‌సైట్ నిర్వహిస్తుంది.', 'SakhiSetu आधिकारिक सेवा को समझने और उस तक पहुँचने में मदद करता है। वास्तविक आवेदन आधिकारिक वेबसाइट पर होता है।', 'SakhiSetu helps you understand and reach the official service. The official website handles the actual application.'),
  howHelp: t('இது உங்களுக்கு எப்படி உதவும்', 'ఇది మీకు ఎలా సహాయపడుతుంది', 'यह आपकी कैसे मदद कर सकता है', 'How this can help you'),
  whoHelps: t('யாருக்கு உதவலாம்', 'ఎవరికి ఉపయోగపడుతుంది', 'यह किसके काम आ सकता है', 'Who it may help'),
  source: t('அரசு / நிறுவனம்', 'ప్రభుత్వ / సంస్థ మూలం', 'सरकारी / संस्थागत स्रोत', 'Government source'),
  verified: t('✓ சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ மூலம்', '✓ ధృవీకరించిన అధికారిక మూలం', '✓ सत्यापित आधिकारिक स्रोत', '✓ Verified official source'),
  unverified: t('அதிகாரப்பூர்வ இணையதள இணைப்பு தற்போது சரிபார்க்கப்படவில்லை.', 'అధికారిక వెబ్‌సైట్ లింక్ ప్రస్తుతం ధృవీకరించబడలేదు.', 'आधिकारिक वेबसाइट लिंक अभी सत्यापित नहीं है।', 'Official website link is not currently verified.'),
  open: t('அதிகாரப்பூர்வ இணையதளத்தைத் திறக்கவும்', 'అధికారిక వెబ్‌సైట్ తెరవండి', 'आधिकारिक वेबसाइट खोलें', 'Open Official Website'),
  callHelpline: t('181 உதவி எண்ணை அழைக்கவும்', '181 హెల్ప్‌లైన్‌కు కాల్ చేయండి', '181 हेल्पलाइन पर कॉल करें', 'Call helpline 181'),
  unavailable: t('இணைப்பு கிடைக்கவில்லை', 'లింక్ అందుబాటులో లేదు', 'लिंक उपलब्ध नहीं है', 'Link unavailable'),
  searchPlaceholder: t('உங்களுக்கு என்ன தேவை என்று எழுதுங்கள்...', 'మీకు ఏమి కావాలో టైప్ చేయండి...', 'आपको क्या चाहिए, लिखें...', 'Type what you need...'),
  search: t('உதவியைத் தேடுங்கள்', 'సహాయం వెతకండి', 'सहायता खोजें', 'Find help'),
  results: t('உங்களுக்கு தொடர்புடைய உதவிகள்', 'మీకు సరిపోయే సహాయం', 'आपके लिए उपयोगी संसाधन', 'Relevant resources'),
  noResults: t('உங்களுக்கு பொருத்தமான உதவியை கண்டுபிடிக்க முடியவில்லை. வேறு விதமாக சொல்லுங்கள்.', 'మీకు సరిపోయే సహాయాన్ని కనుగొనలేకపోయాము. మరో విధంగా చెప్పండి.', 'हमें आपके लिए सही सहायता नहीं मिली। कृपया दूसरे तरीके से बताएं।', "We couldn't find a matching resource. Try describing what you need in another way."),
  categoriesBack: t('வகைகளுக்குத் திரும்பு', 'వర్గాలకు తిరిగి వెళ్ళండి', 'श्रेणियों पर लौटें', 'Back to categories'),
  categoryBack: t('பின்செல்லவும்', 'వెనక్కి', 'वापस', 'Back'),
  eShramAction: t('e-Shram வழிகாட்டுதலைத் தொடங்குங்கள்', 'e-Shram మార్గదర్శకత్వం ప్రారంభించండి', 'e-Shram मार्गदर्शन शुरू करें', 'Start e-Shram guidance'),
  eShramFound: t('e-Shram வழிகாட்டுதல்', 'e-Shram మార్గదర్శకం', 'e-Shram मार्गदर्शन', 'e-Shram guidance'),
  voiceTap: t('🎤 பேச தட்டுங்கள்', '🎤 మాట్లాడటానికి నొక్కండి', '🎤 बोलने के लिए टैप करें', '🎤 Tap to speak'),
  voiceListening: t('🔴 கேட்கிறேன்...', '🔴 వింటున్నాను...', '🔴 सुन रहा हूँ...', '🔴 Listening...'),
  voiceUnderstanding: t('🧠 புரிந்துகொள்கிறேன்...', '🧠 అర్థం చేసుకుంటున్నాను...', '🧠 समझ रहा हूँ...', '🧠 Understanding...'),
  voiceFinding: t('🔎 உதவியைத் தேடுகிறேன்...', '🔎 సహాయం వెతుకుతున్నాను...', '🔎 सहायता खोज रहा हूँ...', '🔎 Finding help...'),
  voiceFound: t('💡 இதோ கிடைத்த உதவி', '💡 మీ కోసం కనుగొన్న సహాయం', '💡 यह मदद मिली', '💡 Here’s what I found'),
  readAloud: t('🔊 பதிலைப் படியுங்கள்', '🔊 సమాధానాన్ని వినండి', '🔊 जवाब सुनें', '🔊 Read aloud'),
  typeFallback: t('நீங்கள் உங்கள் கேள்வியையும் தட்டச்சு செய்யலாம்.', 'మీ ప్రశ్నను టైప్ కూడా చేయవచ్చు.', 'आप अपना सवाल टाइप भी कर सकते हैं।', 'You can also type your question.'),
  examplesLabel: t('உதாரணமாகச் சொல்லலாம்', 'ఇలా అడగవచ్చు', 'आप ऐसे पूछ सकते हैं', 'For example, you can say'),
  emptyInput: t('உங்களுக்கு என்ன உதவி வேண்டும் என்று சொல்லுங்கள் அல்லது தட்டச்சு செய்யுங்கள்.', 'మీకు ఏ సహాయం కావాలో చెప్పండి లేదా టైప్ చేయండి.', 'आपको किस मदद की ज़रूरत है, बोलें या लिखें।', 'Say or type what you need help with.'),
} satisfies Record<string, LocalizedText>

export const voiceExamples: LocalizedText[] = [
  t('எனக்கு வேலை வேண்டும்', 'నాకు ఉద్యోగం కావాలి', 'मुझे नौकरी चाहिए', 'I need a job.'),
  t('எனக்கு பயிற்சி வேண்டும்', 'నాకు శిక్షణ కావాలి', 'मुझे प्रशिक्षण चाहिए', 'I need training.'),
  t('எனக்கு அரசாங்க உதவி வேண்டும்', 'నాకు ప్రభుత్వ సహాయం కావాలి', 'मुझे सरकारी सहायता चाहिए', 'I need government help.'),
]

export const resourceOrganizations = {
  governmentOfIndia: government,
  electronics,
  labour,
  skill,
  education,
  women: womenMinistry,
  msme,
  tamilNadu,
  rural: t('ஊரக வளர்ச்சி அமைச்சகம்', 'గ్రామీణాభివృద్ధి మంత్రిత్వ శాఖ', 'ग्रामीण विकास मंत्रालय', 'Ministry of Rural Development'),
} satisfies Record<string, LocalizedText>

export const resources: Resource[] = [
  {
    id: 'myscheme', category: 'money',
    name: t('myScheme அரசு நலத்திட்ட தேடல்', 'myScheme ప్రభుత్వ పథకాల శోధన', 'myScheme सरकारी योजनाएँ खोजें', 'myScheme government schemes'),
    shortDescription: t('மத்திய மற்றும் மாநில நலத்திட்டங்களைத் தேடுங்கள்.', 'కేంద్ర మరియు రాష్ట్ర పథకాలను కనుగొనండి.', 'केंद्र और राज्य की योजनाएँ खोजें।', 'Explore central and state government schemes.'),
    simpleExplanation: t('உங்கள் தேவைக்கு பொருந்தக்கூடிய அரசு திட்டங்களைத் தேடி, அவற்றை எப்படி அணுகுவது என்பதை அறிய உதவும்.', 'మీ అవసరానికి సరిపోయే పథకాలను కనుగొని, వాటిని ఎలా పొందాలో తెలుసుకోవడంలో సహాయపడుతుంది.', 'अपनी ज़रूरत के अनुसार योजनाएँ खोजने और आगे की जानकारी पाने में मदद करता है।', 'Helps you discover schemes that may fit your needs and learn where to find details.'),
    whoItHelps: t('அரசு உதவித் திட்டங்களைத் தேடும் குடிமக்கள்.', 'ప్రభుత్వ సహాయ పథకాలు వెతుకుతున్న పౌరులు.', 'सरकारी सहायता योजनाएँ खोज रहे नागरिक।', 'People looking for government support schemes.'),
    keywords: k(['பணம்', 'உதவித்தொகை', 'நலத்திட்டம்', 'மானியம்'], ['డబ్బు', 'సహాయం', 'పథకం', 'ప్రయోజనం'], ['पैसा', 'लाभ', 'योजना', 'आर्थिक मदद'], ['money', 'benefit', 'scheme', 'financial support']),
    officialUrl: 'https://www.myscheme.gov.in/', sourceOrganization: electronics, type: 'Scheme discovery platform', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'india-schemes', category: 'money',
    name: t('இந்தியா அரசு திட்டங்கள்', 'భారత ప్రభుత్వ పథకాలు', 'भारत सरकार की योजनाएँ', 'India.gov.in schemes'),
    shortDescription: t('அரசு நலத்திட்டங்கள் பற்றிய அதிகாரப்பூர்வ தகவல்.', 'ప్రభుత్వ పథకాల గురించి అధికారిక సమాచారం.', 'सरकारी योजनाओं की आधिकारिक जानकारी।', 'Official information about government schemes.'),
    simpleExplanation: t('தேசிய இந்தியா இணையதளத்தில் திட்டங்கள் பற்றிய தகவலைப் படிக்கலாம்.', 'జాతీయ భారత పోర్టల్‌లో పథకాల సమాచారం చూడవచ్చు.', 'राष्ट्रीय भारत पोर्टल पर योजनाओं की जानकारी देखें।', 'Read scheme information on the National Portal of India.'),
    whoItHelps: t('அரசுத் திட்டங்களைப் பற்றிய தகவல் தேடும் மக்கள்.', 'ప్రభుత్వ పథకాల సమాచారం కోరుకునే వారు.', 'सरकारी योजनाओं की जानकारी चाहने वाले लोग।', 'People seeking information about government schemes.'),
    keywords: k(['அரசு திட்டம்', 'நலத்திட்டம்'], ['ప్రభుత్వ పథకాలు', 'భారత ప్రభుత్వం'], ['सरकारी योजना', 'भारत सरकार'], ['government schemes', 'india government schemes']),
    officialUrl: 'https://www.india.gov.in/my-government/schemes', sourceOrganization: government, type: 'Government information', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'ncs', category: 'jobs',
    name: t('தேசிய தொழில் சேவை (NCS)', 'నేషనల్ కెరీర్ సర్వీస్ (NCS)', 'राष्ट्रीय करियर सेवा (NCS)', 'National Career Service (NCS)'),
    shortDescription: t('வேலை, இன்டர்ன்ஷிப் மற்றும் தொழில் வழிகாட்டல்.', 'ఉద్యోగాలు, ఇంటర్న్‌షిప్‌లు మరియు కెరీర్ మార్గదర్శకం.', 'नौकरी, इंटर्नशिप और करियर मार्गदर्शन।', 'Jobs, internships and career guidance.'),
    simpleExplanation: t('வேலைகள், அரசு வேலை தேடல், பெண்களுக்கான வேலை வடிகட்டி, இன்டர்ன்ஷிப் மற்றும் தொழில் வளங்கள் NCS தளத்தில் உள்ளன.', 'ఉద్యోగాలు, ప్రభుత్వ ఉద్యోగ శోధన, మహిళల ఉద్యోగ ఫిల్టర్, ఇంటర్న్‌షిప్‌లు మరియు కెరీర్ వనరులు NCSలో ఉన్నాయి.', 'NCS पर नौकरी, सरकारी नौकरी खोज, महिलाओं के लिए फ़िल्टर, इंटर्नशिप और करियर संसाधन उपलब्ध हैं।', 'NCS includes jobs, government job search, a women-jobs filter, internships and career resources.'),
    whoItHelps: t('வேலை தேடுபவர்கள் மற்றும் தொழில் வழிகாட்டல் விரும்புவோர்.', 'ఉద్యోగం లేదా కెరీర్ మార్గదర్శకం కోరేవారు.', 'नौकरी या करियर मार्गदर्शन खोजने वाले लोग।', 'Jobseekers and people looking for career support.'),
    keywords: k(['வேலை', 'வேலைவாய்ப்பு', 'தொழில்', 'இன்டர்ன்ஷிப்', 'பெண்களுக்கான வேலை'], ['ఉద్యోగం', 'ఉపాధి', 'కెరీర్', 'ఇంటర్న్‌షిప్', 'మహిళల ఉద్యోగాలు'], ['नौकरी', 'रोजगार', 'करियर', 'इंटर्नशिप', 'महिलाओं की नौकरी'], ['job', 'work', 'employment', 'career', 'internship', 'women jobs']),
    officialUrl: 'https://www.ncs.gov.in/', sourceOrganization: labour, type: 'Career and employment platform', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'ncs-women-jobs', category: 'jobs',
    name: t('NCS பெண்களுக்கான வேலை வடிகட்டி', 'NCS మహిళల ఉద్యోగాల ఫిల్టర్', 'NCS महिलाओं की नौकरी खोज', 'NCS jobs for women'),
    shortDescription: t('NCS தளத்தில் பெண்களுக்கான வேலை தேடல் வடிகட்டி.', 'NCSలో మహిళల కోసం ఉద్యోగ శోధన ఫిల్టర్.', 'NCS पर महिलाओं के लिए नौकरी खोज फ़िल्टर।', 'Women-jobs filter within the NCS platform.'),
    simpleExplanation: t('இது தனி தளம் அல்ல; NCS வேலை பட்டியலின் அதிகாரப்பூர்வ பெண்கள் வடிகட்டிய காட்சி.', 'ఇది వేరే పోర్టల్ కాదు; NCS ఉద్యోగాల జాబితాలోని అధికారిక మహిళల ఫిల్టర్.', 'यह अलग पोर्टल नहीं है; NCS नौकरी सूची का आधिकारिक महिला फ़िल्टर दृश्य है।', 'This is not a separate portal; it is the official women-preference filter on the NCS job listing.'),
    whoItHelps: t('பெண்களுக்கான வேலை வாய்ப்புகளைத் தேடும் வேலை தேடுபவர்கள்.', 'మహిళల ఉద్యోగ అవకాశాలు వెతికే ఉద్యోగార్థులు.', 'महिलाओं के लिए नौकरी अवसर खोजने वाले लोग।', 'Jobseekers searching for opportunities listed with women preference.'),
    keywords: k(['பெண்களுக்கான வேலை', 'பெண்கள் வேலை'], ['మహిళల ఉద్యోగాలు', 'మహిళలకు ఉద్యోగం'], ['महिलाओं की नौकरी', 'महिलाओं के लिए रोजगार'], ['women jobs', 'jobs for women']),
    officialUrl: 'https://ncs.gov.in/job-listing?genderPreference=FEMALE', sourceOrganization: labour, type: 'NCS filtered job listing', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'skill-india-digital', category: 'learning',
    name: t('Skill India Digital Hub', 'Skill India Digital Hub', 'Skill India Digital Hub', 'Skill India Digital Hub'),
    shortDescription: t('திறன் பாடங்கள், பயிற்சி மற்றும் வாய்ப்புகள்.', 'నైపుణ్య కోర్సులు, శిక్షణ మరియు అవకాశాలు.', 'कौशल कोर्स, प्रशिक्षण और अवसर।', 'Skill courses, training and opportunities.'),
    simpleExplanation: t('திறன் மேம்பாடு, பாடங்கள் மற்றும் தொடர்புடைய வாய்ப்புகளை ஆராய உதவும் அரசு தளம்.', 'నైపుణ్యాభివృద్ధి, కోర్సులు మరియు సంబంధిత అవకాశాలను అన్వేషించడానికి ప్రభుత్వ వేదిక.', 'कौशल विकास, कोर्स और संबंधित अवसरों को देखने का सरकारी मंच।', 'A government platform for exploring skill development, courses and related opportunities.'),
    whoItHelps: t('புதிய திறன் கற்க அல்லது வேலைக்குத் தயாராக விரும்புவோர்.', 'కొత్త నైపుణ్యాలు నేర్చుకుని ఉద్యోగానికి సిద్ధమవ్వాలనుకునేవారు.', 'नए कौशल सीखने और नौकरी की तैयारी करने वाले लोग।', 'People who want to learn skills or prepare for work.'),
    keywords: k(['பயிற்சி', 'திறன்', 'வேலைத் திறன்', 'PMKVY'], ['నైపుణ్యం', 'శిక్షణ', 'కోర్సు', 'PMKVY'], ['कौशल', 'प्रशिक्षण', 'कोर्स', 'PMKVY'], ['skill', 'training', 'course', 'pmkvy', 'skill india']),
    officialUrl: 'https://www.skillindiadigital.gov.in/', sourceOrganization: skill, type: 'Skills and training platform', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'pmkvy', category: 'learning',
    name: t('PMKVY திறன் பயிற்சி', 'PMKVY నైపుణ్య శిక్షణ', 'PMKVY कौशल प्रशिक्षण', 'PMKVY skill training'),
    shortDescription: t('திறன் பயிற்சி திட்டத் தகவல்.', 'నైపుణ్య శిక్షణ పథకం సమాచారం.', 'कौशल प्रशिक्षण योजना की जानकारी।', 'Information about the skill training scheme.'),
    simpleExplanation: t('PMKVY பற்றிய தகவல் Skill India Digital Hub-ல் உள்ளது. இந்த கூறுக்கான தனி இணைப்பு சரிபார்க்கப்படவில்லை.', 'PMKVY సమాచారం Skill India Digital Hubలో ఉంది. ఈ భాగానికి ప్రత్యేక లింక్ ధృవీకరించలేదు.', 'PMKVY की जानकारी Skill India Digital Hub पर है। इस घटक का अलग लिंक सत्यापित नहीं है।', 'PMKVY information is available through Skill India Digital Hub; a separate link for this component is not verified.'),
    whoItHelps: t('திறன் பயிற்சி வாய்ப்புகளைத் தேடுபவர்கள்.', 'నైపుణ్య శిక్షణ అవకాశాలు వెతుకుతున్నవారు.', 'कौशल प्रशिक्षण के अवसर खोजने वाले लोग।', 'People seeking skill training opportunities.'),
    keywords: k(['PMKVY', 'திறன் பயிற்சி'], ['PMKVY', 'నైపుణ్య శిక్షణ'], ['PMKVY', 'कौशल प्रशिक्षण'], ['pmkvy', 'skill training']),
    sourceOrganization: skill, type: 'Skill training scheme information', languages, verified: false, availableActions: [],
  },
  {
    id: 'swayam', category: 'learning',
    name: t('SWAYAM இலவச பாடநெறிகள்', 'SWAYAM ఉచిత కోర్సులు', 'SWAYAM निःशुल्क कोर्स', 'SWAYAM courses'),
    shortDescription: t('பல்கலைக்கழகங்கள் வழங்கும் ஆன்லைன் பாடங்கள்.', 'విశ్వవిద్యాలయాల ఆన్‌లైన్ కోర్సులు.', 'विश्वविद्यालयों के ऑनलाइन कोर्स।', 'Online courses from universities.'),
    simpleExplanation: t('உங்கள் நேரத்தில் படிக்கக்கூடிய பல்வேறு பாடங்களைத் தேடலாம்.', 'మీ సమయానికి అనుగుణంగా అనేక కోర్సులను నేర్చుకోవచ్చు.', 'अपनी सुविधा से अलग-अलग कोर्स सीख सकते हैं।', 'Explore courses you can study at your own pace.'),
    whoItHelps: t('ஆன்லைனில் கற்க விரும்புவோர்.', 'ఆన్‌లైన్‌లో నేర్చుకోవాలనుకునేవారు.', 'ऑनलाइन सीखना चाहने वाले लोग।', 'People who want to learn online.'),
    keywords: k(['படிப்பு', 'ஆன்லைன் பாடம்', 'பாடநெறி'], ['చదువు', 'ఆన్‌లైన్ కోర్సు'], ['पढ़ाई', 'ऑनलाइन कोर्स'], ['course', 'learn online', 'swayam']),
    officialUrl: 'https://swayam.gov.in/', sourceOrganization: education, type: 'Online learning platform', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'diksha', category: 'learning',
    name: t('DIKSHA கற்றல் வளங்கள்', 'DIKSHA అభ్యాస వనరులు', 'DIKSHA सीखने के संसाधन', 'DIKSHA learning resources'),
    shortDescription: t('பள்ளிக் கல்வி வளங்கள் மற்றும் பாடநெறிகள்.', 'పాఠశాల విద్యా వనరులు మరియు కోర్సులు.', 'स्कूली शिक्षा के संसाधन और कोर्स।', 'School learning resources and courses.'),
    simpleExplanation: t('பாடப்புத்தகங்கள், காணொளிகள் மற்றும் கற்றல் உள்ளடக்கங்களைப் பார்க்கலாம்.', 'పాఠ్యపుస్తకాలు, వీడియోలు మరియు అభ్యాస విషయాలు చూడవచ్చు.', 'पाठ्यपुस्तकें, वीडियो और सीखने की सामग्री देखें।', 'Explore textbooks, videos and learning content.'),
    whoItHelps: t('மாணவர்கள், பெற்றோர் மற்றும் ஆசிரியர்கள்.', 'విద్యార్థులు, తల్లిదండ్రులు మరియు ఉపాధ్యాయులు.', 'छात्र, अभिभावक और शिक्षक।', 'Students, families and teachers.'),
    keywords: k(['பள்ளி', 'பாடப்புத்தகம்', 'மாணவர்'], ['పాఠశాల', 'పాఠ్యపుస్తకం', 'విద్యార్థి'], ['स्कूल', 'पाठ्यपुस्तक', 'छात्र'], ['school', 'textbook', 'student', 'diksha']),
    officialUrl: 'https://diksha.gov.in/', sourceOrganization: education, type: 'Digital education platform', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'ullas', category: 'learning',
    name: t('ULLAS வயது வந்தோர் கல்வி', 'ULLAS వయోజన విద్య', 'ULLAS वयस्क शिक्षा', 'ULLAS adult learning'),
    shortDescription: t('15 வயதுக்கு மேற்பட்டோருக்கான வாழ்நாள் கற்றல்.', '15 ఏళ్లు పైబడిన వారి కోసం జీవితకాల అభ్యాసం.', '15 वर्ष से अधिक आयु के लोगों के लिए आजीवन सीखना।', 'Lifelong learning for adults aged 15 and above.'),
    simpleExplanation: t('அடிப்படை எழுத்தறிவு மற்றும் வாழ்வுத் திறன் கற்றலைப் பற்றிய தகவல்.', 'ప్రాథమిక అక్షరాస్యత మరియు జీవన నైపుణ్యాల సమాచారం.', 'बुनियादी साक्षरता और जीवन कौशल की जानकारी।', 'Information about foundational literacy and lifelong learning.'),
    whoItHelps: t('முறையான பள்ளிக் கல்வியைத் தவறவிட்ட 15 வயதுக்கு மேற்பட்டோர்.', 'పాఠశాల విద్యకు దూరమైన 15 ఏళ్లు పైబడినవారు.', 'औपचारिक स्कूली शिक्षा से वंचित 15 वर्ष से अधिक आयु के लोग।', 'People aged 15+ who missed formal schooling.'),
    keywords: k(['எழுத்தறிவு', 'வயது வந்தோர் கல்வி', 'ULLAS'], ['అక్షరాస్యత', 'వయోజన విద్య', 'ULLAS'], ['साक्षरता', 'वयस्क शिक्षा', 'ULLAS'], ['adult learning', 'literacy', 'ullas']),
    officialUrl: 'https://ullas.education.gov.in/', sourceOrganization: education, type: 'Adult learning programme', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'eskill-india', category: 'learning',
    name: t('NSDC eSkill India', 'NSDC eSkill India', 'NSDC eSkill India', 'NSDC eSkill India'),
    shortDescription: t('ஆன்லைன் திறன் கற்றல் வளம்.', 'ఆన్‌లైన్ నైపుణ్య అభ్యాస వనరు.', 'ऑनलाइन कौशल सीखने का संसाधन।', 'Online skills learning resource.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('ஆன்லைனில் திறன்களை கற்க விரும்புவோர்.', 'ఆన్‌లైన్‌లో నైపుణ్యాలు నేర్చుకోవాలనుకునేవారు.', 'ऑनलाइन कौशल सीखना चाहने वाले लोग।', 'People looking to learn skills online.'),
    keywords: k(['eSkill', 'திறன் பாடம்'], ['eSkill', 'నైపుణ్య కోర్సు'], ['eSkill', 'कौशल कोर्स'], ['eskill india', 'online skill course']),
    sourceOrganization: skill, type: 'Online skills learning resource', languages, verified: false, availableActions: [],
  },
  {
    id: 'mission-shakti', category: 'women',
    name: t('Mission Shakti பெண்கள் ஆதரவு', 'Mission Shakti మహిళా మద్దతు', 'Mission Shakti महिला सहायता', 'Mission Shakti women’s support'),
    shortDescription: t('பெண்கள் பாதுகாப்பு மற்றும் அதிகாரமளித்தல் ஆதரவு.', 'మహిళల భద్రత మరియు సాధికారత మద్దతు.', 'महिला सुरक्षा और सशक्तिकरण सहायता।', 'Women’s safety and empowerment support.'),
    simpleExplanation: t('Sambal, Samarthya, Sakhi Niwas, Palna, Shakti Sadan, Nari Adalat மற்றும் BBBP உள்ளிட்ட கூறுகள் பற்றிய அரசு தகவல்.', 'సంబల్, సమర్థ్య, సఖి నివాస్, పాల్నా, శక్తి సదన్, నారీ అదాలత్ మరియు BBBP భాగాల ప్రభుత్వ సమాచారం.', 'संबल, सामर्थ्य, सखी निवास, पालना, शक्ति सदन, नारी अदालत और BBBP घटकों की सरकारी जानकारी।', 'Government information about components including Sambal, Samarthya, Sakhi Niwas, Palna, Shakti Sadan, Nari Adalat and BBBP.'),
    whoItHelps: t('பெண்கள் மற்றும் பெண்கள் ஆதரவு தேடும் குடும்பங்கள்.', 'మహిళలు మరియు మద్దతు కోరే కుటుంబాలు.', 'महिलाएँ और सहायता खोज रहे परिवार।', 'Women and families looking for support.'),
    keywords: k(['பெண்கள் உதவி', 'பெண்கள் திட்டம்', 'சம்பல்', 'சமர்த்தியா', 'சகி நிவாஸ்', 'பால்னா', 'சக்தி சதன்', 'நாரி அதாலத்', 'பெண் குழந்தை'], ['మహిళల సహాయం', 'మహిళా పథకం', 'సంబల్', 'సమర్థ్య', 'సఖి నివాస్', 'పాల్నా', 'శక్తి సదన్', 'నారీ అదాలత్'], ['महिला सहायता', 'महिला योजना', 'संबल', 'सामर्थ्य', 'सखी निवास', 'पालना', 'शक्ति सदन', 'नारी अदालत'], ['women support', 'mission shakti', 'sambal', 'samarthya', 'sakhi niwas', 'palna', 'shakti sadan', 'nari adalat', 'beti bachao']),
    officialUrl: 'https://missionshakti.wcd.gov.in/', sourceOrganization: womenMinistry, type: 'Women’s support programme', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'national-hub-empowerment-women', category: 'women',
    name: t('பெண்கள் அதிகாரமளித்தலுக்கான தேசிய மையம்', 'మహిళా సాధికారత జాతీయ కేంద్రం', 'महिला सशक्तिकरण के लिए राष्ट्रीय केंद्र', 'National Hub for Empowerment of Women'),
    shortDescription: t('பெண்கள் நலத் திட்டங்கள் மற்றும் சேவைகளைப் புரிந்துகொள்ள வழிகாட்டல்.', 'మహిళా సంక్షేమ పథకాలు, సేవలను అర్థం చేసుకునే మార్గదర్శకం.', 'महिला कल्याण योजनाओं और सेवाओं को समझने का मार्गदर्शन।', 'Guidance for understanding women’s welfare schemes and services.'),
    simpleExplanation: t('SANKALP: HEW என்பது Mission Shakti-யின் கூறு. தனி இணையதள இணைப்பு சரிபார்க்கப்படவில்லை.', 'SANKALP: HEW Mission Shaktiలో భాగం. ప్రత్యేక వెబ్‌సైట్ లింక్ ధృవీకరించబడలేదు.', 'SANKALP: HEW Mission Shakti का घटक है। अलग वेबसाइट लिंक सत्यापित नहीं है।', 'SANKALP: HEW is a Mission Shakti component; a separate website link is not verified.'),
    whoItHelps: t('பெண்கள் நலத் திட்டங்கள் மற்றும் சேவைகள் பற்றிய வழிகாட்டல் விரும்புவோர்.', 'మహిళా సంక్షేమ పథకాలు, సేవలపై మార్గదర్శకం కోరేవారు.', 'महिला कल्याण योजनाओं और सेवाओं पर मार्गदर्शन चाहने वाले लोग।', 'People seeking guidance about women’s welfare schemes and services.'),
    keywords: k(['பெண்கள் அதிகாரமளித்தல்', 'பெண்கள் நல மையம்'], ['మహిళా సాధికారత', 'మహిళా సంక్షేమ కేంద్రం'], ['महिला सशक्तिकरण', 'महिला कल्याण केंद्र'], ['women empowerment hub', 'national hub women', 'nhew', 'hew']),
    sourceOrganization: womenMinistry, type: 'Mission Shakti SANKALP: HEW component', languages, verified: false, availableActions: [],
  },
  {
    id: 'pmmvy', category: 'women',
    name: t('PMMVY தாய்மை ஆதரவு', 'PMMVY మాతృత్వ మద్దతు', 'PMMVY मातृत्व सहायता', 'PMMVY maternity support'),
    shortDescription: t('பிரதம மந்திரி மாத்ரு வந்தனா யோஜனா பற்றிய தகவல்.', 'ప్రధాన మంత్రి మాతృ వందన యోజన సమాచారం.', 'प्रधानमंत्री मातृ वंदना योजना की जानकारी।', 'Information about Pradhan Mantri Matru Vandana Yojana.'),
    simpleExplanation: t('திட்டத்தின் தற்போதைய விவரங்கள் மற்றும் அதிகாரப்பூர்வ உதவி வழிகளைப் பார்க்கலாம்.', 'పథకం వివరాలు మరియు అధికారిక సహాయ మార్గాలను చూడవచ్చు.', 'योजना की जानकारी और आधिकारिक सहायता देखें।', 'Review current scheme information and official support options.'),
    whoItHelps: t('கர்ப்பிணி மற்றும் பாலூட்டும் தாய்மார்கள் திட்டத் தகவலைத் தேடுபவர்கள்.', 'గర్భిణీ మరియు పాలిచ్చే తల్లులు పథకం సమాచారం కోరేవారు.', 'गर्भवती और स्तनपान कराने वाली महिलाएँ जो योजना की जानकारी चाहती हैं।', 'Pregnant and nursing mothers seeking scheme information.'),
    keywords: k(['தாய்மை', 'கர்ப்பிணி', 'பிரசவ உதவி', 'PMMVY'], ['మాతృత్వం', 'గర్భిణీ', 'PMMVY'], ['मातृत्व', 'गर्भवती', 'PMMVY'], ['maternity', 'pregnancy support', 'pmmvy']),
    officialUrl: 'https://pmmvy.wcd.gov.in/', sourceOrganization: womenMinistry, type: 'Maternity scheme', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'tn-women-commission', category: 'women',
    name: t('தமிழ்நாடு மாநில மகளிர் ஆணையம்', 'తమిళనాడు రాష్ట్ర మహిళా కమిషన్', 'तमिलनाडु राज्य महिला आयोग', 'Tamil Nadu State Commission for Women'),
    shortDescription: t('பெண்கள் தொடர்பான ஆதரவு மற்றும் ஆணையத் தகவல்.', 'మహిళలకు సంబంధించిన మద్దతు మరియు కమిషన్ సమాచారం.', 'महिलाओं से जुड़ी सहायता और आयोग की जानकारी।', 'Support and information from the state women’s commission.'),
    simpleExplanation: t('தமிழ்நாடு மாநில மகளிர் ஆணையத்தின் அதிகாரப்பூர்வ தகவல் மற்றும் தொடர்பு விவரங்களைப் பார்க்கலாம்.', 'తమిళనాడు రాష్ట్ర మహిళా కమిషన్ అధికారిక సమాచారం, సంప్రదింపు వివరాలు చూడండి.', 'राज्य महिला आयोग की आधिकारिक जानकारी और संपर्क विवरण देखें।', 'Find official information and contact details for the state women’s commission.'),
    whoItHelps: t('தமிழ்நாட்டில் பெண்கள் தொடர்பான ஆதரவு தேடுபவர்கள்.', 'తమిళనాడులో మహిళా మద్దతు కోరేవారు.', 'तमिलनाडु में महिला सहायता चाहने वाले लोग।', 'People seeking women-related support in Tamil Nadu.'),
    keywords: k(['தமிழ்நாடு பெண்கள் ஆணையம்', 'மகளிர் ஆணையம்'], ['తమిళనాడు మహిళా కమిషన్'], ['तमिलनाडु महिला आयोग'], ['tamil nadu women commission', 'state commission for women']),
    officialUrl: 'https://www.tnscw.tn.gov.in/', sourceOrganization: tamilNadu, type: 'State women’s commission', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'tn-pudhumai-penn', category: 'women',
    name: t('புதுமைப் பெண் கல்வி உதவி', 'పుదుమై పెన్ విద్యా మద్దతు', 'पुदुमई पेन शिक्षा सहायता', 'Pudhumai Penn education support'),
    shortDescription: t('பெண்கள் உயர் கல்வி ஆதரவு திட்டத் தகவல்.', 'మహిళల ఉన్నత విద్య మద్దతు పథకం సమాచారం.', 'महिलाओं की उच्च शिक्षा सहायता योजना की जानकारी।', 'Information about a higher education support scheme for women.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('அதிகாரப்பூர்வ திட்டத் தகவலைத் தேடும் மாணவிகள்.', 'అధికారిక పథకం సమాచారం కోరే విద్యార్థినులు.', 'आधिकारिक योजना जानकारी चाहने वाली छात्राएँ।', 'Students seeking official scheme information.'),
    keywords: k(['புதுமைப் பெண்', 'பெண்கள் கல்வி உதவி'], ['పుదుమై పెన్', 'మహిళా విద్య'], ['पुदुमई पेन', 'महिला शिक्षा'], ['pudhumai penn', 'women education support']),
    sourceOrganization: tamilNadu, type: 'State education support scheme', languages, verified: false, availableActions: [],
  },
  {
    id: 'tn-widows-welfare-board', category: 'women',
    name: t('தமிழ்நாடு விதவைகள் மற்றும் ஆதரவற்ற பெண்கள் நல வாரியம்', 'తమిళనాడు వితంతు మరియు నిరాశ్రయ మహిళల సంక్షేమ బోర్డు', 'तमिलनाडु विधवा एवं निराश्रित महिला कल्याण बोर्ड', 'Tamil Nadu Widows and Destitute Women Welfare Board'),
    shortDescription: t('விதவைகள் மற்றும் ஆதரவற்ற பெண்களுக்கான நலத் தகவல்.', 'వితంతువులు మరియు నిరాశ్రయ మహిళల సంక్షేమ సమాచారం.', 'विधवा और निराश्रित महिलाओं के कल्याण की जानकारी।', 'Welfare information for widows and destitute women.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('தமிழ்நாட்டில் நலத் தகவல் தேடும் பெண்கள்.', 'తమిళనాడులో సంక్షేమ సమాచారం కోరే మహిళలు.', 'तमिलनाडु में कल्याण जानकारी चाहने वाली महिलाएँ।', 'Women seeking welfare information in Tamil Nadu.'),
    keywords: k(['விதவை நலன்', 'ஆதரவற்ற பெண்கள்'], ['వితంతు సంక్షేమం', 'నిరాశ్రయ మహిళలు'], ['विधवा कल्याण', 'निराश्रित महिलाएँ'], ['widow welfare', 'destitute women']),
    sourceOrganization: tamilNadu, type: 'State welfare board', languages, verified: false, availableActions: [],
  },
  {
    id: 'stand-up-india', category: 'business',
    name: t('Stand-Up India தொழில் நிதி தகவல்', 'Stand-Up India వ్యాపార ఆర్థిక సమాచారం', 'Stand-Up India व्यवसाय वित्त जानकारी', 'Stand-Up India business finance information'),
    shortDescription: t('பெண்கள் தொழில்முனைவோருக்கான வங்கி ஆதரவு தகவல்.', 'మహిళా పారిశ్రామికవేత్తలకు బ్యాంకు మద్దతు సమాచారం.', 'महिला उद्यमियों के लिए बैंक सहायता की जानकारी।', 'Bank support information for women entrepreneurs.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('தொழில் தொடங்க நிதி தகவல் தேடும் பெண்கள்.', 'వ్యాపారం ప్రారంభించడానికి ఆర్థిక సమాచారం కోరే మహిళలు.', 'व्यवसाय शुरू करने के लिए वित्त जानकारी चाहने वाली महिलाएँ।', 'Women seeking finance information for a business.'),
    keywords: k(['பெண்கள் தொழில் கடன்', 'Stand-Up India'], ['మహిళల వ్యాపార రుణం', 'Stand-Up India'], ['महिला उद्यम ऋण', 'Stand-Up India'], ['women business loan', 'stand up india']),
    sourceOrganization: government, type: 'Business finance information', languages, verified: false, availableActions: [],
  },
  {
    id: 'pmegp', category: 'business',
    name: t('PMEGP சிறு தொழில் ஆதரவு', 'PMEGP చిన్న వ్యాపార మద్దతు', 'PMEGP छोटे व्यवसाय सहायता', 'PMEGP small business support'),
    shortDescription: t('சிறு தொழில் தொடங்கும் திட்டம் பற்றிய தகவல்.', 'చిన్న వ్యాపారం ప్రారంభించే పథకం సమాచారం.', 'छोटा व्यवसाय शुरू करने की योजना की जानकारी।', 'Information about a small business support scheme.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('சிறு தொழில் தொடங்கும் வழிகளைத் தேடுபவர்கள்.', 'చిన్న వ్యాపారం ప్రారంభించే మార్గాలు వెతికేవారు.', 'छोटा व्यवसाय शुरू करने के विकल्प खोजने वाले लोग।', 'People exploring ways to start a small business.'),
    keywords: k(['சிறு தொழில்', 'PMEGP', 'தொழில் கடன்'], ['చిన్న వ్యాపారం', 'PMEGP', 'వ్యాపార రుణం'], ['छोटा व्यवसाय', 'PMEGP', 'व्यवसाय ऋण'], ['small business', 'pmegp', 'business loan']),
    sourceOrganization: msme, type: 'Small business scheme information', languages, verified: false, availableActions: [],
  },
  {
    id: 'pm-vishwakarma', category: 'business',
    name: t('PM Vishwakarma கைவினைஞர் ஆதரவு', 'PM Vishwakarma చేతివృత్తుల మద్దతు', 'PM Vishwakarma कारीगर सहायता', 'PM Vishwakarma artisan support'),
    shortDescription: t('பாரம்பரிய கைவினைஞர்களுக்கான திறன் மற்றும் ஆதரவு தகவல்.', 'సాంప్రదాయ చేతివృత్తుల వారికి నైపుణ్య మరియు మద్దతు సమాచారం.', 'पारंपरिक कारीगरों के लिए कौशल और सहायता की जानकारी।', 'Skill and support information for traditional artisans.'),
    simpleExplanation: t('பயிற்சி, கருவிகள் மற்றும் கடன் ஆதரவு பற்றிய திட்டத் தகவலைப் பார்க்கலாம்.', 'శిక్షణ, పరికరాలు మరియు రుణ మద్దతు పథక సమాచారం చూడండి.', 'प्रशिक्षण, औज़ार और ऋण सहायता की योजना जानकारी देखें।', 'Review scheme information about training, toolkits and credit support.'),
    whoItHelps: t('பாரம்பரிய கைவினைத் தொழில்களில் ஈடுபடுபவர்கள்.', 'సాంప్రదాయ చేతివృత్తుల్లో పనిచేసేవారు.', 'पारंपरिक कारीगरी में काम करने वाले लोग।', 'People working in traditional artisan trades.'),
    keywords: k(['சுயதொழில்', 'கைவினை', 'கடன்', 'PM Vishwakarma'], ['వ్యాపారం', 'చేతివృత్తి', 'రుణం', 'PM Vishwakarma'], ['व्यवसाय', 'कारीगर', 'ऋण', 'PM Vishwakarma'], ['business', 'artisan', 'loan', 'pm vishwakarma']),
    officialUrl: 'https://pmvishwakarma.gov.in/', sourceOrganization: msme, type: 'Artisan support scheme', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'startup-india', category: 'business',
    name: t('Startup India தொழில் வளங்கள்', 'Startup India వ్యాపార వనరులు', 'Startup India व्यवसाय संसाधन', 'Startup India resources'),
    shortDescription: t('தொடக்க நிறுவனங்கள் பற்றிய அரசு தகவல்.', 'స్టార్టప్‌లకు సంబంధించిన ప్రభుత్వ సమాచారం.', 'स्टार्टअप से जुड़ी सरकारी जानकारी।', 'Government information for startups.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('புதிய வணிக யோசனையை வளர்க்க நினைப்பவர்கள்.', 'కొత్త వ్యాపార ఆలోచనను అభివృద్ధి చేయాలనుకునేవారు.', 'नया व्यवसाय शुरू करने की सोच रहे लोग।', 'People exploring a new business idea.'),
    keywords: k(['தொடக்க நிறுவனம்', 'ஸ்டார்ட்அப்', 'புதுமை'], ['స్టార్టప్', 'వ్యాపార ఆలోచన'], ['स्टार्टअप', 'व्यवसाय विचार'], ['startup', 'entrepreneur', 'business idea']),
    sourceOrganization: government, type: 'Startup information', languages, verified: false, availableActions: [],
  },
  {
    id: 'day-nrlm', category: 'business',
    name: t('DAY-NRLM சுயஉதவி குழுக்கள்', 'DAY-NRLM స్వయం సహాయక బృందాలు', 'DAY-NRLM स्वयं सहायता समूह', 'DAY-NRLM self-help groups'),
    shortDescription: t('ஊரக வாழ்வாதாரம் மற்றும் சுயஉதவி குழுக்கள் பற்றிய தகவல்.', 'గ్రామీణ జీవనోపాధి మరియు స్వయం సహాయక బృందాల సమాచారం.', 'ग्रामीण आजीविका और स्वयं सहायता समूहों की जानकारी।', 'Information about rural livelihoods and self-help groups.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('ஊரகப் பெண்கள் மற்றும் சுயஉதவி குழுக்கள்.', 'గ్రామీణ మహిళలు మరియు స్వయం సహాయక బృందాలు.', 'ग्रामीण महिलाएँ और स्वयं सहायता समूह।', 'Rural women and self-help groups.'),
    keywords: k(['சுயஉதவி குழு', 'மகளிர் குழு', 'ஊரக தொழில்'], ['స్వయం సహాయక బృందం', 'గ్రామీణ ఉపాధి'], ['स्वयं सहायता समूह', 'ग्रामीण आजीविका'], ['self help group', 'women shg', 'rural livelihood', 'day nrlm']),
    sourceOrganization: resourceOrganizations.rural, type: 'Rural livelihood programme', languages, verified: false, availableActions: [],
  },
  {
    id: 'mahalir-thittam', category: 'business',
    name: t('தமிழ்நாடு மகளிர் திட்டம்', 'తమిళనాడు మహిళా థిట్టం', 'तमिलनाडु महिला थिट्टम', 'Tamil Nadu Mahalir Thittam'),
    shortDescription: t('தமிழ்நாட்டில் பெண்கள் மற்றும் சுயஉதவி குழுக்களுக்கு ஆதரவு.', 'తమిళనాడులో మహిళలు మరియు స్వయం సహాయక బృందాలకు మద్దతు.', 'तमिलनाडु में महिलाओं और स्वयं सहायता समूहों के लिए समर्थन।', 'Support for women and self-help groups in Tamil Nadu.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('தமிழ்நாட்டில் உள்ள பெண்கள் மற்றும் சுயஉதவி குழுக்கள்.', 'తమిళనాడులోని మహిళలు మరియు స్వయం సహాయక బృందాలు.', 'तमिलनाडु की महिलाएँ और स्वयं सहायता समूह।', 'Women and self-help groups in Tamil Nadu.'),
    keywords: k(['மகளிர் திட்டம்', 'மகளிர் குழு', 'தமிழ்நாடு சுயஉதவி குழு'], ['మహిళా థిట్టం', 'తమిళనాడు మహిళా బృందం'], ['महिलिर थिट्टम', 'तमिलनाडु महिला समूह'], ['mahalir thittam', 'tamil nadu women shg']),
    sourceOrganization: tamilNadu, type: 'State women’s livelihood programme', languages, verified: false, availableActions: [],
  },
  {
    id: 'women-helpline-181', category: 'safety',
    name: t('பெண்கள் உதவி எண் 181 மற்றும் One Stop Centres', 'మహిళా హెల్ప్‌లైన్ 181 మరియు One Stop Centres', 'महिला हेल्पलाइन 181 और One Stop Centres', 'Women Helpline 181 and One Stop Centres'),
    shortDescription: t('பெண்களுக்கான 24 மணி நேர உதவி எண் 181.', 'మహిళల కోసం 24 గంటల హెల్ప్‌లైన్ 181.', 'महिलाओं के लिए 24 घंटे हेल्पलाइन 181।', '24-hour support helpline 181 for women.'),
    simpleExplanation: t('அவசரமோ அவசரமற்றதோ ஆகிய சூழலில் 181-ஐ அழைத்து ஆதரவு மற்றும் தொடர்புடைய சேவைகள் பற்றிய தகவலைப் பெறலாம்.', 'అత్యవసర లేదా సాధారణ పరిస్థితుల్లో 181కు కాల్ చేసి సహాయం మరియు సంబంధిత సేవల సమాచారం పొందవచ్చు.', 'आपातकालीन या अन्य स्थिति में 181 पर कॉल करके सहायता और संबंधित सेवाओं की जानकारी पा सकते हैं।', 'Call 181 for support in urgent or non-urgent situations and information about related services.'),
    whoItHelps: t('ஆதரவு அல்லது பாதுகாப்பு உதவி தேவைப்படும் பெண்கள்.', 'సహాయం లేదా భద్రతా మద్దతు అవసరమైన మహిళలు.', 'सहायता या सुरक्षा समर्थन चाहने वाली महिलाएँ।', 'Women who need support or safety assistance.'),
    keywords: k(['181', 'அவசரம்', 'வன்முறை', 'ஒரே இட மையம்', 'உதவி எண்'], ['181', 'అత్యవసరం', 'హింస', 'హెల్ప్‌లైన్'], ['181', 'आपातकाल', 'हिंसा', 'हेल्पलाइन'], ['181', 'emergency', 'violence support', 'helpline', 'one stop centre']),
    officialUrl: 'https://missionshakti.wcd.gov.in/resource', sourceOrganization: womenMinistry, type: 'Women’s safety and support', languages, verified: true, availableActions: ['open', 'call'], helplineNumber: '181',
  },
  {
    id: 'umang', category: 'government',
    name: t('UMANG அரசு சேவைகள்', 'UMANG ప్రభుత్వ సేవలు', 'UMANG सरकारी सेवाएँ', 'UMANG government services'),
    shortDescription: t('பல அரசு சேவைகளுக்கான ஒரே அணுகல் தளம்.', 'అనేక ప్రభుత్వ సేవలకు ఒకే వేదిక.', 'कई सरकारी सेवाओं तक पहुँचने का एक मंच।', 'One platform for access to many government services.'),
    simpleExplanation: t('மத்திய மற்றும் மாநில அரசு சேவைகளை ஒரே இடத்தில் ஆராயலாம்.', 'కేంద్ర మరియు రాష్ట్ర సేవలను ఒకే చోట అన్వేషించవచ్చు.', 'केंद्र और राज्य सेवाओं को एक जगह देख सकते हैं।', 'Explore central and state services in one place.'),
    whoItHelps: t('அரசு சேவைகளைத் தேடும் மக்கள்.', 'ప్రభుత్వ సేవలు వెతుకుతున్న పౌరులు.', 'सरकारी सेवाएँ खोज रहे नागरिक।', 'People looking for government services.'),
    keywords: k(['அரசு சேவை', 'உமாங்', 'சான்றிதழ்'], ['ప్రభుత్వ సేవ', 'UMANG', 'సర్టిఫికేట్'], ['सरकारी सेवा', 'UMANG', 'प्रमाणपत्र'], ['government service', 'umang', 'certificate']),
    officialUrl: 'https://web.umang.gov.in/', sourceOrganization: electronics, type: 'Government services platform', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'india-services', category: 'government',
    name: t('இந்தியா அரசு மற்றும் தேசிய சேவை பட்டியல்', 'భారత ప్రభుత్వం మరియు జాతీయ సేవల జాబితా', 'भारत सरकार और राष्ट्रीय सेवा निर्देशिका', 'India.gov.in and National Government Services'),
    shortDescription: t('தேசிய இந்தியா இணையதளத்தில் ஆன்லைன் அரசு சேவைகளைத் தேடுங்கள்.', 'జాతీయ భారత పోర్టల్‌లో ఆన్‌లైన్ ప్రభుత్వ సేవలు వెతకండి.', 'राष्ट्रीय भारत पोर्टल पर ऑनलाइन सरकारी सेवाएँ खोजें।', 'Find online government services on the National Portal of India.'),
    simpleExplanation: t('மத்திய மற்றும் மாநில அரசு சேவைகள் மற்றும் துறைகள் பற்றிய தகவலைப் பார்க்கலாம். தேசிய அரசு சேவை பட்டியலும் இங்கு ஒருங்கிணைக்கப்பட்டுள்ளது.', 'కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ సేవలు, విభాగాల సమాచారాన్ని చూడవచ్చు. జాతీయ ప్రభుత్వ సేవల జాబితా కూడా ఇక్కడ ఉంది.', 'केंद्र और राज्य की सेवाओं और विभागों की जानकारी देखें। राष्ट्रीय सरकारी सेवाओं की निर्देशिका भी यहीं उपलब्ध है।', 'Browse central and state services and departments. The National Government Services directory is integrated here.'),
    whoItHelps: t('அரசுத் தகவல் அல்லது சேவையைத் தேடுபவர்கள்.', 'ప్రభుత్వ సమాచారం లేదా సేవలు వెతికేవారు.', 'सरकारी जानकारी या सेवा खोजने वाले लोग।', 'People searching for government information or services.'),
    keywords: k(['அரசு இணையதளம்', 'இந்தியா அரசு', 'அரசு சேவை'], ['ప్రభుత్వ వెబ్‌సైట్', 'భారత ప్రభుత్వం', 'సేవ'], ['सरकारी वेबसाइट', 'भारत सरकार', 'सेवा'], ['government website', 'india.gov', 'government services']),
    officialUrl: 'https://www.india.gov.in/services', sourceOrganization: government, type: 'Government service directory', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'tn-esevai', category: 'government',
    name: t('தமிழ்நாடு e-Sevai', 'తమిళనాడు e-Sevai', 'तमिलनाडु e-Sevai', 'Tamil Nadu e-Sevai'),
    shortDescription: t('தமிழ்நாடு அரசு சான்றிதழ்கள் மற்றும் குடிமக்கள் சேவைகள்.', 'తమిళనాడు ప్రభుత్వ ధృవపత్రాలు మరియు పౌర సేవలు.', 'तमिलनाडु सरकार के प्रमाणपत्र और नागरिक सेवाएँ।', 'Tamil Nadu government certificates and citizen services.'),
    simpleExplanation: t('அரசு e-Sevai மையங்கள் மூலம் கிடைக்கும் குடிமக்கள் சேவைகள் பற்றிய தகவல்.', 'ప్రభుత్వ e-Sevai కేంద్రాల ద్వారా లభించే పౌర సేవల సమాచారం.', 'सरकारी e-Sevai केंद्रों से मिलने वाली नागरिक सेवाओं की जानकारी।', 'Information about citizen services available through government e-Sevai centres.'),
    whoItHelps: t('தமிழ்நாட்டில் அரசு குடிமக்கள் சேவைகளைத் தேடுபவர்கள்.', 'తమిళనాడులో పౌర సేవలు వెతికేవారు.', 'तमिलनाडु में नागरिक सेवाएँ खोजने वाले लोग।', 'People seeking citizen services in Tamil Nadu.'),
    keywords: k(['இ-சேவை', 'தமிழ்நாடு அரசு சேவை', 'சான்றிதழ்'], ['e-Sevai', 'తమిళనాడు సేవ', 'సర్టిఫికేట్'], ['ई-सेवाई', 'तमिलनाडु सेवा', 'प्रमाणपत्र'], ['e-sevai', 'tamil nadu government service', 'certificate']),
    officialUrl: 'https://tnesevai.tn.gov.in/', sourceOrganization: tamilNadu, type: 'State government services platform', languages, verified: true, availableActions: ['open'],
  },
  {
    id: 'tn-rural-development', category: 'government',
    name: t('தமிழ்நாடு ஊரக வளர்ச்சி தகவல்', 'తమిళనాడు గ్రామీణాభివృద్ధి సమాచారం', 'तमिलनाडु ग्रामीण विकास जानकारी', 'Tamil Nadu rural development resources'),
    shortDescription: t('ஊரக வளர்ச்சி மற்றும் உள்ளாட்சி சேவைகள் பற்றிய தகவல்.', 'గ్రామీణ అభివృద్ధి మరియు స్థానిక సేవల సమాచారం.', 'ग्रामीण विकास और स्थानीय सेवाओं की जानकारी।', 'Information about rural development and local services.'),
    simpleExplanation: unavailableExplanation,
    whoItHelps: t('தமிழ்நாட்டில் ஊரக அரசு தகவல் தேடுபவர்கள்.', 'తమిళనాడులో గ్రామీణ ప్రభుత్వ సమాచారం కోరేవారు.', 'तमिलनाडु में ग्रामीण सरकारी जानकारी खोजने वाले लोग।', 'People seeking rural government information in Tamil Nadu.'),
    keywords: k(['ஊரக வளர்ச்சி', 'கிராமம்', 'தமிழ்நாடு கிராமம்'], ['గ్రామీణాభివృద్ధి', 'గ్రామం'], ['ग्रामीण विकास', 'गाँव'], ['rural development', 'village services', 'tamil nadu rural']),
    sourceOrganization: tamilNadu, type: 'State government information', languages, verified: false, availableActions: [],
  },
  {
    id: 'eshram-resource', category: 'government',
    name: t('e-Shram தொழிலாளர் வழிகாட்டல்', 'e-Shram కార్మిక మార్గదర్శకం', 'e-Shram श्रमिक मार्गदर्शन', 'e-Shram worker guidance'),
    shortDescription: t('அமைப்புசாரா தொழிலாளர்களுக்கான வழிகாட்டப்பட்ட உதவி.', 'అసంఘటిత కార్మికుల కోసం దశలవారీ సహాయం.', 'असंगठित श्रमिकों के लिए चरण-दर-चरण सहायता।', 'Step-by-step guidance for unorganised workers.'),
    simpleExplanation: t('SakhiSetu-வின் ஏற்கனவே உள்ள ஒன்பது படி e-Shram வழிகாட்டலுக்குச் செல்லுங்கள்.', 'SakhiSetuలో ఉన్న తొమ్మిది దశల e-Shram మార్గదర్శకానికి వెళ్లండి.', 'SakhiSetu के मौजूदा नौ-चरण e-Shram मार्गदर्शन पर जाएँ।', 'Continue to SakhiSetu’s existing nine-step e-Shram guidance.'),
    whoItHelps: t('e-Shram வழிகாட்டலைத் தேடும் தொழிலாளர்கள்.', 'e-Shram మార్గదర్శకం కోరే కార్మికులు.', 'e-Shram मार्गदर्शन चाहने वाले श्रमिक।', 'Workers looking for e-Shram guidance.'),
    keywords: k(['e-Shram', 'இ ஷ்ரம்', 'அமைப்புசாரா தொழிலாளர்'], ['e-Shram', 'ఈ శ్రమ్', 'అసంఘటిత కార్మికుడు'], ['e-Shram', 'ई श्रम', 'असंगठित श्रमिक'], ['e-shram', 'unorganised worker', 'worker registration']),
    sourceOrganization: labour, type: 'Existing guided service workflow', languages, verified: false, availableActions: ['start-workflow'],
  },
]

export const resourcesByCategory = (category: ResourceCategoryId): Resource[] =>
  resources.filter((resource) => resource.category === category)

export type ResourceMatch = {
  category: ResourceCategoryId | null
  resources: Resource[]
  reason: 'eshram' | 'keyword' | 'none'
}

const contextualLearningKeywords: Record<LanguageCode, string[]> = {
  ta: ['கற்றுக்கொள்ள', 'கற்றுக்கொண்டு சம்பாதிக்க', 'வீட்டிலிருந்து கற்க'],
  te: ['నేర్చుకోవాలి', 'నేర్చుకొని సంపాదించు', 'ఇంటి నుంచి నేర్చుకో'],
  hi: ['सीखकर कमाना', 'घर से सीखना', 'सीखना और कमाना'],
  en: ['learn from home', 'learn and earn', 'work and learn', 'upskill from home'],
}

export function matchResources(userText: string, language: LanguageCode): ResourceMatch {
  const normalized = userText.toLocaleLowerCase(language)
  const eshram = resources.find((resource) => resource.id === 'eshram-resource')
  if (eshram?.keywords[language].some((keyword) => normalized.includes(keyword.toLocaleLowerCase(language)))) {
    return { category: 'government', resources: [eshram], reason: 'eshram' }
  }

  const categoryScores = resourceCategories.map((category) => {
    const keywords = category.id === 'learning'
      ? [...category.keywords[language], ...contextualLearningKeywords[language]]
      : category.keywords[language]
    const categoryMatches = keywords.reduce(
      (score, keyword) => score + (normalized.includes(keyword.toLocaleLowerCase(language)) ? keyword.length : 0),
      0,
    )
    const resourceMatches = resources
      .filter((resource) => resource.category === category.id)
      .reduce((bestScore, resource) => Math.max(bestScore, resource.keywords[language].reduce(
        (score, keyword) => score + (normalized.includes(keyword.toLocaleLowerCase(language)) ? keyword.length : 0),
        0,
      )), 0)
    return { id: category.id, score: categoryMatches * 2 + resourceMatches }
  }).sort((left, right) => right.score - left.score)

  const category = categoryScores[0]
  return category && category.score > 0
    ? { category: category.id, resources: resourcesByCategory(category.id), reason: 'keyword' }
    : { category: null, resources: [], reason: 'none' }
}
