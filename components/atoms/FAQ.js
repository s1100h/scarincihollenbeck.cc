import Accordion from 'react-bootstrap/Accordion';
import { FaqWrapper } from 'styles/Faq.style';
import { ATTORNEYS_FAQ } from 'utils/constants';
import empty from 'is-empty';
import { TitleH2 } from 'styles/common/Typography.style';
import { JSXWithDynamicLinks } from './micro-templates/JSXWithDynamicLinks';

export default function FAQ({
  faqArrContent, title, anchorId, isTwoColumns,
}) {
  const faqItems = faqArrContent || ATTORNEYS_FAQ;

  return (
    <FaqWrapper
      className={`margin-scroll ${isTwoColumns ? 'two-columns' : ''}`}
      id={anchorId}
      data-testid="faq-wrapper"
    >
      <TitleH2>
        {`${
          !empty(title) && !empty(faqArrContent) ? `FAQ about ${title}` : 'FAQ'
        }`}
      </TitleH2>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {faqItems.map(({ title, description }) => (
          <Accordion.Item key={title} eventKey={title}>
            <Accordion.Header as="h3">{title}</Accordion.Header>
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
