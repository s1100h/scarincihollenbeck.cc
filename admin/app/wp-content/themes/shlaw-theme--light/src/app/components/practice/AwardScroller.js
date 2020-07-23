import React from 'react';
import LatestNewsArticlesCarousel from '../carousels/LatestNewsArticlesCarousel';

export default function HighlightReal(props) {
  const { highlightReal } = props;

  return (
    <div className="mt-4 w-100 d-block practice-news-list">
      <LatestNewsArticlesCarousel slides={highlightReal} />
    </div>
  );
}