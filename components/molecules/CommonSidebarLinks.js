import SidebarContent from 'components/shared/SidebarContent';
import { FIRM_BLOG_PAGES, FIRM_PAGES } from 'utils/constants';

const CommonSidebarLinks = () => (
  <>
    <hr />
    <SidebarContent title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
    <hr />
    <SidebarContent title="Firm Pages" content={FIRM_PAGES} tabKey={2} />
  </>
);

export default CommonSidebarLinks;
