import useIsScroll from 'hooks/useIsScroll';
import { useRouter } from 'next/router';
import SpecialHeader from './SpecialHeader';
import DefaultHeader from './DefaultHeader';
import { getSlugFromUrl } from '../../../utils/helpers';

const renderHeader = (pageSlug, props) => {
  const pagesMap = {
    'new-jersey-cannabis-law': <SpecialHeader {...props} />,
  };

  return pagesMap[pageSlug] || <DefaultHeader {...props} />;
};
export default function Header() {
  const { scrollTop } = useIsScroll();
  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);

  const headerProps = {
    scrollTop,
    pathname,
  };

  return <>{renderHeader(slug, headerProps)}</>;
}
