import Selection from 'components/organisms/attorneys/Selection';
import Filters from 'components/organisms/attorneys/Filters';
import Results from 'components/organisms/attorneys/Results';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';
import { MainAttorneysContainer } from 'styles/Attornyes.style';
import useIsScroll from 'hooks/useIsScroll';

const AttorneysPage = ({
  sPractices,
  clearAll,
  clearQuery,
  handleChange,
  onSelect,
  userInput,
  seo,
  locations,
  designations,
  select,
  site,
  canonicalUrl,
  attorneys,
}) => {
  const { scrollTop } = useIsScroll();

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} />
      <MainAttorneysContainer>
        {/** Filters */}
        {!scrollTop && (
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
          {attorneys.length > 0 && (
            <Results attorneys={attorneys} userInput={userInput} select={select} />
          )}
        </div>
        {/** End of Results */}
      </MainAttorneysContainer>
    </>
  );
};

export default AttorneysPage;
