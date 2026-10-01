import { resourceCategories, type ResourceCategoryId } from '../data/resources'
import type { LanguageCode } from '../data/services'
import type { IntentProvider } from './aiOrchestrator'

/** Calls the same-origin Vercel function; the Gemini credential stays server-side. */
export function createGeminiIntentProvider(): IntentProvider | undefined {
  if (import.meta.env.VITE_GEMINI_ENABLED !== 'true') return undefined

  return async (message: string, language: LanguageCode): Promise<ResourceCategoryId | null> => {
    const response = await fetch('/api/intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, language }),
      signal: AbortSignal.timeout(4500),
    })
    if (!response.ok) throw new Error('Intent service unavailable')
    const result: unknown = await response.json()
    if (typeof result !== 'object' || result === null || !('category' in result)) return null
    const category = result.category
    return typeof category === 'string' && resourceCategories.some((item) => item.id === category)
      ? category as ResourceCategoryId
      : null
  }
}
