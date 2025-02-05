import React from 'react';
import empty from 'is-empty';
import { FilledLink } from 'styles/common/Typography.style';
import ContentRender from 'components/atoms/ContentRender';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { ContentWrapper } from 'styles/Content.style';
import dynamic from 'next/dynamic';

const DynamicTitle32 = dynamic(() => import('styles/common/Typography.style').then((mod) => mod.Title32));

const ContentSection = ({
  title,
  content,
  link,
  isTwoColumns = false,
  TitleComponent = DynamicTitle32,
  contentGap = '12px',
}) => (
  <ContentWrapper key={title} $contentGap={contentGap}>
    {!empty(title) && <TitleComponent as="h2">{title}</TitleComponent>}
    <ContentRender
      content={formatPageImageToCloudinaryUrl(content)}
      customClass={isTwoColumns ? 'two-columns' : ''}
    />
    {!empty(link?.url) && (
      <FilledLink
        href={link?.url}
        target={!empty(link?.target) ? '_blank' : undefined}
        rel={!empty(link?.target) ? 'noopener noreferrer' : undefined}
      >
        {link?.title}
      </FilledLink>
    )}
  </ContentWrapper>
);

export default ContentSection;
