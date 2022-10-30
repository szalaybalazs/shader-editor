import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { iArticle } from '../types/article';

const Wrapper = styled.a`
  margin-top: 64px;
  margin-bottom: 64px;
  text-decoration: none;
  color: var(--colour-font);
  &:hover {
    text-decoration: none;
    h1 {
      opacity: 0.8;
    }
  }
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
  transition: 120ms;
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 1.125rem;
  margin: 0;
  margin-top: 8px;
  color: var(--colour-font-translucent);
`;
const Continue = styled.span`
  display: block;
  margin-top: 16px;
  font-weight: 500;
  font-size: 1.125rem;
  color: var(--colour-primary);
  &:hover {
    text-decoration: underline;
  }
`;

interface iFeaturedArticleProps extends iArticle {}

const FeaturedArticle: FC<iFeaturedArticleProps> = ({ title, subtitle, slug }) => {
  return (
    <Link href={`/articles/${slug}`} passHref>
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Continue>Read article</Continue>
      </Wrapper>
    </Link>
  );
};

export default FeaturedArticle;
