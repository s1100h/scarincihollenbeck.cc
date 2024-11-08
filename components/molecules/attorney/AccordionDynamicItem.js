import React from 'react';
import { ProfileAccordionBody } from 'styles/attorney-page/ProfileAccordion.style';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import DisclaimerText from 'components/atoms/DisclaimerText';
import empty from 'is-empty';
import AccordionItem from './AccordionItem';

const AccordionDynamicItem = ({
  title,
  content,
  ulProps,
  disclaimer,
  eventKey,
  tag,
}) => (
  <AccordionItem as={tag} eventKey={eventKey} title={title}>
    <ProfileAccordionBody {...ulProps}>
      <JSXWithDynamicLinks HTML={content} />
      {!empty(disclaimer) && <DisclaimerText text={disclaimer} />}
    </ProfileAccordionBody>
  </AccordionItem>
);

export default AccordionDynamicItem;
