// src/utils/guards/isCategoryName.ts
import { CATEGORY_SLUGS, CategoryName } from '../../config/categorySlugs';

export function isCategoryName(value: string): value is CategoryName {
  return Object.keys(CATEGORY_SLUGS).includes(value);
}
