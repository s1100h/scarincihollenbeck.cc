import Link from 'next/link';
import {
  ProfileServicesChair,
  ProfileServicesChairItem,
  ProfileServicesChairList,
  ProfileServicesChairTitle,
  ProfileServicesContent,
  ProfileServicesItem,
  ProfileServicesTitle,
  ProfileServicesWrapper,
} from 'styles/attorney-page/AttorneyProfile.style';
import empty from 'is-empty';

const removeDuplicates = (chairs, coChairs, services) => {
  if (empty(services)) return [];
  if (empty(chairs) && empty(coChairs)) return services;

  const urisToRemove = new Set(
    [...coChairs, ...chairs].map((item) => item.link),
  );

  return services.filter((service) => !urisToRemove.has(service?.uri));
};

const ProfileServices = ({ services, coChairs, chairs }) => {
  const servicesWithoutDuplicates = removeDuplicates(
    chairs,
    coChairs,
    services,
  );

  if (empty(servicesWithoutDuplicates)) return null;

  return (
    <ProfileServicesWrapper className="profile-services-wrapper">
      <ProfileServicesTitle indent="true">How I can help</ProfileServicesTitle>

      <ProfileServicesContent>
        {!empty(chairs) && (
          <ProfileServicesChair as="li" className="chair">
            <ProfileServicesChairTitle>Chair</ProfileServicesChairTitle>

            <ProfileServicesChairList>
              {chairs.map((chair) => (
                <ProfileServicesChairItem key={chair.title}>
                  <Link href={chair.link}>{chair.title}</Link>
                </ProfileServicesChairItem>
              ))}
            </ProfileServicesChairList>
          </ProfileServicesChair>
        )}

        {!empty(coChairs) && (
          <ProfileServicesChair as="li" className="co-chair">
            <ProfileServicesChairTitle>co-CHAIR</ProfileServicesChairTitle>

            <ProfileServicesChairList>
              {coChairs.map((chair) => (
                <ProfileServicesChairItem key={chair.title}>
                  <Link href={chair.link}>{chair.title}</Link>
                </ProfileServicesChairItem>
              ))}
            </ProfileServicesChairList>
          </ProfileServicesChair>
        )}

        {!empty(servicesWithoutDuplicates)
          && servicesWithoutDuplicates.map((service) => (
            <ProfileServicesItem key={service.title}>
              <Link href={service.uri}>{service.title}</Link>
            </ProfileServicesItem>
          ))}
      </ProfileServicesContent>
    </ProfileServicesWrapper>
  );
};

export default ProfileServices;
