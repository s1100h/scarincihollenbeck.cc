import dynamic from 'next/dynamic';
import { ArticleContainer, Title, ArticleBody } from 'styles/Article.style';
import { createMarkup } from 'utils/helpers';

const ContentTitle = dynamic(() => import('components/atoms/ContentTitle'));

export default function Article({ title, contentBody, highlight }) {
  return (
    <ArticleContainer>
      {highlight ? <ContentTitle title={title} /> : <Title>{title}</Title>}
      <ArticleBody dangerouslySetInnerHTML={createMarkup(contentBody)} />
    </ArticleContainer>
  );
}
