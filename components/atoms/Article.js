import dynamic from 'next/dynamic';
import { ArticleContainer, Title, ArticleBody } from 'styles/Article.style';
import { JSXWithDynamicLinks } from './micro-templates/JSXWithDynamicLinks';

const ContentTitle = dynamic(() => import('components/atoms/ContentTitle'));

export default function Article({ title, contentBody, highlight }) {
  const renderTitle = (highlightTitle) => (highlightTitle ? <ContentTitle title={title} /> : <Title>{title}</Title>);
  return (
    <ArticleContainer>
      {title?.length > 0 && renderTitle(highlight)}
      <ArticleBody>
        <JSXWithDynamicLinks HTML={contentBody} />
      </ArticleBody>
    </ArticleContainer>
  );
}
