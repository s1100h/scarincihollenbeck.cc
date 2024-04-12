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
        {isAwards && (
          <div className="awards-and-content">
            <Link scroll={false} href="/awards">
              Award Methodology
            </Link>
            <p className="content">
              - *No aspect of this advertisement has been approved by the
              Supreme Court of New Jersey and New York.
            </p>
          </div>
        )}
      </ArticleBody>
    </Surface>
  );
};

export default TextContent;
