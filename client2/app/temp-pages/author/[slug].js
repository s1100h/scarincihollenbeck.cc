import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Breadcrumbs from '../../components/breadcrumbs';
import ArchiveLayout from '../../layouts/archive-layout';
import Body from '../../components/author/body';
import Sidebar from '../../components/author/sidebar';
import { headers } from '../../utils/helpers';

const request = require('superagent');

export default function Author({ slides, authorJson, firmNews, firmEvents, firmInsights}){
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

      const fetchQuery = request.get(`http://localhost:8400/wp-json/author/posts/${authorJson.currentUser}/${currentPage}`)
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
  console.log(results);
  return (
    <>
      <NavBar />
      {(results.length <= 0) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color={"#DB2220"} />
          </Row>
        </Container>
      ) : (
          <>
            <div id="archives">
              <ArchiveLayout
                header={(<Breadcrumbs breadCrumb={[authorJson.currentUser, currentPage]} categorySlug={authorJson.currentUser} />)}
                body={(
                  <Body
                    results={results}
                    term={authorJson.currentUser}
                    pages={pages}
                    currentPage={currentPage}
                    news={firmNews}
                    events={firmEvents}
                    insight={firmInsights}
                  />
                )}
                sidebar={(<Sidebar bio={authorJson.bio} practices={authorJson.practices} />)}
              />
            </div>
          </>
        )}

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
  const { firmNews, firmInsights, firmEvents } = articlesJson;


  return {
    props: {
      slides,
      authorJson,
      firmNews,
      firmEvents,
      firmInsights
    },
  }
}