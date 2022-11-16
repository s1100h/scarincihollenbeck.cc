/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonTabToggle, DropdownItemPractice, DropMenu } from 'styles/Practices.style';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';

const BlockList = ({ list }) => {
  const [open, setOpen] = useState({
    isOpen: false,
    id: null,
  });

  const handleClickStopEvent = (e) => {
    e.stopPropagation();
  };

  const handleRotate = (id) => {
    if (id !== open.id) {
      setOpen({
        isOpen: true,
        id,
      });
    }
    if (id === open.id) {
      setOpen({
        isOpen: !open.isOpen,
        id,
      });
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        {list.map((item) => (item.children.length > 0 ? (
          <Col sm={12} md={6} lg={4} key={item.ID} className="mb-3">
            <Dropdown onToggle={() => handleRotate(item.ID)}>
              <ButtonTabToggle
                props={{ open: open.id === item.ID && open.isOpen }}
                variant="link"
              >
                <Link href={item.slug}>
                  <a onClick={(e) => handleClickStopEvent(e)}>{item.title}</a>
                </Link>
                {' '}
                <BsChevronDown />
              </ButtonTabToggle>
              <DropMenu className="w-100">
                {item.children.map((child) => (
                  <DropdownItemPractice key={child.ID} href={child.slug}>
                    {child.title}
                  </DropdownItemPractice>
                ))}
              </DropMenu>
            </Dropdown>
          </Col>
        ) : (
          <Col sm={12} md={4} key={item.title} className="mb-3">
            <Link href={item.slug} passHref>
              <ButtonTabToggle variant="link" props={{ isButtonLink: 'true' }}>
                <span>{item.title}</span>
              </ButtonTabToggle>
            </Link>
          </Col>
        )))}
      </Row>
    </Container>
  );
};

export default BlockList;
