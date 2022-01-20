import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import CareersPage from 'components/pages/CareersDirectory';
import { BASE_API_URL, SITE_URL, headers } from 'utils/constants';
import { fetchAPI, homePageLocations } from 'utils/api';
import { careersPageQuery } from 'utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** return careers page content  */
const careersPageContent = async () => {
  const data = await fetchAPI(careersPageQuery, {});
  return data?.pageBy;
};

export const getStaticProps = async () => {
  const request = await fetch(`${BASE_API_URL}/wp-json/career-portal/careers`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  const page = await careersPageContent();
  const getLocations = await homePageLocations();
  const { seo, title, careersPage } = page;
  const locations = getLocations.map(({ node }) => node.title);
  const positionTypes = careersPage.positionTypes.map(({ name }) => name);

  return {
    props: {
      seo,
      site: {
        title,
        description: careersPage.description,
        bodyContent: careersPage.equalEmploymentOpportunityContent,
      },
      careerList: request.careers,
      locations,
      positionTypes,
    },
    revalidate: 86400,
  };
};

/** The careers page directory component */
const CareersDirectory = ({
  positionTypes, locations, careerList, seo, site,
}) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [positionType, setPositionType] = useState('');
  const [careers, setCareers] = useState([]);
  const canonicalUrl = `${SITE_URL}${router.asPath}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  useEffect(() => {
    setCareers(careerList);
  }, [careerList]);

  function executeSearch() {
    function filterPositionType(career) {
      if (positionType) {
        return career.positionType.indexOf(positionType) >= 0;
      }

      return career;
    }

    function filterPositionLocation(career) {
      if (location) {
        return career.positionLocation.indexOf(location) >= 0;
      }

      return career;
    }

    const careerListFiltered = careers.filter(filterPositionType).filter(filterPositionLocation);

    setCareers(careerListFiltered);
  }

  const careerProps = {
    seo,
    site,
    canonicalUrl,
    careers,
    positionTypes,
    locations,
    query,
    setQuery,
    setLocation,
    setPositionType,
    executeSearch,
  };

  return <CareersPage {...careerProps} />;
};

export default CareersDirectory;
