import { formatDate } from 'utils/helpers';

const BlogList = ({ content }) => {
  const baseUrl = `${content.posts[0].link.split('.com')[0]}.com`;
  const isConLaw = baseUrl.includes('constitution');
  const isGovLaw = baseUrl.includes('lawyer');

  return (
    <div className="d-flex flex-column mx-2">
      {content.posts.map(({
        link, title, date, id,
      }) => (
        <a key={id} href={link} target="_blank" rel="noreferrer noopener" className="h6 mb-4">
          <strong>{title}</strong>
          {' '}
          -
          {formatDate(date)}
        </a>
      ))}
      {content.posts.length >= 13 && (
        <p className="border-top pt-3">
          Check out more of their articles on
          <a href={baseUrl} target="_blank" rel="noreferrer">
            {' '}
            {isConLaw && <u>Constitutional Law Reporter</u>}
            {isGovLaw && <u>Government &amp; Law</u>}
          </a>
        </p>
      )}
    </div>
  );
};

export default BlogList;
