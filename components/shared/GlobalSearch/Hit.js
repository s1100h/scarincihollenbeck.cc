import { SearchedItem } from 'styles/Hit.style';
import Link from 'next/link';
import { PRODUCTION_URL } from '../../../utils/constants';

export default function Hit({ hit }) {
  return (
    <Link href={hit.permalink.replace(PRODUCTION_URL, '')} passHref>
      <SearchedItem>
        <p className="post-type">{hit.post_type_label}</p>
        <h4 className="title">
          <strong>{hit.post_title}</strong>
        </h4>
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
    </Link>
  );
}
