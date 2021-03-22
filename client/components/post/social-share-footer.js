import { useRouter } from 'next/router';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
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
        <ul className="d-print-none list-inline mt-5 text-center d-block mx-auto">
          <li className="list-inline-item m-3 d-print-none">
            <FacebookShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className={`${socialIconStyles.facebook} ${socialIconStyles.icon} ${fontStyles.smallExcerpt}  text-white`}
            >
              <strong>Share on Facebook</strong>
            </FacebookShareButton>
          </li>
          <li className="list-inline-item m-3 d-print-none">
            <LinkedinShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className={`${socialIconStyles.linkedin} ${socialIconStyles.icon} ${fontStyles.smallExcerpt} text-white`}
            >
              <strong>Share on LinkedIn</strong>
            </LinkedinShareButton>
          </li>
          <li className="list-inline-item m-3 d-print-none">
            <TwitterShareButton
              url={`https://scarincihollenbeck.com${router.asPath}`}
              quote={title}
              className={`${socialIconStyles.twitter} ${socialIconStyles.icon} ${fontStyles.smallExcerpt} text-white`}
            >
              <strong>Share on Twitter</strong>
            </TwitterShareButton>
          </li>
        </ul>
      </div>
    </>
  );
}
