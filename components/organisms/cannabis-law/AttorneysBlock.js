import empty from 'is-empty';
import { Row } from 'react-bootstrap';
import Image from 'next/image';
import { AttorneysCannabisContainer } from '../../../styles/practices-special-style/canabis-law/AttorneysBlock.style';
import { ColStyled } from '../../../styles/attorney-page/AttorneyProfile.style';
import AttorneysListBox from '../../common/AttorneysListBox';
import cannabisIcon from '../../../public/images/сannabis-Icon.webp';
import cannabisBigLeaf from '../../../public/images/cannabis_leaf_big.webp';

const AttorneysBlock = ({ attorneysBlockArticle, chairPractice, attorneyListPractice }) => (
  <AttorneysCannabisContainer>
    {(!empty(chairPractice) || !empty(attorneyListPractice)) && (
      <Row className="w-100">
        <ColStyled sm={12}>
          <AttorneysListBox variant="cannabis" attorneys={{ chairs: chairPractice, attorneysList: attorneyListPractice }} />
        </ColStyled>
      </Row>
    )}
    {(!empty(attorneysBlockArticle.title) || !empty(attorneysBlockArticle.paragraph)) && (
      <article className="attorneys-article-box">
        <Image className="mb-4" width={56} height={62} src={cannabisIcon} alt="cannabis leaf" />
        {!empty(attorneysBlockArticle.title) && <h3>{attorneysBlockArticle.title}</h3>}
        {!empty(attorneysBlockArticle.paragraph) && <p>{attorneysBlockArticle.paragraph}</p>}
        <Image className="cannabis-big-leaf" width={500} height={545} src={cannabisBigLeaf} alt="big cannabis leaf" />
      </article>
    )}
  </AttorneysCannabisContainer>
);

export default AttorneysBlock;
