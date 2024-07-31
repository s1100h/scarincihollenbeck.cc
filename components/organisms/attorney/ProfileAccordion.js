import DisclaimerText from 'components/atoms/DisclaimerText';
import AccordionItem from 'components/molecules/attorney/AccordionItem';
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
import { useRouter } from 'next/router';
import { reservedAccordionTitles } from 'utils/constants';
import { getPaginationData } from '../../../requests/getPaginationData';
import { postsForPaginationByAuthorIdQuery } from '../../../requests/graphql-queries';

const AwardsSlider = dynamic(
  () => import('components/molecules/home/AwardsSlider'),
  {
    ssr: false,
  },
);

const BlogsBox = dynamic(() => import('../../molecules/attorney/BlogsBox'));

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

const renderBlogPosts = (data, config, blogTitles, isWide) => blogTitles?.includes(config?.title) && (
<AccordionItem eventKey={config?.actionKey} title={config?.title}>
  <BlogsBox
    queryParamsForPagination={config?.queryParams}
    paginationData={data}
    isWideCards={isWide}
  />
</AccordionItem>
);

const checkOnDuplicate = (title) => {
  if (reservedAccordionTitles.includes(title)) {
    return (
      <>
        {title}
        <span className="duplicate">Duplicate</span>
      </>
    );
  }

  return title;
};

const ProfileAccordion = ({
  clients,
  awards,
  attorneyBiography,
  affiliations,
  additionalInfo,
  additionalTabs,
  representativeMatters,
  gallery,
  mediaItems,
  presentationsItems,
  publicationsItems,
  videos,
  govLawPosts,
  blogTitles,
}) => {
  const router = useRouter();
  const sanitizedAwardsForSlider = sanitizeAwardsForSlider(awards);

  // News Press Releases section START
  const newsPressReleasesConfig = {
    title: 'News & Press Releases',
    queryParams: 'news-press-releases-page',
    actionKey: 'news-and-press',
    params: {
      slug: router?.query?.slug,
      categoryId: 98,
      currentPage: router?.query?.['news-press-releases-page'] || 1,
      itemsPerPage: 6,
    },
  };

  const newsPressReleasesPaginationData = getPaginationData(
    postsForPaginationByAuthorIdQuery,
    newsPressReleasesConfig.params,
  );
  // News Press Releases section END

  // Blog section START
  const blogConfig = {
    title: 'Blog',
    queryParams: 'blogs-page',
    actionKey: 'blogs',
    params: {
      slug: router?.query?.slug,
      categoryId: 599,
      currentPage: router?.query?.['blogs-page'] || 1,
      itemsPerPage: 3,
    },
  };

  const blogPostsPaginationData = getPaginationData(
    postsForPaginationByAuthorIdQuery,
    blogConfig.params,
  );
  // Blog section END

  // Events section START
  const eventsConfig = {
    title: 'Events',
    queryParams: 'events-page',
    actionKey: 'events',
    params: {
      slug: router?.query?.slug,
      categoryId: 99,
      currentPage: router?.query?.['events-page'] || 1,
      itemsPerPage: 6,
    },
  };

  const eventsPostsPaginationData = getPaginationData(
    postsForPaginationByAuthorIdQuery,
    eventsConfig.params,
  );
  // Events section END

  return (
    <ProfileAccordionWrapper>
      <ContainerDefault>
        <ProfileAccordionHolder>
          <Accordion as="ul" alwaysOpen>
            <ProfileClients clients={clients} />

            {!empty(sanitizedAwardsForSlider) && (
              <AccordionItem eventKey="profile-awards" title="Awards">
                <StandardLightBlueButton as={Link} href="/awards">
                  Award Methodology
                </StandardLightBlueButton>
                <AwardsSlider items={sanitizedAwardsForSlider} isLightVariant />
              </AccordionItem>
            )}

            {!empty(attorneyBiography?.biographyContent) && (
              <AccordionDynamicItem
                eventKey="profile-biography"
                title="Full Biography"
                content={attorneyBiography?.biographyContent}
              />
            )}

            {!empty(affiliations) && (
              <AccordionDynamicItem
                eventKey="profile-affiliations"
                title="Affiliations Area"
                content={affiliations}
              />
            )}

            {!empty(representativeMatters) && (
              <AccordionDynamicItem
                eventKey="profile-representative-matters"
                title="Representative Matters"
                ulProps={{ $columnsCountUl: 2, $columnGapUl: 40 }}
                content={representativeMatters}
                disclaimer="* Results may vary depending on your particular facts and legal circumstances."
              />
            )}

            {!empty(gallery) && (
              <AccordionItem eventKey="profile-gallery" title="Gallery">
                <GallerySlider items={gallery} />
              </AccordionItem>
            )}

            {!empty(mediaItems) && (
              <AccordionItem eventKey="profile-media" title="Media">
                <MediaSlider items={mediaItems} />
              </AccordionItem>
            )}

            {!empty(presentationsItems) && (
              <AccordionItem
                eventKey="profile-presentations"
                title="Presentations"
              >
                <MediaSlider items={presentationsItems} />
              </AccordionItem>
            )}

            {!empty(publicationsItems) && (
              <AccordionItem
                eventKey="profile-publications"
                title="Publications"
              >
                <MediaSlider items={publicationsItems} />
              </AccordionItem>
            )}

            {!empty(videos) && (
              <AccordionItem eventKey="profile-videos" title="Video">
                <MediaSlider items={videos} />
              </AccordionItem>
            )}

            {!empty(govLawPosts?.posts) && (
              <AccordionItem
                eventKey="profile-gov-law"
                title="Government & Law"
              >
                <MediaSlider items={govLawPosts?.posts} />
              </AccordionItem>
            )}

            {renderBlogPosts(
              newsPressReleasesPaginationData,
              newsPressReleasesConfig,
              blogTitles,
            )}
            {renderBlogPosts(blogPostsPaginationData, blogConfig, blogTitles)}
            {renderBlogPosts(
              eventsPostsPaginationData,
              eventsConfig,
              blogTitles,
              true,
            )}

            {!empty(additionalTabs)
              && additionalTabs.map(
                (tab) => !empty(tab?.content) && (
                <AccordionDynamicItem
                  key={`${tab?.id}-additional-tab`}
                  eventKey={`profile-additional-${tab?.id}`}
                  title={checkOnDuplicate(tab?.title)}
                  content={tab?.content}
                />
                ),
              )}

            {!empty(additionalInfo)
              && additionalInfo.map(
                (item) => !empty(item?.content) && (
                <AccordionDynamicItem
                  key={`${item?.title}-additional-info-tab`}
                  eventKey={`profile-additional-info-${item?.title}`}
                  title={checkOnDuplicate(item?.title)}
                  content={item?.content}
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
