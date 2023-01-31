import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getDirectionsFromLocation } from 'utils/helpers';

const OfficeDetails = ({ office }) => (
  <div className="d-flex flex-column">
    <Link href={office.slug || '/'} passHref>
      <a>
        {office.title === 'Washington D.C.' ? (
          <p style={{ fontSize: '1.13rem', marginBottom: '5px' }}>
            <strong>Washington, D.C.</strong>
          </p>
        ) : (
          <p style={{ fontSize: '1.13rem', marginBottom: '5px' }}>
            <strong>{office.title}</strong>
          </p>
        )}
      </a>
    </Link>
    <ul className="list-unstyled ml-0">
      {office.address
        && office.address.map((a) => (
          <li key={a} className="mb-0">
            {a}
          </li>
        ))}
      <li className="my-0">
        <strong>Phone: </strong>
        {' '}
        {office.phone}
      </li>
      {office.fax && (
        <li className="my-0">
          <strong>Fax: </strong>
          {' '}
          {office.fax}
        </li>
      )}
      <li className="my-0">
        <Link href={office.slug}>
          <a className="redTitle">
            <strong>
              <u>Details</u>
            </strong>
          </a>
        </Link>
        <span className="px-0"> | </span>
        <Button
          variant="transparent"
          className="redTitle p-0"
          onClick={() => getDirectionsFromLocation(office.slug)}
        >
          <strong>
            <u>Directions</u>
          </strong>
        </Button>
      </li>
    </ul>
  </div>
);

export default OfficeDetails;
