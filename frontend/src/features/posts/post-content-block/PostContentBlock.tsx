import React from 'react';

import { Content, Description, Title } from './postContentBlock.styles';

interface Props {
  title: string;
  shortDescription: string;
}

const PostContentBlock: React.FC<Props> = ({ title, shortDescription }) => (
  <Content>
    <Title>{title}</Title>
    <Description>{shortDescription}</Description>
  </Content>
);

export default PostContentBlock;
