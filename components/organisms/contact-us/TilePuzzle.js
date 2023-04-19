import { PuzzleCotainer } from '../../../styles/ContactUs.style';
import { tileContentArr } from '../../../utils/tileContent';
import TileContacts from '../../molecules/contact-us/TileContacts';

const TilePuzzle = () => (
  <PuzzleCotainer>
    {tileContentArr.map((tile) => (
      <TileContacts
        key={tile.id}
        title={tile.title}
        textContent={tile.textContent}
        icon={tile.icon}
      />
    ))}
  </PuzzleCotainer>
);

export default TilePuzzle;
