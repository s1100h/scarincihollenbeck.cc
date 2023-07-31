import SubHeader from 'layouts/SubHeader/SubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import dynamic from 'next/dynamic';
import NonFiltered from 'components/molecules/attorneys/NonFiltered';
import { AttorneysContext } from 'contexts/AttorneysContext';
import { useContext } from 'react';
import { CentralizedBox, ContainerXXL } from 'styles/Containers.style';

const AdditionalInformation = dynamic(() => import('components/atoms/Article'));
const MainInformation = AdditionalInformation;
const HeadInformation = AdditionalInformation;

const FirmOverviewPage = ({
  title, seo, canonicalUrl, bodyContent, subTitle, firmOverviewTabs, FirmMembers,
}) => {
  const { titles } = useContext(AttorneysContext);

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SubHeader title={title} subtitle={subTitle} span={6} offset={3} />
      <ContainerXXL>
        <CentralizedBox notSurface="true">
          <HeadInformation contentBody={formatPageImageToCloudinaryUrl(bodyContent)} />
          {firmOverviewTabs.mainTabs.map(({ subtitle, title, content }) => (
            <MainInformation key={title} title={subtitle} contentBody={content} />
          ))}
        </CentralizedBox>
      </ContainerXXL>
      <NonFiltered attorneys={FirmMembers} titles={titles} />
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
