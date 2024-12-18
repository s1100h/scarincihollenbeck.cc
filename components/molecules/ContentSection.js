import React from 'react';
import empty from 'is-empty';
import { TitleH2 } from 'styles/common/Typography.style';
import ContentRender from 'components/atoms/ContentRender';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { ContentWrapper } from 'styles/Content.style';

const ContentSection = ({ title, content }) => (
  <ContentWrapper key={title}>
    {!empty(title) && <TitleH2>{title}</TitleH2>}
    <ContentRender content={formatPageImageToCloudinaryUrl(content)} />
  </ContentWrapper>
);

export default ContentSection;
