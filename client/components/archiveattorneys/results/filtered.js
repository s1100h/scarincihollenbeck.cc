
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/attorney-card';
import { filterByKey } from 'utils/helpers';
import textStyles from 'styles/Text.module.css'


export default function Filtered({
  attorneys,
  userInput,
  select,
}) {
  
  // filter through results
  const practices = filterByKey(select, 'practices');
  const letter = filterByKey(select, 'letter');
  const desgination = filterByKey(select, 'designation');
  const location = filterByKey(select, 'location');

  // filter by key -- practice
  const filterPractices = (attorney) => {
    if (practices.length > 0) {
      return attorney.practices_array.indexOf(practices[0]) > -1;
    }
    return attorney;
  };

  // filter by key -- location
  const filterLocation = (attorney) => {
    if (location.length > 0) {
      return attorney.location.indexOf(location[0]) >= 0;
    }
    return attorney;
  };

  // filter by key -- designation
  const filterDesignation = (attorney) => {
    if (desgination.length > 0) {
      return attorney.designation.indexOf(desgination[0]) >= 0;
    }
    return attorney;
  };

  // filter by key -- query
  const filterQuery = (attorney) => {
    const practiceList = attorney.practices.replace(/&amp;/g, '&');

    if (userInput) {
      if (attorney.title.indexOf(userInput) >= 0) {
        return attorney;
      } if (practiceList.indexOf(userInput.trim()) >= 0) {
        return attorney;
      }
    } else {
      return attorney;
    }
  };

  // filter by key -- letter
  const filterLetter = (attorney) => {
    if (letter.length > 0) {
      return attorney.attorneyMainInformation.lastName.charAt(0).toLowerCase() === letter[0].toLowerCase();
    }
    return attorney;
  };

  const aFiltered = attorneys
    // .filter(filterPractices)
    // .filter(filterLocation)
    // .filter(filterDesignation)
    .filter(filterLetter)
    // .filter(filterQuery);

  return (
    <Row>
      {aFiltered.map((a) => (
        <Col sm={12} md={6} lg={4} key={a.title} className="mb-3">
          <AttorneyCard
            link={`/attorney/${a.slug}`}
            image={a.featuredImage.node.sourceUrl}
            name={a.title}
            title={a.attorneyMainInformation.designation}
            number={a.attorneyMainInformation.phoneNumber}
            email={a.attorneyMainInformation.email}
            width="80px"
            height="112px"
            type="/attorney/[slug]"
          />
        </Col>
      ))}
      {(aFiltered.length < 1) && (
        <h3 className={`${textStyles.redTitle} text-center d-block mx-auto my-4`}>
          <strong>
            Sorry, no attorneys found according to this query.
          </strong>
        </h3>
      )}
    </Row>
  );
}
