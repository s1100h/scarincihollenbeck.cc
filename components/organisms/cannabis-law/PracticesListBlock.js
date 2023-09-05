import Link from 'next/link';
import Image from 'next/image';
import { PracticesListContainer } from '../../../styles/practices-special-style/canabis-law/PracticesListBlock.style';
import cannabisSmallLeaf from '../../../public/images/cannabis-small-leaf.webp';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';

const PracticesListBlock = ({ practiceList }) => (
  <PracticesListContainer>
    <FullHDContainer>
      <div>
        <h3 className="key-contacts-title">Practices</h3>
        <ul>
          {practiceList.map(({ databaseId, title, uri }) => (
            <li key={databaseId}>
              <Link href={uri}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className="cannabis-leafs-box">
          <Image className="cannabis-big-leaf" width={125} height={127} src={cannabisSmallLeaf} alt="small cannabis leaf" />
          <Image className="cannabis-big-leaf" width={125} height={127} src={cannabisSmallLeaf} alt="small cannabis leaf" />
        </div>
      </div>
    </FullHDContainer>
  </PracticesListContainer>
);

export default PracticesListBlock;
