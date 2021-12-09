import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import ListWrapper from 'components/organisms/practices/ListWrapper';

const PracticesDirectory = ({
  site,
  seo,
  sortedCorePractices,
  sortedAdditionalPractices,
  sortedBusinessPractices,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDesc}
      canonicalUrl={seo.canonicalUrl}
    />
    <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={2} />
    <FullWidth>
      <p>
        As you scroll through the law practices and locate the sub-practice groups that most closely
        identifies with your need, feel free to contact any of the attorneys identified within the
        sub-practice group. Feel free to contact any of the Section Chiefs identified under each of
        the named law practices. They will be happy to assist you and guide you to the appropriate
        attorney for resolution of your issue.
      </p>
      <style jsx>{' p{ font-size: 1.15rem }'}</style>
      <ListWrapper title="Core Practices" list={sortedCorePractices} isBlock />
      <ListWrapper title="Additional Practices" list={sortedAdditionalPractices} isBlock />
      <ListWrapper
        title="Business Related Legal Services"
        list={sortedBusinessPractices}
        isSimple
      />
    </FullWidth>
  </>
);

export default PracticesDirectory;
