import React from 'react';
import empty from 'is-empty';
import { ContainerDefault } from 'styles/Containers.style';
import ContentSection from 'components/molecules/ContentSection';
import {
  ArticleContent,
  ArticleContentHolder,
  ArticleContentSections,
  ArticleContentSidebar,
} from 'styles/Article.style';
import SubscriptionSidebar from '../common/SubscriptionSidebar';

const FirmContent = ({ sections }) => {
  if (empty(sections)) return null;

  return (
    <ArticleContent>
      <ContainerDefault>
        <ArticleContentHolder>
          <ArticleContentSections>
            {sections?.map(({ title, content }) => (
              <ContentSection key={title} title={title} content={content} />
            ))}
          </ArticleContentSections>

          <ArticleContentSidebar>
            <SubscriptionSidebar />
          </ArticleContentSidebar>
        </ArticleContentHolder>
      </ContainerDefault>
    </ArticleContent>
  );
};

export default FirmContent;
