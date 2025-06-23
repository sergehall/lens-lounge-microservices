import { CategoryName } from '@/config/categorySlugs';

export interface Category {
  name: CategoryName;
  imageUrl: string;
  featured: boolean;
}
