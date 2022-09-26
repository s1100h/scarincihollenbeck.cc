import { Container, Row, Col } from 'react-bootstrap';
import AdminProfileHeader from 'components/organisms/admin/AdminHeader';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import { createMarkup } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';

const AdminProfile = ({ response, profile, canonicalUrl }) => {
  const { seo } = response;

  return (
    <>
      <PersonSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
        name={response.name}
        featuredImage={seo.featuredImg}
        designation={profile.designation}
      />
      <AdminProfileHeader profile={profile} image={response.image.url} />
      <Container>
        <Row>
          <Col sm={12}>
            <ContentTitle title="Biography" />
            <div className="mb-5" dangerouslySetInnerHTML={createMarkup(response.biography)} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminProfile;
