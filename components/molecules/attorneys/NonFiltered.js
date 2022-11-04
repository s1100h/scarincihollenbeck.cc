import { useContext, useState, useEffect } from 'react';
import { SectionTitleContext } from 'contexts/SectionTitleContext';
import AttorneyCards from 'components/atoms/AttorneyCards';

const organizeAttorneys = (attorneys, titles) => {
  const results = {};

  titles.forEach((title) => {
    results[title.name] = {
      attorneys: [],
    };
  });

  attorneys.forEach((attorney) => {
    if (
      attorney.designation !== 'Managing Partner'
      && attorney.designation.includes(' Managing Partner')
    ) {
      results.Partners.attorneys.push(attorney);
    }

    Object.keys(results).forEach((key) => {
      if (attorney.designation[0] === key[0]) {
        results[key].attorneys.push(attorney);
      }
    });
  });

  return results;
};

const NonFiltered = ({ attorneys }) => {
  const [sortedAttorneys, setSortedAttorneys] = useState({});
  const { titles } = useContext(SectionTitleContext);

  useEffect(() => {
    if (titles) {
      const orgAttorneys = organizeAttorneys(attorneys, titles);
      setSortedAttorneys(orgAttorneys);
    }
  }, [titles]);

  return (
    <>
      {Object.entries(sortedAttorneys).map((attorney) => AttorneyCards(attorney[0], attorney[1].attorneys))}
    </>
  );
};

export default NonFiltered;
