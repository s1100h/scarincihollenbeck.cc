import Link from 'next/link';
import Image from 'next/image';
import fontStyles from 'styles/Fonts.module.css';
import {
  AttorneyCardBox,
  ImageBox,
  InfoBox,
  LinkBox,
  PhotoBox,
  UserName,
} from 'styles/AttorneyCard.style';

export default function AttorneyCard({
  link, image, name, title, number, email,
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
                height={148}
              />
            </PhotoBox>
          ) : (
            <ImageBox image={image} />
          )}
          <InfoBox>
            <UserName>{name}</UserName>
            <p>{title}</p>
            <div className={fontStyles.smallExcerpt}>
              <strong>Phone: </strong>
              {' '}
              {number}
              <br />
              <strong>Email: </strong>
              {' '}
              {email}
            </div>
          </InfoBox>
        </LinkBox>
      </Link>
    </AttorneyCardBox>
  );
}
