import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { SITE_PHONE } from 'utils/constants';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import dynamic from 'next/dynamic';
import NonFiltered from 'components/molecules/attorneys/NonFiltered';
import { SectionTitleContext } from 'contexts/SectionTitleContext';
import { useContext } from 'react';
import { CentralizedBox, ContainerXXL } from 'styles/Containers.style';

const AdditionalInformation = dynamic(() => import('components/atoms/Article'));
const MainInformation = AdditionalInformation;
const HeadInformation = AdditionalInformation;

const sanitizeMembers = (member) => member.map(({ node }) => ({
  title: node.title,
  uri: node.uri,
  better_featured_image: node?.featuredImage?.node?.sourceUrl,
  phone:
      node.attorneyMainInformation?.phoneNumber
      || `${SITE_PHONE} #${node.administration?.phoneExtension}`,
  email: node.attorneyMainInformation?.email || node.administration?.email,
  designation: node.attorneyMainInformation?.designation || node?.administration?.title,
}));

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
  const { titles } = useContext(SectionTitleContext);
  const getPartners = attorneys.filter(
    (attorney) => attorney.node.attorneyMainInformation.designation.includes('Partner')
      && attorney.node.title !== 'Donald Scarinci',
  );
  const getManagingPartner = (lawyers, directors) => {
    const firmManager = lawyers.filter(
      (attorney) => attorney.node.attorneyMainInformation.designation === 'Firm Managing Partner',
    );
    const exclusiveDirector = directors.filter(
      (admin) => admin.node?.administration?.title === 'Executive Director',
    );
    return [...firmManager, ...exclusiveDirector];
  };

  const sortedAndClearedAdmins = (adminsArr) => {
    const filtratedAdmins = adminsArr.filter(
      ({ node }) => node.administration.title !== 'Executive Director',
    );
    return filtratedAdmins.sort((a, b) => (a.node.administration?.order > b.node.administration?.order ? 1 : -1));
  };
  const firmAdministration = sanitizeMembers(sortedAndClearedAdmins(administration));
  const firmLeaders = sanitizeMembers(getManagingPartner(attorneys, administration));
  const partners = sanitizeMembers(getPartners);
  const contentFirmOverview = [...firmLeaders, ...partners, ...firmAdministration];

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={subTitle} span={6} offset={3} />
      <ContainerXXL>
        <CentralizedBox notSurface="true">
          <HeadInformation contentBody={formatPageImageToCloudinaryUrl(bodyContent)} />
          {firmOverviewTabs.mainTabs.map(({ subtitle, title, content }) => (
            <MainInformation key={title} title={subtitle} contentBody={content} />
          ))}
        </CentralizedBox>
      </ContainerXXL>
      <NonFiltered attorneys={contentFirmOverview} titles={titles} />
      <ContainerXXL>
        <CentralizedBox notSurface="true">
          {firmOverviewTabs.additionalContent.map(({ content, title }) => (
            <AdditionalInformation key={title} highlight title={title} contentBody={content} />
          ))}
        </CentralizedBox>
      </ContainerXXL>
    </>
  );
};

export default FirmOverviewPage;
