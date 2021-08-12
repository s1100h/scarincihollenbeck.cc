import { NextSeo } from 'next-seo';
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
        canonical="http://scarincihollenbeck.com/firm-overview"
      />
      <SingleSubHeader
        title="Firm Overview"
        subtitle={subHeaderContent[0].replace(/<\/?[^>]+(>|$)/g, '')}
        span={6}
        offset={3}
      />
      <FullWidth>
        <div
          className="featured"
          dangerouslySetInnerHTML={createMarkup(bodyContent)}
        />
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
  const [restResponse] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/firm-overview/content', {
      headers,
    }).then((data) => data.json()),
  ]);
  const {
    mainTabs, members, mainContent, seo,
  } = restResponse;

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
