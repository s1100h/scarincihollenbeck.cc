import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { ScarinciHollenbeckKeyContact } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import { AdministrationsHolder } from 'styles/Attornyes.style';
import NonFiltered from '../molecules/attorneys/NonFiltered';

const AdministrationPage = ({
  admins, seo, site, canonicalUrl,
}) => {
  const desiredOrder = [
    'Katerin Traugh',
    'John Palumbo',
    'Peter S. Moeller',
    'Dan Scarpulla',
  ];

  const sortedAdmins = [...admins].sort(
    (a, b) => desiredOrder.indexOf(a.title) - desiredOrder.indexOf(b.title),
  );

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalUrl}
      />
      <SubHeaderDefault
        title={site.title}
        subtitle={site.description}
        keyContacts={[ScarinciHollenbeckKeyContact]}
      />
      <AdministrationsHolder>
        <ContainerDefault>
          <NonFiltered
            attorneys={{
              admins: { attorneys: sortedAdmins },
            }}
            isVertical
          />
        </ContainerDefault>
      </AdministrationsHolder>
    </>
  );
};

export default AdministrationPage;
