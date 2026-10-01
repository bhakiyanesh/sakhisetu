import type { LocalizedText } from '../data/services'

const sensitiveDataPattern = /\b(aadhaar|aadhar|otp|one[- ]time password|password|passcode|pin|bank account|bank details|account number|credit card|debit card|card number|cvv|upi pin)\b|ஆதார்|ఆధార్|आधार|கடவுச்சொல்|పాస్‌వర్డ్|पासवर्ड|வங்கி கணக்கு|బ్యాంక్ ఖాతా|बैंक खाता|அட்டை எண்|कार्ड नंबर|కార్డు నంబర్/iu

export function containsSensitiveInformation(value: string): boolean {
  return sensitiveDataPattern.test(value)
    || /(?:^|\D)(?:\d[\s-]*){11}\d(?:\D|$)/.test(value)
    || /(?:^|\D)(?:\d[\s-]*){15}\d(?:\D|$)/.test(value)
}

const privacyWarning: LocalizedText = {
  ta: 'உங்கள் ஆதார், OTP, கடவுச்சொல், PIN அல்லது வங்கி விவரங்களை SakhiSetu-வுடன் பகிர வேண்டாம். தேவையானால் அவற்றை அதிகாரப்பூர்வ அரசு இணையதளத்தில் மட்டும் உள்ளிடுங்கள்.',
  te: 'మీ ఆధార్, OTP, పాస్‌వర్డ్, PIN లేదా బ్యాంక్ వివరాలను SakhiSetuతో పంచుకోకండి. అవసరమైతే వాటిని అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో మాత్రమే నమోదు చేయండి.',
  hi: 'अपना आधार, OTP, पासवर्ड, PIN या बैंक की जानकारी SakhiSetu को न दें। ज़रूरत पड़ने पर इन्हें केवल आधिकारिक सरकारी वेबसाइट पर भरें।',
  en: 'Please do not share your Aadhaar, OTP, password, PIN, or bank details with SakhiSetu. Enter them only on the official government website when required.',
}

export function getPrivacyWarning(): LocalizedText {
  return privacyWarning
}
