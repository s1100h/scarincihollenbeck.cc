import Head from 'next/head';
import BarLoader from 'react-spinners/BarLoader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import FullWidth from '../../layouts/full-width';
import FirmMembers from '../../components/firmoverview/firm-members';
import { cityBackgroundJPG } from '../../utils/next-gen-images';
import { headers, createMarkup } from '../../utils/helpers';

export default function FirmOverview({slides, mainTabs, additionalInfo, members, mainContent, seo}){
  const subHeaderContent = mainContent.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const bodyContent = mainContent.replace(subHeaderContent, '');


  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <link rel="canonical" href={`http://scarincihollenbeck.com/${seo.canonicalLink}`} />
        <script type="application/ld+json">
          {` {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "${seo.title}",
            "description": "${seo.metaDescription}",
            "publisher": {
                "@type": "LegalServices",
                "name": "Scarinci Hollenbeck"
            }`}
        </script>
      </Head>
      <SingleSubHeader
        title="Firm Overview"
        subtitle={subHeaderContent}
        image={cityBackgroundJPG}
        height="325px"
      />
      <FullWidth>
        <div id="firm-overview">
          <div className="text-muted lead text-center" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
          <>
          { mainTabs.map((mt) => (
            <div className="w-100 mt-4 px-0" key={mt.title}>
              <div className="line-header">
                <h3>{mt.subTitle}</h3>
              </div>
              <div className="lead mt-4 text-center body-text" dangerouslySetInnerHTML={createMarkup(mt.content)} />
            </div>
          ))}
          <div className="border">
            <FirmMembers title="Managing Partners" members={members.managingPartners} type="/attorney/[slug]/" slug="/attorney" />
            <FirmMembers title="Partners" members={members.partners} type="/attorney/[slug]/" slug="/attorney"/>
            <FirmMembers title="Directors" members={members.admin} type="/administration/[slug]/" slug="/administration"/>
          </div>
          </>
        </div>
      </FullWidth>
      <Footer slides={slides} />
    </>
  )
}

export async function getStaticProps() {
  const [firmOverviewJson, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/firm-overview`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then(data => data.json())
  ]);
  const { mainTabs, additionalInfo, members, mainContent, seo } = firmOverviewJson;


  return {
    props: {
      slides,
      mainTabs,
      additionalInfo,
      members,
      mainContent,
      seo,
      firmOverviewJson
    },
  }
}