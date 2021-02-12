import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

function Accolade({ image, title, width, height }) {
  return (
    <Col sm={12} md={3} className="mt-5">
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        layout="intrinsic"
      />
    </Col>
  );
}
export default function HomeReviews() {
  const accolades = [
    {
      image: '/images/reviews/superlawyerslogo.png',
      title: 'Super Lawyers',
      height: 164,
      width: 195,
      ratings: 5,
    },
    {
      image: '/images/reviews/martindalehubbell.png',
      title: 'Martindale Hubbell',
      height: 180,
      width: 180,
      ratings: 5,
    }
  ];
  return (
    <Row className="mt-5">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Reviews & Accolades</h3>
        </div>
      </Col>
      {accolades.map((accolade) => (
        <Accolade
          key={accolade.title}
          image={accolade.image}
          title={accolade.title}
          width={accolade.width}
          height={accolade.height}
        />
      ))}
    </Row>
  );
}
