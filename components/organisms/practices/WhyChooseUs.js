import WhyChooseUsCard from 'components/molecules/practice/WhyChooseUsCard';
import React, { useId } from 'react';

import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import { PracticeTitle } from 'styles/practices/PracticeCommon.style';
import {
  WhyChooseUsCards,
  WhyChooseUsSection,
} from 'styles/practices/WhyChooseUs.style';

const whyChooseUsData = {
  cards: [
    {
      title: 'Dedicated attorneys',
      text: 'When your livelihood is on the line, having an SEC investigations attorney well-versed in securities law and the ever evolving regulatory landscape is paramount. At Scarinci Hollenbeck, our dedicated attorneys boast multiple decades of extensive experience handling cases tied to securities investigations.',
      image: {
        src: '/images/whyChooseUs1.jpg',
        width: 1000,
        height: 700,
      },
    },
    {
      title: 'We offer strategic',
      text: 'We offer strategic legal counsel that acknowledges the distinct challenges faced by officers, directors, and companies embroiled in SEC, DOJ, or AG investigations.',
      image: {
        src: '/images/whyChooseUs2.jpg',
        width: 1000,
        height: 700,
      },
    },
    {
      title: 'Unwavering legal support',
      text: 'Whether you’re dealing with SEC compliance, DOJ inquiries, AG investigations, or related matters, you can count on our unwavering legal support to help you navigate the process and achieve the best possible outcome.',
      image: {
        src: '/images/whyChooseUs3.jpg',
        width: 1000,
        height: 700,
      },
    },
    {
      title: 'Customer focus',
      text: 'Collaboratively, we work with you to grasp the unique intricacies of your circumstances, adapting our legal strategies to align with your goals.',
      image: {
        src: '/images/whyChooseUs4.jpg',
        width: 1000,
        height: 700,
      },
    },
  ],
};

const WhyChooseUs = ({ anchorId }) => (
  <WhyChooseUsSection className="margin-scroll" id={anchorId}>
    <ContainerContent className="practice-container">
      <PracticeTitle>Why Choose Us?</PracticeTitle>
      <WhyChooseUsCards>
        {whyChooseUsData.cards.map((card, index) => (
          <WhyChooseUsCard key={useId()} {...card} />
        ))}
      </WhyChooseUsCards>
    </ContainerContent>
  </WhyChooseUsSection>
);

export default WhyChooseUs;
