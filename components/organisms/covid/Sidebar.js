import { CLIENT_ALERTS } from 'utils/constants';
import Subscription from 'components/molecules/subscription/Subscription';
import CommonSidebarLinks from 'components/molecules/CommonSidebarLinks';
import PopularList from 'components/organisms/library/PopularList';

const CovidSidebar = () => (
  <>
    <Subscription />
    <CommonSidebarLinks />
    <hr />
    <PopularList
      term="Client Alerts"
      list={CLIENT_ALERTS}
      displayCount={false}
    />
  </>
);

export default CovidSidebar;
