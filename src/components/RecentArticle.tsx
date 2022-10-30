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
  margin-bottom: 12px;
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
  margin-top: 16px;
  font-size: 1.5rem;
  line-height: 1.875rem;
  font-weight: 500;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${(props) => (props.highlighted ? 'var(--colour-primary)' : 'var(--colour-font)')};
`;
const ArticleSubtitle = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 1rem;
  line-height: 1.25rem;
  color: var(--colour-font-translucent);
`;

interface iRecentArticleProps extends iArticle {}

const RecentArticle: FC<iRecentArticleProps> = ({ slug, highlighted, title, subtitle }) => {
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

export default RecentArticle;
