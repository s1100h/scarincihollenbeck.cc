const QueryTitle = ({ title }) => (
  <p className="mt-4 mb-0 d-block">
    Results for
    {' '}
    <u className="text-capitalize">
      <strong>{title}</strong>
    </u>
    {' '}
    articles
    <style jsx>{' p{ font-size: 1.25rem}'}</style>
  </p>
);

export default QueryTitle;
