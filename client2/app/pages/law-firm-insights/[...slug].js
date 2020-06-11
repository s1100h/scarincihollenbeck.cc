import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import ThreeColMiniSidebar from '../../layouts/three-col-mini-sidebar';
import Body from './body';
import Sidebar from './sidebar';
import EventSidebar from './event-sidebar';
import SocialShareSidebar from './social-share-sidebar';
import { headers } from '../../utils/helpers';
import { blogHeaderJPG, shDiamondPNG} from '../../utils/next-gen-images';

// TODO: Set up cookies
// https://github.com/maticzav/nookies

function LawFirmInsightsPost({
  slides,
  seo,
  title,
  subTitle,
  featuredImage,
  content,
  author,
  date,
  isEventCategory,
  categories,
  posts,
  attorneys,
  eventDetails,
  tags

}){
  

  return (
    <>
      <NavBar />
      {(content !== undefined) && (
        <>
        <Head>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription} />
          <link rel="canonical" href={seo.canonicalLink} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={`${router.pathname}/${seo.canonicalLink}`} />
          <meta property="og:site_name" content="Scarinci Hollenbeck" />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          {(seo.tags !== undefined && seo.tags.length > 0) ? seo.tags.map((t) => <meta key={t.ID || t.term_id} property="article:tag" content={t.name} />) : ''}
          <meta property="article:published_time" content={seo.publishedDate} />
          <meta property="article:modified_time" content={seo.updatedDate} />
          <meta property="og:updated_time" content={seo.updatedDate} />
          <meta property="og:image" content={(seo.featuredImg) ? seo.featuredImg : shDiamondPNG} />
          <meta property="og:image:secure_url" content={`${router.pathname}/${seo.canonicalLink}`} />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="150" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content={shDiamondPNG} />
          <meta name="twitter:creator" content="@S_H_Law" />
          <script type="application/ld+json">
            {`
              "@context": "https://schema.org", 
              "@type": "BlogPosting",
              "headline": "${seo.title}",
              "image": "${(seo.featuredImg) ? seo.featuredImg : shDiamondPNG}", 
              "genre": "${(seo.hasOwnProperty('primaryCategory')) && seo.primaryCategory.title}", 
              "keywords": ${(seo.tags !== undefined && seo.tags.length > 0) && seo.tags.map((tag) => tag.name.toString())}, 
              "publisher": "Scrarinci Hollenbeck, LLC",
              "url": "${router.pathname}/${seo.canonicalLink}",
              "datePublished": "${seo.publishedDate}",
              "dateCreated": "${seo.updatedDate}",
              "dateModified": "${seo.updatedDate}",
              "description": "${seo.metaDescription}",
              "articleBody": "${seo.postContent}",
                "author": {
                "@type": "Person",
                "name": "${seo.author}"
              }
            
            `}
          </script>
          </Head>
          <SingleSubHeader
            image={blogHeaderJPG}
            title={title}
            subtitle={subTitle}
            />
            <div id="single">
            <ThreeColMiniSidebar
              body={(
                <Body
                  firstFeaturedImg={firstFeaturedImg}
                  bodyContent={bodyContent}
                  author={author}
                  eventCat={isEventCategory}
                  title={title}
                  author={author}
                  date={date}
                  tags={tags}
                />
              )}
              OneSidebar={(
                <SocialShareSidebar
                  title={title}
                />
              )}
              TwoSidebar={(eventCat === true) ? (
                <EventSidebar
                  eventDetails={eventDetails}
                  attorneys={attorneys}
                />
              ) : (
                <Sidebar
                  posts={posts}
                  attorneys={attorneys}
                />
              )}
            />
            </div>
          <Footer slides={slides} />        
        </>
      )}      
    </>
  )   
}

export async function getStaticPaths() {
  const postsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/single/list/law-firm-insights`, { headers });
  const postsJson = await postsResponse.json();
  return  {
    paths: postsJson.map(link => `/law-firm-insights/${link}` || `/law-firm-insights/[slug]/${link}`) || [],
    fallback: true,
  }
}
export async function getStaticProps({params}) {
  const slug = params.slug[params.slug.length - 1];
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const lawFirmInsightsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/single/post/${slug}`, { headers });
  const lawFirmInsightsJSON = await lawFirmInsightsResponse.json();
  const slides = await sliderResponse.json();

  const {
    seo,
    title,
    subTitle,
    featuredImage,
    content,
    author,
    date,
    isEventCategory,
    categories,
    posts,
    attorneys,
    eventDetails,
    tags
  } = lawFirmInsightsJSON;

  // author, attorney

  return {
    props: {
      slides,
      seo,
      title,
      subTitle,
      featuredImage,
      content,
      author,
      date,
      isEventCategory,
      categories,
      posts,
      attorneys,
      eventDetails,
      tags
    },
  }
}

export default withRouter(LawFirmInsightsPost);