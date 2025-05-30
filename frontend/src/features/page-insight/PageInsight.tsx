import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { setDynamicPageContent, setDynamicTitle, resetPageInsight } from './pageInsightSlice';
import { pageInsightMock, PageKey, PageKeys } from './mocks/pageInsightMock';
import * as S from './pageInsight.style';

// AI-based summary hook
const usePageSummary = (pageContent: string): string => {
  const [summary, setSummary] = useState('Analyzing content...');

  useEffect(() => {
    const analyzePageContent = async () => {
      const response = await mockAIAnalysis(pageContent);
      setSummary(response);
    };

    analyzePageContent();
  }, [pageContent]);

  const mockAIAnalysis = async (content: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Here's a quick summary: ${content.substring(0, 100)}...`);
      }, 1000);
    });
  };

  return summary;
};

// Main Component
const PageInsight: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { title, imageUrl, pageContent } = useAppSelector((state) => state.pageInsight);

  const summary = usePageSummary(pageContent);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const formattedTitle =
      pathSegments.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join(' ') ||
      'Home';

    const lastPathSegment = pathSegments.at(-1) as PageKey | undefined;
    const defaultContent = pageInsightMock[lastPathSegment ?? PageKeys.home]?.pageInsight;

    dispatch(setDynamicPageContent(defaultContent ?? ''));
    dispatch(setDynamicTitle(formattedTitle));

    return () => {
      dispatch(resetPageInsight());
    };
  }, [dispatch, location.pathname]);

  return (
    <S.PageInsightContainer>
      <S.PageInsightImage src={imageUrl} alt="Page Insight" />
      <S.PageInsightTextContainer>
        <S.PageInsightTitle>{title}</S.PageInsightTitle>
        <S.PageInsightDescription>{summary}</S.PageInsightDescription>
      </S.PageInsightTextContainer>
    </S.PageInsightContainer>
  );
};

export default PageInsight;
