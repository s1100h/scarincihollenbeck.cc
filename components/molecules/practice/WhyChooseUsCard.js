import ContentRender from 'components/atoms/ContentRender';
import Image from 'next/image';
import React from 'react';
import { Title20 } from 'styles/common/Typography.style';
import {
  WhyChooseUsCardContent,
  WhyChooseUsCardDescription,
  WhyChooseUsCardImage,
  WhyChooseUsCardWrapper,
} from 'styles/practices/WhyChooseUs.style';

const WhyChooseUsCard = ({
  title,
  text,
  image,
  isJSXDescription,
  isPrint = false,
  withImage = true,
}) => {
  const TagImage = isPrint ? 'img' : Image;
  return (
    <WhyChooseUsCardWrapper>
      <WhyChooseUsCardContent>
        {title && <Title20>{title}</Title20>}
        <WhyChooseUsCardDescription as={isJSXDescription ? 'div' : 'p'}>
          <ContentRender content={text} customClass="why-choose-us" />
        </WhyChooseUsCardDescription>
      </WhyChooseUsCardContent>
      {withImage && (
        <WhyChooseUsCardImage>
          <TagImage
            src={image.src}
            alt={title || 'Building'}
            width={image.width}
            height={image.height}
          />
        </WhyChooseUsCardImage>
      )}
    </WhyChooseUsCardWrapper>
  );
};

export default WhyChooseUsCard;
