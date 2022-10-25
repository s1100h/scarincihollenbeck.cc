import { SearchedItem } from 'styles/Hit.style';

export default function Hit({ hit }) {
  return (
    <SearchedItem href={hit.permalink.replace('https://wp.scarincihollenbeck.com', '')}>
      <p className="post-type">{hit.post_type_label}</p>
      <p className="title">
        <strong>{hit.post_title}</strong>
      </p>
      <p className="details">
        {hit.post_type === 'post' && <>{hit.post_author.display_name}</>}
        {hit.post_type === 'post' && (
          <>
            <span className="mx-1">|</span>
            {hit.post_date_formatted}
          </>
        )}
      </p>
    </SearchedItem>
  );
}
