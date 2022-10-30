import Link from 'next/link';
import { FC } from 'react';
import { iArticle } from '../types/article';
import styled from 'styled-components';

const ListItem = styled.li`
  margin: 0;
  margin-bottom: 20px;
  display: inline-block;
`;
const ArticleWrapper = styled.a`
  color: var(--colour-font);
  cursor: pointer;
  transition: 120ms;
  display: block;
  &:hover {
    text-decoration: none;
    opacity: 0.6;
  }
`;

interface iArticleTitle {
  highlighted: boolean;
}
const ArticleTitle = styled.span<iArticleTitle>`
  margin: 0;
  margin-top: 4px;
  font-size: 1.125rem;
  line-height: 1.125rem;
  font-weight: 500;
  color: ${(props) => (props.highlighted ? 'var(--colour-primary)' : 'var(--colour-font)')};
`;
const ArticleSubtitle = styled.p`
  margin: 0;
  margin-top: 4px;
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

interface iSmallArticleProps extends iArticle {}

const SmallArticle: FC<iSmallArticleProps> = ({ slug, highlighted, title, subtitle }) => {
  return (
    <ListItem key={slug}>
      <Link href={`/articles/${slug}`} passHref>
        <ArticleWrapper>
          <ArticleTitle highlighted={highlighted}>{title}</ArticleTitle>
          <ArticleSubtitle>{subtitle}</ArticleSubtitle>
        </ArticleWrapper>
      </Link>
    </ListItem>
  );
};

export default SmallArticle;
