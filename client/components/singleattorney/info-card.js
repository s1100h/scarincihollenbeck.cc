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
  pdf,
  vizibility,
  services,
  offices,
}) {
  console.log(pdf);

  return (
    <div className="d-flex flex-column text-white">
      <h1 style={{ fontSize: '3rem' }}>
        <strong>
          {fullName}
        </strong>
      </h1>
      <div
        className="w-100 d-block"
        style={{
          height: '7px',
          backgroundColor: '#db2220',
          boxShadow: '2px 3px 3px #000',
        }}
      />
      <h2 className="mt-4 mb-0">
        <strong style={{ fontSize: '2.5rem' }}>{designation}</strong>
      </h2>
      {chair.length > 0 && (
      <h3 className="text-white mt-2" style={{ fontSize: '1.6rem' }}>
        <strong>Chair: </strong>
        {' '}
        {chair.map((c) => (
          <Link href={c.link.replace('wp.', '')} key={c.title}>
            <a className="text-white" style={{ fontSize: '1.39rem' }}>
              {c.title}
            </a>
          </Link>
        ))}
      </h3>
      )}
      {coChair.length > 0 && (
      <h3 className="text-white" style={{ fontSize: '1.4rem' }}>
        Co-chair:
        {' '}
        {coChair.map((c) => (
          <Link href={c.link.replace('wp.', '')} key={c.title}>
            <a className="text-white"  style={{ fontSize: '1.39rem' }}>
              {c.title}
            </a>
          </Link>
        ))}
      </h3>
      )}
      {offices.length > 0 && (
        <h3 style={{ fontSize: '1.4rem' }}>
          <strong>Office: </strong>
          {offices.map((office) => (
            <Link href={office.link} key={office.link}>
              <a className="text-white" style={{ fontSize: '1.39rem' }}>
                {office.name}
              </a>
            </Link>
          ))}
        </h3>
      )}
      {services.length > 0 && (
        <h3 style={{ fontSize: '1.4rem' }}>
          <strong>Services: </strong>
          {services.map((service, index) => (
            <Link href={service.link} key={service.link}>
              <a className="text-white" style={{ fontSize: '1.18rem' }}>
                {service.title}
                {index !== services.length - 1 && ', '}
              </a>
            </Link>
          ))}
        </h3>
      )}
      <ul className="list-inline list-unstyled" style={{ fontSize: '1.4rem' }}>
        <li className="list-inline-item mr-3">
          <a className="text-white" href={pdf} download>
            <strong><u>Download Biography</u></strong>
            {' '}
          </a>
        </li>
        <li className="list-inline-item">
          <a className="text-white" href={pdf} download>
            <strong><u>Download Contact</u></strong>
          </a>
        </li>
      </ul>
    </div>
  );
}
