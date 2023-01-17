import Link from 'next/link';
import { useId } from 'react';
import { SITE_TITLE } from 'utils/constants';
import { createMarkup } from 'utils/helpers';
import Image from 'next/image';

const AboutAuthorCard = ({ authors }) => (
  <div className="d-print-none">
    {authors.map(
      (author) => author.statusProfile !== null && (
      <div key={author.ID || useId()} className="mb-2">
        <div className=" d-print-none mb-5">
          <h3>
            About
            {' '}
            <span className="ml-2">{author.display_name}</span>
          </h3>
        </div>
        {author.avatar && (
        <Image
          placeholder="blur"
          blurDataURL={author.avatar}
          loading="lazy"
          src={author.avatar}
          alt={author.display_name}
          layout="fixed"
          width={130}
          height={192}
        />
        )}
        <div className="pt-4 d-flex flex-column flex-md-row">
          <div className="mt-3 ">
            <p>
              <span
                dangerouslySetInnerHTML={createMarkup(author.authorDescription)}
                className="d-block "
              />
              {author.name !== SITE_TITLE && (
              <Link href={author.user_url ? `/attorneys/${author.user_url}` : '/attorneys'}>
                <a className="my-2 mt-5 d-block">Full Biography</a>
              </Link>
              )}
            </p>
          </div>
        </div>
      </div>
      ),
    )}
  </div>
);

export default AboutAuthorCard;
