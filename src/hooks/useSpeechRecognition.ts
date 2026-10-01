import { useEffect, useRef, useState } from 'react'
import type { LanguageCode } from '../data/services'

export type VoiceStatus = 'idle' | 'listening' | 'understanding' | 'finding' | 'found'

type SpeechAlternative = { transcript: string }
type SpeechResult = { isFinal: boolean; length: number; [index: number]: SpeechAlternative }
type SpeechResults = { length: number; [index: number]: SpeechResult }
type SpeechResultEvent = Event & { results: SpeechResults }
type SpeechErrorEvent = Event & { error: string }

interface SpeechRecognitionLike {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  onresult: ((event: SpeechResultEvent) => void) | null
  onerror: ((event: SpeechErrorEvent) => void) | null
  onend: (() => void) | null
  start(): void
  stop(): void
}

interface SpeechRecognitionConstructor {
  new(): SpeechRecognitionLike
}

const speechLanguage: Record<LanguageCode, string> = {
  ta: 'ta-IN',
  te: 'te-IN',
  hi: 'hi-IN',
  en: 'en-IN',
}

export function useSpeechRecognition(
  language: LanguageCode,
  onTranscript: (transcript: string) => void | Promise<void>,
) {
  const [status, setStatus] = useState<VoiceStatus>('idle')
  const [showTypingFallback, setShowTypingFallback] = useState(false)
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const transcriptHandlerRef = useRef(onTranscript)
  const finalResultRef = useRef(false)

  useEffect(() => {
    transcriptHandlerRef.current = onTranscript
  }, [onTranscript])

  function startListening() {
    if (recognitionRef.current) return
    setShowTypingFallback(false)
    finalResultRef.current = false

    const speechWindow = window as Window & {
      SpeechRecognition?: SpeechRecognitionConstructor
      webkitSpeechRecognition?: SpeechRecognitionConstructor
    }
    const Recognition = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition

    if (!Recognition) {
      setStatus('idle')
      setShowTypingFallback(true)
      document.getElementById('resource-query')?.focus()
      return
    }

    try {
      const recognition = new Recognition()
      recognition.lang = speechLanguage[language]
      recognition.interimResults = false
      recognition.maxAlternatives = 1
      recognition.onresult = (event) => {
        const transcript = Array.from({ length: event.results.length }, (_, index) => event.results[index])
          .filter((result) => result.isFinal)
          .map((result) => result[0]?.transcript ?? '')
          .join(' ')
          .trim()
        if (!transcript) {
          recognitionRef.current = null
          setStatus('idle')
          setShowTypingFallback(true)
          document.getElementById('resource-query')?.focus()
          return
        }
        finalResultRef.current = true
        recognitionRef.current = null
        setStatus('understanding')
        void Promise.resolve(transcriptHandlerRef.current(transcript))
          .then(() => setStatus('found'))
          .catch(() => {
            setStatus('idle')
            setShowTypingFallback(true)
            document.getElementById('resource-query')?.focus()
          })
      }
      recognition.onerror = () => {
        recognitionRef.current = null
        finalResultRef.current = true
        setStatus('idle')
        setShowTypingFallback(true)
        document.getElementById('resource-query')?.focus()
      }
      recognition.onend = () => {
        recognitionRef.current = null
        if (!finalResultRef.current) {
          setStatus('idle')
          setShowTypingFallback(true)
          document.getElementById('resource-query')?.focus()
        }
      }
      recognitionRef.current = recognition
      setStatus('listening')
      recognition.start()
    } catch {
      setStatus('idle')
      setShowTypingFallback(true)
      document.getElementById('resource-query')?.focus()
    }
  }

  function setFinding() {
    setStatus('finding')
  }

  function setFound() {
    setStatus('found')
  }

  function toggleListening() {
    if (!recognitionRef.current) {
      startListening()
      return
    }
    finalResultRef.current = true
    recognitionRef.current.stop()
    recognitionRef.current = null
    setStatus('idle')
  }

  function resetVoiceState() {
    recognitionRef.current?.stop()
    recognitionRef.current = null
    finalResultRef.current = false
    setStatus('idle')
    setShowTypingFallback(false)
  }

  return { status, showTypingFallback, startListening, toggleListening, setFinding, setFound, resetVoiceState }
}
