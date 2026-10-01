import {
  matchResources,
  resourceCategories,
  resourceUiLabels,
  resourcesByCategory,
  type Resource,
  type ResourceCategoryId,
} from '../data/resources'
import type { LanguageCode, LocalizedText } from '../data/services'

export type IntentProvider = (
  message: string,
  language: LanguageCode,
) => Promise<ResourceCategoryId | null>

export interface OrchestratorResult {
  category: ResourceCategoryId | null
  resources: Resource[]
  response: LocalizedText
  reason: 'empty' | 'eshram' | 'keyword' | 'provider' | 'unclear' | 'provider-fallback'
}

export async function orchestrateResourceRequest(
  message: string,
  language: LanguageCode,
  intentProvider?: IntentProvider,
): Promise<OrchestratorResult> {
  const query = message.trim()
  if (!query) {
    return { category: null, resources: [], response: resourceUiLabels.emptyInput, reason: 'empty' }
  }

  const deterministicMatch = matchResources(query, language)
  if (deterministicMatch.reason === 'eshram') {
    return {
      category: deterministicMatch.category,
      resources: deterministicMatch.resources,
      response: resourceUiLabels.eShramFound,
      reason: 'eshram',
    }
  }

  if (intentProvider) {
    try {
      const detectedCategory = await intentProvider(query, language)
      if (detectedCategory) {
        const category = resourceCategories.find((item) => item.id === detectedCategory)
        return {
          category: detectedCategory,
          resources: resourcesByCategory(detectedCategory),
          response: category?.description ?? resourceUiLabels.results,
          reason: 'provider',
        }
      }
    } catch {
      if (deterministicMatch.category) {
        const category = resourceCategories.find((item) => item.id === deterministicMatch.category)
        return {
          category: deterministicMatch.category,
          resources: deterministicMatch.resources,
          response: category?.description ?? resourceUiLabels.results,
          reason: 'provider-fallback',
        }
      }
    }
  }

  if (!deterministicMatch.category) {
    return { category: null, resources: [], response: resourceUiLabels.noResults, reason: intentProvider ? 'provider-fallback' : 'unclear' }
  }

  const category = resourceCategories.find((item) => item.id === deterministicMatch.category)
  return {
    category: deterministicMatch.category,
    resources: deterministicMatch.resources,
    response: category?.description ?? resourceUiLabels.results,
    reason: 'keyword',
  }
}