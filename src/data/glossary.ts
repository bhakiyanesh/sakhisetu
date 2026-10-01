import type { LanguageCode, LocalizedText } from './services'

const t = (ta: string, te: string, hi: string, en: string): LocalizedText => ({ ta, te, hi, en })

export interface GlossaryEntry {
  id: string
  term: LocalizedText
  simpleMeaning: LocalizedText
  whatToDo: LocalizedText
  aliases: Record<LanguageCode, string[]>
}

export const glossary: GlossaryEntry[] = [
  {
    id: 'eshram',
    term: t('e-Shram அடையாள அட்டை', 'e-Shram గుర్తింపు కార్డు', 'e-Shram पहचान पत्र', 'e-Shram card'),
    simpleMeaning: t(
      'அமைப்புசாரா தொழிலாளர்களுக்கு அரசு வழங்கும் பதிவு அட்டை. இதில் உங்களுக்கு ஒரு தேசிய எண் கிடைக்கும்.',
      'అసంఘటిత రంగ కార్మికులకు ప్రభుత్వం ఇచ్చే నమోదు కార్డు. దీనిలో మీకు జాతీయ నంబర్ లభిస్తుంది.',
      'असंगठित क्षेत्र के श्रमिकों को सरकार यह पंजीकरण पत्र देती है। इसमें आपको एक राष्ट्रीय नंबर मिलता है।',
      'A government registration card for workers in the unorganised sector. It gives you a national number.',
    ),
    whatToDo: t(
      'அதிகாரப்பூர்வ e-Shram இணையதளத்தில் பதிவு செய்யுங்கள். உங்கள் UAN எண்ணை பாதுகாப்பாக வைத்திருங்கள்.',
      'అధికారిక e-Shram వెబ్‌సైట్‌లో నమోదు చేసుకోండి. మీ UAN నంబర్‌ను భద్రంగా ఉంచండి.',
      'आधिकारिक e-Shram वेबसाइट पर पंजीकरण करें। अपना UAN नंबर सुरक्षित रखें।',
      'Register on the official e-Shram website and keep your UAN number safe.',
    ),
    aliases: {
      ta: ['e-shram', 'இ-ஷ்ரம்'],
      te: ['e-shram', 'ఈ-శ్రమ్'],
      hi: ['e-shram', 'ई-श्रम'],
      en: ['e-shram', 'eshram'],
    },
  },
  {
    id: 'aadhaar',
    term: t('ஆதார் எண்', 'ఆధార్ నంబర్', 'आधार नंबर', 'Aadhaar number'),
    simpleMeaning: t(
      'இந்திய அரசு வழங்கும் 12 இலக்க அடையாள எண்.',
      'భారత ప్రభుత్వం ఇచ్చే 12 అంకెల గుర్తింపు నంబర్.',
      'भारत सरकार द्वारा दिया गया 12 अंकों का पहचान नंबर।',
      'A 12-digit identity number issued by the Government of India.',
    ),
    whatToDo: t(
      'இதை அதிகாரப்பூர்வ அரசு இணையதளத்தில் மட்டும் உள்ளிடுங்கள். அரட்டையில் சொல்ல வேண்டாம்.',
      'దీన్ని అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో మాత్రమే నమోదు చేయండి. చాట్‌లో చెప్పవద్దు.',
      'इसे केवल आधिकारिक सरकारी वेबसाइट पर ही डालें। चैट में न बताएं।',
      'Enter it only on the official government website. Never share it in a chat.',
    ),
    aliases: {
      ta: ['ஆதார்', 'aadhaar', 'aadhar'],
      te: ['ఆధార్', 'aadhaar', 'aadhar'],
      hi: ['आधार', 'aadhaar', 'aadhar'],
      en: ['aadhaar', 'aadhar'],
    },
  },
  {
    id: 'otp',
    term: t('OTP (ஒரு முறை கடவுச்சொல்)', 'OTP (ఒకసారి ఉపయోగించే పాస్‌వర్డ్)', 'OTP (एक बार का पासवर्ड)', 'OTP (one-time password)'),
    simpleMeaning: t(
      'நீங்கள்தான் என்று உறுதி செய்ய உங்கள் மொபைலுக்கு வரும் சிறு எண். இது ஒரு முறை மட்டுமே வேலை செய்யும்.',
      'మీరే అని నిర్ధారించడానికి మీ ఫోన్‌కు వచ్చే చిన్న నంబర్. ఇది ఒకసారి మాత్రమే పనిచేస్తుంది.',
      'यह पक्का करने के लिए आपके फ़ोन पर आने वाला छोटा नंबर कि यह आप ही हैं। यह एक ही बार काम करता है।',
      'A short code sent to your phone to prove that it is you. It works only once.',
    ),
    whatToDo: t(
      'இதை அதிகாரப்பூர்வ இணையதளம் அல்லது செயலியில் மட்டும் உள்ளிடுங்கள். யாரிடமும் சொல்ல வேண்டாம்.',
      'దీన్ని అధికారిక వెబ్‌సైట్ లేదా యాప్‌లో మాత్రమే నమోదు చేయండి. ఎవరికీ చెప్పవద్దు.',
      'इसे केवल आधिकारिक वेबसाइट या ऐप पर डालें। किसी को न बताएं।',
      'Type it only on the official website or app. Never tell it to anyone.',
    ),
    aliases: { ta: ['otp'], te: ['otp'], hi: ['otp'], en: ['otp'] },
  },
  {
    id: 'unorganised-worker',
    term: t('அமைப்புசாரா தொழிலாளர்', 'అసంఘటిత కార్మికుడు', 'असंगठित श्रमिक', 'Unorganised worker'),
    simpleMeaning: t(
      'நிறுவன ஊதியப் பட்டியலில் இல்லாத தொழிலாளர். உதாரணமாக நாள் கூலி வேலையாள், வீட்டு வேலை செய்பவர், தெருவோர வியாபாரி அல்லது விவசாயக் கூலி.',
      'కంపెనీ జీతాల జాబితాలో లేని కార్మికుడు. ఉదాహరణకు రోజువారీ కూలీ, ఇంటి పని చేసేవారు, వీధి వ్యాపారి లేదా వ్యవసాయ కూలీ.',
      'वह श्रमिक जो किसी कंपनी के वेतन पर नहीं है — जैसे दिहाड़ी मज़दूर, घरेलू कामगार, फेरीवाला या खेतिहर मज़दूर।',
      'A worker who is not on a company payroll — for example a daily-wage worker, domestic worker, street vendor or farm labourer.',
    ),
    whatToDo: t(
      'அமைப்புசாரா துறையில் வேலை செய்து, 16 முதல் 59 வயதுக்குள் இருந்தால் e-Shram-ல் பதிவு செய்யலாம்.',
      'అసంఘటిత రంగంలో పనిచేస్తూ 16 నుంచి 59 ఏళ్ల మధ్య ఉంటే e-Shramలో నమోదు చేసుకోవచ్చు.',
      'अगर आप असंगठित क्षेत्र में काम करते हैं और 16 से 59 वर्ष के हैं, तो e-Shram पर पंजीकरण कर सकते हैं।',
      'You can register for e-Shram if you work in the unorganised sector and are between 16 and 59 years old.',
    ),
    aliases: {
      ta: ['அமைப்புசாரா'],
      te: ['అసంఘటిత'],
      hi: ['असंगठित'],
      en: ['unorganised', 'unorganized'],
    },
  },
  {
    id: 'uan',
    term: t('UAN (உலகளாவிய கணக்கு எண்)', 'UAN (యూనివర్సల్ అకౌంట్ నంబర్)', 'UAN (सार्वभौमिक खाता संख्या)', 'UAN (Universal Account Number)'),
    simpleMeaning: t(
      'உங்கள் e-Shram அட்டையில் அச்சிடப்பட்ட 12 இலக்க எண். இது உங்கள் தொழிலாளர் அடையாள எண்.',
      'మీ e-Shram కార్డుపై ముద్రించిన 12 అంకెల నంబర్. ఇది మీ కార్మిక గుర్తింపు నంబర్.',
      'आपके e-Shram कार्ड पर छपा 12 अंकों का नंबर। यह आपका श्रमिक पहचान नंबर है।',
      'The 12-digit number printed on your e-Shram card. It is your worker identity number.',
    ),
    whatToDo: t(
      'எல்லா இடங்களிலும் இதே UAN-ஐ பயன்படுத்துங்கள். அட்டையை பாதுகாப்பாக வைத்திருங்கள்.',
      'అన్ని చోట్లా ఇదే UAN వాడండి. కార్డును భద్రంగా ఉంచండి.',
      'हर जगह यही UAN इस्तेमाल करें। कार्ड सुरक्षित रखें।',
      'Use the same UAN everywhere and keep the card safe.',
    ),
    aliases: { ta: ['uan'], te: ['uan'], hi: ['uan'], en: ['uan'] },
  },
  {
    id: 'eligibility',
    term: t('தகுதி', 'అర్హత', 'पात्रता', 'Eligibility'),
    simpleMeaning: t(
      'ஒருவருக்கு ஒரு திட்டம் அல்லது சேவை கிடைக்குமா என்பதை தீர்மானிக்கும் விதிகள்.',
      'ఒకరికి పథకం లేదా సేవ లభిస్తుందా అని నిర్ణయించే నిబంధనలు.',
      'वे नियम जो तय करते हैं कि किसी व्यक्ति को योजना या सेवा मिल सकती है या नहीं।',
      'The rules that decide whether a person can get a scheme or a service.',
    ),
    whatToDo: t(
      'விண்ணப்பிக்கும் முன் அதிகாரப்பூர்வ இணையதளத்தில் தகுதி விதிகளைப் படியுங்கள்.',
      'దరఖాస్తు చేసే ముందు అధికారిక వెబ్‌సైట్‌లో అర్హత నిబంధనలు చదవండి.',
      'आवेदन करने से पहले आधिकारिक वेबसाइट पर पात्रता के नियम पढ़ें।',
      'Read the eligibility rules on the official website before you apply.',
    ),
    aliases: {
      ta: ['தகுதி'],
      te: ['అర్హత'],
      hi: ['पात्रता', 'पात्र'],
      en: ['eligibility', 'eligible'],
    },
  },
  {
    id: 'beneficiary',
    term: t('பயனாளி', 'లబ్ధిదారు', 'लाभार्थी', 'Beneficiary'),
    simpleMeaning: t(
      'ஒரு திட்டத்தின் பணம் அல்லது பயனைப் பெறும் நபர்.',
      'పథకం నుంచి డబ్బు లేదా ప్రయోజనం పొందే వ్యక్తి.',
      'वह व्यक्ति जिसे योजना का पैसा या लाभ मिलता है।',
      'The person who receives the money or the benefit from a scheme.',
    ),
    whatToDo: t(
      'விண்ணப்பத்தில் உள்ள பெயர் வங்கிக் கணக்கு வைத்திருப்பவரின் பெயருடன் ஒத்திருக்கிறதா என்று சரிபார்க்கவும்.',
      'దరఖాస్తులోని పేరు బ్యాంకు ఖాతాదారు పేరుతో సరిపోతుందో చూసుకోండి.',
      'देखें कि आवेदन में लिखा नाम बैंक खाताधारक के नाम से मेल खाता है।',
      'Check that the name on the application matches the bank account holder’s name.',
    ),
    aliases: {
      ta: ['பயனாளி'],
      te: ['లబ్ధిదారు'],
      hi: ['लाभार्थी'],
      en: ['beneficiary'],
    },
  },
  {
    id: 'self-attested',
    term: t('சுய சான்றளிக்கப்பட்டது', 'స్వయం ధృవీకరించినది', 'स्व-प्रमाणित', 'Self-attested'),
    simpleMeaning: t(
      'இது உண்மையான நகல் என்று நீங்களே கையொப்பமிட்டு உறுதி செய்வது.',
      'ఇది నిజమైన కాపీ అని మీరే సంతకం చేసి నిర్ధారించడం.',
      'यह बताने के लिए कि यह सच्ची प्रति है, आप खुद उस पर हस्ताक्षर करते हैं।',
      'You sign or stamp the copy yourself to say that it is a true copy.',
    ),
    whatToDo: t(
      'நகலில் உங்கள் கையால் கையொப்பமிடுங்கள். வருவாய் அதிகாரி தேவையில்லை.',
      'కాపీపై మీ చేతితో సంతకం చేయండి. గెజిటెడ్ అధికారి అవసరం లేదు.',
      'फ़ोटोकॉपी पर अपने हाथ से हस्ताक्षर करें। ग़ज़टेड अधिकारी की ज़रूरत नहीं।',
      'Sign the photocopy with your own hand. You do not need a gazetted officer.',
    ),
    aliases: {
      ta: ['சுய சான்ற'],
      te: ['స్వయం ధృవీకరణ'],
      hi: ['स्व-प्रमाणित'],
      en: ['self-attested', 'self attested', 'attested'],
    },
  },
  {
    id: 'scheme',
    term: t('அரசு திட்டம்', 'ప్రభుత్వ పథకం', 'सरकारी योजना', 'Scheme'),
    simpleMeaning: t(
      'தகுதி உள்ளவர்களுக்கு பணம், பயிற்சி அல்லது சேவை வழங்கும் அரசு திட்டம்.',
      'అర్హులకు డబ్బు, శిక్షణ లేదా సేవ ఇచ్చే ప్రభుత్వ కార్యక్రమం.',
      'सरकारी कार्यक्रम जो पात्र लोगों को पैसा, प्रशिक्षण या सेवा देता है।',
      'A government programme that gives money, training or a service to people who qualify.',
    ),
    whatToDo: t(
      'விண்ணப்பிக்கும் முன் திட்டம் என்ன தருகிறது, யாருக்கானது என்பதைப் பாருங்கள்.',
      'దరఖాస్తు చేసే ముందు పథకం ఏమి ఇస్తుంది, ఎవరికో చూడండి.',
      'आवेदन से पहले देखें कि योजना क्या देती है और किसके लिए है।',
      'Look at what the scheme gives and who it is for before you apply.',
    ),
    aliases: {
      ta: ['திட்டம்'],
      te: ['పథకం'],
      hi: ['योजना'],
      en: ['scheme'],
    },
  },
  {
    id: 'one-stop-centre',
    term: t('ஒரே இட மையம்', 'వన్ స్టాప్ సెంటర్', 'वन स्टॉप सेंटर', 'One Stop Centre'),
    simpleMeaning: t(
      'வன்முறையை எதிர்கொள்ளும் பெண் ஒரே இடத்தில் மருத்துவம், காவல், சட்ட உதவி மற்றும் தங்குமிடம் பெறக்கூடிய மையம்.',
      'హింసను ఎదుర్కొంటున్న మహిళ ఒకే చోట వైద్యం, పోలీసు సహాయం, చట్టపరమైన సహాయం, ఆశ్రయం పొందగల కేంద్రం.',
      'एक ही जगह जहाँ हिंसा का सामना कर रही महिला को चिकित्सा, पुलिस, कानूनी सहायता और आश्रय मिलता है।',
      'A single place where a woman facing violence can get medical help, police help, legal help and shelter together.',
    ),
    whatToDo: t(
      '181-ஐ அழைத்து அங்கு செல்லலாம். முதலில் காவல் நிலையம் செல்ல வேண்டியதில்லை.',
      '181కు కాల్ చేసి అక్కడికి వెళ్లవచ్చు. ముందుగా పోలీస్ స్టేషన్ వెళ్లాల్సిన అవసరం లేదు.',
      '181 पर कॉल करके वहाँ जा सकती हैं। पहले थाने जाना ज़रूरी नहीं।',
      'You can reach it by calling 181. You do not have to visit a police station first.',
    ),
    aliases: {
      ta: ['ஒரே இட மையம்'],
      te: ['వన్ స్టాప్'],
      hi: ['वन स्टॉप'],
      en: ['one stop centre', 'one stop center'],
    },
  },
  {
    id: 'helpline-181',
    term: t('உதவி எண் 181', 'హెల్ప్‌లైన్ 181', 'हेल्पलाइन 181', 'Helpline 181'),
    simpleMeaning: t(
      'உதவி அல்லது பாதுகாப்பு தேவைப்படும் பெண்களுக்கான 24 மணி நேர தொலைபேசி சேவை.',
      'సహాయం లేదా భద్రత కావాల్సిన మహిళల కోసం 24 గంటల ఫోన్ సేవ.',
      'मदद या सुरक्षा चाहने वाली महिलाओं के लिए 24 घंटे चलने वाली फ़ोन सेवा।',
      'A 24-hour phone line for women who need help or safety support.',
    ),
    whatToDo: t(
      'எந்த ஃபோனிலிருந்தும் 181-ஐ அழைக்கலாம். இது இலவசம், எப்போது வேண்டுமானாலும் வேலை செய்யும்.',
      'ఏ ఫోన్ నుంచైనా 181కు కాల్ చేయవచ్చు. ఇది ఉచితం, ఎప్పుడైనా పనిచేస్తుంది.',
      'किसी भी फ़ोन से 181 पर कॉल करें। यह मुफ़्त है और कभी भी काम करती है।',
      'Call 181 from any phone. It is free and works at any time.',
    ),
    aliases: {
      ta: ['181', 'உதவி எண்'],
      te: ['181', 'హెల్ప్‌లైన్'],
      hi: ['181', 'हेल्पलाइन'],
      en: ['181', 'helpline'],
    },
  },
  {
    id: 'shg',
    term: t('சுயஉதவி குழு', 'స్వయం సహాయక బృందం', 'स्वयं सहायता समूह', 'Self-help group (SHG)'),
    simpleMeaning: t(
      'ஒன்றாக பணம் சேமித்து, குழுவாக சிறு கடன் பெறக்கூடிய பெண்கள் குழு.',
      'కలిసి డబ్బు పొదుపు చేసి, బృందంగా చిన్న రుణం తీసుకునే మహిళల బృందం.',
      'महिलाओं का छोटा समूह जो मिलकर पैसा बचाता है और समूह के रूप में छोटा कर्ज़ ले सकता है।',
      'A small group of women who save money together and can take small loans as a group.',
    ),
    whatToDo: t(
      'அருகில் உள்ள குழுவில் சேர கிராம அலுவலகம் அல்லது பஞ்சாயத்தில் கேளுங்கள்.',
      'దగ్గరి బృందంలో చేరడం ఎలా అని గ్రామ కార్యాలయం లేదా పంచాయతీలో అడగండి.',
      'पास के समूह में शामिल होने के लिए गाँव या पंचायत कार्यालय में पूछें।',
      'Ask at your village or panchayat office how to join a nearby group.',
    ),
    aliases: {
      ta: ['சுயஉதவி'],
      te: ['స్వయం సహాయక'],
      hi: ['स्वयं सहायता'],
      en: ['shg', 'self help group', 'self-help group'],
    },
  },
  {
    id: 'e-sevai',
    term: t('இ-சேவை', 'ఇ-సేవై', 'ई-सेवाई', 'e-Sevai'),
    simpleMeaning: t(
      'சிறு கட்டணத்தில் சான்றிதழ்கள் மற்றும் குடிமக்கள் சேவைகளைப் பெறக்கூடிய தமிழ்நாடு அரசு மையங்கள்.',
      'తక్కువ రుసుముతో ధృవపత్రాలు, పౌర సేవలు పొందగల తమిళనాడు ప్రభుత్వ కేంద్రాలు.',
      'तमिलनाडु सरकार के केंद्र जहाँ थोड़े शुल्क पर प्रमाणपत्र और नागरिक सेवाएँ मिलती हैं।',
      'Tamil Nadu government centres where you can get certificates and citizen services for a small fee.',
    ),
    whatToDo: t(
      'ஆவணங்களுடன் அருகில் உள்ள இ-சேவை மையத்திற்குச் செல்லுங்கள் அல்லது அதிகாரப்பூர்வ இ-சேவை இணையதளத்தைப் பயன்படுத்துங்கள்.',
      'పత్రాలతో దగ్గరి ఇ-సేవై కేంద్రానికి వెళ్లండి లేదా అధికారిక ఇ-సేవై వెబ్‌సైట్ వాడండి.',
      'दस्तावेज़ लेकर नज़दीकी ई-सेवाई केंद्र जाएं या आधिकारिक ई-सेवाई वेबसाइट इस्तेमाल करें।',
      'Go to the nearest e-Sevai centre with your documents, or use the official e-Sevai website.',
    ),
    aliases: {
      ta: ['இ-சேவை'],
      te: ['ఇ-సేవై'],
      hi: ['ई-सेवाई', 'ई सेवा'],
      en: ['e-sevai', 'esevai', 'e sevai'],
    },
  },
]

function matchScore(query: string, aliases: string[], language: LanguageCode): number {
  let best = 0
  for (const alias of aliases) {
    const candidate = alias.toLocaleLowerCase(language)
    if (candidate.length < 2) continue
    if (query.includes(candidate) || candidate.includes(query)) {
      best = Math.max(best, candidate.length)
    }
  }
  return best
}

/** Look up a single glossary entry from what the user typed or asked about. */
export function findGlossaryEntry(query: string, language: LanguageCode): GlossaryEntry | null {
  const normalized = query.trim().toLocaleLowerCase(language)
  if (!normalized) return null

  let bestEntry: GlossaryEntry | null = null
  let bestScore = 0

  for (const entry of glossary) {
    const inLanguage = matchScore(normalized, entry.aliases[language], language)
    const inAnyLanguage = matchScore(normalized, Object.values(entry.aliases).flat(), language)
    const score = inLanguage * 2 + inAnyLanguage
    if (score > bestScore) {
      bestEntry = entry
      bestScore = score
    }
  }

  return bestEntry
}

/** Glossary entries whose term actually appears in the text on screen. */
export function findTermsInText(text: string, language: LanguageCode): GlossaryEntry[] {
  const normalized = text.toLocaleLowerCase(language)
  return glossary.filter((entry) =>
    Object.values(entry.aliases)
      .flat()
      .some((alias) => {
        const candidate = alias.toLocaleLowerCase(language)
        return candidate.length >= 3 && normalized.includes(candidate)
      }),
  )
}
