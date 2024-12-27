import Image from 'next/image';
import React from 'react';
import { Title20 } from 'styles/common/Typography.style';
import {
  WhyChooseUsCardContent,
  WhyChooseUsCardDescription,
  WhyChooseUsCardImage,
  WhyChooseUsCardWrapper,
} from 'styles/practices/WhyChooseUs.style';
import empty from 'is-empty';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

const WhyChooseUsCard = ({
  title,
  text,
  image,
  isJSXDescription,
  isPrint = false,
  isHideImage = false,
}) => {
  const TagImage = isPrint ? 'img' : Image;
  return (
    <WhyChooseUsCardWrapper>
      <WhyChooseUsCardContent>
        {title && <Title20>{title}</Title20>}
        <WhyChooseUsCardDescription as={isJSXDescription ? 'div' : 'p'}>
          <JSXWithDynamicLinks HTML={text} />
        </WhyChooseUsCardDescription>
      </WhyChooseUsCardContent>
      {!isHideImage && !empty(image.src) && (
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
