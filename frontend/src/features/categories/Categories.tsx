// src/features/categories/Categories.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HOME_ROUTES } from '../../routes/route-definitions/home.routes';
import * as S from '../home-page/homePage.styles';
import { useAppSelector } from '../../hooks/reduxHooks';

import { selectCategories } from './selectors';
import { Category } from './types/category.types';

const Categories: React.FC = () => {
  const navigate = useNavigate();
  const categories = useAppSelector(selectCategories);

  const handleCategoryClick = (category: Category) => {
    navigate(HOME_ROUTES.build.categoryByName(category.name));
  };

  return (
    <S.Grid>
      {categories.map((category) => (
        <S.Tile
          key={category.name}
          $isFeatured={category.featured}
          onClick={() => handleCategoryClick(category)}
        >
          <S.Image src={category.imageUrl} alt={category.name} />
          <S.HoverReveal />
          <S.Overlay />
          <S.Label>{category.name}</S.Label>
        </S.Tile>
      ))}
    </S.Grid>
  );
};

export default Categories;
