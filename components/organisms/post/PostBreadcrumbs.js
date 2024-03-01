import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronRight } from 'react-icons/bs';
import { useId } from 'react';
import empty from 'is-empty';
import { CategoriesButtonsStructure } from 'utils/constants';
import {
  BreadcrumbsListContainer,
  ButtonBreadcrumb,
} from '../../../styles/Breadcrumbs.style';
import { cutAnchorUrl } from '../../../utils/helpers';

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
        <span>{list[0].replace(/-/g, ' ')}</span>
      </li>
    );
  }

  if (list.includes('location')) {
    return (
      <>
        <li className={list?.includes('little-falls') ? 'active' : ''}>
          <Link href="/location/little-falls">
            {list[0].replace(/-/g, ' ')}
          </Link>
          <BsChevronRight />
        </li>
        <li>
          <span>{router.query.slug?.replace(/-/g, ' ')}</span>
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
            {list[0].replace(/-/g, ' ')}
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
        <li className={list?.includes(CategoriesButtonsStructure[0].slug) ? 'active' : ''}>
          <ButtonBreadcrumb
            href={`/library/category/${CategoriesButtonsStructure[0].slug}`}
          >
            {list[0].replace(/-/g, ' ')}
          </ButtonBreadcrumb>
          <BsChevronRight />
        </li>
        <li>
          <span>{list[list.length - 1].replace(/-/g, ' ')}</span>
        </li>
      </>
    );
  }

  if (router.pathname.includes('/post/')) {
    return (
      <>
        {list?.slice(0, -1)?.map((item) => (
          <li key={useId()}>
            <ButtonBreadcrumb
              href={`/library/category/${item}`}
            >
              {item.replace(/-/g, ' ')}
            </ButtonBreadcrumb>
            <BsChevronRight />
          </li>
        ))}
        <li className="active">
          <ButtonBreadcrumb
            href={`/${list.join('/')}`}
          >
            {list[list.length - 1].replace(/-/g, ' ')}
          </ButtonBreadcrumb>
        </li>
      </>
    );
  }

  return (
    <>
      {list?.map((item, index) => (
        <li
          key={useId()}
          className={`${index === list.length - 1 ? 'active' : ''}`}
        >
          <ButtonBreadcrumb
            href={`/${list.slice(0, index + 1).join('/')}`}
          >
            {cutAnchorUrl(item.replace(/-/g, ' '))}
          </ButtonBreadcrumb>
          {index !== list.length - 1 && <BsChevronRight />}
        </li>
      ))}
    </>
  );
};

const PostBreadCrumbs = ({ data }) => {
  const router = useRouter();
  const slug = router.asPath.split('/').filter((crumb) => crumb !== '');

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
