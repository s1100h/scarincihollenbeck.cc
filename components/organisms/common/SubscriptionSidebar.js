import React from 'react';
import { useDispatch } from 'react-redux';
import { StandardBlueButton } from 'styles/Buttons.style';
import { TitleH3 } from 'styles/common/Typography.style';
import {
  SubscriptionSidebarContent,
  SubscriptionSidebarHolder,
  SubscriptionSidebarLibrary,
  SubscriptionSidebarLibraryLinks,
  SubscriptionSidebarLibraryTitle,
  SubscriptionSidebarText,
} from 'styles/SubscriptionSidebar.style';
import { FIRM_BLOG_PAGES } from 'utils/constants';
import Link from 'next/link';
import { getIcon } from 'utils/helpers';
import { handleSubscriptionModalOpener } from '../../../redux/slices/modals.slice';

const SubscriptionSidebar = () => {
  const dispatch = useDispatch();
  return (
    <SubscriptionSidebarHolder>
      <SubscriptionSidebarContent>
        <TitleH3 as="h2">Sign up to get the latest from our attorneys!</TitleH3>

        <SubscriptionSidebarText>
          Consider subscribing to our Firm Insights mailing list by clicking the
          button below so you can keep up to date with the firm`s latest
          articles covering various legal topics.
        </SubscriptionSidebarText>
      </SubscriptionSidebarContent>

      <SubscriptionSidebarLibrary>
        <SubscriptionSidebarLibraryTitle>
          <span>{getIcon('News paper')}</span>
          Library
        </SubscriptionSidebarLibraryTitle>
        <SubscriptionSidebarLibraryLinks>
          {FIRM_BLOG_PAGES.map(({ id, label, slug }) => (
            <li key={id}>
              <Link href={slug}>{label}</Link>
            </li>
          ))}
        </SubscriptionSidebarLibraryLinks>
      </SubscriptionSidebarLibrary>

      <StandardBlueButton
        onClick={() => dispatch(handleSubscriptionModalOpener({ active: true }))}
      >
        <span>Subscribe Now!</span>
      </StandardBlueButton>
    </SubscriptionSidebarHolder>
  );
};

export default SubscriptionSidebar;
