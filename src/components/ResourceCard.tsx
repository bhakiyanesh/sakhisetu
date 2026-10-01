import {
  resourceUiLabels,
} from '../data/resources'
import type { Resource } from '../data/resources'
import type { LanguageCode } from '../data/services'

type ResourceCardProps = {
  resource: Resource
  language: LanguageCode
  onStartWorkflow(resource: Resource): void
}

function isVerifiedHttpsResource(resource: Resource): resource is Resource & { officialUrl: string } {
  if (!resource.verified || !resource.officialUrl) return false
  try {
    return new URL(resource.officialUrl).protocol === 'https:'
  } catch {
    return false
  }
}

export function ResourceCard({ resource, language, onStartWorkflow }: ResourceCardProps) {
  const canOpen = isVerifiedHttpsResource(resource)
  const isEShram = resource.id === 'eshram-resource'

  return (
    <article className="resource-card" lang={language}>
      <header className="resource-card-header">
        <h3>{resource.name[language]}</h3>
        {canOpen && <span className="resource-verified">{resourceUiLabels.verified[language]}</span>}
      </header>
      <p className="resource-short-description">{resource.shortDescription[language]}</p>
      <dl className="resource-details">
        <div>
          <dt>{resourceUiLabels.howHelp[language]}</dt>
          <dd>{resource.simpleExplanation[language]}</dd>
        </div>
        <div>
          <dt>{resourceUiLabels.whoHelps[language]}</dt>
          <dd>{resource.whoItHelps[language]}</dd>
        </div>
        <div>
          <dt>{resourceUiLabels.source[language]}</dt>
          <dd>{resource.sourceOrganization[language]}</dd>
        </div>
      </dl>
      {isEShram ? (
        <button className="resource-action" onClick={() => onStartWorkflow(resource)} type="button">
          {resourceUiLabels.eShramAction[language]}
        </button>
      ) : canOpen ? (
        <div className="resource-actions">
          <a
            className="resource-action"
            href={resource.officialUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {resourceUiLabels.open[language]}
          </a>
          {resource.availableActions.includes('call') && resource.helplineNumber && (
            <a className="resource-action is-secondary" href={`tel:${resource.helplineNumber}`}>
              {resourceUiLabels.callHelpline[language]}
            </a>
          )}
        </div>
      ) : (
        <div className="resource-link-unavailable">
          <button className="resource-action is-disabled" disabled type="button">
            {resourceUiLabels.unavailable[language]}
          </button>
          <p>{resourceUiLabels.unverified[language]}</p>
        </div>
      )}
    </article>
  )
}