import { useRouter } from 'next/router';
import SpecialSubHeader from './SpecialSubHeader';
import DefaultSubHeader from './DefaultSubHeader';
import { getSlugFromUrl } from '../../utils/helpers';

const renderSubHeader = (pageSlug, props) => {
  const pagesMap = {
    'new-jersey-cannabis-law': <SpecialSubHeader {...props} />,
  };

  return pagesMap[pageSlug] || <DefaultSubHeader {...props} />;
};
const SubHeader = ({
  title, subtitle, isBlog, isHoliday, handleClickAnchor, isFilter = false, authors = [], date = '', tabs, setActiveTab, activeTab, backgroundImage, anchorId, article, backgroundVideo,
}) => {
  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);
  const subHeaderProps = {
    title,
    subtitle,
    isBlog,
    isHoliday,
    isFilter,
    authors,
    date,
    tabs,
    setActiveTab,
    activeTab,
    backgroundImage,
    anchorId,
    article,
    backgroundVideo,
    handleClickAnchor,
  };

  return <>{renderSubHeader(slug, subHeaderProps)}</>;
};

export default SubHeader;
