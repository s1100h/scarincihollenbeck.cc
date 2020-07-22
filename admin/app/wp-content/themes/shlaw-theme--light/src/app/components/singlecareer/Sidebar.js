import Search from '../search';
import SubscriptionMessage from '../subscription-message';

export default function Sidebar() {
  return (
    <div className="hide-print">
      <Search />
      <SubscriptionMessage />
    </div>
  );
}