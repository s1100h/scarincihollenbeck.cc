import TileContact from 'components/molecules/contact-us/TileContact';
import { PuzzleContainer } from '../../../styles/ContactUs.style';
import { tileContentArr } from '../../../utils/tileContent';

const TilePuzzle = () => (
  <PuzzleContainer>
    {tileContentArr.map((tile) => (
      <TileContact
        key={tile.id}
        title={tile.title}
        textContent={tile.textContent}
        icon={tile.icon}
        image={tile.image}
        alt={tile.alt}
      />
    ))}
  </PuzzleContainer>
);

export default TilePuzzle;
