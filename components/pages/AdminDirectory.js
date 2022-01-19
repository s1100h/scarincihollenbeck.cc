import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import FullWidth from 'layouts/FullWidth';
import AttorneyCard from 'components/shared/AttorneyCard';
import { sortByKey, formatSrcToCloudinaryUrl } from 'utils/helpers';

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
    <FullWidth>
      <Container className="p-3 pt-4 border">
        <Row>
          {sortByKey(admins, 'orderBy').map((admin) => (
            <Col sm={12} md={6} lg={4} key={admin.id} className="mb-3">
              <AttorneyCard
                image={formatSrcToCloudinaryUrl(admin.image.smallUrl)}
                name={admin.name}
                link={admin.link}
                title={admin.title}
                number={`201-896-4100 ${admin.phoneExtension}`}
                email={admin.email}
                type="/administration/[admin]"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </FullWidth>
  </>
);

export default AdministrationPage;
