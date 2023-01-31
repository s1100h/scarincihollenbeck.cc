import { Container, Row, Col } from 'react-bootstrap';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import ContentTitle from 'components/atoms/ContentTitle';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import { JSXWithDynamicLinks } from '../atoms/micro-templates/JSXWithDynamicLinks';

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
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} lg={10} xl={8}>
            <ProfileHeader {...profile} />
            <ContentTitle title="Biography" />
            <div className="mb-5">
              <JSXWithDynamicLinks HTML={response.biography} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminProfile;
