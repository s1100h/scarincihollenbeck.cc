import WhyChooseUsCard from 'components/molecules/practice/WhyChooseUsCard';
import React, { useId } from 'react';
import { ContainerDefault } from 'styles/Containers.style';
import { PracticeTitle } from 'styles/practices/PracticeCommon.style';
import {
  WhyChooseUsCards,
  WhyChooseUsSection,
} from 'styles/practices/WhyChooseUs.style';

const whyChooseUsData = {
  cards: [
    {
      title: 'Dedicated attorneys',
      text: 'At Scarinci Hollenbeck, our attorneys are forward-thinking professionals dedicated to the ongoing enhancement of their legal expertise. They stay informed of legal developments, engage in professional bar associations, contribute to legislative initiatives, and actively engage in speaking opportunities—all to provide the highest quality service possible.',
      image: {
        src: '/images/whyChooseUs1.jpg',
        width: 1000,
        height: 700,
      },
    },
    {
      title: 'Strategic Counsel',
      text: "In today's dynamic economy, businesses face complex challenges. We understand that these challenges require innovative, multi-faceted solutions. Through a collaborative, cross-practice approach, our attorneys leverage a wealth of experience across various legal disciplines to devise effective strategies tailored to meet our clients’ needs.",
      image: {
        src: '/images/whyChooseUs2.jpg',
        width: 1000,
        height: 700,
      },
    },
    {
      title: 'Proven Experience',
      text: 'For over 35 years, Scarinci Hollenbeck has offered comprehensive legal services to businesses both locally and globally. Our attorneys draw on extensive industry knowledge, representing clients in sectors such as real estate, entertainment, technology, and energy. We take pride in the successful outcomes we consistently achieve.',
      image: {
        src: '/images/whyChooseUs3.jpg',
        width: 1000,
        height: 700,
      },
    },
    {
      title: 'Client-First Focus',
      text: 'Our commitment to being a client-first law firm is rooted in open communication, meticulous attention to detail, and adaptability. We work closely with clients to ensure a transparent process, earning their trust through comprehensive guidance. This steadfast commitment is why clients continue to rely on us for their most complex legal challenges.',
      image: {
        src: '/images/whyChooseUs4.jpg',
        width: 1000,
        height: 700,
      },
    },
  ],
};

const WhyChooseUs = ({ anchorId }) => (
  <WhyChooseUsSection
    className="margin-scroll"
    id={anchorId}
    data-testid="why-choose-us"
  >
    <ContainerDefault>
      <PracticeTitle>Why Choose Us?</PracticeTitle>
      <WhyChooseUsCards>
        {whyChooseUsData.cards.map((card, index) => (
          <WhyChooseUsCard key={useId()} {...card} />
        ))}
      </WhyChooseUsCards>
    </ContainerDefault>
  </WhyChooseUsSection>
);

export default WhyChooseUs;
