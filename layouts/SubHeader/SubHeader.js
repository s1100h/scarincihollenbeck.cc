import { useRouter } from 'next/router';
import SpecialSubHeader from './SpecialSubHeader';
import DefaultSubHeader from './DefaultSubHeader';
import { getSlugFromUrl } from '../../utils/helpers';

const renderSubHeader = (pageSlug, props) => {
  const pagesMap = {
    'new-jersey-cannabis-law': <SpecialSubHeader {...props} />,
    // 'entertainment-and-media': <SliderSubHeader {...props} />, // page ready for deploy in prod but paused, commit 26.12.2023
  };

  return pagesMap[pageSlug] || <DefaultSubHeader {...props} />;
};
const SubHeader = ({
  title,
  subtitle,
  isBlog,
  isHoliday,
  handleClickAnchor,
  anchorId,
  isFilter = false,
  authors = [],
  date = '',
  tabs,
  setActiveTab,
  activeTab,
  backgroundImage,
  article,
  backgroundVideo,
  slidesData,
  sliderCfg,
  keyContacts,
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
    article,
    backgroundVideo,
    anchorId,
    handleClickAnchor,
    slidesData,
    sliderCfg,
    keyContacts,
  };

  return <>{renderSubHeader(slug, subHeaderProps)}</>;
};

export default SubHeader;
