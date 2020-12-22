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
import lineHeaderStyles from 'styles/LineHeader.module.css';
import fontStyles from 'styles/Fonts.module.css';
import socialIconStyles from 'styles/SocialFooterIcons.module.css';

export default function PostSocialShareFooter({ title }) {
  const router = useRouter();

  return (
    <>
      <div className={`${lineHeaderStyles.lineHeader} d-print-none mt-3`}>
        <h3>Please Share This article</h3>
      </div>
      <div className="d-flex hide-print">
        <ul className="d-print-none list-inline my-5 text-center">
          <li className="list-inline-item m-3 d-print-none">
            <FacebookShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className={`${socialIconStyles.facebook} ${socialIconStyles.icon} ${fontStyles.smallExcerpt}  text-white`}
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
              {' '}
              Share on Facebook
            </FacebookShareButton>
          </li>
          <li className="list-inline-item m-3 d-print-none">
            <LinkedinShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className={`${socialIconStyles.linkedin} ${socialIconStyles.icon} ${fontStyles.smallExcerpt} text-white`}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${fontStyles.smallExcerpt} text-white`}
              />
              {' '}
              Share on LinkedIn
            </LinkedinShareButton>
          </li>
          <li className="list-inline-item m-3 d-print-none">
            <TwitterShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className={`${socialIconStyles.twitter} ${socialIconStyles.icon} ${fontStyles.smallExcerpt} text-white`}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className={`${fontStyles.smallExcerpt} text-white`}
              />
              {' '}
              Share on Twitter
            </TwitterShareButton>
          </li>
        </ul>
      </div>
    </>
  );
}
