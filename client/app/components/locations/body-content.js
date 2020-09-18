import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from '../attorney-card';
import { sortByKey } from '../../utils/helpers';

export default function BodyContent({
  attorneys,
  practices,
  map,
  title,
}) {
  const sortedAttorneys = sortByKey(attorneys, 'lastName');

  return (
    <div id="location-body">
      <h4 className="bg-light-gray text-capitalize">
        {(title === 'washington dc') ? 'Washington D.C.' : title }
        {' '}
        Office
      </h4>
      <div className="w-100">
        <iframe rel="preconnect" title={`${title} office`} src={map} className="w-100 h-300" frameBorder="0" allowFullScreen />
      </div>
      <h4 className="bg-light-gray text-capitalize mt-5">
        {(title === 'washington dc') ? 'Washington D.C.' : title }
        {' '}
        Attorneys
      </h4>
      <Container>
        <Row>
          {attorneys.map((m) => (
            <Col sm={12} md={12} lg={6} className="mb-2" key={m.ID}>
              <AttorneyCard
                link={m.link}
                image={m.image}
                name={m.name}
                title={m.designation}
                number={m.contact}
                email={m.email}
                height="109px"
                width="75%"
                type="/attorney/[slug]"
              />
            </Col>
          ))}
        </Row>
      </Container>
      <h4 className="bg-light-gray mt-5">
        Services We Offer
      </h4>
      <Container>
        <Row>
          <Col sm={12} md={6} className="col-sm-12 col-md-6">
            <ul className="blue-title">
              {
                practices.map((val, indx) => ((practices.length / 2 > indx) ? (
                  <li key={val.ID}>
                    <a href={val.slug} className="proxima-bold blue-title">
                      <u>
                        {val.title}
                      </u>
                    </a>
                  </li>
                ) : ''))
              }
            </ul>
          </Col>
          <Col sm={12} md={6}>
            <ul className="blue-title">
              {
                practices.map((val, indx) => ((practices.length / 2 <= indx) ? (
                  <li key={val.ID}>
                    <a href={val.slug} className="proxima-bold blue-title">
                      <u>
                        {val.title}
                      </u>
                    </a>
                  </li>
                ) : ''))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
