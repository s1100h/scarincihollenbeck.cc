import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import ArchivePracticeSimpleList from 'components/archivepractice/simple-list';
import ArchivePracticeBlockList from 'components/archivepractice/block-list';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import { sortByKey } from 'utils/helpers';
import client from 'utils/graphql-client';
import { getPracticesByInput } from 'queries/practices';
import lineHeaderStyles from 'styles/LineHeader.module.css';

export default function PracticesPage({
  corePractices, additionalPractices, businessRelatedPractices,
}) {
  const sortedCorePractices = sortByKey(corePractices, 'title');
  const sortedAdditionalPractices = sortByKey(additionalPractices, 'title');
  const sortedBusienssPractices = sortByKey(businessRelatedPractices, 'title');

  return (
    <>
      <NextSeo
        title="Attorney Legal Practices | Scarinci Hollenbeck"
        description="Scarinci Hollenbeck attorneys provide a fully scaled platform of law practices for today's entrepreneurs in the New York and New Jersey area."
        canonical="http://scarincihollenbeck.com/practices"
      />
      <SingleSubHeader
        title="Legal Practices"
        subtitle="Scarinci Hollenbeck attorneys at law provide a fully scaled platform of law practices for today's businesses. Recognizing the complexity of the law practices, we have staffed each practice group with lawyers experienced in the particular area of your need."
        image="/images/City-Night-Background-1800x400-JPG.jpg"
        height="400px"
      />
      <FullWidth>
        <p className="text-muted lead text-center w-100">
          As you scroll through the law practices and locate the
          sub-practice groups that most closely identifies with your need,
          feel free to contact any of the attorneys identified within the
          sub-practice group. Feel free to contact any of the Section Chiefs
          identified under each of the named law practices. They will be
          happy to assist you and guide you to the appropriate attorney for
          resolution of your issue.
        </p>
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
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const firmCorePracticesContent = await client.query(
    getPracticesByInput('Core Practices'),
    {},
  );

  const firmBusinessRelatedContent = await client.query(
    getPracticesByInput('Business Related Practices'),
    {},
  );

  const firmAdditionalContent = await client.query(
    getPracticesByInput('Additional Practices'),
    {},
  );

  return {
    props: {
      corePractices: firmCorePracticesContent.data.searchWP.nodes.filter((value) => JSON.stringify(value) !== '{}'),
      additionalPractices: firmAdditionalContent.data.searchWP.nodes.filter((value) => JSON.stringify(value) !== '{}'),
      businessRelatedPractices: firmBusinessRelatedContent.data.searchWP.nodes.filter((value) => JSON.stringify(value) !== '{}'),
    },
    revalidate: 1,
  };
}
