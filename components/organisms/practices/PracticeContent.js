import FAQ from 'components/atoms/FAQ';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import CollapseContent from 'components/molecules/practice/CollapseContent';
import React from 'react';
import {
  PracticeContentSection,
  SplitContentDescription,
  SplitContentSidebar,
  SplitContentHolder,
} from 'styles/practices/PracticeContent.style';
import { ContainerDefault } from 'styles/Containers.style';
import GetInTouchForm from './GetInTouchForm';
import SocialShare from '../post/SocialShare';

const PracticeContent = ({
  data,
  title,
  anchorId,
  anchorIdFaq,
  faqData,
  handlePrint,
}) => (
  <PracticeContentSection
    id={anchorId}
    className="margin-scroll"
    data-testid="practice-content"
  >
    <ContainerDefault>
      <SocialShare
        isPractice
        isPrintBtn
        customClass="social-share"
        handlePrint={handlePrint}
      />
      <SplitContentHolder>
        <SplitContentDescription>
          {data?.map((item) => (
            <CollapseContent
              key={item.id}
              title={item.title}
              content={<JSXWithDynamicLinks HTML={item.content} />}
              id={item.id}
            />
          ))}
          <FAQ title={title} anchorId={anchorIdFaq} faqArrContent={faqData} />
        </SplitContentDescription>
        <SplitContentSidebar>
          <GetInTouchForm handlePrint={handlePrint} isPractice isPrintBtn />
        </SplitContentSidebar>
      </SplitContentHolder>
    </ContainerDefault>
  </PracticeContentSection>
);

export default PracticeContent;
