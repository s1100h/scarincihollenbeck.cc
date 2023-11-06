import empty from 'is-empty';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import { AttorneySection } from 'styles/practices-special-style/ent-adn-media/AttorneysBlock.style';
import AttorneysListBox from '../../common/AttorneysListBox';

const AttorneysBlock = ({
  chairPractice,
  attorneyListPractice,
  title,
  anchorLinkToAttorneys,
}) => (
  <AttorneySection id={anchorLinkToAttorneys}>
    <ContainerContent>
      <h2 className="attorney-title">{title}</h2>
      {(!empty(chairPractice) || !empty(attorneyListPractice)) && (
        <AttorneysListBox
          variant="entandmedia"
          attorneys={{
            chairs: chairPractice,
            attorneysList: attorneyListPractice,
          }}
        />
      )}
    </ContainerContent>
  </AttorneySection>
);

export default AttorneysBlock;
