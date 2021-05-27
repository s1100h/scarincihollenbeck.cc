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
        image="/images/City-Night-Background-1800x400-JPG.jpg"
      />
      <FullWidth>
        <div dangerouslySetInnerHTML={createMarkup(bodyContent)} />
        {mainTabs.map((tab) => (
          <div
            key={tab.title}
            className="mt-4"
            dangerouslySetInnerHTML={createMarkup(tab.content)}
          />
        ))}
        <div className="border">
          <FirmMembers
            title="Managing Partners"
            members={members.managingPartners}
          />
          <FirmMembers title="Partners" members={members.partners} />
          <FirmMembers title="Directors" members={sortedAdmins} />
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
  };
}
