import FAQ from 'components/atoms/FAQ';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import CollapseContent from 'components/molecules/practice/CollapseContent';
import React from 'react';
import {
  PracticeContentSection,
  PracticeDescription,
  PracticeSidebar,
  PracticeContentHolder,
} from 'styles/practices/PracticeContent.style';
import { ContainerDefault } from 'styles/Containers.style';
import GetInTouchForm from './GetInTouchForm';

const PracticeContent = ({
  data, title, anchorId, anchorIdFaq, faqData,
}) => (
  <PracticeContentSection
    id={anchorId}
    className="margin-scroll"
    data-testid="practice-content"
  >
    <ContainerDefault>
      <PracticeContentHolder>
        <PracticeDescription>
          {data?.map((item) => (
            <CollapseContent
              key={item.id}
              content={<JSXWithDynamicLinks HTML={item.content} />}
              id={item.id}
            />
          ))}
          <FAQ title={title} anchorId={anchorIdFaq} faqArrContent={faqData} />
        </PracticeDescription>
        <PracticeSidebar>
          <GetInTouchForm />
        </PracticeSidebar>
      </PracticeContentHolder>
    </ContainerDefault>
  </PracticeContentSection>
);

export default PracticeContent;
