import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import TrendingStories from 'components/non-graphql-trending-stories';
import textStyles from 'styles/Text.module.css';
import { getDirectionsFromLocation, sortByKey } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function LocationsSidebar({ offices, posts, title }) {
  const officeList = sortByKey(offices, 'title');

  return (
    <>
      <ul>
        {officeList.map((office) => (
          <li
            key={office.ID || office.id}
            className="list-unstyled border-bottom"
          >
            <Link href={office.slug || '/'}>
              <a className="text-dark">
                <p className={fontStyles.ft12rem}>
                  <strong>{office.title}</strong>
                </p>
              </a>
            </Link>
            <ul className="list-unstyled ml-0">
              {office.address.map((a) => (
                <li key={a} className="mb-0">
                  {a}
                </li>
              ))}
              <li className="my-0">
                <strong>Phone: </strong>
                {' '}
                {office.phone}
              </li>
              {office.fax && (
                <li className="my-0">
                  <strong>Fax: </strong>
                  {' '}
                  {office.fax}
                </li>
              )}
              <li className="my-0">
                <Link href={office.slug}>
                  <a className={textStyles.redTitle}>
                    <strong>{`${office.title} Office Details `}</strong>
                  </a>
                </Link>
              </li>
              <li className="mb-2">
                <Button
                  variant="transparent"
                  className={`${textStyles.redTitle} p-0`}
                  onClick={() => getDirectionsFromLocation(office.slug)}
                >
                  <strong>
                    Directions to
                    {office.title}
                  </strong>
                </Button>
              </li>
            </ul>
          </li>
        ))}
        <style jsx>
          {`
            ul {
              margin-left: -2.48em;
              margin-top: -10px;
            }

            ul li {
              margin-bottom: 6px;
            }
          `}
        </style>
      </ul>
      <TrendingStories title={`News from ${title}`} content={posts} />
    </>
  );
}
