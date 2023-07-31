import { useRouter } from 'next/router';
import SpecialSubHeader from './SpecialSubHeader';
import DefaultSubHeader from './DefaultSubHeader';

const renderSubHeader = (pageSlug, props) => {
  const pagesMap = {
    'new-jersey-cannabis-law': <SpecialSubHeader {...props} />,
  };

  return pagesMap[pageSlug] || <DefaultSubHeader {...props} />;
};
const SubHeader = ({
  title, subtitle, isBlog, isHoliday, isFilter = false, authors = [], date = '', tabs, setActiveTab, activeTab, backgroundImage,
}) => {
  const { query } = useRouter();
  const slug = query.slug;
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
  };

  return <>{renderSubHeader(slug, subHeaderProps)}</>;
};

export default SubHeader;
