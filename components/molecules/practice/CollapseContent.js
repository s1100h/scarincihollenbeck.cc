import React, { useEffect, useRef, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import {
  CollapseButton,
  CollapseContentWrapper,
} from 'styles/CollapseContent.style';

const CollapseContent = ({ content, id }) => {
  const [open, setOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (contentRef.current.clientHeight < 500) {
        setOpen(true);
        setIsCollapse(false);
      } else {
        setIsCollapse(true);
      }
    }
  }, []);

  return isCollapse ? (
    <>
      <Collapse in={open}>
        <CollapseContentWrapper
          id={`content-${id}`}
          ref={contentRef}
          className="content-block"
        >
          {content}
        </CollapseContentWrapper>
      </Collapse>
      <CollapseButton
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`content-${id}`}
        className="collapse-opener"
      >
        {open ? '' : 'Read more'}
      </CollapseButton>
    </>
  ) : (
    <div ref={contentRef} className="content-block">
      {content}
    </div>
  );
};

export default CollapseContent;
