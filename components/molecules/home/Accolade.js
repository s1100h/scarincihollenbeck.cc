import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Accolade = ({ image, colSize }) => (
  <Col sm={12} md={colSize} className="mt-5">
    <div
      className={
        image.alt === 'National Law Journal Trailblazers'
          ? 'mx-auto d-block text-center additional-positioning'
          : 'mx-auto d-block text-center'
      }
    >
      <Image {...image} layout="intrinsic" />
    </div>
    <style jsx>
      {`
        @media (min-width: 1200px) {
          .additional-positioning {
            position: relative;
            right: 0px;
          }
        }
      `}
    </style>
  </Col>
);

export default Accolade;
