import Sidebar from 'components/shared/Sidebar';
import { FIRM_BLOG_PAGES, FIRM_PAGES } from 'utils/constants';

const CommonSidebarLinks = () => (
  <>
    <hr />
    <Sidebar title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
    <hr />
    <Sidebar title="Firm Pages" content={FIRM_PAGES} tabKey={2} />
  </>
);

export default CommonSidebarLinks;
