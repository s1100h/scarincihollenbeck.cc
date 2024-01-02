import FAQ from 'components/atoms/FAQ';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import CollapseContent from 'components/molecules/practice/CollapseContent';
import React from 'react';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import {
  PracticeContentSection,
  PracticeDescription,
  PracticeSidebar,
  PractiseContentHolder,
} from 'styles/practices/PracticeContent.style';
import { ATTORNEYS_FAQ } from 'utils/constants';
import GetInTouchForm from './GetInTouchForm';

const PracticeContent = ({
  data, title, anchorId, anchorIdFaq,
}) => (
  <PracticeContentSection id={anchorId} className="margin-scroll">
    <ContainerContent className="practice-container">
      <PractiseContentHolder>
        <PracticeDescription>
          {/* slise used for delete last element - releted articles title */}
          {data?.slice(0, data.length - 1).map((item) => (
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
          />
        </PracticeDescription>
        <PracticeSidebar>
          <GetInTouchForm />
        </PracticeSidebar>
      </PractiseContentHolder>
    </ContainerContent>
  </PracticeContentSection>
);

export default PracticeContent;
