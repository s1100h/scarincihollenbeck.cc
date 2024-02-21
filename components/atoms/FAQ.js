import Accordion from 'react-bootstrap/Accordion';
import { Title } from 'styles/Article.style';
import { FaqWrapper } from 'styles/Faq.style';
import { createMarkup } from 'utils/helpers';
import empty from 'is-empty';
import { useId } from 'react';
import { JSXWithDynamicLinks } from './micro-templates/JSXWithDynamicLinks';

export default function FAQ({
  faqArrContent, title, anchorId, faqData,
}) {
  if (!faqData) {
    return (
      <FaqWrapper className="margin-scroll" id={anchorId}>
        <Title>FAQ</Title>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          {faqArrContent.map(({ id, title, body }) => (
            <Accordion.Item key={id} eventKey={id.toString()}>
              <Accordion.Header as="h4">{title}</Accordion.Header>
              {typeof body !== 'string' ? (
                <Accordion.Body>{body}</Accordion.Body>
              ) : (
                <Accordion.Body dangerouslySetInnerHTML={createMarkup(body)} />
              )}
            </Accordion.Item>
          ))}
        </Accordion>
      </FaqWrapper>
    );
  }
  return (
    <FaqWrapper className="margin-scroll" id={anchorId}>
      <Title>{`${!empty(title) ? `FAQ about ${title}` : 'FAQ'}`}</Title>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {faqData.map(({ title, description }) => (
          <Accordion.Item key={useId()} eventKey={useId().toString()}>
            <Accordion.Header as="h4">{title}</Accordion.Header>
            <Accordion.Body>
              <JSXWithDynamicLinks HTML={description} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </FaqWrapper>
  );
}
