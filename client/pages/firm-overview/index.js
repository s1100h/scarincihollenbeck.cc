import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import FirmMembers from 'components/firmoverview/members';
import { headers, createMarkup, sortByKey } from 'utils/helpers';

export default function FirmOverview({
  mainTabs, members, mainContent, seo,
}) {
  const subHeaderContent = mainContent.match(/<h2>(.*?)<\/h2>/g);
  const bodyContent = mainContent.replace(subHeaderContent[0], '');
  const sortedAdmins = sortByKey(members.admin, 'orderBy');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        title="Firm Overview"
        subtitle={subHeaderContent[0].replace(/<\/?[^>]+(>|$)/g, '')}
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg"
        height="325px"
      />
      <FullWidth>
        <div id="firm-overview">
          <div
            className="text-muted lead text-center"
            dangerouslySetInnerHTML={createMarkup(bodyContent)}
          />
          <>
            {mainTabs.map((mt) => (
              <div className="w-100 mt-4 px-0" key={mt.title}>
                <div className="line-header">
                  <h3>{mt.subTitle}</h3>
                </div>
                <div
                  className="lead mt-4 text-center body-text"
                  dangerouslySetInnerHTML={createMarkup(mt.content)}
                />
              </div>
            ))}
            <div className="border">
              <FirmMembers
                title="Managing Partners"
                members={members.managingPartners}
                type="/attorney/[slug]/"
                slug="/attorney"
              />
              <FirmMembers
                title="Partners"
                members={members.partners}
                type="/attorney/[slug]/"
                slug="/attorney"
              />
              <FirmMembers
                title="Directors"
                members={sortedAdmins}
                type="/administration/[slug]/"
                slug="/administration"
              />
            </div>
          </>
        </div>
      </FullWidth>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const [firmOverviewJson] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/firm-overview/content`, {
      headers,
    }).then((data) => data.json()),
  ]);
  const {
    mainTabs,
    additionalInfo,
    members,
    mainContent,
    seo,
  } = firmOverviewJson;

  return {
    props: {
      mainTabs,
      additionalInfo,
      members,
      mainContent,
      seo,
      firmOverviewJson,
    },
  };
}
