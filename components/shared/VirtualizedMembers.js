import { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';
import AttorneyCard from './AttorneyCard';

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
                height: '205px',
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <AttorneyCard
                link={
                  members[virtualRow.index].link.includes('attorneys')
                    ? members[virtualRow.index].link
                    : `/attorneys/${members[virtualRow.index].link}`
                }
                image={formatSrcToCloudinaryUrl(members[virtualRow.index].image)}
                name={members[virtualRow.index].name}
                title={members[virtualRow.index].designation}
                number={members[virtualRow.index].contact}
                email={members[virtualRow.index].email}
                width={80}
                height={112}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VirtualizedMembers;
