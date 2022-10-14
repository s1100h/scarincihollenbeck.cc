import Selection from 'components/organisms/attorneys/Selection';
import Filters from 'components/organisms/attorneys/Filters';
import Results from 'components/organisms/attorneys/Results';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';

const AttorneysPage = ({
  sPractices,
  clearAll,
  clearQuery,
  handleChange,
  letterClick,
  onSelect,
  userInput,
  seo,
  locations,
  designations,
  select,
  alphabet,
  site,
  canonicalUrl,
  attorneys,
}) => (
  <>
    <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
    <SingleSubHeader title={site.title} subtitle={site.description} />
    <div className="mb-5">
      {/** Filters */}
      <Filters
        practices={sPractices}
        alphabet={alphabet}
        locations={locations}
        designation={designations}
        userInput={userInput}
        handleChange={handleChange}
        onSelect={onSelect}
        letterClick={letterClick}
      />
      {/** End of Filters */}
      {/** Results */}
      <div className="w-100 mt-sm-6 mt-md-0">
        <Selection
          select={select}
          clearQuery={clearQuery}
          userInput={userInput}
          clearAll={clearAll}
        />
        {attorneys.length > 0 && (
          <Results attorneys={attorneys} userInput={userInput} select={select} />
        )}
      </div>
      {/** End of Results */}
    </div>
  </>
);

export default AttorneysPage;
