import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useVirtual } from 'react-virtual';
import styled from 'styled-components';
import {
  formatDate,
  createMarkup,
  extractDescription,
  formatSrcToCloudinaryUrl,
} from 'utils/helpers';

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
          <ArticleWrapper
            key={content[virtualRow.index].title}
            ref={virtualRow.measureRef}
            style={{
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <Link href={content[virtualRow.index].link}>
              <a className="d-flex flex-column flex-lg-row text-dark">
                <ImageWrapper>
                  <Image
                    src={content[virtualRow.index].image}
                    alt={content[virtualRow.index].title}
                    width={250}
                    height={125}
                    layout="intrinsic"
                  />
                </ImageWrapper>
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
          </ArticleWrapper>
        ))}
      </div>
    </div>
  );
};

const ImageWrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
    min-width: 250px;
  }
`;
const ArticleWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 90px;

  @media (min-width: 992px) {
    height: 73px;
  }
  @media (min-width: 1200px) {
    position: absolute;
    height: 190px;
    padding: 10px;
  }
`;
export default Articles;
