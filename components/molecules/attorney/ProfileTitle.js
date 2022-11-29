import Link from 'next/link';
import { ProfileName, SubTitleProfileBox } from 'styles/AttorneyProfile.style';

const ProfileTitle = ({
  name, designation, coChairs, chairs,
}) => (
  <>
    <ProfileName className=" animate__animated animate__fadeInDown animate__slow">
      {name}
    </ProfileName>
    <SubTitleProfileBox>
      <h2>{designation}</h2>
      {chairs.length > 0 && (
        <p>
          Chair:
          {' '}
          {chairs.map((chair, idx) => (
            <Link href={chair.link} key={chair.title}>
              <a>
                {chair.title}
                {idx < chairs.length - 1 && ', '}
              </a>
            </Link>
          ))}
        </p>
      )}
      {coChairs.length > 0 && (
        <p>
          <span className="my-1">
            Co-Chair:
            {' '}
            {coChairs.map((coChair) => (
              <Link href={coChair.link} key={coChair.title}>
                <a>{coChair.title}</a>
              </Link>
            ))}
          </span>
        </p>
      )}
    </SubTitleProfileBox>
  </>
);

export default ProfileTitle;
