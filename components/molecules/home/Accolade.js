import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

const Accolade = ({ image, colSize }) => (
  <div className={lineStyles.awardItem}>
    <div
      className={
        image.alt === 'National Law Journal Trailblazers'
          ? 'mx-auto d-block text-center additional-positioning'
          : 'mx-auto d-block text-center'
      }
    >
      <Image {...image} layout="intrinsic" />
    </div>
  </div>
);

export default Accolade;
