import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import Image from 'next/image';
import React from 'react';
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
}) => {
  const TagImage = isPrint ? 'img' : Image;
  return (
    <WhyChooseUsCardWrapper>
      <WhyChooseUsCardContent>
        {title && <h3>{title}</h3>}
        <WhyChooseUsCardDescription as={isJSXDescription ? 'div' : 'p'}>
          <JSXWithDynamicLinks HTML={text} />
        </WhyChooseUsCardDescription>
      </WhyChooseUsCardContent>
      <WhyChooseUsCardImage>
        <TagImage
          src={image.src}
          alt={title || 'Building'}
          width={image.width}
          height={image.height}
        />
      </WhyChooseUsCardImage>
    </WhyChooseUsCardWrapper>
  );
};

export default WhyChooseUsCard;
