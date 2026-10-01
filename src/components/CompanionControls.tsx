import { companionActionOrder, companionLabels, type CompanionActionId } from '../data/companion'
import type { GlossaryEntry } from '../data/glossary'
import type { LanguageCode } from '../data/services'

type CompanionControlsProps = {
  language: LanguageCode
  termQuery: string
  termResult: GlossaryEntry | null
  termLookupAttempted: boolean
  termsInText: GlossaryEntry[]
  onAction(action: CompanionActionId): void
  onSelectTerm(term: GlossaryEntry): void
  onTermQueryChange(value: string): void
}

export function CompanionControls({
  language,
  termQuery,
  termResult,
  termLookupAttempted,
  termsInText,
  onAction,
  onSelectTerm,
  onTermQueryChange,
}: CompanionControlsProps) {
  return (
    <>
      <section className="companion-controls" aria-label={companionLabels.panelTitle[language]}>
        <h3>{companionLabels.panelTitle[language]}</h3>
        <div className="workflow-controls">
          {companionActionOrder.map((action) => (
            <button
              className="workflow-secondary-action"
              key={action}
              onClick={() => onAction(action)}
              type="button"
            >
              {companionLabels[action][language]}
            </button>
          ))}
        </div>
        <div className="term-help">
          <label htmlFor="term-query">{companionLabels.askTermLabel[language]}</label>
          <input
            id="term-query"
            onChange={(event) => onTermQueryChange(event.target.value)}
            placeholder={companionLabels.askTermPlaceholder[language]}
            value={termQuery}
          />
          <button className="workflow-secondary-action" onClick={() => onAction('whatDoesThisMean')} type="button">
            {companionLabels.askTerm[language]}
          </button>
          {termResult ? (
            <div aria-live="polite">
              <p><strong>{companionLabels.termLabel[language]}:</strong> {termResult.term[language]}</p>
              <p><strong>{companionLabels.simpleMeaningLabel[language]}:</strong> {termResult.simpleMeaning[language]}</p>
              <p><strong>{companionLabels.whatToDoLabel[language]}:</strong> {termResult.whatToDo[language]}</p>
            </div>
          ) : termLookupAttempted && termQuery.trim() ? (
            <p aria-live="polite">{companionLabels.noTermFound[language]}</p>
          ) : null}
        </div>
      </section>
      {termsInText.length > 0 && (
        <div className="term-chips" aria-label={companionLabels.meaningHeading[language]}>
          {termsInText.map((term) => (
            <button key={term.id} onClick={() => onSelectTerm(term)} type="button">
              ❓ {term.term[language]}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
