import { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import AttorneyCard from './AttorneyCard';
import { ItemVirtual, VirtualListContainer } from '../../styles/VirtualizedMembers';

const VirtualizedMembers = ({ members, title }) => {
  const parentRef = useRef();

  const rowVirtualizer = useVirtual({
    size: members.length,
    parentRef,
    paddingStart: 10,
    paddingEnd: 10,
  });

  return (
    <>
      {title.length > 0 && <h4>{title}</h4>}
      <VirtualListContainer ref={parentRef} listHight={rowVirtualizer.totalSize}>
        <ul>
          {rowVirtualizer.virtualItems.map((virtualRow) => (
            <ItemVirtual
              itemTransform={virtualRow.start}
              key={members[virtualRow.index].lastName}
              ref={virtualRow.measureRef}
            >
              <AttorneyCard
                link={
                  members[virtualRow.index].link.includes('attorneys')
                    ? members[virtualRow.index].link
                    : `/attorneys/${members[virtualRow.index].link}`
                }
                image={
                  members[virtualRow.index].image || members[virtualRow.index].better_featured_image
                }
                name={members[virtualRow.index].name || members[virtualRow.index].title}
                designation={members[virtualRow.index].designation}
                number={members[virtualRow.index].contact || members[virtualRow.index].phone}
                email={members[virtualRow.index].email}
              />
            </ItemVirtual>
          ))}
        </ul>
      </VirtualListContainer>
    </>
  );
};

export default VirtualizedMembers;
