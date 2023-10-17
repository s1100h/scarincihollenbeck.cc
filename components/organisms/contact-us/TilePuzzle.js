import { PuzzleContainer } from '../../../styles/ContactUs.style';
import { tileContentArr } from '../../../utils/tileContent';
import TileContacts from '../../molecules/contact-us/TileContacts';

const TilePuzzle = () => (
  <PuzzleContainer>
    {tileContentArr.map((tile) => (
      <TileContacts
        key={tile.id}
        title={tile.title}
        textContent={tile.textContent}
        icon={tile.icon}
        image={tile.image}
      />
    ))}
  </PuzzleContainer>
);

export default TilePuzzle;
