import ArchivePracticeSimpleList from 'components/organisms/practices/simple-list';
import ArchivePracticeBlockList from 'components/organisms/practices/block-list';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import lineHeaderStyles from 'styles/LineHeader.module.css';

export default function PracticesPage({
  site,
  seo,
  sortedCorePractices,
  sortedAdditionalPractices,
  sortedBusienssPractices,
}) {
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={seo.canonicalUrl}
      />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={2} />
      <FullWidth>
        <p>
          As you scroll through the law practices and locate the sub-practice groups that most
          closely identifies with your need, feel free to contact any of the attorneys identified
          within the sub-practice group. Feel free to contact any of the Section Chiefs identified
          under each of the named law practices. They will be happy to assist you and guide you to
          the appropriate attorney for resolution of your issue.
        </p>
        <style jsx>{' p{ font-size: 1.15rem }'}</style>
        <div className="mt-4 px-0">
          <div className={lineHeaderStyles.lineHeader}>
            <h3>Core Practices</h3>
          </div>
        </div>
        <ArchivePracticeBlockList list={sortedCorePractices} />
        <div className="mt-4 px-0">
          <div className={lineHeaderStyles.lineHeader}>
            <h3>Additional Practices</h3>
          </div>
        </div>
        <ArchivePracticeBlockList list={sortedAdditionalPractices} />
        <div className="mt-4 px-0">
          <div className={lineHeaderStyles.lineHeader}>
            <h3>Business Related Legal Services</h3>
          </div>
        </div>
        <ArchivePracticeSimpleList list={sortedBusienssPractices} />
      </FullWidth>
    </>
  );
}
