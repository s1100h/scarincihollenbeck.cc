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
                width={108}
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
              <div className="d-flex gap-1">
                {locations?.map((location) => (
                  <Link key={location} href={`${offices[location].slug}`}>
                    <a>{location}</a>
                  </Link>
                ))}
              </div>
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
