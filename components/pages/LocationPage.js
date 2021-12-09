import Head from 'next/head';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/organisms/locations/body';
import SideBar from 'components/organisms/locations/sidebar';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { CURRENT_DOMAIN } from 'utils/constants';

export default function LocationPage({
  seo, offices, currentOffice, posts,
}) {
  const canonicalUrl = `${CURRENT_DOMAIN}/${seo.canonicalLink}`;

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
      />
      <Head>
        <script
          key={currentOffice.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocationSchema(seo, currentOffice.mapLink)),
          }}
        />
      </Head>
      <SingleSubHeader
        title={currentOffice.name}
        subtitle={seo.metaDescription}
        offset={2}
        span={7}
      />
      <LargeSidebar
        body={(
          <BodyContent
            attorneys={currentOffice.attorneys}
            practices={currentOffice.practices}
            map={currentOffice.mapLink}
            title={currentOffice.name}
          />
        )}
        sidebar={(
          <SideBar
            title={currentOffice.name}
            posts={posts}
            offices={offices}
            startingKey={currentOffice.name}
          />
        )}
      />
    </>
  );
}
