// **Strict Page Keys Using `as const`**
export const PageKeys = {
  home: 'home',
  showcase: 'showcase',
  chats: 'chats',
  contacts: 'contacts',
  news: 'news',
  technologies: 'technologies',
  about: 'about',
  contact: 'contact',
} as const;

// **Type Extractor for PageKeys**
export type PageKey = (typeof PageKeys)[keyof typeof PageKeys];

// **Page Content Mapping Using Strict Keys**
export const pageInsightMock: Record<PageKey, { pageInsight: string }> = {
  [PageKeys.home]: {
    pageInsight:
      "Lens Lounge is your gateway to discovery. Dive into a curated world of creativity, culture, and technology — from bold visuals and pop culture to cutting-edge development and community highlights. Whether you're here to explore ideas, get inspired, or just vibe with what's trending, this is where curiosity comes to life.",
  },
  [PageKeys.showcase]: {
    pageInsight:
      'Step into the showcase section to display your best work, projects, and innovations. Share your journey with the world.',
  },
  [PageKeys.chats]: {
    pageInsight:
      'Stay connected with real-time messaging. Engage in meaningful conversations, share media, and interact with your community.',
  },
  [PageKeys.contacts]: {
    pageInsight:
      'Manage your network effortlessly. View, add, and engage with friends, colleagues, and new connections.',
  },
  [PageKeys.news]: {
    pageInsight:
      'Get the latest updates on world events, industry news, and community highlights. Stay informed with real-time reports.',
  },
  [PageKeys.technologies]: {
    pageInsight:
      'Explore the future of technology! From AI and blockchain to quantum computing, dive deep into the latest innovations shaping the world.',
  },
  [PageKeys.about]: {
    pageInsight:
      'Learn more about Lens Lounge—our vision, mission, and values. Discover how we are building a community of innovators.',
  },
  [PageKeys.contact]: {
    pageInsight:
      'Have questions or feedback? Reach out to us! Our support team is ready to assist you with any inquiries.',
  },
};
