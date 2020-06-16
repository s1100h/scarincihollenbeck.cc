import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PracticeBlockList(props){
  const { list } = props;
  console.log('list');
  console.log(list);

  return (
    <Container className="mt-5">
      <Row>
        {(list.length > 0) && list.map((practice, index) => (
          <Col sm={12} md={4} key={practice.ID} className="mb-3">
            {(practice.children.length > 0) ? (
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic" className="practice-menu-box w-100">
                  {practice.title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item key={practice.ID} href={practice.slug}>Overview</Dropdown.Item>
                  {practice.children.map((child) => <Dropdown.Item key={child.ID} href={child.slug}>{child.title}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>   
            ) : (
              <Link href="/practice/[slug]" as={practice.slug}>
                <a className="practice-menu-box w-100 d-inline-block text-center align-middle">
                  {practice.title}
                </a>                
              </Link>
            )}
            
          </Col>
        ))}
      </Row>
    </Container>
  )
}