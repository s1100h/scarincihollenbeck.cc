import DisclaimerText from 'components/atoms/DisclaimerText';
import AccordionItem from 'components/molecules/attorney/AccordionItem';
import React from 'react';
import { Accordion } from 'react-bootstrap';
import {
  ProfileAccordionBody,
  ProfileAccordionHolder,
  ProfileAccordionWrapper,
} from 'styles/attorney-page/ProfileAccordion.style';
import { ContainerDefault } from 'styles/Containers.style';
import empty from 'is-empty';
import Link from 'next/link';
import ProfileClients from 'components/molecules/attorney/ProfileClients';

const ProfileAccordion = ({ clients }) => (
  <ProfileAccordionWrapper>
    <ContainerDefault>
      <ProfileAccordionHolder>
        <Accordion as="ul">
          <ProfileClients clients={clients} />
        </Accordion>

        <DisclaimerText text="No Aspect of the advertisement has been approved by the Supreme Court. Results may vary depending on your particular facts and legal circumstances." />
      </ProfileAccordionHolder>
    </ContainerDefault>
  </ProfileAccordionWrapper>
);

export default ProfileAccordion;
