import SubHeader from 'layouts/SubHeader/SubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { ContainerXXL } from 'styles/Containers.style';
import NonFiltered from '../molecules/attorneys/NonFiltered';

const AdministrationPage = ({
  admins, seo, site, canonicalUrl,
}) => (
  <>
    <BasicSiteHead title={seo.title} metaDescription={seo.metaDescription} canonicalUrl={canonicalUrl} />
    <SubHeader title={site.title} subtitle={site.description} offset={2} span={7} />
    <ContainerXXL>
      <NonFiltered attorneys={admins} />
    </ContainerXXL>
  </>
);

export default AdministrationPage;
