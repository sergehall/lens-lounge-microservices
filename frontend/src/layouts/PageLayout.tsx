// src/layouts/PageLayout.tsx
import React from 'react';

interface PageLayoutProps {
  bannerImage: React.ReactNode;
  summarizeContent: React.ReactNode;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ bannerImage, summarizeContent, children }) => {
  return (
    <div className="page-layout">
      {bannerImage}
      {summarizeContent}
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
