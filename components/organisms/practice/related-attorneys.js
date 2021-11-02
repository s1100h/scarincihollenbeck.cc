import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/shared/attorney-card';
import PracticeMembers from 'components/molecules/practice/members';
import lineHeadingStyles from 'styles/LineHeader.module.css';
import { sortByKey } from 'utils/helpers';

export default function PracticeRelatedAttorneys({ members, chair, title }) {
  return (
    <>
      {chair.length > 0 && (
        <Container>
          <div className={lineHeadingStyles.lineHeader}>
            <h3>{title}</h3>
          </div>
          <Row className="my-5">
            {sortByKey(chair, 'lastName').map((m) => (
              <Col sm={12} md={12} lg={6} key={m.ID}>
                <AttorneyCard
                  link={m.link}
                  image={m.image}
                  name={m.name}
                  title={m.designation}
                  number={m.contact}
                  email={m.email}
                  width={80}
                  height={112}
                  type="/attorney/[slug]"
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
      {members.length > 0 && (
        <Container>
          <div className={lineHeadingStyles.lineHeader}>
            <h3>Members</h3>
          </div>
          <Row className="mt-5">
            <PracticeMembers members={sortByKey(members, 'lastName')} />
          </Row>
        </Container>
      )}
    </>
  );
}
