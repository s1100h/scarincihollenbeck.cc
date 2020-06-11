import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../../../components/navbar';
import Footer from '../../../..//components/footer';
import Breadcrumbs from '../../../../components/breadcrumbs';
import ArchiveLayout from '../../../../layouts/archive-layout';
import Body from '../body';
import { headers } from '../../../../utils/helpers';
import { attorneyArchiveHeaderJPG } from '../../../../utils/next-gen-images';


function ArchivePage({ slides, seo, results, pages, currentPage, term, posts, firmNews, firmEvents, firmInsights, router}){

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${router.pathname}/${seo.canonicalLink}`} />
      </Head>
      <NavBar />
      <div id="archives">
        <ArchiveLayout
          header={(<Breadcrumbs breadCrumb={[term, currentPage]} categorySlug={term} />)}
          body={(
            <Body
              results={results}
              term={term}
              pages={pages}
              currentPage={currentPage}
              news={firmNews}
              events={firmEvents}
              insight={firmInsights}
            />
          )}
          sidebar={(<>Sidebar here...</>)}
        />
      </div>
      <Footer slides={slides} />
    </>
  )
}

export async function getStaticPaths() {
  const catResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/all-categories/list`, { headers });
  const catJson = await catResponse.json();

  return  {
    paths:catJson.map(cat => `/archives/${cat.link}/page/${cat.id}`) || [],
    fallback: true,
  }
  
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const postResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/archive/query/${params.slug}/${params.id}`, { headers });
  const articlesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, { headers });
  const postJson = await postResponse.json();
  const articleJson = await articlesResponse.json();
  const { results, pages, posts, currentPage, term } = postJson;
  const { firmNews, firmEvents, firmInsights } = articleJson;

  const seo = {
    title: `Article Archives For Term ${term} | Scarinci Hollenbeck`,
    metaDescription: `On Scarinci Hollenbeck's popular legal blog, you can find articles pertaining to ${term} and much, much more.`,
    canonicalLink: `archives/${term}`
  };
  

  return {
    props: {
      slides,
      seo,
      results,
      pages,
      currentPage,
      term,
      posts,
      firmNews,
      firmEvents,
      firmInsights
    },
  }
}

export default withRouter(ArchivePage)
