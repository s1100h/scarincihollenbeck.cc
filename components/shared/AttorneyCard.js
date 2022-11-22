import Link from 'next/link';
import Image from 'next/image';
import {
  AttorneyCardBox,
  ContactBox,
  ImageBox,
  InfoBox,
  LinkBox,
  PhotoBox,
  UserName,
} from 'styles/AttorneyCard.style';
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

const renderLinkToLocationPractice = (locationsOrPractice, officesMap) => {
  if (Array.isArray(locationsOrPractice)) {
    return locationsOrPractice?.map((location) => (
      <Link key={location} href={`${officesMap[location].slug}`}>
        <a>{location}</a>
      </Link>
    ));
  }
  return (
    <div className="d-flex flex-column gap-1">
      {locationsOrPractice.chair?.length > 0 && (
        <>
          Chair:
          {locationsOrPractice.chair?.map((location) => (
            <Link key={location.id} href={`/practice/${location.slug}`}>
              <a>
                {' '}
                {location?.title}
              </a>
            </Link>
          ))}
        </>
      )}
      {locationsOrPractice.coChair?.length > 0 && (
        <>
          coChair:
          {locationsOrPractice.coChair?.map((location) => (
            <Link key={location.id} href={`/practice/${location.slug}`}>
              <a>
                {' '}
                {location?.title}
              </a>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};
export default function AttorneyCard({
  link,
  image,
  name,
  designation,
  locations,
  number,
  email,
  offices,
  title,
}) {
  return (
    <AttorneyCardBox>
      <Link href={link} passHref>
        <LinkBox>
          {image ? (
            <PhotoBox>
              <Image
                placeholder="blur"
                blurDataURL={image}
                loading="lazy"
                src={image}
                alt={name}
                layout="fixed"
                width={!Array.isArray(locations) ? 130 : 108}
                height={150}
              />
            </PhotoBox>
          ) : (
            <ImageBox image={image} />
          )}
          <InfoBox>
            <UserName>{name}</UserName>
            {title ? (
              <p>{title}</p>
            ) : (
              <div className="d-flex gap-1">{renderLinkToLocationPractice(locations, offices)}</div>
            )}

            <p>{designation}</p>

            <ContactBox>
              <a onClick={(e) => e.stopPropagation()} href={`tel:${number}`}>
                <BsFillTelephoneFill />
                {' '}
                <span>{number}</span>
              </a>
              <a onClick={(e) => e.stopPropagation()} href={`mailto:${email}`}>
                <BsFillEnvelopeFill />
                {' '}
                <span>{email}</span>
              </a>
            </ContactBox>
          </InfoBox>
        </LinkBox>
      </Link>
    </AttorneyCardBox>
  );
}
