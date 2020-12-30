import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax';
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
          <SideBarHeaderToggle eventKey={o.uri}>
            <>{o.title}</>
          </SideBarHeaderToggle>
          <Accordion.Collapse eventKey={o.uri}>
            <div className="off-white p-3">
              <ul className="list-unstyled ml-0">
                {o.officeMainInformation.officeBuildingTitle && (
                  <li className="mb-0">
                    {o.officeMainInformation.officeBuildingTitle}
                  </li>
                )}
                <li className="mb-0">
                  {o.officeMainInformation.streetAddress}
                </li>
                {o.officeMainInformation.poBox && (
                  <li className="mb-0">{o.officeMainInformation.poBox}</li>
                )}
                {o.officeMainInformation.floor && (
                  <li className="mb-0">{o.officeMainInformation.floor}</li>
                )}
                <li className="mb-0">
                  {`${o.officeMainInformation.addressLocality}, ${o.officeMainInformation.addressRegion}, ${o.officeMainInformation.postCode}`}
                </li>
                <li className="mt-3 mb-0">
                  <FontAwesomeIcon icon={faPhone} />
                  {' '}
                  <strong>{o.officeMainInformation.phone}</strong>
                </li>
                {o.officeMainInformation.fax && (
                  <li className="my-0">
                    <FontAwesomeIcon icon={faFax} />
                    {' '}
                    <strong>{o.officeMainInformation.fax}</strong>
                  </li>
                )}
                <li className="mt-3 mb-0">
                  <Link href={o.uri}>
                    <a className={textStyles.redTitle}>
                      <strong>{`${o.title} Office Details `}</strong>
                    </a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Button
                    variant="transparent"
                    className={`${textStyles.redTitle} p-0`}
                    onClick={() => getDirectionsFromLocation(o.uri)}
                  >
                    <strong>
                      Directions to
                      {' '}
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
