import Col from 'react-bootstrap/Col';

export default function Letter(props) {
  const { alphabet, letterClick } = props;

  return (
    <Col sm={12} md={10}>
      <ul className="list-inline ml-4 mb-0">
        {alphabet.map((val) => (
          <li
            onClick={letterClick}
            onKeyDown={letterClick}
            key={val}
            role="presentation"
            className="text-bg text-white proxima-bold list-inline-item cursor-pointer"
          >
            <h4>{val}</h4>
          </li>
        ))}
      </ul>
    </Col>
  );
}
