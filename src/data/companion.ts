import type { LocalizedText } from './services'

const t = (ta: string, te: string, hi: string, en: string): LocalizedText => ({ ta, te, hi, en })

export type CompanionActionId =
  | 'readAloud'
  | 'repeat'
  | 'explainSimply'
  | 'imStuck'
  | 'goBack'
  | 'whatDoesThisMean'
  | 'changeLanguage'

/** Order the assistance controls are rendered in. */
export const companionActionOrder: CompanionActionId[] = [
  'readAloud',
  'repeat',
  'explainSimply',
  'imStuck',
  'goBack',
  'whatDoesThisMean',
  'changeLanguage',
]

export const companionLabels = {
  panelTitle: t('உதவி வழிகள்', 'సహాయ మార్గాలు', 'सहायता के विकल्प', 'Ways to get help'),

  readAloud: t('🔊 சத்தமாகப் படியுங்கள்', '🔊 బిగ్గరగా చదవండి', '🔊 ज़ोर से पढ़ें', '🔊 Read aloud'),
  repeat: t('🔁 மீண்டும் சொல்லுங்கள்', '🔁 మళ్లీ చెప్పండి', '🔁 फिर से बताएं', '🔁 Repeat'),
  explainSimply: t('🐢 எளிமையாக விளக்குங்கள்', '🐢 సులభంగా వివరించండి', '🐢 आसान भाषा में समझाएं', '🐢 Explain simply'),
  imStuck: t('🆘 நான் சிக்கிக்கொண்டேன்', '🆘 నేను ఇరుక్కుపోయాను', '🆘 मैं अटक गया हूँ', "🆘 I'm stuck"),
  goBack: t('↩️ பின்செல்லவும்', '↩️ వెనక్కి వెళ్లండి', '↩️ वापस जाएं', '↩️ Go back'),
  whatDoesThisMean: t('❓ இதன் பொருள் என்ன?', '❓ దీని అర్థం ఏమిటి?', '❓ इसका मतलब क्या है?', '❓ What does this mean?'),
  changeLanguage: t('🌐 மொழியை மாற்றுங்கள்', '🌐 భాష మార్చండి', '🌐 भाषा बदलें', '🌐 Change language'),

  repeatHeading: t('மீண்டும் சொல்கிறேன்', 'మళ్లీ చెబుతున్నాను', 'फिर से बता रही हूँ', 'Repeating that for you'),
  explainSimplyHeading: t('எளிய வார்த்தைகளில்', 'సులభమైన మాటల్లో', 'आसान शब्दों में', 'In simple words'),
  imStuckHeading: t('நீங்கள் அடுத்ததாக என்ன செய்யலாம்', 'మీరు తదుపరి ఏమి చేయవచ్చు', 'अब आप आगे क्या कर सकते हैं', 'What you can do next'),
  meaningHeading: t('இந்த வார்த்தையின் பொருள்', 'ఈ పదం అర్థం', 'इस शब्द का अर्थ', 'What this word means'),
  simpleBadge: t('எளிய வார்த்தைகளில்', 'సులభమైన మాటల్లో', 'आसान भाषा में', 'In simple words'),

  termLabel: t('அசல் வார்த்தை', 'అసలు పదం', 'मूल शब्द', 'Original term'),
  simpleMeaningLabel: t('எளிய பொருள்', 'సులభ అర్థం', 'आसान अर्थ', 'Simple meaning'),
  whatToDoLabel: t('நீங்கள் என்ன செய்ய வேண்டும்', 'మీరు ఏమి చేయాలి', 'आपको क्या करना है', 'What you should do'),

  askTermLabel: t('எந்த வார்த்தையை விளக்க வேண்டும்?', 'ఏ పదాన్ని వివరించాలి?', 'किस शब्द को समझाना है?', 'Which word should I explain?'),
  askTermPlaceholder: t('வார்த்தையை இங்கே எழுதுங்கள்...', 'పదాన్ని ఇక్కడ టైప్ చేయండి...', 'शब्द यहाँ लिखें...', 'Type a word here...'),
  askTerm: t('பொருள் கேளுங்கள்', 'అర్థం అడగండి', 'अर्थ पूछें', 'Ask about a word'),
  noTermFound: t(
    'இந்த வார்த்தைக்கு எளிய விளக்கம் என்னிடம் இல்லை. அதிகாரப்பூர்வ அரசு இணையதளத்தில் சரிபார்க்கவும்.',
    'ఈ పదానికి సులభ వివరణ నా దగ్గర లేదు. అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో తనిఖీ చేయండి.',
    'इस शब्द का आसान अर्थ मेरे पास नहीं है। आधिकारिक सरकारी वेबसाइट पर जाँचें।',
    'I do not have a simple explanation for that word. Please check it on the official government website.',
  ),

  nothingToRepeat: t(
    'இப்போது மீண்டும் சொல்ல எதுவும் இல்லை. முதலில் உங்கள் கேள்வியைச் சொல்லுங்கள்.',
    'ఇప్పుడు మళ్లీ చెప్పడానికి ఏమీ లేదు. ముందుగా మీ ప్రశ్న చెప్పండి.',
    'अभी दोहराने के लिए कुछ नहीं है। पहले अपना सवाल बताएं।',
    'There is nothing to repeat yet. First tell me what you need help with.',
  ),
  cannotGoBack: t(
    'நீங்கள் ஏற்கனவே முதல் படியில் இருக்கிறீர்கள்.',
    'మీరు ఇప్పటికే మొదటి దశలో ఉన్నారు.',
    'आप पहले ही पहले चरण पर हैं।',
    'You are already at the first step.',
  ),

  whereYouAre: t('நீங்கள் இப்போது இங்கே இருக்கிறீர்கள்: {step}', 'మీరు ఇప్పుడు ఇక్కడ ఉన్నారు: {step}', 'आप अभी यहाँ हैं: {step}', 'You are currently at: {step}'),
  nextStepIs: t('அடுத்த படி: {next}', 'తదుపరి దశ: {next}', 'अगला कदम: {next}', 'The next step is: {next}'),
  noNextStep: t(
    'இது கடைசி படி. மீண்டும் தொடங்க "மீண்டும் தொடங்கவும்" அழுத்தவும்.',
    'ఇది చివరి దశ. మళ్లీ ప్రారంభించడానికి "మళ్లీ ప్రారంభించండి" నొక్కండి.',
    'यह आखिरी चरण है। फिर से शुरू करने के लिए "फिर से शुरू करें" दबाएँ।',
    'This is the last step. Tap "Start again" to begin a new guidance session.',
  ),

  stateChoosingHelp: t('உங்களுக்கு என்ன உதவி வேண்டும் என்பதைத் தேர்ந்தெடுக்கிறீர்கள்', 'మీకు ఏ సహాయం కావాలో ఎంచుకుంటున్నారు', 'आप चुन रहे हैं कि आपको किस मदद की ज़रूरत है', 'choosing what you need help with'),
  stateViewingResults: t('நாங்கள் கண்டுபிடித்த உதவியைப் பார்க்கிறீர்கள்', 'మేము కనుగొన్న సహాయాన్ని చూస్తున్నారు', 'हमने जो मदद ढूँढी है, उसे देख रहे हैं', 'looking at the help we found'),
  actionTellNeed: t('மைக்ரோஃபோனை அழுத்திப் பேசுங்கள் அல்லது தட்டச்சு செய்யுங்கள்', 'మైక్రోఫోన్ నొక్కి మాట్లాడండి లేదా టైప్ చేయండి', 'माइक्रोफ़ोन दबाकर बोलें या लिखें', 'tap the microphone and speak, or type your question'),
  actionPickResource: t('உங்களுக்குத் தேவையான உதவியைத் திறக்கவும்', 'మీకు కావాల్సిన సహాయాన్ని తెరవండి', 'अपनी ज़रूरत की मदद खोलें', 'open the help you want'),

  aiUnavailable: t(
    'இணைய உதவியாளரை இப்போது அணுக முடியவில்லை. இருந்தாலும் உதவியைத் தேட முடியும்.',
    'ఇంటర్నెట్ సహాయకుడిని ఇప్పుడు చేరుకోలేకపోయాము. అయినా సహాయం వెతకవచ్చు.',
    'इंटरनेट सहायक अभी उपलब्ध नहीं है। फिर भी आप मदद खोज सकते हैं।',
    'The smart helper is not reachable right now. You can still search for help.',
  ),
} satisfies Record<string, LocalizedText>
