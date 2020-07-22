import React from 'react';
import Search from '../Search';
import TrendingStories from '../TrendingStories';
import SubscriptionMessage from '../SubscriptionMessage';

export default function Sidebar(props) {
  const { posts, covidPage } = props;

  return (
    <>
      <Search />
      <TrendingStories title={(covidPage) ? 'Current Covid-19 News' : 'Trending Stories'} content={posts} />
      <SubscriptionMessage />
    </>
  );
}