import React from 'react';
import empty from 'is-empty';
import {
  Title20,
  Title32,
  UnderlinedLink,
} from 'styles/common/Typography.style';
import ContentRender from 'components/atoms/ContentRender';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { ContentWrapper } from 'styles/Content.style';

const ContentSection = ({
  title,
  isSmaller = false,
  content,
  link,
  isTwoColumns = false,
}) => (
  <ContentWrapper key={title} $isSmaller={isSmaller}>
    {!empty(title)
      && (!isSmaller ? (
        <Title32>{title}</Title32>
      ) : (
        <Title20 as="h2">{title}</Title20>
      ))}
    <ContentRender
      content={formatPageImageToCloudinaryUrl(content)}
      customClass={isTwoColumns ? 'two-columns' : ''}
    />
    {!empty(link?.url) && (
      <UnderlinedLink
        href={link?.url}
        target={!empty(link?.target) ? '_blank' : undefined}
        rel={!empty(link?.target) ? 'noopener noreferrer' : undefined}
      >
        {link?.title}
      </UnderlinedLink>
    )}
  </ContentWrapper>
);

export default ContentSection;
