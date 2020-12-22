import { useRouter } from 'next/router';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';
import Sticky from 'react-stickynode';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { printScreen } from 'utils/helpers';

export default function PostSocialShareSidebar({ title }) {
  const router = useRouter();

  return (
    <Col sm={1} className="d-print-none">
      <Sticky enabled top="#stick-start" bottomBoundary="#stop-scrolling">
        <FacebookShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <FacebookIcon size={45} borderRadius={5} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
          className="mt-2"
        >
          <LinkedinIcon size={45} borderRadius={5} />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
          className="mt-2"
        >
          <TwitterIcon size={45} borderRadius={5} />
        </TwitterShareButton>
        <EmailShareButton
          className="mt-2"
          subject={title}
          body={`https://scarincihollenbeck.com${router.asPath}`}
          separator=""
        >
          <EmailIcon size={45} borderRadius={5} />
        </EmailShareButton>
        <Button
          variant="success"
          className="mt-2"
          aria-label="Print Page"
          onClick={() => printScreen()}
        >
          <FontAwesomeIcon
            style={{ width: '21.5px' }}
            icon={faPrint}
            borderRadius={5}
          />
        </Button>
      </Sticky>
    </Col>
  );
}
