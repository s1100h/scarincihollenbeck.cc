import React from 'react';
import empty from 'is-empty';
import {
  ProfileAccordionBody,
  ProfileClientsWrapper,
} from 'styles/attorney-page/ProfileAccordion.style';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AccordionItem from './AccordionItem';

const ClientSlider = dynamic(() => import('./ClientSlider'), { ssr: false });

const ProfileClients = ({ clients }) => {
  if (empty(clients)) return null;

  return (
    <ProfileClientsWrapper>
      <ClientSlider clients={clients} />
      <AccordionItem as="li" eventKey="0" title="Clients List">
        <ProfileAccordionBody $columnsCount={3}>
          <ul>
            {clients.map(({ clientImage, clientLink, clientTitle }) => (
              <li key={clientTitle}>
                {!empty(clientLink) ? (
                  <Link href={clientLink}>{clientTitle}</Link>
                ) : (
                  clientTitle
                )}
              </li>
            ))}
          </ul>
        </ProfileAccordionBody>
      </AccordionItem>
    </ProfileClientsWrapper>
  );
};

export default ProfileClients;
