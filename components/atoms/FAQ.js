import Accordion from 'react-bootstrap/Accordion';
import { Title } from 'styles/Article.style';
import { createMarkup } from 'utils/helpers';

export default function FAQ({ faqArrContent }) {
  return (
    <section className="mb-5">
      <Title>FAQ</Title>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {faqArrContent.map(({ id, title, body }) => (
          <Accordion.Item key={id} eventKey={id.toString()}>
            <Accordion.Header as="h4">{title}</Accordion.Header>
            {typeof body !== 'string' ? <Accordion.Body>{body}</Accordion.Body> : <Accordion.Body dangerouslySetInnerHTML={createMarkup(body)} />}
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}
