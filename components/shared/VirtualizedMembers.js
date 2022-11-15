import { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import Link from 'next/link';
import Image from 'next/image';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';

const VirtualizedMembers = ({ members }) => {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: members.length,
    parentRef,
    paddingStart: 10,
    paddingEnd: 10,
  });

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: '450px',
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
              key={members[virtualRow.index].lastName}
              ref={virtualRow.measureRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '162px',
                transform: `translateY(${virtualRow.start}px)`,
                paddingLeft: '10px',
                fontSize: '14px',
              }}
            >
              <Link href={members[virtualRow.index].link}>
                <a className="text-dark d-flex m-3 border-bottom">
                  <Image
                    src={formatSrcToCloudinaryUrl(members[virtualRow.index].image)}
                    alt={members[virtualRow.index].name}
                    width={108}
                    height={148}
                  />
                  <p className="m-4">
                    <strong className="text-uppercase redTitle smallExcerpt">
                      {members[virtualRow.index].name}
                    </strong>
                    <br />
                    <strong className="mb-1 smallExcerpt text-dark">
                      {members[virtualRow.index].designation}
                    </strong>
                    <br />
                    <strong>Phone: </strong>
                    {' '}
                    {members[virtualRow.index].contact}
                    <br />
                    <strong>Email: </strong>
                    {' '}
                    {members[virtualRow.index].email}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VirtualizedMembers;
