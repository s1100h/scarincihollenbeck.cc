import ErrorPage from 'components/pages/ErrorPage';
import React from 'react';
import { fetchAPI } from 'requests/api';
import { getIndustryQuery } from 'requests/graphql-queries';
import empty from 'is-empty';
import Head from 'next/head';

const getIndustryData = async (slug) => {
  const data = await fetchAPI(getIndustryQuery, {
    variables: { id: slug },
  });

  return data?.industry;
};

export const getServerSideProps = async ({ params, res, query }) => {
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=60, stale-while-revalidate',
  );
  const industrySlug = params.slug[params.slug.length - 1];
  const industryData = await getIndustryData(industrySlug);

  if (empty(industryData)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: industryData?.title,
    },
  };
};

const Industry = ({ title }) => {
  const mainMessage = `Page - ${title} is under development. However, you can still contact us for additional information.`;
  const subTitle = 'Work in Progress';
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <ErrorPage title="Oops!" subTitle={subTitle} mainMessage={mainMessage} />
    </>
  );
};

export default Industry;
