import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faFax } from '@fortawesome/free-solid-svg-icons/faFax';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

export default function InfoCard({
  fullName,
  chair,
  coChair,
  designation,
  phoneNumber,
  fax,
  email,
  socialMediaLinks,
  pdf,
  vizibility,
  offices,
}) {
  const attorneyIsChair = (chair !== undefined && chair.length > 0) || (coChair !== undefined && coChair.length > 0);

  return (
    <Col sm={12}>
      <div className="mt-3">
        <span id="red-block" />
        <h1 className="text-white border-bottom">
          { (fullName) && `${fullName} `}
          { (attorneyIsChair) && (
          <span className=" h5 text-white">
            -
            {` ${designation}`}
          </span>
          )}
        </h1>
      </div>
      {/** Chair section -- start */}
      { (attorneyIsChair) ? (
        <div className="my-3">
          { chair.map((ch) => (
            <h2 key={ch.title} className="text-white ft-style-inherit h5">
              <strong>Chair: </strong>
              <a href={ch.link} className="text-white chair-link h5">
                {ch.title}
                {' '}
                Practice
              </a>
              <br />
            </h2>
          ))}
          {coChair.map((co) => (
            <h2 key={co.title} className="text-white ft-style-inherit h5">
              <strong>Co-Chair: </strong>
              <a href={co.link} className="text-white chair-link h5">
                {co.title}
                {' '}
                Practice
              </a>
              <br />
            </h2>
          ))}
        </div>
      ) : (
        <Col sm={12} className="mt-3">
          <h2 className="text-white ml--10px h4 ft-style-inherit">{designation}</h2>
        </Col>
      )}
      {/** Chair section -- end */}
      {/** Col One phone, email, fax -- start */}
      <Row>
        <Col sm={12} md={6}>
          <ul className="text-white no-dots mt-2 ml-0">
            { (phoneNumber) && (
              <li className="mb-1">
                <h5>
                  <FontAwesomeIcon icon={faPhone} className="text-white icon-w8px-h20px" />
                  {' '}
                  <span className="proxima-regular ft-17px">{`  ${phoneNumber}`}</span>
                </h5>
              </li>
            )}
            { (fax) && (
              <li className="mb-1">
                <h5>
                  <FontAwesomeIcon icon={faFax} className="text-white icon-w8px-h20px" />
                  {' '}
                  <span className="proxima-regular ft-17px">{`  ${fax}`}</span>
                </h5>
              </li>
            )}
            { (email) && (
              <li className="mb-1">
                <h5>
                  <FontAwesomeIcon icon={faEnvelope} className="text-white icon-w8px-h20px" />
                  <a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-17px">{` ${email}`}</a>
                </h5>
              </li>
            )}
            {(offices !== undefined && offices.length > 0) && (
              <li className="mb-1">
                <FontAwesomeIcon icon={faBuilding} className="text-white icon-w8px-h20px d-inline" />
                {' '}
                {offices.map((office, index) => (
                  <h5 key={office.name} className="d-inline">
                    <a href={office.link} className="text-white proxima-regular mail-link ft-17px">
                      {office.name}
                    </a>
                    {(offices.length - 1 !== index) && (
                    <>
                      ,
                      {' '}
                    </>
                    )}
                  </h5>
                ))}
              </li>
            )}
          </ul>
        </Col>
        {/** Col One phone, email, fax -- end */}
        {/** Col Two socila media, vizibility, pdf bio  -- start */}
        <Col sm={12} md={6}>
          { (socialMediaLinks) && (
            <>
              <ul className="ml-0 mt-2 list-unstyled">
                { socialMediaLinks.map((v) => (
                  <li key={v.channel} className="mb-0 lh-1">
                    <h5>
                      {(v.channel === 'Twitter') && <FontAwesomeIcon icon={faTwitter} className="text-white icon-w8px-h20px" />}
                      {(v.channel === 'Facebook') && <FontAwesomeIcon icon={faFacebookSquare} className="text-white icon-w8px-h20px" />}
                      {(v.channel === 'LinkedIn') && <FontAwesomeIcon icon={faLinkedin} className="text-white icon-w8px-h20px" />}
                      {(v.channel === 'Skype') && <FontAwesomeIcon icon={faSkype} className="text-white icon-w8px-h20px" />}
                      {(v.channel === 'Instagram') && <FontAwesomeIcon icon={faInstagram} className="text-white icon-w8px-h20px" />}
                      <a href={v.url} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                        {`  Connect on ${v.channel}`}
                      </a>
                    </h5>
                  </li>
                )) }
                { (pdf) && (
                  <li className="mb-0 lh-1">
                    <h5>
                      <FontAwesomeIcon icon={faFile} className="text-white icon-w8px-h20px" />
                      {' '}
                      <a href={pdf} rel="nofollow" className="text-white mail-link proxima-regular ft-17px position-relative icon">
                        {' Download Biography'}
                      </a>
                    </h5>
                  </li>
                )}
                { (vizibility) && (
                  <li className="mb-0 lh-1">
                    <h5>
                      <FontAwesomeIcon icon={faAddressCard} className="text-white icon-w8px-h20px" />
                      <a href={vizibility} className="text-white mail-link proxima-regular ft-17px position-relative icon">
                        {' Download Contact'}
                      </a>
                    </h5>
                  </li>
                )}
              </ul>
            </>
          )}
        </Col>
        {/** Col Two socila media, vizibility, pdf bio  -- end */}
      </Row>
    </Col>
  );
}
