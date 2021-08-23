import Link from 'next/link';
import lineHeaderStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

export default function PostAuthorBio({ author }) {
  return (
    <div className="w-100 d-print-none mt-5">
      {author
        && author.map((a) => (
          <div key={a.name} className="mb-2">
            <div className={`${lineHeaderStyles.lineHeader} d-print-none mt-3`}>
              <h3>
                About
                {a.name}
              </h3>
            </div>
            <div className="pt-4 d-flex flex-column flex-md-row">
              <div className="mt-3">
                <p>
                  <span dangerouslySetInnerHTML={createMarkup(a.bio)} className="d-block" />
                  {a.name !== 'Scarinci Hollenbeck' && (
                    <Link href={a.link ? a.link : '/attorneys/'}>
                      <a className="my-2 d-block">Full Biography</a>
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
