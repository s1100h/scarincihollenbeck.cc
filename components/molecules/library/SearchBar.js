import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlobalSearch from 'components/shared/GlobalSearch/GlobalSearch';

const SearchBar = () => (
  <Col sm={12} style={{ backgroundColor: '#495057' }}>
    <Row>
      <Col sm={12} md={8} className="py-3 px-4">
        <div style={{ maxWidth: '400px' }}>
          <GlobalSearch />
        </div>
      </Col>
      <Col sm={12} md={{ span: 3, offset: 1 }} className="py-4">
        <p className="d-flex gap-2 text-white mb-0 text-md-center ">
          <strong>Follow us:</strong>
          <a
            href="https://www.linkedin.com/company/scarinci-hollenbeck-llc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white d-block d-md-inline"
          >
            <u>LinkedIn</u>
          </a>
          <a
            href="https://www.facebook.com/ScarinciHollenbeck/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  d-block d-md-inline"
          >
            <u>Facebook</u>
          </a>
        </p>
      </Col>
    </Row>
  </Col>
);

export default SearchBar;
