import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import AttorneyCard from 'components/attorney-card';
import lineHeadingStyles from 'styles/LineHeader.module.css';
import { sortByMainInformationLastName } from 'utils/helpers';

export default function PracticeRelatedAttorneys({
  members,
  chair,
  title,
  handleLink,
}) {
  const sortedByLastName = sortByMainInformationLastName(members);

  return (
    <>
      {chair && (
        <Container>
          <div className={lineHeadingStyles.lineHeader}>
            <h3>{title}</h3>
          </div>
          <Row className="my-5">
            {chair.map((m) => (
              <Col sm={12} md={12} lg={6} key={m.id}>
                <AttorneyCard
                  link={`/attorney/${m.slug}`}
                  image={m.featuredImage.node.sourceUrl}
                  name={m.title}
                  title={m.attorneyMainInformation.designation}
                  number={m.attorneyMainInformation.phoneNumber}
                  email={m.attorneyMainInformation.email}
                  width={80}
                  height={112}
                  type="/attorney/[slug]"
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
      {members && (
        <Container>
          <div className={lineHeadingStyles.lineHeader}>
            <h3>Members</h3>
          </div>
          <Form className="w-50 py-4">
            <Form.Group>
              <Form.Control as="select" onChange={handleLink} className="w-100">
                {sortedByLastName.map((m) => (
                  <option
                    value={`/attorney/${m.slug}`}
                    key={m.id}
                    className="w-100"
                  >
                    {m.title}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          <Row>
            {sortedByLastName.map((m) => (
              <Col sm={12} md={12} lg={6} key={m.id} className="mb-3">
                <AttorneyCard
                  link={`/attorney/${m.slug}`}
                  image={m.featuredImage.node.sourceUrl}
                  name={m.title}
                  title={m.attorneyMainInformation.designation}
                  number={m.attorneyMainInformation.phoneNumber}
                  email={m.attorneyMainInformation.email}
                  width={80}
                  height={112}
                  type="/attorney/[slug]"
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
