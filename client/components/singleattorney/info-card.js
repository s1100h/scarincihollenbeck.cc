import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import ContactBtn from 'components/singleattorney/contact-btn';

export default function SingleAttorneyInfoCard({
  fullName,
  chair,
  coChair,
  designation,
  offices,
  services,
}) {
  console.log(services);

  return (
    <div className="d-flex flex-column text-white">
      <h1
        className="animate__animated animate__fadeInDown animate__slow"
      >
        <strong className="title">
          {fullName}
          {' '}
          {designation && (
          <span style={{ fontSize: '1.6rem', marginLeft: '-10px' }}>
            ,
            {' '}
            {designation}
          </span>
          )}
        </strong>
      </h1>
      <div className="w-100 d-block animate__animated animate__fadeInDown animate__slow redBanner" />
      <Row>
        <Col sm={12} className="mt-2 mb-0">
          {chair.length > 0 && (
            <h3
              className="text-white mt-2 mb-1 animate__animated animate__fadeInUp animate__slow"
              style={{ marginLeft: '0px !important' }}
            >
              {' '}
              <strong>Chair: </strong>
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
              className="text-white animate__animated animate__fadeInUp animate__slow mt-1 ml-2"
              style={{ marginLeft: '0px !important' }}
            >
              Co-chair:
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
          <div className="mt-3">
            <h3 className="animate__animated animate__fadeInUp animate__slow">
              <strong className="help">How I can help you</strong>
            </h3>
            <div className="d-flex flex-column flex-md-row">
              <ul className="mr-4">
                {services.map((service, index) => ((index % 2 === 0) && (
                  <li key={service.title}>
                    <Link href={service.link}>
                      <a className="d-block text-white mb-1" style={{ fontSize: '16px', lineHeight: 1.2 }}>
                        {service.title}
                      </a>
                    </Link>
                  </li>
                )))}
              </ul>
              <ul>
                {services.map((service, index) => ((index % 2 !== 0) && (
                  <li key={service.title}>
                    <Link href={service.link}>
                      <a className="d-block text-white mb-1" style={{ fontSize: '16px', lineHeight: 1.2 }}>
                        {service.title}
                      </a>
                    </Link>
                  </li>
                )))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
        a, h1,  ul {
          font-size: 1.1rem;
        }
        h2, h3 {
          font-size:1.3rem;
        }
        u {
          font-size: 1rem;
        }

        ul {
          margin-left: -25px;
        }

        strong.help {
          font-size:1.2rem;
        }
        
        .title {
          font-size: 2.2rem;
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
