import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import TrendingStories from 'components/non-graphql-trending-stories';
import SideBarHeaderToggle from 'components/sidebar-header-toggle';
import textStyles from 'styles/Text.module.css';
import { getDirectionsFromLocation, sortByKey } from 'utils/helpers';

export default function LocationsSidebar({
  offices,
  posts,
  title,
  startingKey,
}) {
  const officeList = sortByKey(offices, 'title');

  return (
    <>
      {officeList.map((o) => (
        <Accordion
          key={o.title}
          className="mb-3"
          defaultActiveKey={startingKey}
        >
          <SideBarHeaderToggle eventKey={o.title}>
            <>{o.title}</>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={o.title}>
            <div className="off-white p-3">
              <ul className="list-unstyled ml-0">
                {o.address.map((a) => (
                  <li key={a} className="mb-0">
                    {a}
                  </li>
                ))}
                <li className="mt-3 mb-0">
                  <strong>Phone: </strong>
                  {' '}
                  <strong>{o.phone}</strong>
                </li>
                {o.fax && (
                  <li className="my-0">
                    <strong>Fax: </strong>
                    {' '}
                    <strong>{o.fax}</strong>
                  </li>
                )}
                <li className="mt-3 mb-0">
                  <Link href={o.slug}>
                    <a className={textStyles.redTitle}>
                      <strong>{`${o.title} Office Details `}</strong>
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Button
                    variant="transparent"
                    className={`${textStyles.redTitle} p-0`}
                    onClick={() => getDirectionsFromLocation(o.slug)}
                  >
                    <strong>
                      Directions to
                      {o.title}
                    </strong>
                  </Button>
                </li>
              </ul>
            </div>
          </Accordion.Collapse>
        </Accordion>
      ))}
      <TrendingStories title={`News from ${title}`} content={posts} />
    </>
  );
}
