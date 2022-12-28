import Link from 'next/link';
import { useId } from 'react';
import { SITE_TITLE } from 'utils/constants';
import { createMarkup } from 'utils/helpers';

const PostAuthorBio = ({ authors }) => (
  <div className="w-100 d-print-none mt-5">
    {authors.map(
      (author) => author.statusProfile !== null && (
      <div key={author.ID || useId()} className="mb-2">
        <div className=" d-print-none mt-3">
          <h3>
            About
            {' '}
            <span className="ml-2">{author.display_name}</span>
          </h3>
        </div>
        <div className="pt-4 d-flex flex-column flex-md-row">
          <div className="mt-3">
            <p>
              <span
                dangerouslySetInnerHTML={createMarkup(author.authorDescription)}
                className="d-block"
              />
              {author.name !== SITE_TITLE && (
              <Link href={author.user_url ? `/attorneys/${author.user_url}` : '/attorneys'}>
                <a className="my-2 d-block">Full Biography</a>
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

export default PostAuthorBio;
