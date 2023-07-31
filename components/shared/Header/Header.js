import useIsScroll from 'hooks/useIsScroll';
import { useRouter } from 'next/router';
import SpecialHeader from './SpecialHeader';
import DefaultHeader from './DefaultHeader';

const renderHeader = (pageSlug, props) => {
  const pagesMap = {
    'new-jersey-cannabis-law': <SpecialHeader {...props} />,
  };

  return pagesMap[pageSlug] || <DefaultHeader {...props} />;
};
export default function Header() {
  const { scrollTop } = useIsScroll();
  const { pathname, query } = useRouter();
  const slug = query.slug;

  const headerProps = {
    scrollTop,
    pathname,
  };

  return <>{renderHeader(slug, headerProps)}</>;
}
