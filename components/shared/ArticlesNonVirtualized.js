import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { formatDate, createMarkup, extractDescription } from 'utils/helpers';

const ArticlesNonVirtualized = ({
  slug, imgSrc, title, date, excerpt,
}) => (
  <Link href={slug}>
    <a className="d-flex flex-column flex-lg-row text-dark">
      <ImageWrapper>
        <Image src={imgSrc} alt={title} width={250} height={125} layout="intrinsic" />
      </ImageWrapper>
      <div className="ml-3">
        <p className="h5 mb-1">
          <strong>{title}</strong>
        </p>
        <p className="mb-1">{formatDate(date)}</p>
        <div dangerouslySetInnerHTML={createMarkup(extractDescription(excerpt))} />
      </div>
    </a>
  </Link>
);

const ImageWrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
    min-width: 250px;
  }
`;

export default ArticlesNonVirtualized;
