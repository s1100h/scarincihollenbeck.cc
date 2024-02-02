import { useContext, useState, useEffect } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';
import AttorneyCards from 'components/atoms/AttorneyCards';
import { useRouter } from 'next/router';
import empty from 'is-empty';

const organizeAttorneys = (attorneys, titles) => {
  const results = {};

  titles.forEach((title) => {
    results[title.name] = {
      attorneys: [],
    };
  });

  attorneys.forEach((attorney, idx) => {
    if (
      typeof attorney.designation === 'string'
      && !attorney.designation.includes('Firm Managing Partner')
      && !attorney.designation.includes('Deputy Managing Partner')
      && !attorney.designation.includes('Chief Executive Officer')
      && !attorney.designation.includes('NYC Managing Partner')
      && attorney.designation.includes(' Managing Partner')
    ) {
      results.Partners?.attorneys.push(attorney);
    }
    if (attorney.designation === 'Chief Executive Officer') {
      results['Firm Managing Partner']?.attorneys.push(attorney);
      results['Firm Leaders']?.attorneys.unshift(attorney);
      results['Firm management']?.attorneys.unshift(attorney);
    }
    if (typeof attorney.designation !== 'string') {
      results['Practice Leaders']?.attorneys.push(attorney);
    }
    if (attorney.designation === 'Deputy Managing Partner') {
      results['Firm Managing Partner']?.attorneys.push(attorney);
      results['Firm management']?.attorneys.push(attorney);
    }
    if (attorney.designation === 'NYC Managing Partner') {
      results['Firm Managing Partner']?.attorneys.push(attorney);
      results['Firm management']?.attorneys.push(attorney);
    }
    if (attorney.designation === 'Chief Growth Officer') {
      results['Administrative Management']?.attorneys.push(attorney);
      results.Directors?.attorneys.push(attorney);
    }
    if (
      typeof attorney.designation === 'string'
      && attorney?.designation?.includes('Director ')
    ) {
      results['Administrative Management']?.attorneys.push(attorney);
    }
    Object.keys(results).forEach((key) => {
      if (
        attorney.designation[0] === key[0]
        && attorney.designation[0]
        && !attorney.designation.includes('Deputy Managing Partner')
        && !attorney.designation.includes('NYC Managing Partner')
        && !attorney.designation.includes('Chief Executive Officer')
      ) {
        results[key].attorneys.push(attorney);
      }
    });
  });

  const recreatedPositions = results['Firm Managing Partner']?.attorneys.reverse();

  const designationIndex = recreatedPositions?.findIndex(
    (attorney) => attorney.designation === 'NYC Managing Partner',
  );

  if (!empty(recreatedPositions) && designationIndex !== -1) {
    const removedDesignation = recreatedPositions.splice(
      designationIndex,
      1,
    )[0];
    recreatedPositions.push(removedDesignation);
  }

  return results;
};

const NonFiltered = ({ attorneys }) => {
  const { pathname } = useRouter();
  const { attorneysTitles, firmOverviewTitles, adminsTitles } = useContext(AttorneysContext);
  const [sortedAttorneys, setSortedAttorneys] = useState({});

  useEffect(() => {
    if (adminsTitles && pathname === '/administration') {
      const orgAttorneys = organizeAttorneys(attorneys, adminsTitles);
      setSortedAttorneys(orgAttorneys);
    }
    if (attorneysTitles && pathname === '/attorneys') {
      const orgAttorneys = organizeAttorneys(attorneys, attorneysTitles);
      setSortedAttorneys(orgAttorneys);
    }
    if (firmOverviewTitles && pathname === '/firm-overview') {
      const orgAttorneys = organizeAttorneys(attorneys, firmOverviewTitles);
      setSortedAttorneys(orgAttorneys);
    }
  }, [attorneysTitles, firmOverviewTitles, adminsTitles]);

  // it was done by request from the client as a temporary solution. 16 Jun 2023.
  // If you want to delete it and revert the old solution,
  // just replace the justFirmManagementPartners variable with sortedAttorneys.
  // const justFirmManagementPartners = {
  //   'Firm Managing Partner': {
  //     attorneys: sortedAttorneys['Firm Managing Partner']?.attorneys || [],
  //   },
  // };
  // const isFirmOverviewPage = pathname.includes('/firm-overview') || pathname.includes('/administration');
  // const differentAttorneysKit = isFirmOverviewPage
  //   ? sortedAttorneys
  //   : justFirmManagementPartners;

  return (
    <>
      {Object.entries(sortedAttorneys).map((attorney) => (
        <AttorneyCards
          title={attorney[0]}
          pathname={pathname}
          content={attorney[1].attorneys}
        />
      ))}
    </>
  );
};

export default NonFiltered;
