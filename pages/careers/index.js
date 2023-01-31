import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import CareersPage from 'components/pages/CareersDirectory';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI, homePageLocations } from 'utils/api';
import { careersPageQuery, careersQuery } from 'utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** return careers page content  */
const careersPageContent = async () => {
  const data = await fetchAPI(careersPageQuery, {});
  return data?.pageBy;
};

const getCareerList = async () => {
  const careers = await fetchAPI(careersQuery);
  return careers.careers.nodes;
};

const sanitizeCareers = (careerArr) => careerArr.map(({ databaseId, slug, careerFields }) => ({
  databaseId,
  slug,
  ...careerFields,
}));

export const getStaticProps = async () => {
  const careerList = await getCareerList();
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
      careerList: sanitizeCareers(careerList),
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
  const canonicalUrl = `${PRODUCTION_URL}${router.asPath}`;

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
