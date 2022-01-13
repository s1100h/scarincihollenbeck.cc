import SingleSubHeader from 'layouts/SingleSubHeader';
import FullWidth from 'layouts/FullWidth';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { SITE_PHONE } from 'utils/constants';
import {
  createMarkup,
  formatPageImageToCloudinaryUrl,
  formatSrcToCloudinaryUrl,
} from 'utils/helpers';
import dynamic from 'next/dynamic';

const MainTabs = dynamic(() => import('components/organisms/firm-overview/MainTabs'));
const AdditionalTabs = dynamic(() => import('components/organisms/firm-overview/AdditionalTabs'));
const Members = dynamic(() => import('components/organisms/firm-overview/Members'));

const sanitizeMembers = (member, isAttorney) => member.map(({ node }) => ({
  title: node.title,
  uri: node.uri,
  lastName: isAttorney ? node.attorneyMainInformation?.lastName : node.administration.lastname,
  featuredImage: formatSrcToCloudinaryUrl(node?.featuredImage?.node?.sourceUrl),
  phone: isAttorney
    ? node.attorneyMainInformation?.phoneNumber
    : `${SITE_PHONE} #${node.administration?.phoneExtension}`,
  email: isAttorney ? node.attorneyMainInformation?.email : node.administration?.email,
}));

const sortMembersByLastName = (arr) => arr.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

const FirmOverviewPage = ({
  title,
  seo,
  canonicalUrl,
  bodyContent,
  subTitle,
  firmOverviewTabs,
  attorneys,
  administration,
}) => {
  const getPartners = attorneys.filter(
    (attorney) => attorney.node.attorneyMainInformation.designation.includes('Partner')
      && attorney.node.title !== 'Donald Scarinci',
  );
  const getManagingPartner = attorneys.filter(
    (attorney) => attorney.node.attorneyMainInformation.designation === 'Managing Partner',
  );
  const sortedAdmins = administration.sort((a, b) => (a.node.administration?.order > b.node.administration?.order ? 1 : -1));
  const managingPartner = sanitizeMembers(getManagingPartner, true);
  const partners = sanitizeMembers(getPartners, true);
  const firmAdministration = sanitizeMembers(sortedAdmins, false);

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={subTitle} span={6} offset={3} />
      <FullWidth>
        <div
          className="featured"
          dangerouslySetInnerHTML={createMarkup(formatPageImageToCloudinaryUrl(bodyContent))}
        />
        <MainTabs tabs={firmOverviewTabs.mainTabs} />
        <Members
          type="attorney"
          title="Managing Partners"
          members={sortMembersByLastName(managingPartner)}
        />
        <Members type="attorney" title="Partners" members={partners} />
        <Members type="admin" title="Directors" members={firmAdministration} />
        <AdditionalTabs tabs={firmOverviewTabs.additionalContent} />
      </FullWidth>
    </>
  );
};

export default FirmOverviewPage;
