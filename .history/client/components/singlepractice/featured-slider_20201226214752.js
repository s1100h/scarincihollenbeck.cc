import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselsSimpleNews from 'components/carousels/simple-news';
import { addRandomKey } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function PracticeFeaturedSlider({ content }) {
  const firstEightArticles = content.filter((_, i) => i < 8);

  return (
    <div className="mt-4 w-100 d-block">
      {firstEightArticles.length > 3 ? (
        <CarouselsSimpleNews slides={firstEightArticles} />
      ) : (
        <Container>
          <Row>
            {firstEightArticles.map((v) => (
              <Col
                sm={12}
                md={4}
                key={addRandomKey(v.title)}
                className="article-card"
              >
                <Link href={v.link}>
                <a className="text-dark">
                  <Image
                    src={
                      v.image
                        ? v.image
                        : v.featuredImg
                          ? v.featuredImg
                          : '/images/no-image-found-diamond.png'
                    }
                    width={300}
                    height={150}
                    layout="intrinsic"
                    alt={v.title}
                  />
                  <h5 className={`${fontStyles.smallExcerpt} my-3`}>{v.title}</h5>
                </a>
                </Link>
            </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}
