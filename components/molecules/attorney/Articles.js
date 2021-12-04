import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useVirtual } from 'react-virtual';
import { formatDate, createMarkup, extractDescription } from 'utils/helpers';

const Articles = ({ content }) => {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: content.length,
    parentRef,
    paddingStart: 10,
    paddingEnd: 10,
  });

  return (
    <div
      ref={parentRef}
      style={{
        height: '1000px',
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
            key={content[virtualRow.index].title}
            ref={virtualRow.measureRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '190px',
              transform: `translateY(${virtualRow.start}px)`,
              paddingLeft: '10px',
            }}
          >
            <Link href={content[virtualRow.index].link}>
              <a className="d-flex flex-row text-dark">
                <div>
                  <Image
                    src={content[virtualRow.index].image}
                    alt={content[virtualRow.index].title}
                    width={250}
                    height={125}
                    layout="fixed"
                  />
                </div>
                <div className="ml-3">
                  <p className="h5 mb-1">
                    <strong>{content[virtualRow.index].title}</strong>
                  </p>
                  <p className="mb-1">{formatDate(content[virtualRow.index].date)}</p>
                  <div
                    dangerouslySetInnerHTML={createMarkup(
                      extractDescription(content[virtualRow.index].excerpt),
                    )}
                  />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
