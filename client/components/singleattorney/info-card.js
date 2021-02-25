import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fontStyles from 'styles/Fonts.module.css';
import marginStyles from 'styles/Margins.module.css';

export default function SingleAttorneyInfoCard({
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
  const isChair = (chair !== undefined && chair.length > 0)
    || (coChair !== undefined && coChair.length > 0);

  return (
    <Col sm={12} className="animate__animated animate__fadeInUp animate__fast">
      <div className="mt-3">
        <h1 className="text-white border-bottom">
          {fullName && `${fullName} `}
          {isChair && (
            <span className=" h5 text-white">
              -
              {` ${designation}`}
            </span>
          )}
        </h1>
      </div>
      {/** Chair section -- start */}
      {isChair ? (
        <div className="my-3">
          {chair.map((ch) => (
            <h2
              key={ch.title}
              className={`${marginStyles.mlMinus10} text-white ${fontStyles.ftStyleInherit} h5`}
            >
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
            <h2
              key={coChair.title}
              className={`text-white ${fontStyles.ftStyleInherit} h5`}
            >
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
          <h2
            className={`${marginStyles.mlMinus13} text-white ${fontStyles.ftStyleInherit} h4`}
          >
            {designation}
          </h2>
        </Col>
      )}
      {/** Chair section -- end */}
      {/** Col One phone, email, fax -- start */}
      <Row>
        <Col sm={12} md={6}>
          <ul className="text-white list-unstyled mt-2 ml-0">
            {phoneNumber && (
              <li className="mb-3">
                <h6>
                  <strong>Phone: </strong>
                  {' '}
                  <span>{phoneNumber}</span>
                </h6>
              </li>
            )}
            {fax && (
              <li className="mb-3">
                <h6>
                  <strong>Fax: </strong>
                  {' '}
                  <span>{fax}</span>
                </h6>
              </li>
            )}
            {email && (
              <li className="mb-3">
                <h6>
                  <strong>Email: </strong>
                  {' '}
                  <a href={`mailto:${email}`} className="text-white">
                    {email}
                  </a>
                </h6>
              </li>
            )}
            {offices && (
              <li className="mb-3">
                <strong>Office: </strong>
                {' '}
                {offices.map((office, index) => (
                  <h6 key={office.name} className="d-inline">
                    <Link href={office.link}>
                      <a className="text-white">{office.name}</a>
                    </Link>
                    {offices.length - 1 !== index && <>, </>}
                  </h6>
                ))}
              </li>
            )}
          </ul>
        </Col>
        {/** Col One phone, email, fax -- end */}
        {/** Col Two socila media, vizibility, pdf bio  -- start */}
        <Col sm={12} md={6}>
          {socialMediaLinks && (
            <>
              <ul className="ml-0 mt-2 list-unstyled">
                {socialMediaLinks.map((v) => (
                  <li key={v.channel} className="mb-3">
                    <h6>
                      <a href={v.url} className="text-white">
                        <u>{`  Connect on ${v.channel}`}</u>
                      </a>
                    </h6>
                  </li>
                ))}
                {pdf && (
                  <li className="mb-3">
                    <h6>
                      <a href={pdf} rel="nofollow" className="text-white">
                        <u>Download Biography</u>
                      </a>
                    </h6>
                  </li>
                )}
                {vizibility && (
                  <li className="mb-3">
                    <h6>
                      <a href={vizibility} className="text-white">
                        <u>Download Contact</u>
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
