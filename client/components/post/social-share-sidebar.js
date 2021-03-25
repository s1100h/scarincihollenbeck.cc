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
    <div className="mb-4 social-share-container">
      <p className={`${fontStyles.ft12rem} mb-1`}>
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
      <style jsx>{`.social-share-container { margin-top: -12px; }`}</style>
    </div>
  );
}
