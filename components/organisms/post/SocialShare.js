import { useRouter } from 'next/router';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import Button from 'react-bootstrap/Button';
import { printScreen } from 'utils/helpers';
import { PRODUCTION_URL } from 'utils/constants';
import { FaEnvelope } from 'react-icons/fa';
import {
  BsFacebook,
  BsFillPrinterFill,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs';
import { FaFilePdf } from 'react-icons/fa6';
import { IoCopy } from 'react-icons/io5';
import { ShareSocialBox } from '../../../styles/Post/SocialShare.style';

const SocialShare = ({
  title,
  isPractice = false,
  isPrintBtn = false,
  customClass,
  handlePrint,
}) => {
  const router = useRouter();
  const postUrl = `${PRODUCTION_URL}${router.asPath}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    import('react-toastify').then(({ toast }) => {
      toast.info('Copied to clipboard', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        className: 'copy-notify',
      });
    });
  };

  return (
    <>
      {isPractice ? (
        <ShareSocialBox
          isPracticeHr={isPractice ? 'true' : ''}
          className={customClass}
        >
          <hr className="second-hr" />
          Share
          <FacebookShareButton url={postUrl} quote={title}>
            <BsFacebook className="faceBookBtn" />
          </FacebookShareButton>
          <TwitterShareButton url={postUrl} quote={title}>
            <BsTwitterX className="twitterBtn" />
          </TwitterShareButton>
          <LinkedinShareButton url={postUrl} quote={title}>
            <BsLinkedin className="linkedIn" />
          </LinkedinShareButton>
          {isPrintBtn && (
            <button
              aria-label="print"
              onClick={handlePrint}
              className="print-button"
            >
              <FaFilePdf />
            </button>
          )}
          <button
            aria-label="copy link"
            onClick={handleCopyLink}
            className="copy-button"
          >
            <IoCopy />
          </button>
        </ShareSocialBox>
      ) : (
        <ShareSocialBox>
          <h3>Share:</h3>
          <hr className="second-hr" />
          <FacebookShareButton url={postUrl} quote={title}>
            <BsFacebook className="faceBookBtn" />
          </FacebookShareButton>
          <TwitterShareButton url={postUrl} quote={title}>
            <BsTwitterX className="twitterBtn" />
          </TwitterShareButton>
          <LinkedinShareButton url={postUrl} quote={title}>
            <BsLinkedin className="linkedIn" />
          </LinkedinShareButton>
          <EmailShareButton subject={title} body={postUrl} separator="">
            <FaEnvelope />
          </EmailShareButton>
          {isPrintBtn && (
            <Button
              variant="link"
              className="m-0 p-0 text-dark"
              aria-label="Print Page"
              onClick={() => printScreen()}
            >
              <BsFillPrinterFill />
            </Button>
          )}
        </ShareSocialBox>
      )}
    </>
  );
};

export default SocialShare;
