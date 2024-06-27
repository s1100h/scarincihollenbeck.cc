import Selection from 'components/organisms/attorneys/Selection';
import Filters from 'components/organisms/attorneys/Filters';
import Results from 'components/organisms/attorneys/Results';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeader from 'layouts/SubHeader/SubHeader';
import { FaqBox, MainAttorneysContainer } from 'styles/Attornyes.style';
import { useContext, useEffect, useRef } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';
import FAQ from 'components/atoms/FAQ';
import { ATTORNEYS_FAQ } from 'utils/constants';
import { HeaderSizeContext } from 'contexts/HeaderSizeContext';

const AttorneysPage = ({
  sPractices,
  seo,
  locations,
  designations,
  site,
  canonicalUrl,
  attorneys,
  sortedAttorneys,
}) => {
  const {
    handleChange,
    select,
    onSelect,
    userInput,
    clearQuery,
    clearAll,
    onSelectLetter,
    setReference,
  } = useContext(AttorneysContext);

  const containerRef = useRef();
  const { headerSize } = useContext(HeaderSizeContext);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      setReference(containerRef.current);
    }
  }, [containerRef.current]);

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalUrl}
      />
      <SubHeader isFilter title={site.title} subtitle={site.description} />
      <MainAttorneysContainer ref={containerRef}>
        {/** Filters */}
        <Filters
          practices={sPractices}
          locations={locations}
          designation={designations}
          userInput={userInput}
          handleChange={handleChange}
          onSelect={onSelect}
          onSelectLetter={onSelectLetter}
          select={select}
          headerSize={headerSize}
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
        {/** End of Filters */}
        {/** Results */}
        <div className="w-100 mt-5">
          {attorneys.length > 0 && (
            <Results
              attorneys={attorneys}
              sortedAttorneys={sortedAttorneys}
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
