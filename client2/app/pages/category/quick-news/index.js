import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Breadcrumbs from '../../../components/breadcrumbs';
import ArchiveLayout from '../../../layouts/archive-layout';
import Body from './body';
import { headers } from '../../../utils/helpers';

function Archive({ slides, seo, results, pages, currentPage, term, posts, firmNews, firmEvents, firmInsights, router}){

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
          header={(<Breadcrumbs breadCrumb={[term, 1]} categorySlug={term} />)}
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
  return  {
    paths: ['/category/quick-news'] || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const postResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/archive/query/quick-news/1`, { headers });
  const articlesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, { headers });
  const postJson = await postResponse.json();
  const articleJson = await articlesResponse.json();
  const { results, pages, posts, currentPage, term } = postJson;
  const { firmNews, firmEvents, firmInsights } = articleJson;

  const seo = {
    title: 'Scarinci Hollenbeck Laywers News & Media Appearances',
    metaDescription: 'The Scarinci Hollenbeck attorneys have their finger on the pulse of the latest legal issues that affect businesses through New York & New Jersey.',
    canonicalLink: 'category/quick-news'
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

export default withRouter(Archive)
