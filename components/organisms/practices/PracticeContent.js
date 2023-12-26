import FAQ from 'components/atoms/FAQ';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import CollapseContent from 'components/molecules/practice/CollapseContent';
import React from 'react';
import { Collapse } from 'react-bootstrap';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import {
  PracticeContentSection,
  PracticeDescription,
  PracticeSidebar,
  PracticeSidebarContent,
  PractiseContentHolder,
} from 'styles/practices/PracticeContent.style';
import { ATTORNEYS_FAQ } from 'utils/constants';
import ContactForm from 'components/shared/ContactForm/ContactForm';
import ProfileSidebar from '../attorney/ProfileSidebar';
import SocialShare from '../post/SocialShare';

const PracticeContent = ({ data, title }) => (
  <PracticeContentSection>
    <ContainerContent className="practice-container">
      <PractiseContentHolder>
        <PracticeDescription>
          {data?.map((item) => (
            <CollapseContent
              key={item.id}
              content={<JSXWithDynamicLinks HTML={item.content} />}
              id={item.id}
            />
          ))}
          <FAQ faqArrContent={ATTORNEYS_FAQ} title={title} />
        </PracticeDescription>
        <PracticeSidebar>
          <PracticeSidebarContent>
            <SocialShare isPractice />
            <h3>Let&apos;s get in touch</h3>
            <p>
              Form instructions (Please feel free to contact us with any
              question.)
            </p>

            <ContactForm isPositionRelativeProp />
          </PracticeSidebarContent>
        </PracticeSidebar>
      </PractiseContentHolder>
    </ContainerContent>
  </PracticeContentSection>
);

export default PracticeContent;
