import type { LanguageCode } from '../data/services'
import type { ResourceCategory } from '../data/resources'

type CategoryCardProps = {
  category: ResourceCategory
  language: LanguageCode
  onSelect(categoryId: ResourceCategory['id']): void
}

export function CategoryCard({ category, language, onSelect }: CategoryCardProps) {
  return (
    <button
      className="navigator-category"
      lang={language}
      onClick={() => onSelect(category.id)}
      type="button"
    >
      <span aria-hidden="true" className="navigator-category-icon">{category.icon}</span>
      <span className="navigator-category-copy">
        <strong>{category.name[language]}</strong>
        <span>{category.description[language]}</span>
      </span>
      <span aria-hidden="true" className="navigator-category-arrow">›</span>
    </button>
  )
}