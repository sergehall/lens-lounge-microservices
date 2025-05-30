// src/features/technologies/TechnologiesPage.tsx
import React, { useState } from 'react';

import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/reduxHooks';

import { categorizedLinks } from './mocks/categorizedLinks';
import * as S from './technologies.styles';
import { TechnologyLinkType } from './mocks/technologyLinksMock';

const TechnologiesPage: React.FC = () => {
  const links = useAppSelector((state: RootState) => state.technologiesPage.links);
  const [hoveredLink, setHoveredLink] = useState<TechnologyLinkType | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (link: TechnologyLinkType, event: React.MouseEvent<HTMLLIElement>) => {
    setHoveredLink(link);
    setPopupPosition({
      top: event.clientY - 50,
      left: event.currentTarget.offsetLeft + 200,
    });
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <S.TechnologyContainer>
      <S.CategoriesWrapper>
        {Object.entries(categorizedLinks).map(([category, techNames]) => (
          <S.CategoryTile key={category}>
            <S.CategoryTitle>{category}</S.CategoryTitle>
            <S.TechnologyList>
              {links
                .filter((link) => techNames.includes(link.name))
                .map((link) => (
                  <S.TechnologyItem
                    key={link.url}
                    onMouseEnter={(e) => handleMouseEnter(link, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <S.TechnologyLink href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </S.TechnologyLink>
                  </S.TechnologyItem>
                ))}
            </S.TechnologyList>
          </S.CategoryTile>
        ))}
      </S.CategoriesWrapper>

      {hoveredLink && (
        <S.PopupWindow style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}>
          <h4>{hoveredLink.name}</h4>
          <p>Loading more info...</p>
          <S.StyledIframe src={hoveredLink.url} title="Technology Info" />
        </S.PopupWindow>
      )}
    </S.TechnologyContainer>
  );
};

export default TechnologiesPage;
