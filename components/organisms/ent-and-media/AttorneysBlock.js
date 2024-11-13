import empty from 'is-empty';
import { ContainerContent } from 'styles/practices-special-style/commonForSpecial.style';
import { AttorneySection } from 'styles/practices-special-style/ent-adn-media/AttorneysBlock.style';
import AttorneysMediaArea from '../attorneys/areas/AttorneysMediaArea';

const AttorneysBlock = ({
  chairPractice,
  attorneyListPractice,
  title,
  anchorLinkToAttorneys,
}) => (
  <AttorneySection id={anchorLinkToAttorneys || undefined}>
    <ContainerContent>
      <h2 className="attorney-title">{title}</h2>
      {(!empty(chairPractice) || !empty(attorneyListPractice)) && (
        <AttorneysMediaArea
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
