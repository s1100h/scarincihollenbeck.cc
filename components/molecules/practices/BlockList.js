import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonTabToggle, DropdownItemPractice } from 'styles/Practices.style';

const BlockList = ({ list }) => (
  <Container className="mt-4">
    <Row>
      {list.map((item) => (item.children ? (
        <Col sm={12} md={6} lg={4} key={item.title} className="mb-3">
          <Dropdown>
            <ButtonTabToggle variant="link">{item.title}</ButtonTabToggle>
            <Dropdown.Menu className="w-100">
              <DropdownItemPractice key={item.ID} href={item.slug}>
                Overview
              </DropdownItemPractice>
              {item.children.map((child) => (
                <DropdownItemPractice key={child.ID} href={child.slug}>
                  {child.title}
                </DropdownItemPractice>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      ) : (
        <Col sm={12} md={4} key={item.title} className="mb-3">
          <Link href={item.slug} passHref>
            <ButtonTabToggle>{item.title}</ButtonTabToggle>
          </Link>
        </Col>
      )))}
    </Row>
  </Container>
);

export default BlockList;
