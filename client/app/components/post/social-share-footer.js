import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

function SocialShareFooter(props) {
  const { title } = props;
  const router = useRouter();
  const encodeLink = encodeURIComponent(`http://scarincihollenbeck.com/${router.asPath}`);

  return (
    <>
      <div className="line-header d-print-none mt-5">
        <h3>Please Share This article</h3>
      </div>
      <div className="d-block hide-print">
        <ul className="no-dots hide-print list-inline my-5 text-center">
          <li className="list-inline-item m-3">
            <a href={`https://facebook.com/sharer/sharer.php?u=https://scarincihollenbeck.com${router.asPath}`} target="_blank" rel="noopener noreferrer" aria-label="facebook" className="bottom-btn btn-lg fb">
              <FontAwesomeIcon icon={faFacebookSquare} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on Facebook</span>
            </a>
          </li>
          <li className="list-inline-item m-3">
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://scarincihollenbeck.com${router.asPath}`} target="_blank" rel="noopener noreferrer" aria-label="linkedin" className="bottom-btn btn-lg li">
              <FontAwesomeIcon icon={faLinkedin} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on LinkedIn</span>
            </a>
          </li>
          <li className="list-inline-item m-3">
            <a href={`https://twitter.com/share?url=https://scarincihollenbeck.com${router.asPath}&text=${title}`} target="_blank" rel="noopener noreferrer" aria-label="twitter" className="bottom-btn btn-lg tw">
              <FontAwesomeIcon icon={faTwitter} className="text-white icon-w22px-h22px" />
              {' '}
              <span className="proxima-thin smaller-excerpt text-white"> Share on Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialShareFooter;
