import Head from 'next/head';
import { withRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import ThreeColMiniSidebar from '../../layouts/three-col-mini-sidebar';
import Body from '../../components/post/body';
import Sidebar from '../../components/post/sidebar';
import SocialShareSidebar from '../../components/post/social-share-sidebar';
import { headers } from '../../utils/helpers';
import { blogHeaderJPG, shDiamondPNG} from '../../utils/next-gen-images';

function ClientAlert({ slides, post, router }){ 

  return (
    <>
      <NavBar />
      {(post === undefined) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color={"#DB2220"} />
          </Row>
        </Container>
       
      ) : (
        <>
          <Head>
            <title>{post.seo.title}</title>
            <meta name="description" content={post.seo.metaDescription} />
            <link rel="canonical" href={post.seo.canonicalLink} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={post.seo.title} />
            <meta property="og:description" content={post.seo.metaDescription} />
            <meta property="og:url" content={`${router.pathname}/${post.seo.canonicalLink}`} />
            <meta property="og:site_name" content="Scarinci Hollenbeck" />
            <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
            {(post.seo.tags !== undefined && post.seo.tags.length > 0) ? post.seo.tags.map((t) => <meta key={t.ID || t.term_id} property="article:tag" content={t.name} />) : ''}
            <meta property="article:published_time" content={post.seo.publishedDate} />
            <meta property="article:modified_time" content={post.seo.updatedDate} />
            <meta property="og:updated_time" content={post.seo.updatedDate} />
            <meta property="og:image" content={(post.seo.featuredImg) ? post.seo.featuredImg : shDiamondPNG} />
            <meta property="og:image:secure_url" content={`${router.pathname}/${post.seo.canonicalLink}`} />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="150" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={post.seo.metaDescription} />
            <meta name="twitter:title" content={post.seo.title} />
            <meta name="twitter:site" content="@S_H_Law" />
            <meta name="twitter:image" content={shDiamondPNG} />
            <meta name="twitter:creator" content="@S_H_Law" />
            <script type="application/ld+json">
              {`
                "@context": "https://schema.org", 
                "@type": "BlogPosting",
                "headline": "${post.seo.title}",
                "image": "${(post.seo.featuredImg) ? post.seo.featuredImg : shDiamondPNG}", 
                "genre": "${(post.seo.hasOwnProperty('primaryCategory')) && post.seo.primaryCategory.title}", 
                "keywords": ${(post.seo.tags !== undefined && post.seo.tags.length > 0) && post.seo.tags.map((tag) => tag.name.toString())}, 
                "publisher": "Scrarinci Hollenbeck, LLC",
                "url": "${router.pathname}/${post.seo.canonicalLink}",
                "datePublished": "${post.seo.publishedDate}",
                "dateCreated": "${post.seo.updatedDate}",
                "dateModified": "${post.seo.updatedDate}",
                "description": "${post.seo.metaDescription}",
                "articleBody": "${post.seo.postContent}",
                  "author": {
                  "@type": "Person",
                  "name": "${post.seo.author}"
                }
              
              `}
            </script>
            </Head>
            <SingleSubHeader
              image={blogHeaderJPG}
              title={post.title}
              subtitle={post.subTitle}
              />
            <div id="single">
              <ThreeColMiniSidebar
                body={(
                  <Body
                    featuredImage={post.featuredImage}
                    content={post.content}
                    eventCat={post.isEventCategory}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    tags={post.tags}
                  />
                )}
                OneSidebar={(<SocialShareSidebar title={post.title} />)}
                TwoSidebar={(<Sidebar
                  posts={post.posts}
                  attorneys={post.attorneys}
                />)}
              />
              <Footer slides={slides} />
            </div>
          </>
        )}     
        </>
      )   
  }

export async function getStaticPaths() {
  const postsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single/list/client-alert`, { headers });
  const postsJson = await postsResponse.json();

  return  {
    paths: postsJson.map(link => `/client-alert/[...slug]/${link}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const firmEventsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single/post/${params.slug[params.slug.length - 1]}`, { headers });
  const post = await firmEventsResponse.json();
  const slides = await sliderResponse.json();

  return {
    props: {
      slides,
      post
    },
  }
}

export default withRouter(ClientAlert);