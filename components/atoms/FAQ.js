import Accordion from 'react-bootstrap/Accordion';
import { FaqWrapper } from 'styles/Faq.style';
import { ATTORNEYS_FAQ } from 'utils/constants';
import { Title } from 'styles/Article.style';
import empty from 'is-empty';
import { JSXWithDynamicLinks } from './micro-templates/JSXWithDynamicLinks';

export default function FAQ({ faqArrContent, title, anchorId }) {
  const faqItems = faqArrContent || ATTORNEYS_FAQ;

  return (
    <FaqWrapper
      className="margin-scroll"
      id={anchorId}
      data-testid="faq-wrapper"
    >
      <Title>
        {`${
          !empty(title) && !empty(faqArrContent) ? `FAQ about ${title}` : 'FAQ'
        }`}
      </Title>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {faqItems.map(({ title, description }) => (
          <Accordion.Item key={title} eventKey={title}>
            <Accordion.Header as="h4">{title}</Accordion.Header>
            <Accordion.Body>
              {typeof description !== 'string' ? (
                description
              ) : (
                <JSXWithDynamicLinks HTML={description} />
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </FaqWrapper>
  );
}
