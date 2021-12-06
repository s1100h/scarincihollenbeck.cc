/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BASE_API_URL } from 'utils/constants';

export default function ArticleHeroPractice({ blogId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const url = `${BASE_API_URL}/wp-json/wp/v2/posts?categories=${blogId}`;

      const request = await fetch(url).then((data) => data.json());
      const modPosts = request
        .filter((_, i) => i <= 2)
        .map((post) => ({
          title: post.title.rendered,
          link: post.link.replace('https://scarincihollenbeck.com', ''),
          image: post.better_featured_image
            ? post.better_featured_image.source_url
            : '/images/no-image-found-diamond-750x350.png',
        }));

      setPosts(modPosts);
    };

    if (posts.length <= 0) {
      fetchPosts();
    }
  }, [blogId]);

  return (
    <Container>
      <Row className="my-4">
        {posts.map((article) => (
          <Col sm={12} md={4} key={article.title} className="my-3">
            <Link href={article.link}>
              <a className="text-center mx-auto d-block">
                <Image
                  alt={article.title}
                  src={article.image || '/images/no-image-found-diamond.png'}
                  width={300}
                  height={150}
                  className="rounded"
                />
                <small className="text-dark">
                  <strong>{article.title}</strong>
                </small>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
