import Link from 'next/link';
import { ProfileName, SubTitleProfileBox } from 'styles/attorney-page/AttorneyProfile.style';

const ProfileTitle = ({
  name, designation, coChairs, chairs, primaryPractices,
}) => (
  <>
    <ProfileName className="animate__animated animate__fadeInDown animate__slow">{name}</ProfileName>
    <SubTitleProfileBox>
      <h2>{designation}</h2>
      {primaryPractices
        && primaryPractices.map((practice, idx) => (
          <Link key={practice.id} href={practice.uri}>
            {practice.title}
            {idx < primaryPractices.length - 1 && ', '}
          </Link>
        ))}
      {chairs?.length > 0 && (
        <p>
          Chair:
          {' '}
          {chairs.map((chair, idx) => (
            <Link href={chair.link} key={chair.title}>
              {chair.title}
              {idx < chairs.length - 1 && ', '}
            </Link>
          ))}
        </p>
      )}
      {coChairs?.length > 0 && (
        <p>
          <span className="my-1">
            Co-Chair:
            {' '}
            {coChairs.map((coChair) => (
              <Link href={coChair.link} key={coChair.title}>
                {coChair.title}
              </Link>
            ))}
          </span>
        </p>
      )}
    </SubTitleProfileBox>
  </>
);

export default ProfileTitle;
