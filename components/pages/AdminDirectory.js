import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import AttorneyCard from 'components/shared/AttorneyCard';
import { sortByKey, formatSrcToCloudinaryUrl } from 'utils/helpers';
import { CentralizedBox, ContainerXXL, RowSpecial } from 'styles/Containers.style';

const AdministrationPage = ({
  admins, seo, site, canonicalUrl,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
    />
    <SingleSubHeader title={site.title} subtitle={site.description} offset={2} span={7} />
    <ContainerXXL>
      <CentralizedBox>
        <RowSpecial>
          {sortByKey(admins, 'orderBy').map((admin) => (
            <AttorneyCard
              key={admin.id}
              image={formatSrcToCloudinaryUrl(admin.image.smallUrl)}
              name={admin.name}
              link={admin.link}
              title={admin.title}
              number={`201-896-4100 ${admin.phoneExtension}`}
              email={admin.email}
              type="/administration/[admin]"
            />
          ))}
        </RowSpecial>
      </CentralizedBox>
    </ContainerXXL>
  </>
);

export default AdministrationPage;
