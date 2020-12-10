import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { createMarkup } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import pageContentStyles from 'styles/PageContent.module.css';


export default function BasicContent({ tabTitle, title, content }) {
  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className={grayTitleStyles.title}>
        {title}
      </h4>
      <Container>
        <Row>
          <Col sm={12} className={pageContentStyles.p} dangerouslySetInnerHTML={createMarkup(content)} />
        </Row>
      </Container>
    </Tab.Pane>
  );
}
