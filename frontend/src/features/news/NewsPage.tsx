// src/features/news/NewsPage.tsx
import React from 'react';

import { useAppSelector } from '../../hooks/reduxHooks';

import * as S from './news.styles';

/**
 * News component displays a list of latest articles from Redux store.
 */
const NewsPage: React.FC = () => {
  const newArticles = useAppSelector((state) => state.newsPage.articles);

  return (
    <S.NewsContainer>
      <S.Title>Latest News</S.Title>
      <S.ArticleList>
        {newArticles.map((article) => (
          <S.ArticleItem key={article.id}>
            <S.ArticleLink href={article.link} target="_blank" rel="noopener noreferrer">
              <S.ArticleTitle>{article.title}</S.ArticleTitle>
              <S.ArticleText>{article.content}</S.ArticleText>
              <S.ArticleMeta>
                <span>By {article.author}</span>
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </S.ArticleMeta>
            </S.ArticleLink>
          </S.ArticleItem>
        ))}
      </S.ArticleList>
    </S.NewsContainer>
  );
};

export default NewsPage;
