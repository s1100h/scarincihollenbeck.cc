const QueryTitle = ({ title }) => (
  <h4 className="mt-4 mb-0 d-block">
    Results for
    {' '}
    <u className="text-capitalize">
      <strong>{title}</strong>
    </u>
    {' '}
    articles
    <style jsx>{' h4{ font-size: 1.25rem}'}</style>
  </h4>
);

export default QueryTitle;
