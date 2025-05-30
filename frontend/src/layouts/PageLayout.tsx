// src/layouts/PageLayout.tsx
import React from 'react';

interface PageLayoutProps {
  bannerImage: React.FC;
  summarizeContent: React.FC;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  bannerImage: BannerImage,
  summarizeContent: SummarizeContent,
  children,
}) => {
  return (
    <div>
      <BannerImage />
      <SummarizeContent />
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
