import { useRouter } from 'next/router';
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import empty from 'is-empty';
import Link from 'next/link';
import {
  CustomPaginationWrapper,
  CustomPaginationItemsCount,
} from 'styles/Pagination';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import useStateScreen from 'hooks/useStateScreen';

const CustomPagination = ({
  totalItems,
  currentPage = 1,
  between = 4,
  ellipsis = 1,
  limit,
  queryParam = 'page',
}) => {
  const totalPages = Math.ceil(totalItems / limit);
  if (empty(totalPages) || totalPages < 2) return null;
  const { isMobileScreen } = useStateScreen();

  const linkQueryParam = `?${queryParam}=`;
  const router = useRouter();
  const { slug, ...routerQueries } = router.query;
  const pageRoute = router.asPath.split('?')[0];
  between = between < 1 ? 1 : isMobileScreen ? 3 : between;
  ellipsis = ellipsis < 1 ? 0 : ellipsis + 2 >= between ? between - 2 : ellipsis;
  currentPage = Number(currentPage);
  const showingRows = currentPage * limit;
  const minShowingRows = showingRows - limit + 1;
  const maxShowingRows = showingRows >= totalItems ? totalItems : showingRows;

  const positions = Array.from({ length: totalPages }, (_, i) => i);

  const qtd_pages = between * 2 + 1;
  const range = totalPages <= qtd_pages // Show active without slice
    ? positions
    : currentPage - 1 <= between // Show active in left
      ? positions.slice(0, qtd_pages - (ellipsis > 0 ? ellipsis + 1 : 0))
      : currentPage + between >= totalPages // Show active in right
        ? positions.slice(
          totalPages - qtd_pages + (ellipsis > 0 ? ellipsis + 1 : 0),
          totalPages,
        )
        : positions.slice(
          currentPage - 1 - (between - (ellipsis > 0 ? ellipsis + 1 : 0)),
          currentPage + (between - (ellipsis > 0 ? ellipsis + 1 : 0)),
        ); // Show active in middle

  const handleChangePage = (event, page) => {
    event.preventDefault();
    if (empty(page)) {
      router.push(pageRoute, undefined, { scroll: false });
    } else {
      router.push(
        {
          pathname: pageRoute,
          query: { ...routerQueries, [queryParam]: page },
        },
        undefined,
        { scroll: false },
      );
    }
  };

  return (
    <CustomPaginationWrapper>
      <CustomPaginationItemsCount>{`Showing ${minShowingRows}-${maxShowingRows} of ${totalItems}`}</CustomPaginationItemsCount>
      <Pagination>
        <Pagination.First
          href={currentPage > 1 ? pageRoute : null}
          disabled={currentPage <= 1}
          className="pagination-first"
          onClick={(e) => (currentPage > 1 ? handleChangePage(e, null) : {})}
        >
          <MdKeyboardDoubleArrowLeft className="pagination-icon" />
        </Pagination.First>
        <Pagination.Prev
          href={
            currentPage > 1
              ? `${pageRoute}${linkQueryParam}${currentPage - 1}`
              : null
          }
          disabled={currentPage <= 1}
          className="pagination-prev"
          onClick={(e) => (currentPage > 1 ? handleChangePage(e, currentPage - 1) : {})}
        >
          <MdKeyboardArrowLeft className="pagination-icon" />
        </Pagination.Prev>
        {totalPages > between * 2 + 1
          && ellipsis > 0
          && positions
            .slice(0, currentPage - 1 <= between ? 0 : ellipsis)
            .map((value) => (
              <Pagination.Item
                key={value}
                href={
                  value !== currentPage - 1
                    ? `${pageRoute}${linkQueryParam}${value + 1}`
                    : null
                }
                className="pagination-item"
                onClick={(e) => (value !== currentPage - 1
                  ? handleChangePage(e, value + 1)
                  : {})}
              >
                {value + 1}
              </Pagination.Item>
            ))}
        {
          // Show left ellipsis if current page bigger than "between"
          totalPages > between * 2 + 1
            && ellipsis > 0
            && currentPage - 1 > between && (
              <Pagination.Ellipsis disabled className="pagination-ellipsis" />
          )
        }
        {range.map((value) => (
          <Pagination.Item
            active={value === currentPage - 1}
            key={value}
            href={
              value !== currentPage - 1
                ? `${pageRoute}${linkQueryParam}${value + 1}`
                : null
            }
            className="pagination-item"
            onClick={(e) => (value !== currentPage - 1 ? handleChangePage(e, value + 1) : {})}
          >
            {value + 1}
          </Pagination.Item>
        ))}
        {
          // Show right ellipsis if current page lower than "between"
          totalPages > between * 2 + 1
            && ellipsis > 0
            && currentPage < totalPages - between && (
              <Pagination.Ellipsis disabled className="pagination-ellipsis" />
          )
        }
        {totalPages > between * 2 + 1
          && ellipsis > 0
          && positions
            .slice(
              currentPage >= totalPages - between
                ? totalPages
                : totalPages - ellipsis,
              totalPages,
            )
            .map((value) => (
              <Pagination.Item
                key={value}
                href={
                  value !== currentPage - 1
                    ? `${pageRoute}${linkQueryParam}${value + 1}`
                    : {}
                }
                className="pagination-item"
                onClick={(e) => (value !== currentPage - 1
                  ? handleChangePage(e, value + 1)
                  : {})}
              >
                {value + 1}
              </Pagination.Item>
            ))}
        <Pagination.Next
          href={
            currentPage < totalPages
              ? `${pageRoute}${linkQueryParam}${currentPage + 1}`
              : null
          }
          disabled={currentPage >= totalPages}
          className="pagination-next"
          onClick={(e) => (currentPage < totalPages ? handleChangePage(e, currentPage + 1) : {})}
        >
          <MdKeyboardArrowRight className="pagination-icon" />
        </Pagination.Next>
        <Pagination.Last
          href={
            currentPage < totalPages
              ? `${pageRoute}${linkQueryParam}${totalPages}`
              : null
          }
          disabled={currentPage >= totalPages}
          className="pagination-last"
          onClick={(e) => (currentPage < totalPages ? handleChangePage(e, totalPages) : {})}
        >
          <MdKeyboardDoubleArrowRight className="pagination-icon" />
        </Pagination.Last>
      </Pagination>
    </CustomPaginationWrapper>
  );
};

export default CustomPagination;
