import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import {
  BreadcrumbsListContainer,
  ButtonBreadcrumb,
} from '../../../styles/Breadcrumbs.style';

const delegatePathFunc = (CrumbsPath, router) => {
  if (router.pathname === '/404') {
    return (
      <li>
        <span>404</span>
      </li>
    );
  }

  if (Array.isArray(CrumbsPath)) {
    if (CrumbsPath.length === 1) {
      return (
        <li>
          <span>{CrumbsPath[0].replace(/-/g, ' ')}</span>
        </li>
      );
    }

    if (CrumbsPath.includes('location')) {
      return (
        <>
          <li>
            <Link href="/location/little-falls">
              {CrumbsPath[0].replace(/-/g, ' ')}
            </Link>
            <BsChevronRight />
          </li>
          <li>
            <span>{router.query.slug?.replace(/-/g, ' ')}</span>
          </li>
        </>
      );
    }

    if (CrumbsPath.length > 1 && CrumbsPath.includes('author')) {
      return (
        <>
          <li>
            <ButtonBreadcrumb variant="link" onClick={() => router.back()}>
              {CrumbsPath[0].replace(/-/g, ' ')}
            </ButtonBreadcrumb>
            <BsChevronRight />
          </li>
          <li>
            <span>Author</span>
          </li>
        </>
      );
    }

    if (
      CrumbsPath.length > 1
      && CrumbsPath.includes('library')
      && !CrumbsPath.includes('author')
    ) {
      return (
        <>
          <li>
            <ButtonBreadcrumb variant="link" onClick={() => router.back()}>
              {CrumbsPath[0].replace(/-/g, ' ')}
            </ButtonBreadcrumb>
            <BsChevronRight />
          </li>
          <li>
            <span>{CrumbsPath[CrumbsPath.length - 1].replace(/-/g, ' ')}</span>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <ButtonBreadcrumb variant="link" onClick={() => router.back()}>
            {CrumbsPath[0].replace(/-/g, ' ')}
          </ButtonBreadcrumb>
          <BsChevronRight />
        </li>
        <li>
          <span>{CrumbsPath[CrumbsPath.length - 1].replace(/-/g, ' ')}</span>
        </li>
      </>
    );
  }
};

const PostBreadCrumbs = () => {
  const router = useRouter();
  const [crumbs, setCrumbs] = useState();

  useEffect(() => {
    const filteredCrumbs = router.asPath
      .split('/')
      .filter((crumb) => crumb !== '')
      .filter((crumb) => crumb.indexOf('https:') < 0);

    if (filteredCrumbs) {
      setCrumbs(filteredCrumbs);
    }
  }, [router.asPath]);

  return (
    <BreadcrumbsListContainer className="breadcrumb-container">
      <li>
        <Link href="/">Home</Link>
        <BsChevronRight />
      </li>
      {delegatePathFunc(crumbs, router)}
    </BreadcrumbsListContainer>
  );
};

export default PostBreadCrumbs;
