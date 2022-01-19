import { CLIENT_ALERTS } from 'utils/constants';
import SubscriptionMessage from 'components/molecules/subscription/SubscriptionMessage';
import CommonSidebarLinks from 'components/molecules/CommonSidebarLinks';
import PopularList from 'components/organisms/library/PopularList';

const CovidSidebar = () => (
  <>
    <SubscriptionMessage />
    <CommonSidebarLinks />
    <hr />
    <PopularList term="Client Alerts" list={CLIENT_ALERTS} displayCount={false} />
  </>
);

export default CovidSidebar;
