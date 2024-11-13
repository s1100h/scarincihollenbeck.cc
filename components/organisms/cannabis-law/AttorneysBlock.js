import empty from 'is-empty';
import Image from 'next/image';
import {
  AttorneysCannabisContainer,
  AttorneysCannabisHolder,
} from '../../../styles/practices-special-style/canabis-law/AttorneysBlock.style';
import cannabisIcon from '../../../public/images/сannabis-Icon.webp';
import cannabisBigLeaf from '../../../public/images/cannabis_leaf_big.webp';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';
import AttorneysCannabisArea from '../attorneys/areas/AttorneysCannabisArea';

const AttorneysBlock = ({
  attorneysBlockArticle,
  chairPractice,
  attorneyListPractice,
}) => (
  <AttorneysCannabisContainer>
    <h2 className="sr-only">Team</h2>
    <FullHDContainer>
      <AttorneysCannabisHolder>
        {(!empty(chairPractice) || !empty(attorneyListPractice)) && (
          <AttorneysCannabisArea
            attorneys={{
              chairs: chairPractice,
              attorneysList: attorneyListPractice,
            }}
          />
        )}

        {(!empty(attorneysBlockArticle.title)
          || !empty(attorneysBlockArticle.paragraph)) && (
          <article className="attorneys-article-box">
            <Image
              className="mb-4"
              width={56}
              height={62}
              src={cannabisIcon}
              alt="cannabis leaf"
            />
            {!empty(attorneysBlockArticle.title) && (
              <h3>{attorneysBlockArticle.title}</h3>
            )}
            {!empty(attorneysBlockArticle.paragraph) && (
              <p>{attorneysBlockArticle.paragraph}</p>
            )}
            <Image
              className="cannabis-big-leaf"
              width={500}
              height={545}
              src={cannabisBigLeaf}
              alt="big cannabis leaf"
            />
          </article>
        )}
      </AttorneysCannabisHolder>
    </FullHDContainer>
  </AttorneysCannabisContainer>
);

export default AttorneysBlock;
