import Link from 'next/link';
import { ProfileName, SubTitleProfileBox } from 'styles/AttorneyProfile.style';

const ProfileTitle = ({
  name, designation, chair, coChair,
}) => (
  <>
    <ProfileName className=" animate__animated animate__fadeInDown animate__slow">
      {name}
    </ProfileName>
    <SubTitleProfileBox>
      <h2>{designation}</h2>
      {chair.length > 0 && (
        <p>
          Chair:
          {' '}
          {chair.map((c, i) => (
            <Link href={c.link} key={c.title}>
              <a>
                {c.title}
                {i < chair.length - 1 && ', '}
              </a>
            </Link>
          ))}
        </p>
      )}
      {coChair.length > 0 && (
        <p>
          <span className="my-1">
            Co-Chair:
            {' '}
            {coChair.map((c) => (
              <Link href={c.link} key={c.title}>
                <a>{c.title}</a>
              </Link>
            ))}
          </span>
        </p>
      )}
    </SubTitleProfileBox>
  </>
);

export default ProfileTitle;
