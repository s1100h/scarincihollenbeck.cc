import { useContext, useState, useEffect } from 'react';
import { SectionTitleContext } from 'contexts/SectionTitleContext';
import AttorneyCards from 'components/atoms/AttorneyCards';
import { useRouter } from 'next/router';

const organizeAttorneys = (attorneys, titles) => {
  const results = {};

  titles.forEach((title) => {
    results[title.name] = {
      attorneys: [],
    };
  });

  attorneys.forEach((attorney) => {
    if (
      typeof attorney.designation === 'string'
      && attorney.designation !== 'Firm Managing Partner'
      && attorney.designation.includes(' Managing Partner')
    ) {
      results.Partners?.attorneys.push(attorney);
    }
    if (attorney.designation === 'Executive Director') {
      results['Firm Leaders'].attorneys.push(attorney);
    }
    if (typeof attorney.designation !== 'string') {
      results['Practice Leaders']?.attorneys.push(attorney);
    }
    Object.keys(results).forEach((key) => {
      if (attorney.designation[0] === key[0] && attorney.designation[0]) {
        results[key].attorneys.push(attorney);
      }
    });
  });
  return results;
};

const NonFiltered = ({ attorneys, offices }) => {
  const [sortedAttorneys, setSortedAttorneys] = useState({});
  const { attorneysTitles, firmOverviewTitles } = useContext(SectionTitleContext);
  const { pathname } = useRouter();
  useEffect(() => {
    if (attorneysTitles && pathname === '/attorneys') {
      const orgAttorneys = organizeAttorneys(attorneys, attorneysTitles);
      setSortedAttorneys(orgAttorneys);
    }
    if (firmOverviewTitles && pathname === '/firm-overview') {
      const orgAttorneys = organizeAttorneys(attorneys, firmOverviewTitles);
      setSortedAttorneys(orgAttorneys);
    }
  }, [attorneysTitles, firmOverviewTitles]);
  return (
    <>
      {Object.entries(sortedAttorneys).map((attorney) => AttorneyCards(attorney[0], attorney[1].attorneys, offices))}
    </>
  );
};

export default NonFiltered;
