import Image from 'next/image';
import weAdviseThisWordsImage from '../../../public/images/we_advise_this.webp';
import { WeAdviseThisBlockContainer } from '../../../styles/practices-special-style/canabis-law/WeAdviseThisBlock.style';

const WeAdviseThisBlock = ({ WeAdviseThisBlockData }) => (
  <WeAdviseThisBlockContainer>
    <div>
      {WeAdviseThisBlockData}
      <Image src={weAdviseThisWordsImage} alt="We Advise This" />
    </div>
  </WeAdviseThisBlockContainer>
);

export default WeAdviseThisBlock;
