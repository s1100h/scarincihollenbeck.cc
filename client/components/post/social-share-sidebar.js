import { useRouter } from 'next/router';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import Button from 'react-bootstrap/Button';
import { printScreen } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function PostSocialShareSidebar({ title }) {
  const router = useRouter();

  return (
    // <Col sm={1} className="d-print-none">
    //   <Sticky enabled top="#stick-start" bottomBoundary="#stop-scrolling">
    //     <FacebookShareButton
    //       url={`https://scarincihollenbeck.com${router.asPath}`}
    //       quote={title}
    //     >
    //       <FacebookIcon size={45} borderradius={5} />
    //     </FacebookShareButton>
    //     <LinkedinShareButton
    //       url={`https://scarincihollenbeck.com${router.asPath}`}
    //       quote={title}
    //       className="mt-2"
    //     >
    //       <LinkedinIcon size={45} borderradius={5} />
    //     </LinkedinShareButton>
    //     <TwitterShareButton
    //       url={`https://scarincihollenbeck.com${router.asPath}`}
    //       quote={title}
    //       className="mt-2"
    //     >
    //       <TwitterIcon size={45} borderradius={5} />
    //     </TwitterShareButton>
    //     <EmailShareButton
    //       className="mt-2"
    //       subject={title}
    //       body={`https://scarincihollenbeck.com${router.asPath}`}
    //       separator=""
    //     >
    //       <EmailIcon size={45} borderradius={5} />
    //     </EmailShareButton>
    //     <Button
    //       variant="success"
    //       className="mt-2"
    //       aria-label="Print Page"
    //       onClick={() => printScreen()}
    //     >
    //       <FontAwesomeIcon
    //         style={{ width: '21.5px' }}
    //         icon={faPrint}
    //         borderradius={5}
    //       />
    //     </Button>
    //   </Sticky>
    // </Col>
    <div className="mb-3">
      <p className={fontStyles.ft12rem}>
        <strong>Share this article</strong>
      </p>
      <p className="mb-2">
        <LinkedinShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <u>LinkedIn</u>
        </LinkedinShareButton>
      </p>
      <p className="mb-2">
        <FacebookShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <u>Facebook</u>
        </FacebookShareButton>
      </p>
      <p className="mb-2">
        <TwitterShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <u>Twitter</u>
        </TwitterShareButton>
      </p>
      <p className="mb-2">
        <EmailShareButton
          subject={title}
          body={`https://scarincihollenbeck.com${router.asPath}`}
          separator=""
        >
          <u>Email</u>
        </EmailShareButton>
      </p>
      <p className="mb-2">
        <Button
          variant="link"
          className="m-0 p-0 text-dark"
          aria-label="Print Page"
          onClick={() => printScreen()}
        >
          <u>Print</u>
        </Button>
      </p>

    </div>
  );
}
