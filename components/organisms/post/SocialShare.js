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
  BsFacebook, BsFillPrinterFill, BsLinkedin, BsTwitter,
} from 'react-icons/bs';
import { ShareSocialBox } from '../../../styles/Post/SocialShare.style';

const SocialShare = ({ title, isPractice }) => {
  const router = useRouter();
  const postUrl = `${PRODUCTION_URL}${router.asPath}`;

  return (
    <>
      {isPractice ? (
        <ShareSocialBox isPracticeHr={isPractice ? 'true' : ''}>
          <h4>Share:</h4>
          <hr className="second-hr" />
          <FacebookShareButton url={postUrl} quote={title}>
            <BsFacebook className="faceBookBtn" />
          </FacebookShareButton>
          <TwitterShareButton url={postUrl} quote={title}>
            <BsTwitter className="twitterBtn" />
          </TwitterShareButton>
          <LinkedinShareButton url={postUrl} quote={title}>
            <BsLinkedin className="linkedIn" />
          </LinkedinShareButton>
        </ShareSocialBox>
      ) : (
        <ShareSocialBox>
          <h4>Share:</h4>
          <hr className="second-hr" />
          <FacebookShareButton url={postUrl} quote={title}>
            <BsFacebook className="faceBookBtn" />
          </FacebookShareButton>
          <TwitterShareButton url={postUrl} quote={title}>
            <BsTwitter className="twitterBtn" />
          </TwitterShareButton>
          <LinkedinShareButton url={postUrl} quote={title}>
            <BsLinkedin className="linkedIn" />
          </LinkedinShareButton>
          <EmailShareButton subject={title} body={postUrl} separator="">
            <FaEnvelope />
          </EmailShareButton>
          <Button
            variant="link"
            className="m-0 p-0 text-dark"
            aria-label="Print Page"
            onClick={() => printScreen()}
          >
            <BsFillPrinterFill />
          </Button>
        </ShareSocialBox>
      )}
    </>
  );
};

export default SocialShare;
