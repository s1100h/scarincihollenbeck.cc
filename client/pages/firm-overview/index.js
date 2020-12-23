import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import FirmMembers from 'components/firmoverview/members';
import client from 'utils/graphql-client';
import { getFirmOverviewPage } from 'queries/pages';
import { allAdministraionQuery } from 'queries/administration';
import { headers, createMarkup } from 'utils/helpers';
import lineHeaderStyles from 'styles/LineHeader.module.css';

function formatAttorneyList(list) {
  return list.map((item) => ({
    id: item.id,
    name: item.title,
    image: item.better_featured_image,
    number: item.phone,
    email: item.email,
    title: item.designation,
    uri: `/attorney${item.link}`,
  }));
}

function formatAdministrationList(list) {
  return list.map((item, index) => ({
    id: `${index}x${item.node.administration.name}0${
      index * Math.floor(Math.random() * 10000) + 1
    }`,
    name: item.node.administration.name,
    image: item.node.featuredImage.node.sourceUrl,
    number: `201-896-4100 ${item.node.administration.phoneExtension}`,
    email: item.node.administration.email,
    title: item.node.administration.title,
    uri: item.node.uri,
  }));
}
export default function FirmOverview({
  partners,
  managingPartners,
  administration,
  page,
}) {
  const subHeaderContent = page.content.match(/<h2>(.*?)<\/h2>/g);
  const bodyContent = page.content.replace(subHeaderContent[0], '');

  return (
    <>
      <NextSeo
        title={page.seo.title}
        description={page.seo.metaDescription}
        canonical="http://scarincihollenbeck.com/firm-overview"
      />
      <SingleSubHeader
        title="Firm Overview"
        subtitle={subHeaderContent[0].replace(/<\/?[^>]+(>|$)/g, '')}
        image="/images/City-Night-Background-1800x400-JPG.jpg"
        height="390px"
      />
      <FullWidth>
        <div
          className="text-muted lead text-center"
          dangerouslySetInnerHTML={createMarkup(bodyContent)}
        />
        {page.firmOverviewPageContentTabs.mainTabs.map((tab) => (
          <div key={tab.title}>
            <div className={lineHeaderStyles.lineHeader}>
              <h3>{tab.subtitle}</h3>
            </div>
            <div
              className="lead my-4 text-center body-text"
              dangerouslySetInnerHTML={createMarkup(tab.content)}
            />
          </div>
        ))}
        <div className="border">
          <FirmMembers
            title="Managing Partners"
            members={formatAttorneyList(managingPartners)}
            type="/attorney/[slug]/"
          />
          <FirmMembers
            title="Partners"
            members={formatAttorneyList(partners)}
            type="/attorney/[slug]/"
          />
          <FirmMembers
            title="Directors"
            members={formatAdministrationList(administration)}
            type="/administration/[slug]/"
          />
        </div>
      </FullWidth>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // get the firm overview page contents
  const firmOverviewContent = await client.query(getFirmOverviewPage, {});

  // get a list of managing partners & partners
  const [attorneyResponse] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      {
        headers,
      },
    ).then((data) => data.json()),
  ]);

  // managing partners
  const managingPartners = attorneyResponse.filter(
    (a) => a.designation === 'Managing Partner',
  );

  // partners
  const partners = attorneyResponse.filter(
    (a) => a.designation.indexOf('Partner') > -1
      && a.designation !== 'Managing Partner',
  );

  // get a list of administration
  const allAdministrationContent = await client.query(allAdministraionQuery, {});

  return {
    props: {
      managingPartners,
      partners,
      administration: allAdministrationContent.data.administrations.edges,
      page: firmOverviewContent.data.pages.nodes[0],
    },
  };
}
