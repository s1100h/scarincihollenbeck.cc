import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

const logos = [
  {
    url: '/images/reviews/201-magazine.jpeg',
    alt: '201 Magazine',
    caption: "Bergen's top lawyers",
    width: 225,
    height: 150,
  },
  {
    url: '/images/reviews/meadowlands.jpeg',
    alt: 'Madowlands Chamber of Commerce',
    caption: 'Member of the month',
    width: 265,
    height: 150,
  },
  {
    url: '/images/reviews/trailblazers.jpeg',
    alt: 'National Law Journal',
    caption: 'National Law Journal Trailblazers',
    width: 315,
    height: 150,
  },
  {
    url: '/images/reviews/superlawyerslogo.png',
    alt: 'Super Lawyers',
    caption: 'Super Lawyers',
    width: 195,
    height: 164,
  },
];
function Accolade({
  url, alt, caption, width, height,
}) {
  return (
    <Col sm={12} md={4} className="mt-5">
      <figure>
        <img
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto d-block"
        />
        <figcaption className="mt-3 text-center">{caption}</figcaption>
      </figure>
    </Col>
  );
}
export default function HomeReviews() {
  return (
    <Row className="mt-5 px-2">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Awards & Accolades</h3>
        </div>
      </Col>
      {logos.map(({
        url, alt, caption, width, height,
      }) => (
        <Accolade
          key={alt}
          url={url}
          alt={alt}
          caption={caption}
          width={width}
          height={height}
        />
      ))}
    </Row>
  );
}
