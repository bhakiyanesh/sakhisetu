import type { LanguageCode } from './data/services'

export type Language = LanguageCode

export const languages: { code: Language; name: string }[] = [
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'en', name: 'English' },
]

export const translations = {
  ta: {
    question: 'உங்களுக்கு என்ன உதவி வேண்டும்?',
    placeholder: 'இங்கே எழுதலாம்...',
    quickActionsLabel: 'விரைவான உதவி',
    actions: ['எனக்கு தெரியவில்லை', 'எனக்கு உதவி வேண்டும்', 'மீண்டும் சொல்லுங்கள்'],
    microphone: 'பேச மைக்ரோஃபோனை அழுத்துங்கள்',
    listening: 'கேட்கிறேன்... நிறுத்த மீண்டும் அழுத்துங்கள்',
    stopListening: 'மைக்ரோஃபோனை நிறுத்துங்கள்',
    startListening: 'மைக்ரோஃபோனைத் தொடங்குங்கள்',
    send: 'அனுப்பு',
    yourMessage: 'நீங்கள் சொன்னது',
  },
  te: {
    question: 'మీకు ఏ సహాయం కావాలి?',
    placeholder: 'ఇక్కడ టైప్ చేయండి...',
    quickActionsLabel: 'త్వరిత సహాయం',
    actions: ['నాకు తెలియదు', 'నాకు సహాయం కావాలి', 'మళ్లీ చెప్పండి'],
    microphone: 'మాట్లాడటానికి మైక్రోఫోన్‌ను నొక్కండి',
    listening: 'వింటున్నాను... ఆపడానికి మళ్లీ నొక్కండి',
    stopListening: 'మైక్రోఫోన్ ఆపండి',
    startListening: 'మైక్రోఫోన్ ప్రారంభించండి',
    send: 'పంపండి',
    yourMessage: 'మీరు చెప్పింది',
  },
  hi: {
    question: 'आपको किस मदद की ज़रूरत है?',
    placeholder: 'यहाँ लिखें...',
    quickActionsLabel: 'जल्दी से बताएं',
    actions: ['मुझे नहीं पता', 'मुझे मदद चाहिए', 'फिर से बताएं'],
    microphone: 'बोलने के लिए माइक्रोफ़ोन दबाएँ',
    listening: 'सुन रही हूँ... रोकने के लिए फिर दबाएँ',
    stopListening: 'माइक्रोफ़ोन रोकें',
    startListening: 'माइक्रोफ़ोन शुरू करें',
    send: 'भेजें',
    yourMessage: 'आपने कहा',
  },
  en: {
    question: 'What help do you need?',
    placeholder: 'Type here...',
    quickActionsLabel: 'Quick ways to start',
    actions: ["I don't know", 'I need help', 'Say it again'],
    microphone: 'Tap the microphone to speak',
    listening: 'Listening... tap again to stop',
    stopListening: 'Stop microphone',
    startListening: 'Start microphone',
    send: 'Send',
    yourMessage: 'You said',
  },
} satisfies Record<Language, {
  question: string
  placeholder: string
  quickActionsLabel: string
  actions: [string, string, string]
  microphone: string
  listening: string
  stopListening: string
  startListening: string
  send: string
  yourMessage: string
}>