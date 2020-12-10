import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import fontStyles from 'styles/Fonts.module.css'

export default function Letter({ alphabet, letterClick }) {
  return (
    <Col sm={12} md={10}>
      <ul className="list-inline ml-2 mb-0">
        {alphabet.map((val) => (
          <li key={val} className="list-inline-item p-0 m-0 mt-1">
            <Button
              variant="link"
              onClick={letterClick}
              onKeyDown={letterClick}
              className={`text-white p-0 mr-3 ${fontStyles.ft13rem}`}
            >
              <strong>{val}</strong>
            </Button>
          </li>
        ))}
      </ul>
    </Col>
  );
}
