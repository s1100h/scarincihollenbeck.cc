import { useRouter } from 'next/router';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

function SocialShareFooter({ title }) {
  const router = useRouter();

  return (
    <>
      <div className="line-header d-print-none mt-5">
        <h3>Please Share This article</h3>
      </div>
      <div className="d-flex hide-print">
        <ul className="no-dots d-print-none list-inline my-5 text-center">
          <li className="list-inline-item m-3 d-print-none">
            <FacebookShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className="bottom-btn btn-lg fb d-print-none"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on Facebook</span>
            </FacebookShareButton>
          </li>
          <li className="list-inline-item m-3 d-print-none">
            <LinkedinShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className="bottom-btn btn-lg lin d-print-none"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on LinkedIn</span>
            </LinkedinShareButton>
          </li>
          <li className="list-inline-item m-3 d-print-none">
            <TwitterShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className="bottom-btn btn-lg tw d-print-none"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on Twitter</span>
            </TwitterShareButton>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialShareFooter;
