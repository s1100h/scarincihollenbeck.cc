import FAQ from 'components/atoms/FAQ';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import CollapseContent from 'components/molecules/practice/CollapseContent';
import React from 'react';
import {
  PracticeContentSection,
  PracticeDescription,
  PracticeSidebar,
  PractiseContentHolder,
} from 'styles/practices/PracticeContent.style';
import { ATTORNEYS_FAQ } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import GetInTouchForm from './GetInTouchForm';

const PracticeContent = ({
  data, title, anchorId, anchorIdFaq, faqData,
}) => (
  <PracticeContentSection id={anchorId} className="margin-scroll">
    <ContainerDefault>
      <PractiseContentHolder>
        <PracticeDescription>
          {data?.map((item) => (
            <CollapseContent
              key={item.id}
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
      </PractiseContentHolder>
    </ContainerDefault>
  </PracticeContentSection>
);

export default PracticeContent;
