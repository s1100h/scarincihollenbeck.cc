import CarouselsLatestNews from 'components/carousels/latest-news';

export default function PracticeAwardScoller({ highlightReal }) {
  return (
    <div className="mt-4 w-100 d-block practice-news-list">
      <CarouselsLatestNews slides={highlightReal} />
    </div>
  );
}
