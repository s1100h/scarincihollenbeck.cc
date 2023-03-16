import { SearchedItem } from 'styles/Hit.style';
import Link from 'next/link';
import { BsCalendar2Minus, BsPersonFill } from 'react-icons/bs';
import { BASE_API_URL, PRODUCTION_URL } from '../../../utils/constants';

export default function Hit({ hit }) {
  return (
    <SearchedItem>
      <Link
        href={
          hit.post_type_label === 'Posts'
            ? hit.permalink.replace(PRODUCTION_URL, '')
            : hit.permalink.replace(BASE_API_URL, '')
        }
        passHref
      >
        <article>
          <p>{hit.post_type_label}</p>
          <h4>
            {hit.post_type_label === 'Posts' ? <BsCalendar2Minus /> : <BsPersonFill />}
            <strong>{hit.post_title}</strong>
          </h4>
          <p>
            {hit.post_type === 'post' && <strong>{hit.post_author.display_name}</strong>}
            {hit.post_type === 'post' && (
              <>
                <span> - </span>
                {hit.post_date_formatted}
              </>
            )}
          </p>
        </article>
      </Link>
    </SearchedItem>
  );
}
