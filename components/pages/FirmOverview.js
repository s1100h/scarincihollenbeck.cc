import SingleSubHeader from 'layouts/SingleSubHeader';
import FullWidth from 'layouts/FullWidth';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { createMarkup, formatPageImageToCloudinaryUrl } from 'utils/helpers';
import dynamic from 'next/dynamic';

const FirmMembers = dynamic(() => import('components/organisms/firmoverview/members'));

export default function FirmOverviewPage({
  mainTabs,
  seo,
  bodyContent,
  sortedAdmins,
  canonicalUrl,
  title,
  members,
  subHeaderContent,
}) {
  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <SingleSubHeader
        title={title}
        subtitle={subHeaderContent[0].replace(/<\/?[^>]+(>|$)/g, '')}
        span={6}
        offset={3}
      />
      <FullWidth>
        <div
          className="featured"
          dangerouslySetInnerHTML={createMarkup(formatPageImageToCloudinaryUrl(bodyContent))}
        />
        {mainTabs.map((tab) => (
          <div
            key={tab.title}
            className="mt-4 featured"
            dangerouslySetInnerHTML={createMarkup(formatPageImageToCloudinaryUrl(tab.content))}
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
