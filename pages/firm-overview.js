import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import FirmMembers from 'components/pages/firmoverview/members';
import { headers, createMarkup, sortByKey } from 'utils/helpers';
import { SITE_URL, BASE_API_URL } from 'utils/constants';

export default function FirmOverview({
  mainTabs, members, mainContent, seo,
}) {
  const subHeaderContent = mainContent.match(/<h2>(.*?)<\/h2>/g);
  const bodyContent = mainContent.replace(subHeaderContent[0], '');
  const sortedAdmins = sortByKey(members.admin, 'orderBy');
  const canonicalUrl = `${SITE_URL}/firm-overview`;
  const title = 'Firm Overview';

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader
        title={title}
        subtitle={subHeaderContent[0].replace(/<\/?[^>]+(>|$)/g, '')}
        span={6}
        offset={3}
      />
      <FullWidth>
        <div className="featured" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
        {mainTabs.map((tab) => (
          <div
            key={tab.title}
            className="mt-4 featured"
            dangerouslySetInnerHTML={createMarkup(tab.content)}
          />
        ))}
        <style jsx>{' div.featured{ font-size: 1.15rem }'}</style>
        <div className="border">
          <FirmMembers
            type="attorney"
            title="Managing Partners"
            members={members.managingPartners}
          />
          <FirmMembers type="attorney" title="Partners" members={members.partners} />
          <FirmMembers type="admin" title="Directors" members={sortedAdmins} />
        </div>
      </FullWidth>
    </>
  );
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/firm-overview/content`, { headers })
    .then((data) => data.json())
    .catch((err) => err);

  const {
    mainTabs, members, mainContent, seo,
  } = request;

  return {
    props: {
      mainTabs,
      members,
      mainContent,
      seo,
    },
    revalidate: 1,
  };
}
