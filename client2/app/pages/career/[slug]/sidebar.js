import Search from '../../../components/search';
import SubscriptionMessage from '../../../components/subscription-message';

export default function Sidebar() {
  return (
    <div className="hide-print">
      <Search />
      <SubscriptionMessage />
    </div>
  );
};