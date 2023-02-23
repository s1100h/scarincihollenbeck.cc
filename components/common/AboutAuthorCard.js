import Link from 'next/link';
import { useId } from 'react';
import { SITE_TITLE } from 'utils/constants';
import { createMarkup } from 'utils/helpers';
import Image from 'next/image';
import { AuthorBox } from '../../styles/AboutAuthorFormCard.style';

const AboutAuthorCard = ({ authors }) => (
  <AuthorBox>
    {authors.map(
      (author) => author.statusProfile !== null && (
      <div key={author.databaseId || useId()} className="mb-5">
        <div className="mb-3">
          <h3>
            About
            {' '}
            <span className="ml-2">{author.display_name}</span>
          </h3>
        </div>
        {author.profileImage && (
        <div className="float-start">
          <Image
            placeholder="blur"
            blurDataURL={author.profileImage}
            loading="lazy"
            src={author.profileImage}
            alt={author.display_name}
            layout="fixed"
            width={155}
            height={170}
          />
        </div>
        )}
        <p>
          <span
            dangerouslySetInnerHTML={createMarkup(author.authorDescription)}
            className="d-block"
          />
          <Link
            href={author.display_name !== 'Scarinci Hollenbeck' ? author.uri : '/attorneys'}
            legacyBehavior
          >
            <a className="my-2 mt-1 d-block">
              {author.display_name !== 'Scarinci Hollenbeck'
                ? 'Full Biography'
                : 'Firm attorneys '}
            </a>
          </Link>
        </p>
      </div>
      ),
    )}
  </AuthorBox>
);

export default AboutAuthorCard;
