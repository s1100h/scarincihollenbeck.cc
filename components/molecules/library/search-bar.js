import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlobalSearch from 'components/shared/GlobalSearch';

export default function SearchBar() {
  return (
    <Col sm={12} style={{ backgroundColor: '#495057' }}>
      <Row>
        <Col sm={12} md={3} className="py-4">
          <p className="text-white mb-0">
            <strong>Scarinci Hollenbeck Article Library</strong>
          </p>
        </Col>
        <Col sm={12} md={6} className="py-3">
          <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <GlobalSearch />
          </div>
        </Col>
        <Col sm={12} md={3} className="py-4">
          <p className="text-white mb-0 text-center">
            <strong>Follow us:</strong>
            <a
              href="https://www.linkedin.com/company/scarinci-hollenbeck-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-white"
            >
              <u>LinkedIn</u>
            </a>
            <a
              href="https://www.facebook.com/ScarinciHollenbeck/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-white"
            >
              <u>Facebook</u>
            </a>
          </p>
        </Col>
      </Row>
    </Col>
  );
}
