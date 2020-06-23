import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import AttorneyCard from '../attorney-card';

export default function RelatedAttorneys(props) {
  const {
    members, chair, title, handleLink,
  } = props;

  return (
    <>
      { (chair.length > 0) && (
        <Container>
          <div className="line-header">
            <h3>{title}</h3>
          </div>
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
      {
        (members) ? (
          <div className="container">
            <div className="line-header">
              <h3>Members</h3>
            </div>
            <Form className="w-50 py-4">
              <Form.Group>
                <Form.Control as="select" onChange={handleLink} className="w-100">
                  {members.map((v) => <option value={v.link} key={v.ID} className="w-100">{v.name}</option>)}
                </Form.Control>
              </Form.Group>
            </Form>
            <div className="row mh-75">
              { members.map((v) => (
                <div key={v.ID} className="col-sm-12 col-md-12 col-lg-6 mb-3">
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
                </div>
              ))}
            </div>
          </div>
        ) : ''
      }
    </>
  );
}
