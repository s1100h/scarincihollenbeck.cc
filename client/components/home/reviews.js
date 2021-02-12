import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

function Accolade({ image, title }) {
  return (
    <Col sm={12} md={3}>
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
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
      height: 195,
      width: 164,
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
      {accolades.map((accolade) => <Accolade key={accolade.title} image={accolade.image} title={accolade.title} />)}
    </Row>
  );
}
