import DisclaimerText from 'components/atoms/DisclaimerText';
import AccordionItem from 'components/molecules/attorney/AccordionItem';
import React from 'react';
import { Accordion } from 'react-bootstrap';
import {
  ProfileAccordionHolder,
  ProfileAccordionWrapper,
} from 'styles/attorney-page/ProfileAccordion.style';
import { ContainerDefault } from 'styles/Containers.style';
import empty from 'is-empty';
import Link from 'next/link';
import ProfileClients from 'components/molecules/attorney/ProfileClients';
import dynamic from 'next/dynamic';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import { StandardLightBlueButton } from 'styles/Buttons.style';
import AccordionDynamicItem from 'components/molecules/attorney/AccordionDynamicItem';
import GallerySlider from 'components/molecules/attorney/GallerySlider';
import MediaSlider from 'components/molecules/attorney/MediaSlider';

const AwardsSlider = dynamic(
  () => import('components/molecules/home/AwardsSlider'),
  {
    ssr: false,
  },
);

const sanitizeAwardsForSlider = (awards) => {
  if (empty(awards)) return null;

  const formattedAwards = awards.map(
    ({
      awardImage, awardLink, awardTitle, year,
    }) => ({
      id: awardTitle,
      year,
      label: awardTitle,
      image: {
        src: formatSrcToCloudinaryUrl(awardImage.sourceUrl),
        alt: awardTitle,
        width: 200,
        height: 200,
      },
      link: awardLink,
    }),
  );

  return formattedAwards;
};

const ProfileAccordion = ({
  clients,
  awards,
  attorneyBiography,
  affiliations,
  additionalTabs,
  representativeMatters,
  gallery,
  mediaContent,
}) => {
  const sanitizedAwardsForSlider = sanitizeAwardsForSlider(awards);

  return (
    <ProfileAccordionWrapper>
      <ContainerDefault>
        <ProfileAccordionHolder>
          <Accordion as="ul" alwaysOpen>
            <ProfileClients clients={clients} />

            {!empty(sanitizedAwardsForSlider) && (
              <AccordionItem eventKey="1" title="Awards">
                <StandardLightBlueButton as={Link} href="/awards">
                  Award Methodology
                </StandardLightBlueButton>
                <AwardsSlider items={sanitizedAwardsForSlider} isLightVariant />
              </AccordionItem>
            )}

            {!empty(attorneyBiography?.biographyContent) && (
              <AccordionDynamicItem
                eventKey="2"
                title="Full Biography"
                content={attorneyBiography?.biographyContent}
              />
            )}

            {!empty(affiliations) && (
              <AccordionDynamicItem
                eventKey="3"
                title="Affiliations Area"
                content={affiliations}
              />
            )}

            {!empty(representativeMatters) && (
              <AccordionDynamicItem
                eventKey="4"
                title="Representative Matters"
                ulProps={{ $columnsCountUl: 2, $columnGapUl: 40 }}
                content={representativeMatters}
                disclaimer="* Results may vary depending on your particular facts and legal circumstances."
              />
            )}

            {!empty(gallery) && (
              <AccordionItem eventKey="5" title="Gallery">
                <GallerySlider items={gallery} />
              </AccordionItem>
            )}

            {!empty(mediaContent) && (
              <AccordionItem eventKey="6" title="Media">
                <MediaSlider items={mediaContent?.body} />
              </AccordionItem>
            )}

            {!empty(additionalTabs)
              && additionalTabs.map(
                (tab) => !empty(tab?.content) && (
                <AccordionDynamicItem
                  key={`${tab?.id}additional-tab`}
                  eventKey={`additional-${tab?.id}`}
                  title={tab?.title}
                  content={tab?.content}
                />
                ),
              )}
          </Accordion>

          <DisclaimerText text="No Aspect of the advertisement has been approved by the Supreme Court. Results may vary depending on your particular facts and legal circumstances." />
        </ProfileAccordionHolder>
      </ContainerDefault>
    </ProfileAccordionWrapper>
  );
};

export default ProfileAccordion;
