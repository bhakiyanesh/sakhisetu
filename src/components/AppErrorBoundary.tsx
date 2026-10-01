import { Component, type ReactNode } from 'react'
import type { LanguageCode } from '../data/services'

const fallbackCopy: Record<LanguageCode, { message: string; reload: string }> = {
  ta: { message: 'SakhiSetu இப்போது திறக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.', reload: 'மீண்டும் திறக்கவும்' },
  te: { message: 'SakhiSetu ఇప్పుడు திறవడం సాధ్యం కాలేదు. మళ్లీ ప్రయత్నించండి.', reload: 'మళ్లీ తెరవండి' },
  hi: { message: 'SakhiSetu अभी खुल नहीं पाया। फिर से कोशिश करें।', reload: 'फिर से खोलें' },
  en: { message: 'SakhiSetu could not open this section. Please try again.', reload: 'Reload SakhiSetu' },
}

type AppErrorBoundaryProps = { children: ReactNode; language: LanguageCode }
type AppErrorBoundaryState = { hasError: boolean }

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      const copy = fallbackCopy[this.props.language]
      return (
        <section aria-live="assertive" className="app-error-fallback" lang={this.props.language} role="alert">
          <p>{copy.message}</p>
          <button onClick={() => window.location.reload()} type="button">{copy.reload}</button>
        </section>
      )
    }
    return this.props.children
  }
}
