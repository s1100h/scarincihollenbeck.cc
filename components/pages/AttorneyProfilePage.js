import ProfileAccordion from 'components/organisms/attorney/ProfileAccordion';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import { CURRENT_DOMAIN } from 'utils/constants';

const AttorneyProfilePage = ({
  seo,
  profileHeader,
  attorneyFooterNewsArticles,
  tabs,
  attorneyAwards,
  accordionData,
}) => (
  <>
    <PersonSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={`${CURRENT_DOMAIN}/${seo.canonicalLink}`}
      name={profileHeader.name}
      featuredImage={seo.image}
      designation={profileHeader.title}
      socialMediaLinks={seo.socialMediaLinks}
    />
    <ProfileHeader {...profileHeader} />

    <ProfileAccordion {...accordionData} />
  </>
);

export default AttorneyProfilePage;
