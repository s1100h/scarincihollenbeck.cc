import useIsScroll from 'hooks/useIsScroll';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { PracticesContext } from 'contexts/PracticesContext';
import SpecialHeader from './SpecialHeader';
import DefaultHeader from './DefaultHeader';
import { getSlugFromUrl } from '../../../utils/helpers';
import { LocationContext } from '../../../contexts/LocationContext';

const renderHeader = (pageSlug, props) => {
  const pagesMap = {
    'new-jersey-cannabis-law': <SpecialHeader {...props} />,
    // 'entertainment-and-media': <SpecialHeader {...props} />, // page ready for deploy in prod but paused, commit 26.12.2023
  };

  return pagesMap[pageSlug] || <DefaultHeader {...props} />;
};
export default function Header() {
  const { scrollTop } = useIsScroll();
  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);
  const { practices } = useContext(PracticesContext);
  const { locations } = useContext(LocationContext);

  const headerProps = {
    scrollTop,
    pathname,
    practices,
    locations,
  };

  return <>{renderHeader(slug, headerProps)}</>;
}
