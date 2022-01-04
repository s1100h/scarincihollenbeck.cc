import Selection from 'components/organisms/attorneys/Selection';
import Filters from 'components/organisms/attorneys/Filters';
import Results from 'components/organisms/attorneys/Results';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SingleSubHeader from 'layouts/SingleSubHeader';
import FullWidth from 'layouts/FullWidth';

export default function AttorneysPage({
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
}) {
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader title={site.title} subtitle={site.description} offset={3} span={6} />
      <FullWidth>
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
          <div className="w-100 border mt-sm-6 mt-md-0">
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
      </FullWidth>
    </>
  );
}
