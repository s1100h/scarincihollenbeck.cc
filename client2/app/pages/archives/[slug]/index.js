import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Breadcrumbs from '../../../components/breadcrumbs';
import ArchiveLayout from '../../../layouts/archive-layout';
import Body from './body';
import { headers } from '../../../utils/helpers';
import { attorneyArchiveHeaderJPG } from '../../../utils/next-gen-images';


function Archive({ slides, seo, results, pages, term, posts, firmNews, firmEvents, firmInsights, router}){

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
              categorySlug={term}
              next={2}
              prev={1}
              pageNums={pages}
              news={firmNews}
              events={firmEvents}
              insight={firmInsight}
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
  const archive = ['/archives/new-jersey', '/archives/scarinci-hollenbeck', '/archives/donald-scarinci'];

  return  {
    paths: archive.map(link => link) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const postResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/archive/query/${params.slug}/1`, { headers });
  const articlesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, { headers });
  const postJson = await postResponse.json();
  const articleJson = await articlesResponse.json();
  const { results, pages, posts, term } = postJson;
  const { firmNews, firmEvents, firmInsights } = articleJson;

  const seo = {
    title: `Article archives for term ${term} | Scarinci Hollenbeck`,
    metaDescription: `On Scarinci Hollenbeck's popular legal blog, you can find articles pertaining to ${term} and much, much more.`,
    canonicalLink: `archives/${term}`
  };
  

  return {
    props: {
      slides,
      seo,
      results,
      pages,
      term,
      posts,
      firmNews,
      firmEvents,
      firmInsights
    },
  }
}

export default withRouter(Archive)
