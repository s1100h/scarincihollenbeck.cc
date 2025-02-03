import { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import {
  LinkWithEllipsis,
  MainVirtualizeContainer,
  VirtualizeListBox,
  VirtualListItem,
} from '../../../styles/library/LibraryArticles.style';
import Loader from '../../atoms/Loader';

export default function FirmAuthors({ authors, authorsIsLoading }) {
  const parentRef = useRef();
  const rowVirtualizer = useVirtual({
    size: authors?.length,
    parentRef,
    paddingStart: 10,
    paddingEnd: 10,
  });

  return (
    <>
      <h5 className="mb-0">
        <strong>Firm Authors</strong>
      </h5>
      {authorsIsLoading ? (
        <Loader />
      ) : (
        <MainVirtualizeContainer data-testid="authors-nav" ref={parentRef}>
          <VirtualizeListBox
            data-testid="authors-list"
            height={rowVirtualizer.totalSize}
          >
            {rowVirtualizer.virtualItems.map((virtualRow) => (
              <VirtualListItem
                key={virtualRow.key}
                ref={virtualRow.measureRef}
                transform={`translateY(${virtualRow.start}px)`}
              >
                <LinkWithEllipsis
                  href={`/library${authors[virtualRow.index].slug}`}
                  title={authors[virtualRow.index].title}
                >
                  {`☞ ${authors[virtualRow.index].title}`}
                </LinkWithEllipsis>
              </VirtualListItem>
            ))}
          </VirtualizeListBox>
        </MainVirtualizeContainer>
      )}
    </>
  );
}
