import { useState } from 'react'
import {
  matchResources,
  resourcesByCategory,
  type ResourceMatch,
  type Resource,
  type ResourceCategoryId,
} from '../data/resources'
import type { LanguageCode } from '../data/services'
import type { LocalizedText } from '../data/services'

export function useResourceNavigator(language: LanguageCode) {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategoryId | null>(null)
  const [visibleResources, setVisibleResources] = useState<Resource[]>([])
  const [searchText, setSearchText] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [response, setResponse] = useState<LocalizedText | null>(null)

  function selectCategory(category: ResourceCategoryId) {
    setSelectedCategory(category)
    setVisibleResources(resourcesByCategory(category))
    setSearchText('')
    setHasSearched(false)
    setResponse(null)
  }

  function searchResources(query: string) {
    const match = matchResources(query, language)
    showSearchResults(query, match)
    return match
  }

  function showSearchResults(query: string, match: ResourceMatch, localizedResponse?: LocalizedText) {
    setSearchText(query)
    setHasSearched(true)
    setSelectedCategory(match.category)
    setVisibleResources(match.resources)
    setResponse(localizedResponse ?? null)
  }

  function backToCategories() {
    setSelectedCategory(null)
    setVisibleResources([])
    setSearchText('')
    setHasSearched(false)
    setResponse(null)
  }

  return {
    selectedCategory,
    visibleResources,
    searchText,
    hasSearched,
    response,
    selectCategory,
    searchResources,
    showSearchResults,
    backToCategories,
  }
}