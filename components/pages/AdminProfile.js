import { Container, Row, Col } from 'react-bootstrap';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import ContentTitle from 'components/atoms/ContentTitle';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';
import { JSXWithDynamicLinks } from '../atoms/micro-templates/JSXWithDynamicLinks';
import PostBreadCrumbs from '../organisms/post/PostBreadcrumbs';

const AdminProfile = ({ seo, profile, canonicalUrl }) => (
  <>
    <PersonSiteHead
      title={seo.title}
      metaDescription={seo.metaDescription}
      canonicalUrl={canonicalUrl}
      name={profile.name}
      featuredImage={profile.profileImage}
      designation={profile.designation}
    />
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} lg={10} xl={8}>
          <PostBreadCrumbs />
          <ProfileHeader {...profile} />
          <ContentTitle title="Biography" />
          <div className="mb-5">
            <JSXWithDynamicLinks HTML={profile.biography} />
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default AdminProfile;
