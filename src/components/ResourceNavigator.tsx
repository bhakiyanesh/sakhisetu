import { useState, type FormEvent } from 'react'
import {
  resourceCategories,
  resourceUiLabels,
  voiceExamples,
  type Resource,
  type ResourceCategoryId,
} from '../data/resources'
import type { LanguageCode } from '../data/services'
import type { LocalizedText } from '../data/services'
import { CategoryCard } from './CategoryCard'
import { ResourceCard } from './ResourceCard'
import type { VoiceStatus } from '../hooks/useSpeechRecognition'

type ResourceNavigatorProps = {
  language: LanguageCode
  selectedCategory: ResourceCategoryId | null
  visibleResources: Resource[]
  searchText: string
  hasSearched: boolean
  voiceStatus: VoiceStatus
  showTypingFallback: boolean
  response: LocalizedText | null
  onSelectCategory(category: ResourceCategoryId): void
  onSearch(query: string): void
  onSpeak(): void
  onReadAloud(): void
  onBackToCategories(): void
  onStartWorkflow(resource: Resource): void
}

export function ResourceNavigator({
  language,
  selectedCategory,
  visibleResources,
  searchText,
  hasSearched,
  voiceStatus,
  showTypingFallback,
  response,
  onSelectCategory,
  onSearch,
  onSpeak,
  onReadAloud,
  onBackToCategories,
  onStartWorkflow,
}: ResourceNavigatorProps) {
  const [draft, setDraft] = useState(searchText)
  const activeCategory = resourceCategories.find((category) => category.id === selectedCategory)

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch(draft.trim())
  }

  function goBack() {
    setDraft('')
    onBackToCategories()
  }

  return (
    <section className="resource-navigator" lang={language}>
      <div className="navigator-intro">
        <span className="eyebrow">SakhiSetu</span>
        <h1>{resourceUiLabels.greeting[language]}</h1>
        <p>{resourceUiLabels.question[language]}</p>
      </div>

      <div className="navigator-mode-row" aria-label={resourceUiLabels.question[language]}>
        <button className="navigator-mode is-selected" onClick={onSpeak} type="button">
          {resourceUiLabels.voiceTap[language]}
        </button>
        <span className="navigator-mode-separator">{resourceUiLabels.or[language]}</span>
        <span className="navigator-mode type-mode">{resourceUiLabels.type[language]}</span>
      </div>

      {voiceStatus !== 'idle' && (
        <p aria-live="polite" className={`voice-status is-${voiceStatus}`}>
          {resourceUiLabels[`voice${voiceStatus[0].toUpperCase()}${voiceStatus.slice(1)}` as 'voiceListening'][language]}
        </p>
      )}

      {showTypingFallback && <p className="voice-fallback">{resourceUiLabels.typeFallback[language]}</p>}

      <form className="navigator-search" onSubmit={submitSearch}>
        <label className="sr-only" htmlFor="resource-query">{resourceUiLabels.searchPlaceholder[language]}</label>
        <textarea
          id="resource-query"
          onChange={(event) => setDraft(event.target.value)}
          placeholder={resourceUiLabels.searchPlaceholder[language]}
          rows={2}
          value={draft}
        />
        <button className="navigator-search-button" disabled={!draft.trim()} type="submit">
          {resourceUiLabels.search[language]}
        </button>
      </form>

      <div className="voice-examples">
        <span>{resourceUiLabels.examplesLabel[language]}</span>
        {voiceExamples.map((example, index) => (
          <button key={index} onClick={() => { setDraft(example[language]); onSearch(example[language]) }} type="button">
            {example[language]}
          </button>
        ))}
      </div>

      <aside className="navigator-trust" lang={language}>
        <span aria-hidden="true">ⓘ</span>
        <p>{resourceUiLabels.trust[language]}</p>
      </aside>

      {selectedCategory || hasSearched ? (
        <section className="navigator-results" aria-live="polite">
          <div className="navigator-results-heading">
            <div>
              <h2>{activeCategory?.name[language] ?? resourceUiLabels.results[language]}</h2>
              {activeCategory && <p>{activeCategory.description[language]}</p>}
            </div>
            <button className="navigator-back" onClick={goBack} type="button">
              {resourceUiLabels.categoriesBack[language]}
            </button>
          </div>
          {response && (
            <div className="orchestrator-response">
              <span>{resourceUiLabels.voiceFound[language]}</span>
              <p>{response[language]}</p>
              <button className="read-aloud-button" onClick={onReadAloud} type="button">
                {resourceUiLabels.readAloud[language]}
              </button>
            </div>
          )}
          {visibleResources.length === 0 ? (
            <div className="navigator-empty-state">
              <p>{resourceUiLabels.noResults[language]}</p>
              <button className="navigator-back" onClick={goBack} type="button">
                {resourceUiLabels.categoriesBack[language]}
              </button>
            </div>
          ) : (
            <div className="resource-list">
              {visibleResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  language={language}
                  onStartWorkflow={onStartWorkflow}
                  resource={resource}
                />
              ))}
            </div>
          )}
        </section>
      ) : (
        <section className="navigator-categories">
          <h2>{resourceUiLabels.chooseCategory[language]}</h2>
          <div className="navigator-category-grid">
            {resourceCategories.map((category) => (
              <CategoryCard
                category={category}
                key={category.id}
                language={language}
                onSelect={onSelectCategory}
              />
            ))}
          </div>
        </section>
      )}
    </section>
  )
}