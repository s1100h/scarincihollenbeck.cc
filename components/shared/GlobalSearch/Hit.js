import { SearchedItem } from 'styles/Hit.style';
import Link from 'next/link';
import { BsCalendar2Minus, BsPersonFill } from 'react-icons/bs';
import { Highlight } from 'react-instantsearch-dom';
import empty from 'is-empty';
import { BASE_API_URL, PRODUCTION_URL } from '../../../utils/constants';
import { changeTitle } from '../../../utils/helpers';

export default function Hit({ hit, setIsOpenSearch, handleClear }) {
  // eslint-disable-next-line no-underscore-dangle
  if (!empty(hit._highlightResult.post_title.value)) {
    // eslint-disable-next-line no-underscore-dangle
    hit._highlightResult.post_title.value = changeTitle(
      // eslint-disable-next-line no-underscore-dangle
      hit._highlightResult.post_title.value,
    );
  }

  const handleClickItem = (e) => {
    e.stopPropagation();
    if (setIsOpenSearch) {
      setIsOpenSearch(false);
    }
    handleClear();
  };
  return (
    <SearchedItem onClick={handleClickItem}>
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
            {hit.post_type_label === 'Posts' ? (
              <BsCalendar2Minus />
            ) : (
              <BsPersonFill />
            )}
            <Highlight hit={hit} attribute="post_title" />
          </h4>
          <p>
            {hit.post_type === 'post' && (
              <strong>{hit.post_author.display_name}</strong>
            )}
            {hit.post_type === 'post' && (
              <>
                <span> - </span>
                {changeTitle(hit.post_date_formatted)}
              </>
            )}
          </p>
        </article>
      </Link>
    </SearchedItem>
  );
}
