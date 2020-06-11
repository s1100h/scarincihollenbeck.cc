import { withRouter } from 'next/router';
import Sticky from 'react-stickynode';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';

function SocialShareSidebar(props, { router }) {
  const { printScreen, title } = props;

  const encodeLink = encodeURIComponent(router.pathname);
  const to = '';
  const w = window.innerWidth;

  return (
    <Col sm={1}>
      <Sticky enabled={true} top="#stick-start" bottomBoundary="#stop-scrolling">
        <ul className="no-dots hide-print ss-list">
          <li>
            <a href={`https://facebook.com/sharer/sharer.php?u=${encodeLink}`} target="_blank" aria-label="facebook" rel="noopener noreferrer" className="btn fb">
              <FontAwesomeIcon icon={faFacebookSquare} className="text-white" />
            </a>
          </li>
          <li className="mt-2">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeLink}`} target="_blank" aria-label="linkedin" rel="noopener noreferrer" className="btn li">
              <FontAwesomeIcon icon={faLinkedin} className="text-white" />
            </a>
          </li>
          <li className="mt-2">
            <a href={`https://twitter.com/share?url=${encodeLink}&text=${title}`} target="_blank" aria-label="twitter" rel="noopener noreferrer" className="btn tw">
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </a>
          </li>
          <li className="mt-2">
            <a href={`mailto:${to}?subject=${title}&body=${encodeLink}`} aria-label="email" className="btn bg-gray">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li className="mt-2">
            <button type="button" aria-label="Print Page" onClick={() => printScreen()} className="btn bg-gray">
              <FontAwesomeIcon icon={faPrint} />
            </button>
          </li>
        </ul>
      </Sticky>
    </Col>
  );
};

export default withRouter(SocialShareSidebar);