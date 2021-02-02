import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
// import FrontSearch from 'components/frontpage/front-search';
import btnStyles from 'styles/Buttons.module.css';
import styles from 'styles/NewDawn.module.css';

const HeaderBackground = styled.div`
  background: url(${(props) => props.image}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
`;

export default function NewDawnHeader() {
  return (
    <HeaderBackground
      image="/images/new-dawn-nj-compressor.jpg"
      className="jumbotron jumbotron-fluid"
    >
      <Container
        className={`${styles.bgBlackBackgroundDarker} animate__animated animate__fadeInUp animate__fast mt-4`}
      >
        <Row className="flex-column-reverse flex-lg-row">
          <Col sm={12} lg={6} className={styles.borderRight}>
            <h1 className="text-white mx-5 mt-5 animate__animated animate__fadeInUp animate__fast">
              Ready to rebuild? Scarinci Hollenbeck is here to help
            </h1>
            <p className="lead text-white mx-5 animate__animated animate__fadeInUp animate__slow">
              Scarinci Hollenbeck remains 100% operational and committed to
              assisting your business with achieving your goals.
            </p>
            <Container className={styles.marginLeft}>
              <Row>
                <Col sm={12} md={6}>
                  <Link
                    href="/client-alert/client-alert-covid-19"
                    as="/client-alert/client-alert-covid-19"
                  >
                    <a
                      className={`btn ${btnStyles.btnDanger} w-75 p-2 mb-3 shadow lift ft-11 animate__animated animate__fadeInUp animate__slow`}
                    >
                      Client Message
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className={`text-white ml-2 ${styles.Caret}`}
                      />
                    </a>
                  </Link>
                </Col>
                <Col sm={12} md={6}>
                  <Link href="/covid-19-crisis-management-unit/">
                    <a
                      className={`btn ${btnStyles.btnDanger} w-75 p-2 mb-3 shadow lift ft-11 animate__animated animate__fadeInUp animate__slow`}
                    >
                      Resources
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className={`text-white ml-2 ${styles.Caret}`}
                      />
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={12} lg={6}>
            <div className="mt-3 p-2 animate__animated animate__fadeInUp animate__slow text-center">
              <Image
                src="/images/sh-mini-diamond-PNG.png"
                width={170}
                height={147}
                alt="Scarinci Hollenbeck diamond logo"
                layout="intrinsic"
              />
            </div>
            <h2
              className={`${styles.h2} text-white text-center animate__animated animate__fadeInUp animate__slow h1`}
            >
              How can we help?
            </h2>
            {/* <FrontSearch /> */}
          </Col>
        </Row>
      </Container>
    </HeaderBackground>
  );
}
