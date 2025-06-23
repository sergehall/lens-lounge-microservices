import { CATEGORY_SLUGS, CategoryName } from '@/config/categorySlugs';

export function getCategoryNameBySlug(slug: string): CategoryName | undefined {
  return Object.entries(CATEGORY_SLUGS).find(
    ([, categorySlug]) => categorySlug === slug
  )?.[0] as CategoryName | undefined;
}
