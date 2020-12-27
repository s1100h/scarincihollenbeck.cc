import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bigButtonStyles from 'styles/BigButtonTabs.module.css';

export default function ArchivePracticeBlockList({ list }) {
  return (
    <Container className="mt-5">
      <Row>
        {list.map((item) => ((item.practicesIncluded.childPractice) ? (
          <Col sm={12} md={4} key={item.id} className="mb-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className={`${bigButtonStyles.tab} w-100`}
              >
                {item.title}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item key={item.id} href={item.uri}>
                  Overview
                </Dropdown.Item>
                {item.practicesIncluded.childPractice.map((child) => (
                  <Dropdown.Item key={child.id} href={child.uri}>
                    {child.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        ) : (
          <Col sm={12} md={4} key={item.id} className="mb-3">
            <Link href={item.uri}>
              <a className={`${bigButtonStyles.tab} w-100 d-block`}>
                {item.title}
              </a>
            </Link>
          </Col>
        )))}
      </Row>
    </Container>
  );
}
