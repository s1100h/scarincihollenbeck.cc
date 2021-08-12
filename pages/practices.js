import Head from 'next/head';
import { NextSeo } from 'next-seo';
import ArchivePracticeSimpleList from 'components/archivepractice/simple-list';
import ArchivePracticeBlockList from 'components/archivepractice/block-list';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import { sortByKey, headers } from 'utils/helpers';
import { buildBusinessSchema } from 'utils/json-ld-schemas';
import lineHeaderStyles from 'styles/LineHeader.module.css';

function sortPracticeCategorys(list) {
  const core = list.filter((e) => e.category === 'Core Practices');
  const additional = list.filter((e) => e.category === 'Additional Practices');
  const business = list.filter(
    (e) => e.category === 'Business Related Practices',
  );

  return {
    core,
    additional,
    business,
  };
}

export default function PracticesPage({ core, additional, business }) {
  const sortedCorePractices = sortByKey(core, 'title');
  const sortedAdditionalPractices = sortByKey(additional, 'title');
  const sortedBusienssPractices = sortByKey(business, 'title');
  const title = 'Attorney Legal Practices | Scarinci Hollenbeck';
  const metaDesc = "Scarinci Hollenbeck attorneys provide a fully scaled platform of law practices for today's entrepreneurs in the New York and New Jersey area.";

  return (
    <>
      <NextSeo
        title={title}
        description={metaDesc}
        canonical="https://scarincihollenbeck.com/practices"
        openGraph={{
          type: 'website',
          url: 'https://scarincihollenbeck.com/',
          title,
          description: metaDesc,
          images: [
            {
              url: 'https://scarincihollenbeck.com/images/no-image-found-diamond.png',
              width: 300,
              height: 140,
              alt: 'Scarinci Hollenbeck',
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: 'https://scarincihollenbeck.com',
          cardType:
            'With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm.',
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBusinessSchema()),
          }}
        />
      </Head>
      <SingleSubHeader
        title="Legal Practices"
        subtitle="Scarinci Hollenbeck attorneys at law provide a fully scaled platform of law practices for today's businesses. Recognizing the complexity of the law practices, we have staffed each practice group with lawyers experienced in the particular area of your need."
        span={7}
        offset={2}
      />
      <FullWidth>
        <p>
          As you scroll through the law practices and locate the sub-practice
          groups that most closely identifies with your need, feel free to
          contact any of the attorneys identified within the sub-practice group.
          Feel free to contact any of the Section Chiefs identified under each
          of the named law practices. They will be happy to assist you and guide
          you to the appropriate attorney for resolution of your issue.
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

export async function getStaticProps() {
  const [practiceJson] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/practice-portal/page/', {
      headers,
    }).then((data) => data.json()),
  ]);
  const results = await sortPracticeCategorys(practiceJson.practices);
  const { core, additional, business } = results;

  return {
    props: {
      core,
      additional,
      business,
    },
    revalidate: 1,
  };
}
