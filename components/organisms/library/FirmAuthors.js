import { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import Link from 'next/link';

export default function FirmAuthors({ authors }) {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: authors.length,
    parentRef,
    paddingStart: 10,
    paddingEnd: 10,
  });

  return (
    <>
      <p className="fs-1_2rem d-block w-100">
        <strong>Firm Authors</strong>
      </p>
      <div
        ref={parentRef}
        style={{
          height: '600px',
          width: '100%',
          overflow: 'auto',
          backgroundColor: '#f9f8f6',
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
              key={authors[virtualRow.index].lastName}
              ref={virtualRow.measureRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '28px',
                transform: `translateY(${virtualRow.start}px)`,
                paddingLeft: '10px',
                fontSize: '14px',
              }}
            >
              <Link href={`/library/author/${authors[virtualRow.index].username}`}>
                <a className="text-dark">{authors[virtualRow.index].fullName}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
