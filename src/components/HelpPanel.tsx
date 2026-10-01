import { helpLabels, workflowUiLabels, type LanguageCode, type LocalizedText } from '../data/services'

type HelpPanelProps = {
  language: LanguageCode
  isOpen: boolean
  explanation: LocalizedText
  onToggle(): void
  onExplainAgain(): void
  onRepeat(): void
}

export function HelpPanel({
  language,
  isOpen,
  explanation,
  onToggle,
  onExplainAgain,
  onRepeat,
}: HelpPanelProps) {
  return (
    <section className="help-panel" lang={language}>
      <button
        aria-expanded={isOpen}
        className="workflow-secondary-action"
        onClick={onToggle}
        type="button"
      >
        {workflowUiLabels.helpTitle[language]}
      </button>
      {isOpen && (
        <div className="help-panel-content">
          <h3>{workflowUiLabels.helpTitle[language]}</h3>
          <p aria-live="polite">{explanation[language]}</p>
          <div className="workflow-controls">
            <button className="workflow-secondary-action" onClick={onExplainAgain} type="button">
              {helpLabels[0][language]}
            </button>
            <button className="workflow-secondary-action" onClick={onRepeat} type="button">
              {helpLabels[1][language]}
            </button>
            <button className="workflow-secondary-action" onClick={onToggle} type="button">
              {workflowUiLabels.closeHelp[language]}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}