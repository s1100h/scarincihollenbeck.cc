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
          {sortByKey(chair, 'lastName').map((attorney) => (
            <Col sm={12} md={12} lg={6} key={attorney.ID}>
              <AttorneyCard link={`/attorneys/${attorney.link}`} image={formatSrcToCloudinaryUrl(attorney.image)} name={attorney.name} title={attorney.designation} number={attorney.contact} email={attorney.email} width={80} height={112} type="/attorneys/[slug]" />
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
