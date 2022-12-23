import Selection from 'components/organisms/attorneys/Selection';
import Filters from 'components/organisms/attorneys/Filters';
import Results from 'components/organisms/attorneys/Results';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';
import { FaqBox, MainAttorneysContainer } from 'styles/Attornyes.style';
import useIsScroll from 'hooks/useIsScroll';
import useStateScreen from 'hooks/useStateScreen';
import { useContext } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';
import FAQ from 'components/atoms/FAQ';
import { ATTORNEYS_FAQ, OFFICE_LOCATIONS } from 'utils/constants';

const AttorneysPage = ({
  sPractices, seo, locations, designations, site, canonicalUrl,
}) => {
  const { isTabletScreen, isDesktopScreen } = useStateScreen();
  const { scrollTop } = useIsScroll();
  const {
    handleChange, select, onSelect, userInput, clearQuery, attorneysContext, clearAll,
  } = useContext(AttorneysContext);

  const arrayToObject = (arr, keyField) => Object.assign({}, ...arr.map((item) => ({ [item[keyField]]: item })));

  const offices = arrayToObject(OFFICE_LOCATIONS, 'label');

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SingleSubHeader isFilter title={site.title} subtitle={site.description} />
      <MainAttorneysContainer>
        {/** Filters */}
        {(isTabletScreen || (!scrollTop && isDesktopScreen)) && (
          <Filters
            practices={sPractices}
            locations={locations}
            designation={designations}
            userInput={userInput}
            handleChange={handleChange}
            onSelect={onSelect}
          >
            {(userInput.length > 0 || select.length > 0) && (
              <Selection
                select={select}
                clearQuery={clearQuery}
                userInput={userInput}
                clearAll={clearAll}
              />
            )}
          </Filters>
        )}
        {/** End of Filters */}
        {/** Results */}
        <div className="w-100 mt-5">
          {attorneysContext.length > 0 && (
            <Results
              attorneysOffices={locations}
              attorneys={attorneysContext}
              userInput={userInput}
              select={select}
            />
          )}
        </div>
        <FaqBox>
          <FAQ faqArrContent={ATTORNEYS_FAQ} />
        </FaqBox>
        {/** End of Results */}
      </MainAttorneysContainer>
    </>
  );
};

export default AttorneysPage;
