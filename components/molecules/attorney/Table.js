import { Row, Col } from 'react-bootstrap';
import { createMarkup } from 'utils/helpers';
import { useRef } from 'react';
import { useVirtual } from 'react-virtual';

const Table = ({ content }) => {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: content.body.length,
    parentRef,
    paddingStart: 10,
    paddingEnd: 10,
  });

  return (
    <Row>
      <Col sm={12}>
        <div
          ref={parentRef}
          style={{
            height: '750px',
            width: '100%',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              height: `${rowVirtualizer.totalSize}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.virtualItems.map((virtualRow) => (
              <div
                key={virtualRow.start}
                ref={virtualRow.measureRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  minHeight: '80px',
                  transform: `translateY(${virtualRow.start}px)`,
                  paddingBottom: '10px',
                }}
              >
                <div
                  className="h6 mb-0"
                  dangerouslySetInnerHTML={createMarkup(content.body[virtualRow.index][0])}
                />
                {content.body[virtualRow.index][1] && (
                  <span dangerouslySetInnerHTML={createMarkup(content.body[virtualRow.index][1])} />
                )}
                {content.body[virtualRow.index][2] && (
                  <span
                    className="tag-two"
                    dangerouslySetInnerHTML={createMarkup(content.body[virtualRow.index][2])}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <style jsx>
          {`
            .tag-two::before {
              content: ' - ';
            }
          `}
        </style>
      </Col>
    </Row>
  );
};

export default Table;
