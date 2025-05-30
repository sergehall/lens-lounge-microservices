import { CATEGORY_SLUGS, CategorySlug } from '../../config/categorySlugs';

export function isCategorySlug(value: string): value is CategorySlug {
  return Object.values(CATEGORY_SLUGS).includes(value as CategorySlug);
}
