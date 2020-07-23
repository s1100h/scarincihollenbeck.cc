import React from 'react';
import Search from '../Search';
import SubscriptionMessage from '../SubscriptionMessage';

export default function Sidebar() {
  return (
    <div className="hide-print">
      <Search />
      <SubscriptionMessage />
    </div>
  );
}