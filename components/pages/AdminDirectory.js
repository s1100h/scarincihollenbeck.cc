import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { FIRM_PAGES } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import { AdministrationsHolder } from 'styles/Attornyes.style';
import NonFiltered from '../molecules/attorneys/NonFiltered';

const AdministrationPage = ({
  admins, seo, site, canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      title={site.title}
      subtitle={site.description}
      backgroundImage={site.image}
      menu={FIRM_PAGES}
    />
    <AdministrationsHolder>
      <ContainerDefault>
        <NonFiltered
          attorneys={{
            admins: { attorneys: admins },
          }}
          isVertical
        />
      </ContainerDefault>
    </AdministrationsHolder>
  </>
);

export default AdministrationPage;
