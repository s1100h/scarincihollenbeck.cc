import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Letter({ alphabet, letterClick }) {
  return (
    <Col sm={12} md={10}>
      <ul className="list-inline ml-4 mb-0">
        {alphabet.map((val) => (
          <li key={val} className="list-inline-item p-0 m-0">
            <Button
              variant="link"
              onClick={letterClick}
              onKeyDown={letterClick}
              className="text-bg text-white proxima-bold p-0 mr-3 ft-18"
            >
              {val}
            </Button>
          </li>
        ))}
      </ul>
    </Col>
  );
}
