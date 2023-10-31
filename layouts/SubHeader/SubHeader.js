import { useRouter } from 'next/router';
import SpecialSubHeader from './SpecialSubHeader';
import DefaultSubHeader from './DefaultSubHeader';
import { getSlugFromUrl } from '../../utils/helpers';
import SliderSubHeader from './SliderSubHeader';

const renderSubHeader = (pageSlug, props) => {
  const pagesMap = {
    'new-jersey-cannabis-law': <SpecialSubHeader {...props} />,
    'entertainment-and-media': <SliderSubHeader {...props} />,
  };

  return pagesMap[pageSlug] || <DefaultSubHeader {...props} />;
};
const SubHeader = ({
  title,
  subtitle,
  isBlog,
  isHoliday,
  handleClickAnchor,
  isFilter = false,
  authors = [],
  date = '',
  tabs,
  setActiveTab,
  activeTab,
  backgroundImage,
  anchorId,
  article,
  backgroundVideo,
  slidesData,
  sliderCfg,
  subHeaderBtns,
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
    slidesData,
    sliderCfg,
    subHeaderBtns,
  };

  return <>{renderSubHeader(slug, subHeaderProps)}</>;
};

export default SubHeader;
