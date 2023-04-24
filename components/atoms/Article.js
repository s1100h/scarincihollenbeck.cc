import dynamic from 'next/dynamic';
import { ArticleContainer, Title, ArticleBody } from 'styles/Article.style';
import { JSXWithDynamicLinks } from './micro-templates/JSXWithDynamicLinks';

const ContentTitle = dynamic(() => import('components/atoms/ContentTitle'));
const renderTitle = (highlightTitle, contentTitle) => (highlightTitle ? <ContentTitle title={contentTitle} /> : <Title>{contentTitle}</Title>);

export default function Article({ title, contentBody, highlight }) {
  return (
    <ArticleContainer>
      {title?.length > 0 && renderTitle(highlight, title)}
      <ArticleBody>
        <JSXWithDynamicLinks HTML={contentBody} />
      </ArticleBody>
    </ArticleContainer>
  );
}
