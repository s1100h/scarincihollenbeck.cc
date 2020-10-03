import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './btnlink.module.css';
import './dropdown.module.css';

export default function PracticeBlockList({ list }) {

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
                <Dropdown.Menu className="w-100">
                  <Dropdown.Item key={practice.ID} href={practice.slug}>Overview</Dropdown.Item>
                  {practice.children.map((child) => <Dropdown.Item key={child.ID} href={child.slug}>{child.title}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <a href={practice.slug} className="practice-menu-box w-100 d-inline-block text-center align-middle">
                {practice.title}
                <style jsx>{`
                    a {
                      padding: 1em;
                      font-size: 1.1rem;
                      border: 1px solid #B50000;
                      color: #B50000;
                      border-radius: .25rem;
                      transition:All 1s ease;
                      -webkit-transition:All 1s ease;
                      -moz-transition:All 1s ease;
                    }

                    a:hover {
                      background-color: #B50000;
                      color: #FFF;    
                    }                  
                  `}</style>
              </a>
            )}

          </Col>
        ))}
      </Row>
    </Container>
  );
}
