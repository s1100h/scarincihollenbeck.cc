import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import fontStyles from 'styles/Fonts.module.css';

const LetterButton = memo(({ letter, letterClick }) => (
  <Button
    variant="link"
    key={letter}
    onClick={letterClick}
    onKeyDown={letterClick}
    className={`text-white p-0 mx-3 mx-md-0 mr-md-2 ${fontStyles.ft15rem}`}
  >
    {letter}
  </Button>
));

export default LetterButton;
