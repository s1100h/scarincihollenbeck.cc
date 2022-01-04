import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';

const RelatedArticles = ({ data }) => {
  const posts = data?.posts.edges.filter((_, i) => i <= 2);

  return (
    <Container>
      <Row className="my-4">
        {posts.map(({ node }) => (
          <Col sm={12} md={4} key={node.title} className="my-3">
            <Link href={node.uri.replace('https://scarincihollenbeck.com', '')}>
              <a className="text-center mx-auto d-block">
                <Image
                  alt={node.title}
                  src={
                    formatSrcToCloudinaryUrl(node.featuredImage?.node?.sourceUrl)
                    || '/images/no-image-found-diamond.png'
                  }
                  width={300}
                  height={150}
                  className="rounded"
                />
                <small className="text-dark d-block">
                  <strong>{node.title}</strong>
                </small>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedArticles;
