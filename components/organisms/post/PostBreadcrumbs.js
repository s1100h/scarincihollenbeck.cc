import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronRight } from 'react-icons/bs';
import empty from 'is-empty';
import { CategoriesButtonsStructure } from 'utils/constants';
import {
  BreadcrumbsListContainer,
  ButtonBreadcrumb,
} from '../../../styles/Breadcrumbs.style';
import { cutAnchorUrl } from '../../../utils/helpers';

const convertPath = (path) => path.replace(/-/g, ' ');

const delegatePathFunc = (list, router, data) => {
  if (empty(list)) return;

  if (router.pathname === '/404') {
    return (
      <li>
        <span>404</span>
      </li>
    );
  }

  if (list.length === 1) {
    return (
      <li>
        <span>{convertPath(list[0])}</span>
      </li>
    );
  }

  if (list.includes('location')) {
    return (
      <>
        <li className={list?.includes('little-falls') ? 'active' : ''}>
          <Link href="/location/little-falls">{convertPath(list[0])}</Link>
          <BsChevronRight />
        </li>
        <li>
          <span>{convertPath(router.query.slug)}</span>
        </li>
      </>
    );
  }

  if (list.length > 1 && list.includes('author')) {
    return (
      <>
        <li>
          <ButtonBreadcrumb
            href={`/library/category/${CategoriesButtonsStructure[0].slug}`}
          >
            {convertPath(list[0])}
          </ButtonBreadcrumb>
          <BsChevronRight />
        </li>
        <li>
          <span>{`Author - ${data?.title.replace(/\sArticles$/, '')}`}</span>
        </li>
      </>
    );
  }

  if (list.length > 1 && list.includes('library') && !list.includes('author')) {
    return (
      <>
        <li
          className={
            list?.includes(CategoriesButtonsStructure[0].slug) ? 'active' : ''
          }
        >
          <ButtonBreadcrumb
            href={`/library/category/${CategoriesButtonsStructure[0].slug}`}
          >
            {convertPath(list[0])}
          </ButtonBreadcrumb>
          <BsChevronRight />
        </li>
        <li>
          <span>{convertPath(list[list.length - 1])}</span>
        </li>
      </>
    );
  }

  if (router.pathname.includes('/post/')) {
    return (
      <>
        {list[0] !== 'post'
          && list?.slice(0, -1)?.map((item) => (
            <li key={`${item} + breadcrumb`}>
              <ButtonBreadcrumb href={`/library/category/${item}`}>
                {convertPath(item)}
              </ButtonBreadcrumb>
              <BsChevronRight />
            </li>
          ))}
        <li className="active">
          <span>{convertPath(list[list.length - 1])}</span>
        </li>
      </>
    );
  }

  return (
    <>
      {list?.map((item, index) => (
        <li
          key={`${item} + breadcrumb`}
          className={`${index === list.length - 1 ? 'active' : ''}`}
        >
          <ButtonBreadcrumb href={`/${list.slice(0, index + 1).join('/')}`}>
            {cutAnchorUrl(convertPath(item))}
          </ButtonBreadcrumb>
          {index !== list.length - 1 && <BsChevronRight />}
        </li>
      ))}
    </>
  );
};

const PostBreadCrumbs = ({ data }) => {
  const router = useRouter();
  const slug = router.asPath
    .split('?')[0]
    .split('/')
    .filter((crumb) => crumb !== '');
  return (
    <BreadcrumbsListContainer className="breadcrumb-container">
      <li>
        <Link href="/">Home</Link>
        <BsChevronRight />
      </li>
      {delegatePathFunc(slug, router, data)}
    </BreadcrumbsListContainer>
  );
};

export default PostBreadCrumbs;
