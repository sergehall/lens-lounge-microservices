import React from 'react';

import * as S from './tiles/category-blogs-tile/categoryBlogsTile.styles';
import { BlogPreview } from './types/blogs.types';

interface BlogListRendererProps {
  blogs: BlogPreview[];
}

const BlogListRenderer: React.FC<BlogListRendererProps> = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <S.BlogTile key={blog.id}>
          <img src={blog.imageUrl} alt={blog.title} />
          <S.Content>
            <h4>{blog.title}</h4>
            <p>{blog.summary}</p>
            <span>Last posted: {blog.lastPosted}</span>
          </S.Content>
        </S.BlogTile>
      ))}
    </>
  );
};

export default React.memo(BlogListRenderer);
