import Image from 'next/legacy/image';
import { Award } from 'styles/Awards.style';

const Accolade = ({ image }) => (
  <Award>
    <Image {...image} layout="intrinsic" />
  </Award>
);

export default Accolade;
