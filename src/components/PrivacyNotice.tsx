import type { LocalizedText, LanguageCode } from '../data/services'

type PrivacyNoticeProps = {
  title: LocalizedText
  message: LocalizedText
  language: LanguageCode
}

export function PrivacyNotice({ title, message, language }: PrivacyNoticeProps) {
  return (
    <aside className="privacy-notice" lang={language} aria-labelledby="privacy-notice-title">
      <h2 id="privacy-notice-title">{title[language]}</h2>
      <p>{message[language]}</p>
    </aside>
  )
}