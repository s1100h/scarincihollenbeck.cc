import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';


export default function InfoCard(props) {
  const {
    title,
    phone_extension,
    email,
    social_media_links,
    vizibility,
    name,
  } = props;

  return (
    <Container>
      <Row>
        <Col sm={12} className="my-3">
          <span id="red-block" />
          <h1 className="text-white proxima-bold border-bottom">{name}</h1>
        </Col>
        <Col sm={12} className="mt--1 mb-2 mx-0">
          <h5 className="text-white">
            {title}
          </h5>
        </Col>
        <Col sm={12} md={6}>
          <ul className="text-white no-dots ml-0">
            <li className="mb-1">
              <h5>
                <FontAwesomeIcon icon={faPhone} className="text-white mw-18" />
                <span className="proxima-regular ft-18">
                  {' '}
                  201-896-4100
                  {' '}
                  {`  ${phone_extension}`}
                </span>
              </h5>
            </li>
            <li className="mb-1">
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="text-white mw-18" />
                <a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-18">
                  {' '}
                  {email}
                </a>
              </h5>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6}>
          {
            (social_media_links) && (
              <span>
                <ul className="ml-0 mt-2">
                  {
                    social_media_links.map((v) => (
                      <li key={v.channel} className="mb-0 lh-1">
                        <h5>
                          {(v.channel === 'Twitter') && <FontAwesomeIcon icon={faTwitter} className="text-white mw-18" />}
                          {(v.channel === 'Facebook') && <FontAwesomeIcon icon={faFacebookSquare} className="text-white mw-18" />}
                          {(v.channel === 'LinkedIn') && <FontAwesomeIcon icon={faLinkedin} className="text-white mw-18" />}
                          {(v.channel === 'Skype') && <FontAwesomeIcon icon={faSkype} className="text-white mw-18" />}
                          {(v.channel === 'Instagram') && <FontAwesomeIcon icon={faInstagram} className="text-white mw-18" />}
                          <a href={v.url} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                            {`  Connect on ${v.channel}`}
                          </a>
                        </h5>
                      </li>
                    ))
                  }
                  {
                    (vizibility) && (
                    <li className="mb-0 lh-1">
                      <h5>
                        <FontAwesomeIcon icon={faAddressCard} className="text-white mw-18" />
                        <a href={vizibility} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                          {' Download Contact'}
                        </a>
                      </h5>
                    </li>
                    )
                  }

                </ul>
              </span>
            )
          }
        </Col>
      </Row>
    </Container>
  );
}