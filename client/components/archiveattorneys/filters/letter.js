import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import fontStyles from 'styles/Fonts.module.css';

export default function ArchiveAttorneyFitlersLetter({
  alphabet,
  letterClick,
}) {
  return (
    <Col sm={12}>
      <ul className="list-inline mt-0 mb-1">
        {alphabet.map((val) => (
          <li key={val} className="list-inline-item">
            <Button
              variant="link"
              onClick={letterClick}
              onKeyDown={letterClick}
              className={`text-white my-1 p-0 mr-1 ${fontStyles.ft118rem}`}
            >
              <strong>{val}</strong>
            </Button>
          </li>
        ))}
      </ul>
    </Col>
  );
}
