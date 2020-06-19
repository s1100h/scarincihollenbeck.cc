import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from '../../attorney-card';

function AttorneyCards(title, content) {
  return (
    <Row>
      <Col sm={12} className="my-4">
        <h3 className="red-title text-uppercase border-bottom mb-0">
          {title}
        </h3>
      </Col>
      { content.map((m) => (
        <Col key={m.id} sm={12} md={6} lg={4} className="mb-2">
          <AttorneyCard
            link={`/attorney${m.link}`}
            image={m.better_featured_image}
            name={m.title}
            title={m.designation}
            number={m.phone}
            email={m.email}
            width="80px"
            height="112px"
            type="/attorney/[slug]"
          />
        </Col>
      ))}
    </Row>
  );
}

export default function NotFiltered(props) {
  const { attorneys } = props;
  // managing partners
  const managingPartners = attorneys.filter((a) => a.designation === 'Managing Partner');

  // partners
  const partners = attorneys.filter((a) => a.designation === 'Partner');

  // counsel
  const counsel = attorneys.filter((a) => a.designation === 'Counsel');

  // of counsel & counsel emeritus
  const ofCounsel = attorneys.filter((a) => a.designation.indexOf('Of Counsel') > -1);

  // senior associates
  const seniorAssociates = attorneys.filter((a) => a.designation === 'Senior Associate');

  // associates
  const associates = attorneys.filter((a) => a.designation === 'Associate');

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