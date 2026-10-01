import { useRef, useState } from 'react'
import { HelpPanel } from './components/HelpPanel'
import { PrivacyNotice } from './components/PrivacyNotice'
import { ProgressTracker } from './components/ProgressTracker'
import { ResourceNavigator } from './components/ResourceNavigator'
import { CompanionControls } from './components/CompanionControls'
import { AppErrorBoundary } from './components/AppErrorBoundary'
import { nextActionLabels, workflowUiLabels } from './data/services'
import { resourceUiLabels, type Resource } from './data/resources'
import { useResourceNavigator } from './hooks/useResourceNavigator'
import { useSpeechRecognition } from './hooks/useSpeechRecognition'
import { useWorkflow } from './hooks/useWorkflow'
import { languages, translations, type Language } from './translations'
import { orchestrateResourceRequest } from './services/aiOrchestrator'
import { createGeminiIntentProvider } from './services/geminiIntentProvider'
import { speakText } from './services/speechSynthesis'
import { companionLabels, type CompanionActionId } from './data/companion'
import { findGlossaryEntry, findTermsInText } from './data/glossary'
import type { LocalizedText } from './data/services'
import { simplifyGovernmentWording } from './data/simplePhrases'
import './App.css'

function makeLocalizedText(textForLanguage: (language: Language) => string): LocalizedText {
  return {
    ta: textForLanguage('ta'),
    te: textForLanguage('te'),
    hi: textForLanguage('hi'),
    en: textForLanguage('en'),
  }
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en')
  const [draft, setDraft] = useState('')
  const [hasConversationStarted, setHasConversationStarted] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [replayMode, setReplayMode] = useState<'explain' | 'repeat' | null>(null)
  const [screen, setScreen] = useState<'navigator' | 'workflow'>('navigator')
  const [isProcessing, setIsProcessing] = useState(false)
  const [searchStage, setSearchStage] = useState<'understanding' | 'finding'>('understanding')
  const [termQuery, setTermQuery] = useState('')
  const [termResult, setTermResult] = useState<ReturnType<typeof findGlossaryEntry>>(null)
  const [termLookupAttempted, setTermLookupAttempted] = useState(false)
  const [lastExplanation, setLastExplanation] = useState<LocalizedText | null>(null)
  const searchInFlightRef = useRef(false)
  const workflow = useWorkflow(selectedLanguage)
  const navigator = useResourceNavigator(selectedLanguage)
  const copy = translations[selectedLanguage]
  const showWorkflowProgress = workflow.workflowStarted || hasConversationStarted
  const currentStep = workflow.currentStep
  const simplifiedWorkflowMessage = currentStep
    ? makeLocalizedText((code) => simplifyGovernmentWording(currentStep.message[code], code))
    : null
  const termsInWorkflowMessage = currentStep
    ? findTermsInText(`${currentStep.title[selectedLanguage]} ${simplifiedWorkflowMessage?.[selectedLanguage] ?? currentStep.message[selectedLanguage]}`, selectedLanguage)
    : []

  async function handleResourceSearch(query: string) {
    if (searchInFlightRef.current) return
    searchInFlightRef.current = true
    setHasConversationStarted(true)
    setSearchStage('understanding')
    setIsProcessing(true)
    try {
      const result = await orchestrateResourceRequest(
        query,
        selectedLanguage,
        createGeminiIntentProvider(),
        () => setSearchStage('finding'),
      )
      navigator.showSearchResults(query, {
        category: result.category,
        resources: result.resources,
        reason: result.reason === 'eshram' ? 'eshram' : result.category ? 'keyword' : 'none',
      }, result.response)
      if (result.reason === 'eshram') startEShramWorkflow()
    } catch {
      const fallback = await orchestrateResourceRequest(query, selectedLanguage)
      navigator.showSearchResults(query, {
        category: fallback.category,
        resources: fallback.resources,
        reason: fallback.category ? 'keyword' : 'none',
      }, fallback.response)
    } finally {
      searchInFlightRef.current = false
      setIsProcessing(false)
    }
  }

  const voice = useSpeechRecognition(selectedLanguage, handleResourceSearch)

  function resetConversation() {
    workflow.resetWorkflow()
    setHasConversationStarted(true)
    setIsHelpOpen(false)
    setReplayMode(null)
    setTermResult(null)
    setTermLookupAttempted(false)
    setDraft('')
  }

  function startEShramWorkflow() {
    workflow.startWorkflow()
    setHasConversationStarted(true)
    setScreen('workflow')
  }

  function handleResourceAction(resource: Resource) {
    if (resource.id === 'eshram-resource') startEShramWorkflow()
  }

  function companionAction(action: CompanionActionId) {
    const step = workflow.currentStep
    const explanation: LocalizedText = termResult
      ? makeLocalizedText((code) => `${termResult.term[code]}. ${termResult.simpleMeaning[code]} ${termResult.whatToDo[code]}`)
      : step
        ? makeLocalizedText((code) => `${step.title[code]}. ${simplifyGovernmentWording(step.message[code], code)}`)
        : navigator.response ?? { ta: '', te: '', hi: '', en: '' }
    if (action === 'readAloud' || action === 'repeat') {
      const text = action === 'repeat' ? lastExplanation ?? explanation : explanation
      if (text[selectedLanguage]) { setLastExplanation(text); speakText(text[selectedLanguage], selectedLanguage) }
    } else if (action === 'explainSimply' || action === 'imStuck') {
      const nextIndex = workflow.workflow.findIndex((item) => item.id === workflow.currentWorkflowStep) + 1
      const next = workflow.hasNextStep ? workflow.workflow[nextIndex] : null
      const text: LocalizedText = step
        ? makeLocalizedText((code) => `${companionLabels.whereYouAre[code].replace('{step}', step.title[code])}. ${next ? companionLabels.nextStepIs[code].replace('{next}', next.title[code]) : companionLabels.noNextStep[code]}`)
        : explanation
      setLastExplanation(text)
      setReplayMode('explain')
      speakText(text[selectedLanguage], selectedLanguage)
      if (action === 'imStuck' && !workflow.workflowStarted) setScreen('navigator')
    } else if (action === 'goBack') {
      setTermResult(null)
      setReplayMode(null)
      if (workflow.hasPreviousStep) workflow.previousStep()
      else if (screen === 'workflow') setScreen('navigator')
      else navigator.backToCategories()
    } else if (action === 'whatDoesThisMean') {
      setTermLookupAttempted(true)
      const found = findGlossaryEntry(termQuery || (step ? `${step.title[selectedLanguage]} ${step.message[selectedLanguage]}` : ''), selectedLanguage)
      setTermResult(found)
      if (found) {
        const text = makeLocalizedText((code) => `${found.term[code]}. ${found.simpleMeaning[code]} ${found.whatToDo[code]}`)
        setLastExplanation(text)
      }
    } else if (action === 'changeLanguage') {
      document.querySelector('.language-switcher')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const portalUrl = workflow.currentStep?.sourceUrl
  const isPortalUrlSecure = (() => {
    if (!portalUrl) return false
    try {
      return new URL(portalUrl).protocol === 'https:'
    } catch {
      return false
    }
  })()

  return (
    <div className="app-shell" lang={selectedLanguage}>
      <header className="topbar">
        <a className="brand" href="#main" aria-label={resourceUiLabels.home[selectedLanguage]}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M5 24.5c4-8 8-8 13 0s9 8 13 0" />
              <path d="M8 18.5c3-5 6-5 10 0s7 5 10 0" />
              <circle cx="18" cy="10" r="2.5" />
            </svg>
          </span>
          <span>SakhiSetu</span>
        </a>
        <nav className="language-switcher" aria-label={resourceUiLabels.language[selectedLanguage]}>
          {languages.map((option) => (
            <button
              aria-pressed={selectedLanguage === option.code}
              className={selectedLanguage === option.code ? 'language-option is-active' : 'language-option'}
              key={option.code}
              lang={option.code}
              onClick={() => setSelectedLanguage(option.code)}
              type="button"
            >
              {option.name}
            </button>
          ))}
        </nav>
      </header>

      <AppErrorBoundary language={selectedLanguage}>
      <main className={screen === 'navigator' ? 'navigator-main' : 'assistance'} id="main">
        {screen === 'navigator' ? (
          <ResourceNavigator
            hasSearched={navigator.hasSearched}
            language={selectedLanguage}
            voiceStatus={isProcessing ? searchStage : voice.status}
            showTypingFallback={voice.showTypingFallback}
            response={navigator.response}
            isSearching={isProcessing}
            onBackToCategories={navigator.backToCategories}
            onSearch={(query) => { void handleResourceSearch(query) }}
            onSpeak={voice.startListening}
            onReadAloud={() => navigator.response && speakText(navigator.response[selectedLanguage], selectedLanguage)}
            onSelectCategory={navigator.selectCategory}
            onStartWorkflow={handleResourceAction}
            searchText={navigator.searchText}
            selectedCategory={navigator.selectedCategory}
            visibleResources={navigator.visibleResources}
          />
        ) : (
        <>
        <button
          className="navigator-home-button"
          onClick={() => setScreen('navigator')}
          type="button"
        >
          {resourceUiLabels.navigatorHome[selectedLanguage]}
        </button>
        <section className="assistance-panel" aria-labelledby="main-question">
          <div className="welcome-copy">
            <span className="eyebrow" aria-hidden="true">SakhiSetu AI</span>
            <h1 id="main-question">{copy.question}</h1>
          </div>

          <ProgressTracker
            currentWorkflowStep={workflow.currentWorkflowStep}
            selectedLanguage={selectedLanguage}
            steps={workflow.workflow}
            workflowStarted={showWorkflowProgress}
          />

          <div className="voice-area">
            <button
              aria-label={voice.status === 'listening' ? copy.stopListening : copy.startListening}
              aria-pressed={voice.status === 'listening'}
              className={voice.status === 'listening' ? 'microphone is-listening' : 'microphone'}
              disabled={isProcessing}
              onClick={voice.toggleListening}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
                <rect x="18" y="7" width="12" height="23" rx="6" />
                <path d="M12.5 23v1a11.5 11.5 0 0 0 23 0v-1M24 35.5V42m-7 0h14" />
              </svg>
            </button>
            <p aria-live="polite" className="voice-hint">
              {voice.status === 'listening' ? copy.listening : copy.microphone}
            </p>
          </div>

          <form className="message-form" onSubmit={(event) => { event.preventDefault(); if (draft.trim()) void handleResourceSearch(draft.trim()); setDraft('') }}>
            <label className="sr-only" htmlFor="message-input">{copy.placeholder}</label>
            <textarea
              id="message-input"
              onChange={(event) => setDraft(event.target.value)}
              placeholder={copy.placeholder}
              rows={2}
              value={draft}
            />
            <button aria-label={copy.send} className="send-button" disabled={!draft.trim()} type="submit">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M4 12 20 4l-5 16-3-7-8-1Z" />
                <path d="m12 13 8-9" />
              </svg>
            </button>
          </form>

          <div className="quick-actions">
            <h2>{copy.quickActionsLabel}</h2>
            <div className="action-list">
              {copy.actions.map((action) => (
                <button
                  className="quick-action"
                  key={action}
                  onClick={() => setDraft(action)}
                  type="button"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {hasConversationStarted && (
            <section aria-label={copy.yourMessage} aria-live="polite" className="message-history">
              {workflow.workflowStarted && workflow.currentStep && (
                <article className="workflow-response" lang={selectedLanguage}>
                  {workflow.currentWorkflowStep === 'PRIVACY_WARNING' ? (
                    <PrivacyNotice
                      language={selectedLanguage}
                      message={workflow.currentStep.message}
                      title={workflow.currentStep.title}
                    />
                  ) : (
                    <>
                      <h2>{workflow.currentStep.title[selectedLanguage]}</h2>
                      <p>{simplifiedWorkflowMessage?.[selectedLanguage]}</p>
                    </>
                  )}
                  {workflow.currentStep.safetyNotice && (
                    <p className="workflow-safety-notice">
                      {workflow.currentStep.safetyNotice[selectedLanguage]}
                    </p>
                  )}
                  {workflow.currentWorkflowStep === 'OPEN_OFFICIAL_PORTAL' && (
                    <div className="portal-action-area">
                      {isPortalUrlSecure ? (
                        <a
                          className="workflow-next-action portal-link"
                          href={portalUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {workflowUiLabels.portalAction[selectedLanguage]}
                        </a>
                      ) : (
                        <>
                          <button className="workflow-next-action" disabled type="button">
                            {workflowUiLabels.portalUnavailable[selectedLanguage]}
                          </button>
                          <p className="portal-unavailable-details">
                            {workflowUiLabels.portalUnavailableDetails[selectedLanguage]}
                          </p>
                        </>
                      )}
                    </div>
                  )}
                  <button
                    className="workflow-next-action"
                    disabled={!workflow.hasNextStep}
                    onClick={() => { workflow.nextStep(); setTermResult(null); setReplayMode(null) }}
                    type="button"
                  >
                    {workflow.currentStep.nextAction[selectedLanguage]}
                  </button>
                  <div className="workflow-controls">
                    <button
                      className="workflow-secondary-action"
                      disabled={!workflow.hasPreviousStep}
                      onClick={() => { workflow.previousStep(); setTermResult(null); setReplayMode(null) }}
                      type="button"
                    >
                      {nextActionLabels.back[selectedLanguage]}
                    </button>
                    <button
                      className="workflow-secondary-action"
                      onClick={resetConversation}
                      type="button"
                    >
                      {workflow.currentWorkflowStep === 'COMPLETION_HELP'
                        ? workflowUiLabels.startAgain[selectedLanguage]
                        : nextActionLabels.reset[selectedLanguage]}
                    </button>
                  </div>
                  <HelpPanel
                    explanation={simplifiedWorkflowMessage ?? workflow.currentStep.message}
                    isOpen={isHelpOpen}
                    language={selectedLanguage}
                    onExplainAgain={() => setReplayMode('explain')}
                    onRepeat={() => setReplayMode('repeat')}
                    onToggle={() => setIsHelpOpen((isOpen) => !isOpen)}
                  />
                  <CompanionControls
                    language={selectedLanguage}
                    onAction={companionAction}
                    onSelectTerm={(term) => {
                      setTermResult(term)
                      setTermLookupAttempted(true)
                      setLastExplanation(makeLocalizedText((code) => `${term.term[code]}. ${term.simpleMeaning[code]} ${term.whatToDo[code]}`))
                    }}
                    onTermQueryChange={setTermQuery}
                    termQuery={termQuery}
                    termResult={termResult}
                    termLookupAttempted={termLookupAttempted}
                    termsInText={termsInWorkflowMessage}
                  />
                  {replayMode && (
                    <aside aria-live="polite" className="workflow-replay">
                      <h3>
                        {replayMode === 'explain'
                          ? workflowUiLabels.replayExplanation[selectedLanguage]
                          : workflow.currentStep.title[selectedLanguage]}
                      </h3>
                      {replayMode === 'explain' && <strong>{workflow.currentStep.title[selectedLanguage]}</strong>}
                      <p>
                        {replayMode === 'explain' && lastExplanation
                          ? lastExplanation[selectedLanguage]
                          : simplifiedWorkflowMessage?.[selectedLanguage]}
                      </p>
                    </aside>
                  )}
                </article>
              )}
            </section>
          )}
        </section>
        </>
        )}
      </main>
      </AppErrorBoundary>
    </div>
  )
}

export default App
