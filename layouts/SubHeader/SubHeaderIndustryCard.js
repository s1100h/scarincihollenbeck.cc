import Image from 'next/image';
import React from 'react';
import empty from 'is-empty';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardLink,
  CardTitle,
} from 'styles/subheader/SubHeaderIndustryCard.style';
import { motion } from 'framer-motion';

const SubHeaderIndustryCard = ({
  title,
  image,
  description,
  activeSlideIndex,
  setActiveTab,
}) => {
  const handleClickAnchor = () => {
    setActiveTab(activeSlideIndex);
  };
  return (
    <Card
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CardContent>
        {!empty(title) && <CardTitle as="p">{title}</CardTitle>}
        {!empty(description) && (
          <CardDescription>
            <JSXWithDynamicLinks HTML={description} />
          </CardDescription>
        )}

        <CardLink href="#tabs-section" onClick={handleClickAnchor}>
          Read more
        </CardLink>
      </CardContent>
      <CardImage>
        <Image src={image} alt={title} sizes="380px" fill />
      </CardImage>
    </Card>
  );
};

export default SubHeaderIndustryCard;
