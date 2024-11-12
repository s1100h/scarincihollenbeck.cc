import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import ProfileHeader from 'components/organisms/attorney/ProfileHeader';

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
    <ProfileHeader {...profile} />
  </>
);

export default AdminProfile;
