import { BlogPreview } from '../types/blogs.types';

export const blogsProgrammingMock: Record<string, BlogPreview[]> = {
  programming: [
    {
      id: '1',
      title: 'JavaScript Patterns Lab',
      summary: 'Explore modern JavaScript design patterns and architecture.',
      imageUrl:
        'https://cdn.educba.com/academy/wp-content/uploads/2020/02/Javascript-Design-Patterns.jpg',
      tags: ['javascript', 'patterns'],
      author: 'jswizard',
      lastPosted: '2 hours ago',
    },
    {
      id: '2',
      title: 'React Dev Club',
      summary: 'Tips, tricks, and best practices for React developers.',
      imageUrl:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['react', 'frontend'],
      author: 'sergehall',
      lastPosted: '30 minutes ago',
    },
    {
      id: '3',
      title: 'TypeScript HQ',
      summary: 'Level up your projects with TypeScript tips and tricks.',
      imageUrl:
        'https://tsh.io/wp-content/uploads/2022/03/Typescript-hero-logo-hi-res-e1648035241799.png',
      tags: ['typescript', 'static typing'],
      author: 'sergehall',
      lastPosted: '5 hours ago',
    },
    {
      id: '4',
      title: 'Docker Builders',
      summary: 'Everything containers: Docker, Kubernetes, and DevOps practices.',
      imageUrl:
        'https://www.docker.com/app/uploads/2024/12/1300x1300_docker-evergreen_logo_blog_D-1-980x980.png',
      tags: ['docker', 'kubernetes', 'devops'],
      author: 'sergehall',
      lastPosted: '1 day ago',
    },
    {
      id: '5',
      title: 'Next.js Innovations',
      summary: 'Unleashing full-stack power with Next.js.',
      imageUrl:
        'https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-dark.png&w=640&q=100',
      tags: ['nextjs', 'fullstack'],
      author: 'fullstacky',
      lastPosted: '4 hours ago',
    },
    {
      id: '6',
      title: 'Clean Code Society',
      summary: 'Write elegant, maintainable code across languages.',
      imageUrl:
        'https://ozgurozkok.com/wp-content/uploads/2020/11/robert-cecil-martin-uncle-bob-clean-code-1536x875.jpg',
      tags: ['clean code', 'best practices'],
      author: 'unclebobjr',
      lastPosted: '6 hours ago',
    },
    {
      id: '7',
      title: 'Machine Learning Minds',
      summary: 'Dive into AI, ML algorithms, and deep learning.',
      imageUrl:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ePC4JmFNNnEa9R6gvcMhsw.jpeg',
      tags: ['machine learning', 'ai'],
      author: 'neuralnetworks',
      lastPosted: '12 hours ago',
    },
    {
      id: '8',
      title: 'Rustacean Coding',
      summary: 'Memory safety, speed, and power with Rust programming.',
      imageUrl: 'https://m.media-amazon.com/images/I/618Y6SstjSL._SL1360_.jpg',
      tags: ['rust', 'systems programming'],
      author: 'rustyray',
      lastPosted: '2 days ago',
    },
  ],
};
