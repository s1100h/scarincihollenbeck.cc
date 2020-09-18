import { useRouter } from 'next/router';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WorkplaceShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
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
        <ul className="no-dots hide-print list-inline my-5 text-center">
          <li className="list-inline-item m-3">
            <FacebookShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className="bottom-btn btn-lg fb"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on Facebook</span>
            </FacebookShareButton>
          </li>
          <li className="list-inline-item m-3">
            <LinkedinShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className="bottom-btn btn-lg lin"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on LinkedIn</span>
            </LinkedinShareButton>
          </li>
          <li className="list-inline-item m-3">
            <TwitterShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className="bottom-btn btn-lg tw"
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
