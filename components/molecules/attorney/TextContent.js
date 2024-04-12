import ContentTitle from 'components/atoms/ContentTitle';
import Surface from 'components/atoms/micro-templates/surface';
import Link from 'next/link';
import React from 'react';
import { ArticleBody } from '../../../styles/Article.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const TextContent = ({ title, content }) => {
  const isAwards = title === 'Awards & Recognitions';
  return (
    <Surface>
      {title && (
        <ContentTitle title={title}>
          {isAwards && (
            <Link scroll={false} href="/awards">
              Award Methodology
            </Link>
          )}
        </ContentTitle>
      )}
      <ArticleBody>
        <JSXWithDynamicLinks HTML={content} />
      </ArticleBody>
    </Surface>
  );
};

export default TextContent;
