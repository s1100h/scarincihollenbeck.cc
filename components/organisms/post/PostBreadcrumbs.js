import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronRight } from 'react-icons/bs';
import empty from 'is-empty';
import { CategoriesButtonsStructure } from 'utils/constants';
import { useEffect, useState } from 'react';
import {
  BreadcrumbsListContainer,
  ButtonBreadcrumb,
} from '../../../styles/Breadcrumbs.style';
import { cutAnchorUrl } from '../../../utils/helpers';

const convertPath = (path) => path.replace(/-/g, ' ');
const convertSlug = (slug) => slug
  .split('?')[0]
  .split('#')[0]
  .split('/')
  .filter((crumb) => crumb !== '');

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
          <span>
            {`Author - ${
              !empty(data?.title.replace(/\sArticles$/, ''))
                ? data?.title.replace(/\sArticles$/, '')
                : 'no longer'
            }`}
          </span>
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

  if (router.pathname.includes('/industries')) {
    return (
      <>
        <li>
          <ButtonBreadcrumb href="/services#industries">
            {convertPath(list[0])}
          </ButtonBreadcrumb>
          <BsChevronRight />
        </li>
        <li className="active">
          <span>{convertPath(list[list.length - 1])}</span>
        </li>
      </>
    );
  }

  if (router.pathname.includes('/practices')) {
    return (
      <>
        <li>
          <ButtonBreadcrumb href="/services">
            {convertPath(list[0])}
          </ButtonBreadcrumb>
          <BsChevronRight />
        </li>
        <li className="active">
          <span>{convertPath(list[list.length - 1])}</span>
        </li>
      </>
    );
  }

  return (
    <>
      {list?.slice(0, -1)?.map((item, index) => (
        <li key={`${item} + breadcrumb`}>
          <ButtonBreadcrumb href={`/${list.slice(0, index + 1).join('/')}`}>
            {cutAnchorUrl(convertPath(item))}
          </ButtonBreadcrumb>
          <BsChevronRight />
        </li>
      ))}
      <li className="active">
        <span>{convertPath(list[list.length - 1])}</span>
      </li>
    </>
  );
};

const PostBreadCrumbs = ({ data }) => {
  const router = useRouter();
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    const initialSlug = convertSlug(router.asPath);

    if (initialSlug.includes('contact')) {
      setSlug(['contact']);
    } else if (initialSlug.includes('subscribe')) {
      setSlug(['subscribe']);
    } else {
      setSlug(initialSlug);
    }
  }, [router.asPath]);

  return (
    <BreadcrumbsListContainer className="breadcrumb-container">
      <li>
        <ButtonBreadcrumb href="/">Home</ButtonBreadcrumb>
        <BsChevronRight />
      </li>
      {delegatePathFunc(slug, router, data)}
    </BreadcrumbsListContainer>
  );
};

export default PostBreadCrumbs;
