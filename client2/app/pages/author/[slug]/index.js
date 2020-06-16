import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Breadcrumbs from '../../../components/breadcrumbs';
import ArchiveLayout from '../../../layouts/archive-layout';
import Body from './body';
import Sidebar from './sidebar';
import { headers } from '../../../utils/helpers';

const request = require('superagent');

export default function Author({ slides, seo, bio, currentUser, practices, firmNews, firmEvents, firmInsights}){
  const router = useRouter()
  const { page } = router.query
  const [results, setResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // fetch query results
      let currentPage = 1;

      if(page !== undefined) {
        currentPage = page;
      }

      const fetchQuery = request.get(`http://localhost:8400//wp-json/author/posts/${currentUser}/${currentPage}`)
        .set(headers)
        .then((res) => ({
          status: res.status,
          body: JSON.parse(res.text),
        }))
        .catch((err) => err);

      fetchQuery.then((results) => {
        const { status, body } = results;

        if (status === 200) {
          const { posts, pages, results } = body;
           
          setResults(results);
          setPosts(posts);
          setPages(pages);
          setCurrentPage(currentPage);
        }
      });
    };
    
    fetchData();
    
  }, [page]);
  // 
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`https://scarincihollenbeck.com/author/${seo.canonicalLink}`} />
      </Head>
      <NavBar />
      <div id="archives">
        <ArchiveLayout
          header={(<Breadcrumbs breadCrumb={[currentUser, currentPage]} categorySlug={currentUser} />)}
          body={(
            <Body
              results={results}
              term={currentUser}
              pages={pages}
              currentPage={currentPage}
              news={firmNews}
              events={firmEvents}
              insight={firmInsights}
            />
          )}
          sidebar={(<Sidebar bio={bio} practices={practices} />)}
        />
      </div>
      <Footer slides={slides} />
    </>
  )
}

export async function getStaticPaths() {
  const authorResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/author/list`, { headers });
  const authors = await authorResponse.json();

  return  {
    paths: authors.map(author => `/author/${author}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const authorResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/author/bio/${params.slug}`, { headers });
  const articlesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, { headers });
  const authorJson = await authorResponse.json();
  const articlesJson = await articlesResponse.json();
  const { bio, practices, currentUser } = authorJson;
  const { firmNews, firmInsights, firmEvents } = articlesJson;

  const seo = {
    title: `Article Archives For Term ${currentUser} | Scarinci Hollenbeck`,
    metaDescription: `On Scarinci Hollenbeck's popular legal blog, you can find articles pertaining to ${currentUser} and much, much more.`,
    canonicalLink: `archives/${currentUser}`
  };


  

  return {
    props: {
      slides,
      seo,
      bio,
      currentUser,
      practices,
      firmNews,
      firmEvents,
      firmInsights
    },
  }
}