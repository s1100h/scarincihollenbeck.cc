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

const SocialShare = ({ title }) => {
  const router = useRouter();
  const postUrl = `${PRODUCTION_URL}${router.asPath}`;

  return (
    <ShareSocialBox>
      <h4>Share</h4>
      <hr className="first-hr" />
      <FacebookShareButton url={postUrl} quote={title}>
        <BsFacebook className="faceBookBtn" />
      </FacebookShareButton>
      <TwitterShareButton url={postUrl} quote={title}>
        <BsTwitter className="twitterBtn" />
      </TwitterShareButton>
      <LinkedinShareButton url={postUrl} quote={title}>
        <BsLinkedin className="linkedIn" />
      </LinkedinShareButton>
      <hr className="second-hr" />
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
  );
};

export default SocialShare;
