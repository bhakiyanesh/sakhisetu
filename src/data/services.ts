export type LanguageCode = 'ta' | 'te' | 'hi' | 'en'

export type LocalizedText = {
  ta: string
  te: string
  hi: string
  en: string
}

export type WorkflowStepId =
  | 'USER_NEED'
  | 'SERVICE_IDENTIFIED'
  | 'BASIC_GUIDANCE'
  | 'ELIGIBILITY_GUIDANCE'
  | 'DOCUMENT_GUIDANCE'
  | 'PRIVACY_WARNING'
  | 'OFFICIAL_PORTAL_CONFIRMATION'
  | 'OPEN_OFFICIAL_PORTAL'
  | 'COMPLETION_HELP'

export type WorkflowStep = {
  id: WorkflowStepId
  title: LocalizedText
  message: LocalizedText
  nextAction: LocalizedText
  safetyNotice?: LocalizedText
  sourceUrl?: string
  requiresConfirmation?: boolean
}

export type Service = {
  id: 'eshram'
  name: LocalizedText
  workflow: WorkflowStep[]
}

export const serviceConfiguration: { officialPortalUrl: string | undefined } = {
  officialPortalUrl: undefined,
}

export const nextActionLabels = {
  next: {
    ta: 'அடுத்து',
    te: 'తదుపరి',
    hi: 'आगे',
    en: 'Next',
  },
  back: {
    ta: 'பின்செல்லவும்',
    te: 'వెనక్కి',
    hi: 'वापस',
    en: 'Back',
  },
  tryAgain: {
    ta: 'மீண்டும் முயற்சிக்கவும்',
    te: 'మళ్లీ ప్రయత్నించండి',
    hi: 'फिर कोशिश करें',
    en: 'Try again',
  },
  continue: {
    ta: 'தொடரவும்',
    te: 'కొనసాగించండి',
    hi: 'जारी रखें',
    en: 'Continue',
  },
  reset: {
    ta: 'மீட்டமை',
    te: 'రీసెట్',
    hi: 'रीसेट',
    en: 'Reset',
  },
} satisfies Record<string, LocalizedText>

export const helpLabels: LocalizedText[] = [
  {
    ta: 'மீண்டும் விளக்கவும்',
    te: 'మళ్లీ వివరించండి',
    hi: 'फिर से समझाएं',
    en: 'Explain again',
  },
  {
    ta: 'மீண்டும் சொல்லுங்கள்',
    te: 'మళ్లీ చెప్పండి',
    hi: 'फिर से बताएं',
    en: 'Repeat',
  },
  {
    ta: 'உதவி',
    te: 'సహాయం',
    hi: 'मदद',
    en: 'Help',
  },
]

export const progressLabels: LocalizedText[] = [
  {
    ta: 'மொழி',
    te: 'భాష',
    hi: 'भाषा',
    en: 'Language',
  },
  {
    ta: 'தேவையை புரிந்துகொண்டோம்',
    te: 'మీ అవసరాన్ని అర్థం చేసుకున్నాం',
    hi: 'आपकी जरूरत समझी',
    en: 'Understood your need',
  },
  {
    ta: 'அடுத்த படி',
    te: 'తదుపరి దశ',
    hi: 'अगला कदम',
    en: 'Next step',
  },
  {
    ta: 'முடிக்கவும்',
    te: 'పూర్తి చేయండి',
    hi: 'पूरा करें',
    en: 'Complete',
  },
]

export const eshramWorkflow: WorkflowStep[] = [
  {
    id: 'USER_NEED',
    title: {
      ta: 'உங்களுக்கு என்ன உதவி வேண்டும்?',
      te: 'మీకు ఏ సహాయం కావాలి?',
      hi: 'आपको किस मदद की ज़रूरत है?',
      en: 'What help do you need?',
    },
    message: {
      ta: 'உங்களுக்கு தேவையான அரசு சேவையைப் பற்றி சொல்லுங்கள். நாங்கள் படிப்படியாக வழிகாட்டுகிறோம்.',
      te: 'మీకు కావాల్సిన ప్రభుత్వ సేవ గురించి చెప్పండి. మేము మీకు దశలవారీగా మార్గనిర్దేశం చేస్తాము.',
      hi: 'आपको जिस सरकारी सेवा की जरूरत है, उसके बारे में बताएं। हम आपको चरण-दर-चरण मार्गदर्शन करेंगे।',
      en: 'Tell us which government service you need. We will guide you step by step.',
    },
    nextAction: nextActionLabels.next,
  },
  {
    id: 'SERVICE_IDENTIFIED',
    title: {
      ta: 'e-Shram சேவை',
      te: 'e-Shram సేవ',
      hi: 'e-Shram सेवा',
      en: 'e-Shram Service',
    },
    message: {
      ta: 'e-Shram என்பது அமைப்புசாரா தொழிலாளர்களுக்கான அரசு பதிவு மற்றும் அடையாள சேவையாகும்.',
      te: 'e-Shram என்பது అసంఘటిత కార్మికుల కోసం అందుబాటులో ఉన్న ప్రభుత్వ నమోదు మరియు గుర్తింపు సేవ.',
      hi: 'e-Shram असंगठित श्रमिकों के लिए उपलब्ध सरकारी पंजीकरण और पहचान सेवा है।',
      en: 'e-Shram is a government registration and identification service for unorganised workers.',
    },
    nextAction: {
      ta: 'e-Shram பற்றி தெரிந்து கொள்ளுங்கள்',
      te: 'e-Shram గురించి తెలుసుకోండి',
      hi: 'e-Shram के बारे में जानें',
      en: 'Learn about e-Shram',
    },
  },
  {
    id: 'BASIC_GUIDANCE',
    title: {
      ta: 'சேவை பற்றி தெரிந்து கொள்ளுங்கள்',
      te: 'సేవ గురించి తెలుసుకోండి',
      hi: 'सेवा के बारे में जानें',
      en: 'Understand the service',
    },
    message: {
      ta: 'e-Shram சேவையைப் பயன்படுத்துவதற்கான அடிப்படை தகவல்களை நாங்கள் விளக்குகிறோம்.',
      te: 'e-Shram సేవను ఉపయోగించడానికి అవసరమైన ప్రాథమిక సమాచారాన్ని మేము వివరిస్తాము.',
      hi: 'हम e-Shram सेवा का उपयोग करने के लिए आवश्यक बुनियादी जानकारी समझाते हैं।',
      en: 'We will explain the basic information needed to use the e-Shram service.',
    },
    nextAction: nextActionLabels.next,
    safetyNotice: {
      ta: 'SakhiSetu உங்களுக்கு வழிகாட்டுகிறது. இது உங்கள் சார்பாக அரசு விண்ணப்பத்தை சமர்ப்பிக்காது.',
      te: 'SakhiSetu మీకు మార్గనిర్దేశం చేస్తుంది. ఇది మీ తరపున ప్రభుత్వ దరఖాస్తును సమర్పించదు.',
      hi: 'SakhiSetu आपको मार्गदर्शन करता है। यह आपकी ओर से सरकारी आवेदन जमा नहीं करता।',
      en: 'SakhiSetu provides guidance. It does not submit a government application on your behalf.',
    },
  },
  {
    id: 'ELIGIBILITY_GUIDANCE',
    title: {
      ta: 'தகுதி பற்றி தெரிந்து கொள்ளுங்கள்',
      te: 'అర్హత గురించి తెలుసుకోండి',
      hi: 'पात्रता के बारे में जानें',
      en: 'Understand eligibility',
    },
    message: {
      ta: 'e-Shram சேவைக்கான தற்போதைய தகுதி விதிகளை அதிகாரப்பூர்வ அரசு இணையதளத்தில் சரிபார்க்கவும்.',
      te: 'e-Shram సేవకు సంబంధించిన ప్రస్తుత అర్హత నిబంధనలను అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో తనిఖీ చేయండి.',
      hi: 'e-Shram सेवा की वर्तमान पात्रता आवश्यकताओं को आधिकारिक सरकारी वेबसाइट पर जांचें।',
      en: 'Check the current e-Shram eligibility requirements on the official government website.',
    },
    nextAction: nextActionLabels.next,
  },
  {
    id: 'DOCUMENT_GUIDANCE',
    title: {
      ta: 'தேவையான தகவல்கள் மற்றும் ஆவணங்கள்',
      te: 'అవసరమైన సమాచారం మరియు పత్రాలు',
      hi: 'आवश्यक जानकारी और दस्तावेज़',
      en: 'Required information and documents',
    },
    message: {
      ta: 'அதிகாரப்பூர்வ செயல்முறையைத் தொடங்குவதற்கு முன் தேவையான தகவல்கள் மற்றும் ஆவணங்களைத் தயாராக வைத்திருக்கவும்.',
      te: 'అధికారిక ప్రక్రియను ప్రారంభించే ముందు అవసరమైన సమాచారం మరియు పత్రాలను సిద్ధంగా ఉంచండి.',
      hi: 'आधिकारिक प्रक्रिया शुरू करने से पहले आवश्यक जानकारी और दस्तावेज़ तैयार रखें।',
      en: 'Keep the required information and documents ready before starting the official process.',
    },
    nextAction: nextActionLabels.next,
    safetyNotice: {
      ta: 'Aadhaar எண், OTP, password, வங்கி கணக்கு எண் அல்லது PIN-ஐ இங்கே உள்ளிட வேண்டாம்.',
      te: 'Aadhaar నంబర్, OTP, password, బ్యాంక్ ఖాతా నంబర్ లేదా PINను ఇక్కడ నమోదు చేయవద్దు.',
      hi: 'Aadhaar नंबर, OTP, password, बैंक खाता नंबर या PIN यहाँ दर्ज न करें।',
      en: 'Do not enter an Aadhaar number, OTP, password, bank account number or PIN here.',
    },
  },
  {
    id: 'PRIVACY_WARNING',
    title: {
      ta: '🔒 உங்கள் பாதுகாப்பு முக்கியம்',
      te: '🔒 మీ భద్రత ముఖ్యం',
      hi: '🔒 आपकी सुरक्षा महत्वपूर्ण है',
      en: '🔒 Your safety is important',
    },
    message: {
      ta: 'உங்கள் Aadhaar எண், OTP, password அல்லது வங்கி தகவல்களை AI-க்கு சொல்ல வேண்டாம். அவற்றை அதிகாரப்பூர்வ அரசு இணையதளத்தில் மட்டும் உள்ளிடுங்கள்.',
      te: 'మీ Aadhaar నంబర్, OTP, password లేదా బ్యాంక్ సమాచారాన్ని AIకి చెప్పవద్దు. వాటిని అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో మాత్రమే నమోదు చేయండి.',
      hi: 'अपना Aadhaar नंबर, OTP, password या बैंक की जानकारी AI को न बताएं। इन्हें केवल आधिकारिक सरकारी वेबसाइट पर ही दर्ज करें।',
      en: 'Do not share your Aadhaar number, OTP, password or bank information with the AI. Enter them only on the official government website.',
    },
    nextAction: nextActionLabels.continue,
  },
  {
    id: 'OFFICIAL_PORTAL_CONFIRMATION',
    title: {
      ta: 'அதிகாரப்பூர்வ அரசு இணையதளத்திற்கு செல்ல தயாரா?',
      te: 'అధికారిక ప్రభుత్వ వెబ్‌సైట్‌కు వెళ్లడానికి సిద్ధంగా ఉన్నారా?',
      hi: 'क्या आप आधिकारिक सरकारी वेबसाइट पर जाने के लिए तैयार हैं?',
      en: 'Are you ready to open the official government website?',
    },
    message: {
      ta: 'அடுத்த படியில் நீங்கள் அதிகாரப்பூர்வ அரசு இணையதளத்திற்கு செல்லலாம்.',
      te: 'తదుపరి దశలో మీరు అధికారిక ప్రభుత్వ వెబ్‌సైట్‌కు వెళ్లవచ్చు.',
      hi: 'अगले चरण में आप आधिकारिक सरकारी वेबसाइट पर जा सकते हैं।',
      en: 'In the next step, you can open the official government website.',
    },
    nextAction: nextActionLabels.continue,
    requiresConfirmation: true,
  },
  {
    id: 'OPEN_OFFICIAL_PORTAL',
    title: {
      ta: 'அதிகாரப்பூர்வ இணையதளத்தைத் திறக்கவும்',
      te: 'అధికారిక వెబ్‌సైట్‌ను తెరవండి',
      hi: 'आधिकारिक वेबसाइट खोलें',
      en: 'Open the official website',
    },
    message: {
      ta: 'உங்கள் செயல்முறையை அதிகாரப்பூர்வ அரசு இணையதளத்தில் தொடருங்கள்.',
      te: 'మీ ప్రక్రియను అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో కొనసాగించండి.',
      hi: 'अपनी प्रक्रिया आधिकारिक सरकारी वेबसाइट पर जारी रखें।',
      en: 'Continue your process on the official government website.',
    },
    nextAction: nextActionLabels.continue,
    sourceUrl: serviceConfiguration.officialPortalUrl,
  },
  {
    id: 'COMPLETION_HELP',
    title: {
      ta: 'செயல்முறையை முடிக்க உதவி வேண்டுமா?',
      te: 'ప్రక్రియను పూర్తి చేయడానికి మీకు సహాయం కావాలా?',
      hi: 'क्या आपको प्रक्रिया पूरी करने में मदद चाहिए?',
      en: 'Do you need help completing the process?',
    },
    message: {
      ta: 'அதிகாரப்பூர்வ இணையதளத்தில் உள்ள படிகளைப் பின்பற்றுங்கள். ஏதேனும் சிக்கல் இருந்தால் மீண்டும் வழிகாட்டுதலைப் பெறலாம்.',
      te: 'అధికారిక వెబ్‌సైట్‌లోని దశలను అనుసరించండి. ఏదైనా సమస్య ఉంటే మళ్లీ మార్గదర్శకత్వం పొందవచ్చు.',
      hi: 'आधिकारिक वेबसाइट पर दिए गए चरणों का पालन करें। किसी समस्या पर आप फिर से मार्गदर्शन ले सकते हैं।',
      en: 'Follow the steps on the official website. If you get stuck, you can return for guidance.',
    },
    nextAction: nextActionLabels.tryAgain,
  },
]

export const services: Service[] = [
  {
    id: 'eshram',
    name: {
      ta: 'e-Shram',
      te: 'e-Shram',
      hi: 'e-Shram',
      en: 'e-Shram',
    },
    workflow: eshramWorkflow,
  },
]

export const workflowUiLabels = {
  helpTitle: {
    ta: 'உதவி',
    te: 'సహాయం',
    hi: 'मदद',
    en: 'Help',
  },
  closeHelp: {
    ta: 'உதவியை மூடவும்',
    te: 'సహాయాన్ని మూసివేయండి',
    hi: 'मदद बंद करें',
    en: 'Close help',
  },
  portalAction: {
    ta: 'அதிகாரப்பூர்வ இணையதளத்தைத் திறக்கவும்',
    te: 'అధికారిక వెబ్‌సైట్‌ను తెరవండి',
    hi: 'आधिकारिक वेबसाइट खोलें',
    en: 'Open official website',
  },
  portalUnavailable: {
    ta: 'இணையதள இணைப்பு தற்போது கிடைக்கவில்லை',
    te: 'వెబ్‌సైట్ లింక్ ప్రస్తుతం అందుబాటులో లేదు',
    hi: 'वेबसाइट लिंक अभी उपलब्ध नहीं है',
    en: 'Website link is not available yet',
  },
  portalUnavailableDetails: {
    ta: 'சரிபார்க்கப்பட்ட இணைப்பு சேர்க்கப்படும் வரை இந்த இணையதளத்தைத் திறக்க முடியாது.',
    te: 'ధృవీకరించిన లింక్ జోడించే వరకు ఈ వెబ్‌సైట్‌ను తెరవలేరు.',
    hi: 'सत्यापित लिंक जोड़े जाने तक यह वेबसाइट नहीं खोली जा सकती।',
    en: 'This website cannot be opened until a verified link is configured.',
  },
  replayExplanation: {
    ta: 'விளக்கம்',
    te: 'వివరణ',
    hi: 'व्याख्या',
    en: 'Explanation',
  },
  startAgain: {
    ta: 'மீண்டும் தொடங்கவும்',
    te: 'మళ్లీ ప్రారంభించండి',
    hi: 'फिर से शुरू करें',
    en: 'Start again',
  },
} satisfies Record<string, LocalizedText>