import React, { useEffect, useRef, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import {
  CollapseButton,
  CollapseContentWrapper,
} from 'styles/CollapseContent.style';

const CollapseContent = ({ content, id }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const isContentShort = contentRef.current && contentRef.current.clientHeight < 500;

  useEffect(() => {
    const handleContentHeight = () => {
      if (contentRef.current) {
        if (contentRef.current.clientHeight < 500) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }
    };

    handleContentHeight();
  }, [content]);

  if (isContentShort) {
    return (
      <div
        ref={contentRef}
        className="content-block margin-scroll"
        id={`${id}-section`}
      >
        {content}
      </div>
    );
  }

  return (
    <div className="content-block margin-scroll" id={`${id}-section`}>
      <Collapse in={open}>
        <CollapseContentWrapper>
          <div ref={contentRef}>{content}</div>
        </CollapseContentWrapper>
      </Collapse>
      <CollapseButton
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="collapse-opener"
      >
        {open ? '' : 'Read more'}
      </CollapseButton>
    </div>
  );
};

export default CollapseContent;
