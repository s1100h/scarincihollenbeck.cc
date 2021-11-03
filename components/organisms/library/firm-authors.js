import { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import Link from 'next/link';
import { urlify } from 'utils/helpers';
import styles from 'styles/Library.module.css';
import fontStyles from 'styles/Fonts.module.css';

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
      <p className={`${fontStyles.ft12rem} d-block w-100`}>
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
              className={styles.author}
              ref={virtualRow.measureRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '28px',
                transform: `translateY(${virtualRow.start}px)`,
                paddingLeft: '10px',
              }}
            >
              <Link href={`/library/author/${urlify(authors[virtualRow.index].username)}`}>
                <a className="text-dark">{authors[virtualRow.index].fullName}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
