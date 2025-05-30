// src/config/categorySlugs.ts

export const CATEGORY_SLUGS = {
  Anime: 'anime',
  Art: 'art',
  Photography: 'photography',
  Gaming: 'gaming',
  Culture: 'culture',
  Movies: 'movies',
  Programming: 'programming',
  Funny: 'funny',
  'Music & Bands': 'music-and-bands',
  Science: 'science',
  'TV Shows': 'tv-shows',
  Technology: 'technology',
  'Books & Literature': 'books-and-literature',
  'Community Spotlight': 'community-spotlight',
} as const;

export type CategoryName = keyof typeof CATEGORY_SLUGS;
export type CategorySlug = (typeof CATEGORY_SLUGS)[CategoryName];
