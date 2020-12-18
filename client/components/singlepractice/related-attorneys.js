import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import LineHeading from 'layouts/line-heading';
import AttorneyCard from 'components/attorney-card';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function PracticeRelatedAttorneys({
  members,
  chair,
  title,
  handleLink,
}) {
  return (
    <>
      {chair.length > 0 && (
        <Container>
          <h4 className={grayTitleStyles.title}>{title}</h4>
          <Row className="my-5">
            {chair.map((v) => (
              <Col sm={12} md={12} lg={6} key={v.ID}>
                <AttorneyCard
                  link={v.link}
                  image={v.image}
                  name={v.name}
                  title={v.designation}
                  number={v.contact}
                  email={v.email}
                  height="109px"
                  width="75%"
                  type="/attorney/[slug]"
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
      {members && (
        <Container>
          <LineHeading title="Members" />
          <Form className="w-50 py-4">
            <Form.Group>
              <Form.Control as="select" onChange={handleLink} className="w-100">
                {members.map((v) => (
                  <option value={v.link} key={v.ID} className="w-100">
                    {v.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          <Row>
            {members.map((v) => (
              <Col sm={12} md={12} lg={6} key={v.ID} className="mb-3">
                <AttorneyCard
                  link={v.link}
                  image={v.image}
                  name={v.name}
                  title={v.designation}
                  number={v.contact}
                  email={v.email}
                  height="109px"
                  width="75%"
                  type="/attorney/[slug]"
                />
                <style jsx>
                  {`
                    @media (min-width: 0px) and (max-width: 400px) {
                      .attorney-card {
                        margin-top: 1em;
                        margin-bottom: 1em;
                      }
                    }
                    @media (min-width: 400px) and (max-width: 769px) {
                      .attorney-card {
                        margin-top: 1em;
                        margin-bottom: 1em;
                      }
                    }
                  `}
                </style>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
