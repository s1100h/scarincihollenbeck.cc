import React, { useContext } from 'react';
import TabPane from 'react-bootstrap/TabPane';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { createMarkup } from 'utils/helpers';
import grayTitleStyles from 'components/singlepractice/node_modules/styles/BigGrayTitle.module.css';
import pageContentStyles from 'styles/PageContent.module.css';
import textStyles from 'styles/Text.module.css';
import fontStyles from 'styles/Fonts.module.css';

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Button
      type="button"
      variant="transparent"
      className={`${textStyles.redTitle} ${fontStyles.ft12rem} px-0 mx-0 mb-4`}
      onClick={decoratedOnClick}
    >
      {isCurrentEventKey ? (
        children
      ) : (
        <strong>
          <u>Read More &gt;&gt;</u>
        </strong>
      )}
    </Button>
  );
}

export default function SingleAttorneyBiography({ title, content }) {
  const c = content.split(/<p[^>]*>/).filter((a) => a !== '');
  const excerpt = c[0].replace('</p>', '');
  const excerptTwo = c[1];
  const full = c.slice(2, c.length).join('<p>');

  return (
    <TabPane eventKey="biography" title={title}>
      <h4 className={grayTitleStyles.title}>{title}</h4>
      <div className="mx-1">
        <p
          className={pageContentStyles.p}
          dangerouslySetInnerHTML={createMarkup(excerpt)}
          id="nav-bio-tab"
        />
        <p
          className={pageContentStyles.p}
          dangerouslySetInnerHTML={createMarkup(excerptTwo)}
        />
        <Accordion>
          <ContextAwareToggle eventKey="1">
            <strong className="my-4">
              <u>Read Less &gt;&gt;</u>
            </strong>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey="1">
            <div
              id="example-fade-text"
              className={pageContentStyles.p}
              dangerouslySetInnerHTML={createMarkup(full)}
            />
          </Accordion.Collapse>
        </Accordion>
      </div>
    </TabPane>
  );
}
