import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import ContactBtn from 'components/singleattorney/contact-btn';

export default function SingleAttorneyInfoCard({
  fullName,
  chair,
  coChair,
  designation,
  pdf,
  vizibility,
  offices,
}) {
  return (
    <div className="d-flex flex-column text-white">
      <h1
        className="animate__animated animate__fadeInDown animate__slow"
      >
        <strong className="title">{fullName}</strong>
      </h1>
      <div className="w-100 d-block animate__animated animate__fadeInDown animate__slow redBanner" />
      <Row>
        <Col sm={12} className="mt-3 mb-0">
          <h2 className="animate__animated animate__fadeInUp animate__slow">
            <strong className="titleStrong">Title: </strong>
            {' '}
            {designation}
          </h2>
          {chair.length > 0 && (
            <h3
              className="text-white mt-2 animate__animated animate__fadeInUp animate__slow"
            >
              <strong className="titleStrong">Chair: </strong>
              {' '}
              {chair.map((c, i) => (
                <Link href={c.link.replace('wp.', '')} key={c.title}>
                  <a className="text-white">
                    {c.title}
                    {i < chair.length - 1 && ', '}
                  </a>
                </Link>
              ))}
            </h3>
          )}
          {coChair.length > 0 && (
            <h3
              className="text-white animate__animated animate__fadeInUp animate__slow"
            >
              <strong className="titleStrong">
                Co-chair:
              </strong>
              {' '}
              {coChair.map((c) => (
                <Link href={c.link.replace('wp.', '')} key={c.title}>
                  <a className="text-white">
                    {c.title}
                  </a>
                </Link>
              ))}
            </h3>
          )}
          {offices && offices.length > 0 && (
            <h3
              className="animate__animated animate__fadeInUp animate__slow"
            >
              <strong className="titleStrong">Office: </strong>
              {offices.map((office, index) => (
                <Link href={office.link} key={office.link}>
                  <a className="text-white">
                    {office.name === 'Washington D.C.'
                      ? 'Washington, D.C.'
                      : office.name}
                    {index < offices.length - 1 && ', '}
                  </a>
                </Link>
              ))}
            </h3>
          )}
          <ul
            className="list-unstyled animate__animated animate__fadeInUp animate__slow"
          >
            {pdf && (
            <li>
              <a className="text-white" href={pdf} download>
                <u>Download PDF Biography</u>
              </a>
            </li>
            )}
            {vizibility && (
            <li>
              <a className="text-white" href={vizibility} download>
                <u>Download Vizibility Contact</u>
              </a>
            </li>
            )}
          </ul>
        </Col>
      </Row>
      <style jsx>
        {`
        a, h1, h2, h3, ul {
          font-size: 1.35rem;
        }
        u {
          font-size: 1rem;
          d
        }
        
        .titleStrong {
          font-size: 1.37rem;
        }
        .title {
          font-size: 2.2rem;
        }
        .subTitle {
          font-size: 1.4rem;
        }
        .redBanner {
          height: 3px;
          background-color: #db2220;
        }             
      `}
      </style>
    </div>
  );
}
