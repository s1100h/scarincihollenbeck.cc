import FAQ from 'components/atoms/FAQ';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import CollapseContent from 'components/molecules/practice/CollapseContent';
import React from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import {
  PracticeContentSection,
  PracticeDescription,
  PracticeSidebar,
  PracticeContentHolder,
} from 'styles/practices/PracticeContent.style';
import { ATTORNEYS_FAQ } from 'utils/constants';
import GetInTouchForm from './GetInTouchForm';

const PracticeContent = ({
  data, title, anchorId, anchorIdFaq, faqData,
}) => (
  <PracticeContentSection id={anchorId} className="margin-scroll">
    <ContainerContent className="practice-container">
      <PracticeContentHolder>
        <PracticeDescription>
          {data?.map((item) => (
            <CollapseContent
              key={item.id}
              title={item.title}
              content={<JSXWithDynamicLinks HTML={item.content} />}
              id={item.id}
            />
          ))}
          <FAQ
            faqArrContent={ATTORNEYS_FAQ}
            title={title}
            anchorId={anchorIdFaq}
            faqData={faqData}
          />
        </PracticeDescription>
        <PracticeSidebar>
          <GetInTouchForm />
        </PracticeSidebar>
      </PracticeContentHolder>
    </ContainerContent>
  </PracticeContentSection>
);

export default PracticeContent;
