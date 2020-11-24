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
import fontStyles from 'styles/Fonts.module.css'
import textStyles from 'styles/Text.module.css'
import marginStyles from 'styles/Margins.module.css'

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
  offices
}) {

  const isChair = (chair !== undefined && chair.length > 0) || (coChair !== undefined && coChair.length > 0);

  return (
    <Col sm={12}>
      <div className="mt-3">
        <h1 className="text-white border-bottom">
          { (fullName) && `${fullName} `}
          { (isChair) && (
          <span className=" h5 text-white">
            -
            {` ${designation}`}
          </span>
          )}
        </h1>
      </div>
      {/** Chair section -- start */}
      { (isChair) ? (
        <div className="my-3">
          { chair.map((ch) => (
            <h2 key={ch.title} className={`${marginStyles.mlMinus10} text-white ${fontStyles.ftStyleInherit} h5`} key={ch.title}>
              <strong>Chair: </strong>
              <a href={ch.link} className="text-white h5">
                {ch.title}
                {' '}
                Practice
              </a>
              <br />
            </h2>
          ))}
          {coChair.map((co) => (
            <h2 key={coChair.title} className={`text-white ${fontStyles.ftStyleInherit} h5`} key={co.title}>
              <strong>Co-Chair: </strong>
              <a href={co.link} className="text-white h5">
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
          <h2 className={`${marginStyles.mlMinus13} text-white ${fontStyles.ftStyleInherit} h4`}>{designation}</h2>
        </Col>
      )}
      {/** Chair section -- end */}     
      {/** Col One phone, email, fax -- start */}
      <Row>
        <Col sm={12} md={6}>
          <ul className="text-white list-unstyled mt-2 ml-0">
            { (phoneNumber) && (
              <li className="mb-3">
                <h6>
                  <FontAwesomeIcon icon={faPhone} className={`text-white ${fontStyles.ft1rem}`} />
                  {' '}
                  <span>{phoneNumber}</span>
                </h6>
              </li>
            )}
            { (fax) && (
              <li className="mb-3">
                <h6>
                  <FontAwesomeIcon icon={faFax} className={`text-white ${fontStyles.ft1rem}`}/>
                  {' '}
                  <span>{fax}</span>
                </h6>
              </li>
            )}
            { (email) && (
              <li className="mb-3">
                <h6>
                  <FontAwesomeIcon icon={faEnvelope} className={`text-white ${fontStyles.ft1rem}`} />
                  {' '}
                  <a href={`mailto:${email}`} className="text-white">{email}</a>
                </h6>
              </li>
            )}
            {(offices !== undefined && offices.length > 0) && (              
              <li className="mb-3">
                <FontAwesomeIcon icon={faBuilding} className="text-white icon-w8px-h20px d-inline" />
                {' '}
                {offices.map((office, index) => (                  
                    <h6 key={office.title} className="d-inline">
                      <a href={office.uri} className="text-white">
                        {office.title}
                      </a>
                      {(offices.length - 1 !== index) && (
                        <>
                           ,
                          {' '}
                        </>
                      )}                                         
                    </h6>           
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
                  <li key={v.channel} className="mb-3">
                    <h6>
                      {(v.channel === 'Twitter') && <FontAwesomeIcon icon={faTwitter} className="text-white" />}
                      {(v.channel === 'Facebook') && <FontAwesomeIcon icon={faFacebookSquare} className="text-white" />}
                      {(v.channel === 'LinkedIn') && <FontAwesomeIcon icon={faLinkedin} className="text-white" />}
                      {(v.channel === 'Skype') && <FontAwesomeIcon icon={faSkype} className="text-white" />}
                      {(v.channel === 'Instagram') && <FontAwesomeIcon icon={faInstagram} className="text-white" />}
                      <a href={v.url} className="text-white">
                        {`  Connect on ${v.channel}`}
                      </a>
                    </h6>
                  </li>
                )) }
                { (pdf) && (
                  <li className="mb-3">
                    <h6>
                      <FontAwesomeIcon icon={faFile} className="text-white" />
                      {' '}
                      <a href={pdf} rel="nofollow" className="text-white">
                        {' Download Biography'}
                      </a>
                    </h6>
                  </li>
                )}
                { (vizibility) && (
                  <li className="mb-3">
                    <h6>
                      <FontAwesomeIcon icon={faAddressCard} className="text-white" />
                      <a href={vizibility} className="text-white">
                        {' Download Contact'}
                      </a>
                    </h6>
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
