import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaEnvelope,
  FaPrint
} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { printScreen } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';
// import styles from 'styles/SocialIcon.module.css';

export default function PostSocialShareSidebar({ title }) {
  const router = useRouter();

  return (
    <div className="mt-4">
      <p className={`${fontStyles.ft12rem} mb-2`}>
        <strong>Share this article</strong>
      </p>
      <p className="mb-1">
        <LinkedinShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <FaLinkedin style={{ fontSize: '1.2rem' }} />
          <u className="link">
            <strong>LinkedIn</strong>
          </u>
        </LinkedinShareButton>
      </p>
      <p className="mb-1">
        <FacebookShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <FaFacebookSquare style={{ fontSize: '1.1rem' }} />
          <u className="link">
            <strong>Facebook</strong>
          </u>
        </FacebookShareButton>
      </p>
      <p className="mb-1">
        <TwitterShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <FaTwitterSquare style={{ fontSize: '1.1rem' }} />
          <u className="link twitter">
            <strong>Twitter</strong>
          </u>
        </TwitterShareButton>
      </p>
      <p className="mb-2">
        <EmailShareButton
          subject={title}
          body={`https://scarincihollenbeck.com${router.asPath}`}
          separator=""
        >
          <FaEnvelope />
          {' '}
          <u className="link">
            <strong>Email</strong>
          </u>
        </EmailShareButton>
      </p>
      <p className="mb-2">
        <Button
          variant="link"
          className="m-0 p-0 text-dark"
          aria-label="Print Page"
          onClick={() => printScreen()}
        >
          <FaPrint />
          <u className="link">
            <strong>Print</strong>
          </u>
        </Button>
      </p>
      <style jsx>
        {`
          .link {
            position: relative;
            font-size: 14px;
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  );
}
