import LetterButton from 'components/atoms/LetterButton';

const Letter = ({ alphabet, letterClick }) => alphabet.map((letter) => <LetterButton key={letter} letter={letter} letterClick={letterClick} />);

export default Letter;
