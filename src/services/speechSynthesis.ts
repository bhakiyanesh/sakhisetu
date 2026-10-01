import type { LanguageCode } from '../data/services'

const speechLanguages: Record<LanguageCode, string> = {
  ta: 'ta-IN',
  te: 'te-IN',
  hi: 'hi-IN',
  en: 'en-IN',
}

export function speakText(
  text: string,
  language: LanguageCode,
  onEnd?: () => void,
): void {
  if (!('speechSynthesis' in window)) {
    onEnd?.()
    return
  }

  const cleaned = text
    .replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (!cleaned) {
    onEnd?.()
    return
  }

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(cleaned)
  utterance.lang = speechLanguages[language]
  utterance.rate = 0.9
  utterance.pitch = 1.0

  const voices = window.speechSynthesis.getVoices()
  const match = voices.find((v) => v.lang === speechLanguages[language])
    ?? voices.find((v) => v.lang.startsWith(language))
  if (match) utterance.voice = match

  utterance.onend = () => onEnd?.()
  utterance.onerror = () => onEnd?.()

  window.speechSynthesis.speak(utterance)
}

export function stopSpeaking(): void {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel()
}
