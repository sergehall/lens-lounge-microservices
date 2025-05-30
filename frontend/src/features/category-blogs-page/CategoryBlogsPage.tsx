import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { isCategorySlug } from '../../utils/guards/isCategorySlug';

import { Grid, Wrapper } from './categoryBlogsPage.styles';
import IntroCommunitiesTile from './tiles/intro-tile/IntroCommunitiesTile';
import CategoryBlogsTile from './tiles/category-blogs-tile/CategoryBlogsTile';
import CreateBlogCTATile from './tiles/create-blog-tile/CreateBlogCTATile';
import { selectCategoryBlogsLoading, selectIsCategoryLoaded } from './selectors';
import { loadCategoryBlogs } from './categoryBlogsPageSlice';

const CategoryBlogsPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || '');

  const dispatch = useAppDispatch();

  const isValidSlug = isCategorySlug(decodedName);
  const loading = useAppSelector(selectCategoryBlogsLoading(decodedName));
  const isLoaded = useAppSelector(selectIsCategoryLoaded(decodedName));

  useEffect(() => {
    if (isValidSlug && !isLoaded) {
      dispatch(loadCategoryBlogs(decodedName));
    }
  }, [decodedName, isValidSlug, isLoaded, dispatch]);

  if (!name || !isValidSlug) return <div>Category not found!!!</div>;
  if (loading) return <Loader />;

  return (
    <Wrapper>
      <Grid>
        <IntroCommunitiesTile />
        <CreateBlogCTATile categoryName={decodedName} />
        <CategoryBlogsTile />
      </Grid>
    </Wrapper>
  );
};

export default CategoryBlogsPage;
