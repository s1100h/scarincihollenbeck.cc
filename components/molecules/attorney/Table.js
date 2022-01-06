import { Row, Col } from 'react-bootstrap';
import { createMarkup } from 'utils/helpers';
import { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import styles from 'styles/Table.module.css';

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
      <Col className={styles.content} sm={12}>
        <div
          ref={parentRef}
          style={{
            height: '750px',
            width: '100%',
            overflow: 'auto',
            borderRadius: '10px',
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
                key={content.body[virtualRow.index][0]}
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
                  className="h6 mb-0 title"
                  dangerouslySetInnerHTML={createMarkup(content.body[virtualRow.index][0])}
                />
                {content.body[virtualRow.index][1] && (
                  <span
                    className="tag-one"
                    dangerouslySetInnerHTML={createMarkup(content.body[virtualRow.index][1])}
                  />
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
            .title {
              font-family: Proxima Nova Bold;
            }
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
