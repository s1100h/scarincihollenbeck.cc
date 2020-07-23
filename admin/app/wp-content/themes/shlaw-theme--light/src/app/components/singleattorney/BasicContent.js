import React from 'react';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { createMarkup } from '../../utils/helpers';


export default function BasicContent(props) {
  const { tabTitle, title, content } = props;

  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className="bg-light-gray">{title}</h4>
      <Container className="container article-container">
        <Row>
          <Col sm={12} dangerouslySetInnerHTML={createMarkup(content)} />
        </Row>
      </Container>
    </Tab.Pane>
  );
}