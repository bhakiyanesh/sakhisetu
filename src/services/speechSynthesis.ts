import type { LanguageCode } from '../data/services'

const speechLanguages: Record<LanguageCode, string> = {
  ta: 'ta-IN',
  te: 'te-IN',
  hi: 'hi-IN',
  en: 'en-IN',
}

let currentUtterance: SpeechSynthesisUtterance | null = null

export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
}

export function stopSpeaking(): void {
  if (!isSpeechSynthesisSupported()) return
  try {
    window.speechSynthesis.cancel()
  } catch {
    // Ignore any browser synthesis error
  }
  currentUtterance = null
}

export function cleanTextForSpeech(text: string): string {
  return text
    .replace(/[#*_~`>[\]()]/g, '') // remove markdown symbols
    .replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '') // remove emojis
    .replace(/\s+/g, ' ')
    .trim()
}

export function speakText(
  text: string,
  language: LanguageCode,
  options?: {
    onStart?: () => void
    onEnd?: () => void
    onError?: () => void
  },
): boolean {
  if (!isSpeechSynthesisSupported()) {
    options?.onEnd?.()
    return false
  }

  const cleaned = cleanTextForSpeech(text)
  if (!cleaned) {
    options?.onEnd?.()
    return false
  }

  try {
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(cleaned)
    const targetLang = speechLanguages[language] ?? 'en-IN'
    utterance.lang = targetLang
    utterance.rate = 0.95
    utterance.pitch = 1.0

    // Try finding a matching localized voice if available
    const voices = window.speechSynthesis.getVoices?.() ?? []
    const matchingVoice = voices.find(
      (voice) => voice.lang === targetLang || voice.lang.toLowerCase() === targetLang.toLowerCase(),
    ) ?? voices.find((voice) => voice.lang.startsWith(language))

    if (matchingVoice) {
      utterance.voice = matchingVoice
    }

    utterance.onstart = () => {
      options?.onStart?.()
    }

    utterance.onend = () => {
      currentUtterance = null
      options?.onEnd?.()
    }

    utterance.onerror = () => {
      currentUtterance = null
      options?.onError?.()
      options?.onEnd?.()
    }

    currentUtterance = utterance
    window.speechSynthesis.speak(utterance)
    return true
  } catch {
    currentUtterance = null
    options?.onError?.()
    options?.onEnd?.()
    return false
  }
}
