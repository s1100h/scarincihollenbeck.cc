import { useRouter } from 'next/router';
import Image from 'next/image';
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
      <p className={`${fontStyles.ft12rem} mb-2`}>
        <strong>Share this article</strong>
      </p>
      <p className="mb-2 mt-3">
        <LinkedinShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
          <Image
           src="/images/linkedin-icon.png"
           alt="linkedin icon"
           width={25}
           height={21}
          />
          {' '}
          <u className="link"><strong>LinkedIn</strong></u>
        </LinkedinShareButton>
      </p>
      <p className="mb-2">
        <FacebookShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
        <Image
           src="/images/facebook-icon.png"
           alt="facebook icon"
           width={25}
           height={25}
          />
          {' '}
          <u className="link"><strong>Facebook</strong></u>
        </FacebookShareButton>
      </p>
      <p className="mb-2">
        <TwitterShareButton
          url={`https://scarincihollenbeck.com${router.asPath}`}
          quote={title}
        >
        <Image
           src="/images/twitter-icon.svg"
           alt="twitter icon"
           width={30}
           height={25}
          />
          {' '}
          <u className="link"><strong>Twitter</strong></u>
        </TwitterShareButton>
      </p>
      <p className="mb-2">
        <EmailShareButton
          subject={title}
          body={`https://scarincihollenbeck.com${router.asPath}`}
          separator=""
        >
        <Image
           src="/images/email-icon.png"
           alt="email icon"
           width={24}
           height={18}
          />
          {' '}
          <u className="link"><strong>Email</strong></u>
        </EmailShareButton>
      </p>
      <p className="mb-2">
        <Button
          variant="link"
          className="m-0 p-0 text-dark"
          aria-label="Print Page"
          onClick={() => printScreen()}
        >
        <Image
           src="/images/printer-icon.png"
           alt="print icon"
           width={24}
           height={26}
          />
          {' '}
          <u className="link"><strong>Print</strong></u>
        </Button>
      </p>
      <style jsx>{`.social-share-container { margin-top: -12px; } .link {position: relative; bottom: 5px;}`}</style>
    </div>
  );
}
