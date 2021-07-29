import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

const logos = [
  {
    url: '/images/reviews/Power50-ScarinciHollenbeck.png',
    alt: 'NJBiz\'s 2021 Law Power 50 List ',
    caption: 'NJBiz\'s 2021 Law Power 50 List ',
    width: 190,
    height: 190,
  },
  {
    url: '/images/reviews/BestLawFirmsStandardBadge.png',
    alt: 'Best Lawyers',
    caption: 'U.S. News & World Report',
    width: 203,
    height: 200,
  },  
  {
    url: '/images/reviews/trailblazers.jpeg',
    alt: 'National Law Journal',
    caption: 'National Law Journal Trailblazers',
    width: 263,
    height: 125,
  },
  {
    url: '/images/reviews/sl-badge-l-g-2021.png',
    alt: 'Super Lawyers',
    caption: 'Super Lawyers',
    width: 179,
    height: 149,
  },  
  // {
  //   url: '/images/reviews/meadowlands.jpeg',
  //   alt: 'Madowlands Chamber of Commerce',
  //   caption: 'Member of the month',
  //   width: 265,
  //   height: 150,
  // }
];
function Accolade({
  url, alt, caption, width, height,
}) {
  return (
    <Col sm={12} md={3} className="mt-5">
      <figure className={`mx-auto d-block text-center ${(alt === 'National Law Journal') ? 'my-4' : 'my-0'}`}>
        <img
          src={url}
          alt={alt}
          width={width}
          height={height}
        />
        {/* <figcaption className="mt-3 text-center">{caption}</figcaption> */}
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
