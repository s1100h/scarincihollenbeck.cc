import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/shared/AttorneyCard';
import { sortByKey, formatSrcToCloudinaryUrl } from 'utils/helpers';
import VirtualizedMembers from 'components/shared/VirtualizedMembers';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';

const PracticeRelatedAttorneys = ({ members, chair, title }) => (
  <>
    {chair.length > 0 && (
      <Container>
        <BigGrayTitle>{title}</BigGrayTitle>
        <Row className="my-5">
          {sortByKey(chair, 'lastName').map((m) => (
            <Col sm={12} md={12} lg={6} key={m.ID}>
              <AttorneyCard
                link={m.link}
                image={formatSrcToCloudinaryUrl(m.image)}
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
        <BigGrayTitle>Members</BigGrayTitle>
        <Row className="mt-5">
          <VirtualizedMembers members={sortByKey(members, 'lastName')} />
        </Row>
      </Container>
    )}
  </>
);

export default PracticeRelatedAttorneys;
