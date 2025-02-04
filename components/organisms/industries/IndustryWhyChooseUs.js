import React, { useId } from 'react';
import { Title20, Title60 } from 'styles/common/Typography.style';
import { defaultWhyChooseUsData } from 'utils/constants';
import empty from 'is-empty';
import {
  IndustryChooseUsContainer,
  IndustryChooseUsHolder,
  IndustryChooseUsImage,
  IndustryChooseUsItem,
  IndustryChooseUsItemDescription,
  IndustryChooseUsList,
  IndustryChooseUsSection,
} from 'styles/industries/IndustryWhyChooseUs.style';
import Image from 'next/image';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

const IndustryWhyChooseUs = ({ data, anchorId }) => {
  let isJSX = true;
  if (empty(data)) {
    data = defaultWhyChooseUsData;
    isJSX = false;
  }
  const id = useId();

  return (
    <IndustryChooseUsSection id={anchorId} className="margin-scroll">
      <IndustryChooseUsContainer>
        <Title60>
          Why
          <strong> Choose Us?</strong>
        </Title60>
        <IndustryChooseUsHolder>
          <IndustryChooseUsImage>
            <Image
              src="/images/whyChooseUs1.webp"
              alt="Building with sky background"
              fill
            />
          </IndustryChooseUsImage>

          <IndustryChooseUsList>
            {data.map((card, index) => (
              <IndustryChooseUsItem key={`${id}-${index + 1}-card`}>
                {card?.title && <Title20>{card?.title}</Title20>}
                {(card?.description || card?.content) && (
                  <IndustryChooseUsItemDescription as={isJSX ? 'div' : 'p'}>
                    <JSXWithDynamicLinks
                      HTML={card?.description || card?.content}
                    />
                  </IndustryChooseUsItemDescription>
                )}
              </IndustryChooseUsItem>
            ))}
          </IndustryChooseUsList>
        </IndustryChooseUsHolder>
      </IndustryChooseUsContainer>
    </IndustryChooseUsSection>
  );
};

export default IndustryWhyChooseUs;
