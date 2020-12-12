import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/attorney-card';
import textStyles from 'styles/Text.module.css';

function AttorneyCards(title, content) {
  return (
    <Row>
      <Col sm={12} className="my-4">
        <h3
          className={`${textStyles.redTitle} text-uppercase border-bottom mb-0`}
        >
          <strong>{title}</strong>
        </h3>
      </Col>
      {content.map((a) => (
        <Col key={a.slug} sm={12} md={6} lg={4} className="mb-3">
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
    </Row>
  );
}

export default function ArchiveAttorneyResultsNonFiltered({ attorneys }) {
  // managing partners
  const managingPartners = attorneys.filter(
    (a) => a.attorneyMainInformation.designation === 'Managing Partner',
  );

  // partners & nyc managing partner & dc managing partner
  const partners = attorneys.filter(
    (a) => a.attorneyMainInformation.designation === 'Partner'
      || a.attorneyMainInformation.designation === 'NYC Managing Partner'
      || a.attorneyMainInformation.designation
        === 'Washington, D.C. Managing Partner',
  );

  // counsel
  const counsel = attorneys.filter(
    (a) => a.attorneyMainInformation.designation === 'Counsel',
  );

  // // of counsel & counsel emeritus
  const ofCounsel = attorneys.filter(
    (a) => a.attorneyMainInformation.designation.indexOf('Of Counsel') > -1,
  );

  // senior associates
  const seniorAssociates = attorneys.filter(
    (a) => a.attorneyMainInformation.designation === 'Senior Associate',
  );

  // associates
  const associates = attorneys.filter(
    (a) => a.attorneyMainInformation.designation === 'Associate',
  );

  return (
    <div>
      {AttorneyCards('Managing Partner', managingPartners)}
      {AttorneyCards('Partners', partners)}
      {AttorneyCards('Counsel', counsel)}
      {AttorneyCards('Of Counsel & Counsel Emeritus', ofCounsel)}
      {AttorneyCards('Senior Associates', seniorAssociates)}
      {AttorneyCards('Associates', associates)}
    </div>
  );
}
