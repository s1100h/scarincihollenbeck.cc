import styled from 'styled-components';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import FrontSearch from './front-search';

const HeaderBackground = styled.div`
  background: url(${(props) => props.image}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
`;

export default function NewDawnHeader(props) {
  return (
    <HeaderBackground image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/07/new-dawn-nj-compressor.jpg" className="jumbotron jumbotron-fluid">
      <Container className="animated fadeInUp fast mt-4 bg-black-background--darker">
        <Row>
          <Col sm={12} md={6} className="border-right">
            <h1 className="text-white mx-5 mt-5 display-32 text--shadow animated fadeInUp fast">Ready to rebuild? Scarinci Hollenbeck is here to help</h1>
            <p className="lead text-white text--shadow mx-5 animated fadeInUp slow">Scarinci Hollenbeck remains 100% operational and committed to assisting your business with achieving your goals.</p>
            <Container className="ml-4">
              <Row>
                <Col sm={12} md={6} className="mb-3">
                  <Link href="/firm-news/client-alert/client-alert-covid-19" as="/firm-news/client-alert/client-alert-covid-19/">
                    <a className="btn btn-danger w-75 p-2 mb-3 shadow lift ft-11 animated fadeInUp slow">
                      Client Message
                      <FontAwesomeIcon icon={faCaretRight} className="text-white ml-2 icon-w8px-h20px mb--3px" />
                    </a>
                  </Link>
                </Col>
                <Col sm={12} md={6}>
                  <Link href="/covid-19-crisis-management-unit/">
                    <a className="btn btn-danger w-75 p-2 shadow lift ft-11 animated fadeInUp slow">
                      Resource Center
                      <FontAwesomeIcon icon={faCaretRight} className="text-white ml-2 icon-w8px-h20px mb--3px" />
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={12} md={6}>
            <img rel="preconnect" src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png" alt="scarinci hollenbeck diamond" className="mt-3 p-2 animated fadeInUp slow mx-auto d-block" />
            <h2 className="text-white text-center display-32 text--shadow animated fadeInUp slow">How can we help?</h2>
            <FrontSearch />
          </Col>
        </Row>
      </Container>
    </HeaderBackground>
  );
}
